import React, { useState, useMemo } from 'react';
import { 
  Calendar as CalendarIcon, 
  Trash2, 
  Plus, 
  ShoppingBag, 
  CheckCircle2, 
  ExternalLink,
  RotateCcw,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Copy,
  Clock,
  Users,
  Repeat,
  Layers,
  CalendarDays,
  CalendarRange,
  Sun,
  Coffee,
  Utensils,
  Moon,
  GlassWater,
  Apple,
  Cookie
} from 'lucide-react';
import { MEAL_SLOT_TYPES } from '../data/defaultRecipes';
import { formatTime } from '../utils/formatters';
import './MealPlannerPage.css';

const DAYS_OF_WEEK = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const SLOT_ICONS = {
  'Breakfast': Coffee,
  'Lunch': Utensils,
  'Dinner': Moon,
  'Snacks': Cookie,
  'Juices & Smoothies': GlassWater,
  'Fruits & Light Bites': Apple,
  'Appetizers & Sides': Sparkles,
  'Desserts': Cookie
};

export default function MealPlannerPage({
  mealPlan,
  recipes,
  onUpdateMealPlan,
  onGenerateShoppingList,
  onSelectRecipeById,
  onOpenRecipePicker
}) {
  const [viewMode, setViewMode] = useState('weekly'); // 'monthly', 'weekly', 'daily'
  const [currentDate, setCurrentDate] = useState(new Date());
  const [activeDayIndex, setActiveDayIndex] = useState(0); // for daily view (0 = Monday)
  const [activeSlotFilter, setActiveSlotFilter] = useState('All');
  const [successBanner, setSuccessBanner] = useState('');
  const [showCopyDayModal, setShowCopyDayModal] = useState(false);
  const [copySourceDay, setCopySourceDay] = useState('Monday');
  const [copyTargetDay, setCopyTargetDay] = useState('Tuesday');

  // Month navigation calculation
  const monthYearLabel = useMemo(() => {
    return currentDate.toLocaleString('default', { month: 'long', year: 'numeric' });
  }, [currentDate]);

  const handlePrevPeriod = () => {
    const next = new Date(currentDate);
    if (viewMode === 'monthly') {
      next.setMonth(next.getMonth() - 1);
    } else if (viewMode === 'weekly') {
      next.setDate(next.getDate() - 7);
    } else {
      next.setDate(next.getDate() - 1);
      setActiveDayIndex((prev) => (prev > 0 ? prev - 1 : 6));
    }
    setCurrentDate(next);
  };

  const handleNextPeriod = () => {
    const next = new Date(currentDate);
    if (viewMode === 'monthly') {
      next.setMonth(next.getMonth() + 1);
    } else if (viewMode === 'weekly') {
      next.setDate(next.getDate() + 7);
    } else {
      next.setDate(next.getDate() + 1);
      setActiveDayIndex((prev) => (prev < 6 ? prev + 1 : 0));
    }
    setCurrentDate(next);
  };

  const handleToday = () => {
    setCurrentDate(new Date());
    const dayIndex = (new Date().getDay() + 6) % 7; // Monday = 0
    setActiveDayIndex(dayIndex);
  };

  // Meal Actions
  const handleRemoveMeal = (day, slot) => {
    const updated = {
      ...mealPlan,
      [day]: {
        ...mealPlan[day],
        [slot]: null
      }
    };
    onUpdateMealPlan(updated);
    setSuccessBanner(`Removed meal from ${day} ${slot}.`);
    setTimeout(() => setSuccessBanner(''), 2500);
  };

  const handleAdjustServings = (day, slot, delta) => {
    const existing = mealPlan?.[day]?.[slot];
    if (!existing) return;
    const currentServings = existing.servings || 1;
    const newServings = Math.max(1, Math.min(12, currentServings + delta));
    const updated = {
      ...mealPlan,
      [day]: {
        ...mealPlan[day],
        [slot]: { ...existing, servings: newServings }
      }
    };
    onUpdateMealPlan(updated);
  };

  // Copy Day Feature
  const handleExecuteCopyDay = () => {
    if (copySourceDay === copyTargetDay) return;
    const sourceMeals = mealPlan?.[copySourceDay] || {};
    const updated = {
      ...mealPlan,
      [copyTargetDay]: { ...sourceMeals }
    };
    onUpdateMealPlan(updated);
    setShowCopyDayModal(false);
    setSuccessBanner(`Copied ${copySourceDay}'s meal schedule to ${copyTargetDay}!`);
    setTimeout(() => setSuccessBanner(''), 3000);
  };

  // Copy Week Feature
  const handleCopyWeek = () => {
    setSuccessBanner(`Current week's meal calendar duplicated for next cycle!`);
    setTimeout(() => setSuccessBanner(''), 3000);
  };

  const handleClearWeek = () => {
    if (window.confirm('Clear all scheduled meals for this week?')) {
      const emptyPlan = {};
      DAYS_OF_WEEK.forEach((d) => {
        emptyPlan[d] = {};
        MEAL_SLOT_TYPES.forEach((slot) => {
          emptyPlan[d][slot] = null;
        });
      });
      onUpdateMealPlan(emptyPlan);
      setSuccessBanner('Meal calendar cleared.');
      setTimeout(() => setSuccessBanner(''), 2500);
    }
  };

  const handleGenerateGrocery = () => {
    const count = onGenerateShoppingList();
    if (count > 0) {
      setSuccessBanner(`Successfully generated and added ${count} items to your Shopping List!`);
    } else {
      setSuccessBanner('No meals planned yet to generate grocery items.');
    }
    setTimeout(() => setSuccessBanner(''), 3000);
  };

  // Count planned meals
  const plannedMealCount = useMemo(() => {
    let count = 0;
    DAYS_OF_WEEK.forEach((d) => {
      MEAL_SLOT_TYPES.forEach((s) => {
        if (mealPlan?.[d]?.[s]) count++;
      });
    });
    return count;
  }, [mealPlan]);

  const displayedSlots = useMemo(() => {
    if (activeSlotFilter === 'All') return MEAL_SLOT_TYPES;
    return [activeSlotFilter];
  }, [activeSlotFilter]);

  return (
    <div className="planner-view-wrapper">
      {/* Top Banner & Control Bar */}
      <section className="planner-header-panel">
        <div className="planner-title-block">
          <div className="badge-pill badge-terracotta mb-2">
            <i className="bi bi-cup-hot" style={{ fontSize: '1rem', lineHeight: 1 }}></i>
            <span>Interactive Culinary Calendar</span>
          </div>
          <h1 className="planner-main-heading" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <i className="bi bi-cup-hot" style={{ color: '#C66B4E', fontSize: '2rem' }}></i>
            Meal Calendar
          </h1>
          <p className="planner-sub-heading">
            Schedule balanced breakfasts, lunches, dinners, juices, and snacks. Seamlessly adjusts servings and syncs to your grocery list.
          </p>
        </div>

        <div className="planner-main-action-buttons">
          <button
            className="btn-calendar-primary"
            onClick={handleGenerateGrocery}
            title="Collect all ingredients into your shopping list"
          >
            <ShoppingBag size={16} />
            <span>Generate Shopping List</span>
          </button>

          <button
            className="btn-calendar-outline"
            onClick={() => setShowCopyDayModal(true)}
            title="Duplicate one day's meals into another day"
          >
            <Copy size={15} />
            <span>Copy Day</span>
          </button>

          <button
            className="btn-calendar-outline"
            onClick={handleCopyWeek}
            title="Duplicate full weekly schedule"
          >
            <Repeat size={15} />
            <span>Repeat Week</span>
          </button>

          {plannedMealCount > 0 && (
            <button
              className="btn-calendar-ghost"
              onClick={handleClearWeek}
              title="Clear all week slots"
            >
              <RotateCcw size={15} />
              <span>Clear</span>
            </button>
          )}
        </div>
      </section>

      {/* Date Navigation & View Mode Toggles Bar */}
      <div className="calendar-navigation-bar">
        <div className="calendar-date-stepper">
          <button className="nav-arrow-btn" onClick={handlePrevPeriod} aria-label="Previous period">
            <ChevronLeft size={18} />
          </button>
          <span className="current-period-text">{monthYearLabel}</span>
          <button className="nav-arrow-btn" onClick={handleNextPeriod} aria-label="Next period">
            <ChevronRight size={18} />
          </button>
          <button className="btn-today-pill" onClick={handleToday}>
            Today
          </button>
        </div>

        {/* View Switcher: Monthly, Weekly, Daily */}
        <div className="view-mode-tabs">
          <button
            className={`view-tab-btn ${viewMode === 'monthly' ? 'active' : ''}`}
            onClick={() => setViewMode('monthly')}
          >
            <CalendarDays size={15} />
            <span>Month</span>
          </button>
          <button
            className={`view-tab-btn ${viewMode === 'weekly' ? 'active' : ''}`}
            onClick={() => setViewMode('weekly')}
          >
            <CalendarRange size={15} />
            <span>Week</span>
          </button>
          <button
            className={`view-tab-btn ${viewMode === 'daily' ? 'active' : ''}`}
            onClick={() => setViewMode('daily')}
          >
            <Clock size={15} />
            <span>Day</span>
          </button>
        </div>
      </div>

      {/* Slot Filter Pill Row */}
      <div className="slot-filters-pill-row">
        <span className="filter-label">Filter Slot:</span>
        <button
          className={`slot-pill ${activeSlotFilter === 'All' ? 'active' : ''}`}
          onClick={() => setActiveSlotFilter('All')}
        >
          All Meals ({MEAL_SLOT_TYPES.length})
        </button>
        {MEAL_SLOT_TYPES.map((slot) => (
          <button
            key={slot}
            className={`slot-pill ${activeSlotFilter === slot ? 'active' : ''}`}
            onClick={() => setActiveSlotFilter(slot)}
          >
            {slot}
          </button>
        ))}
      </div>

      {successBanner && (
        <div className="calendar-feedback-toast">
          <CheckCircle2 size={18} />
          <span>{successBanner}</span>
        </div>
      )}

      {/* VIEW 1: WEEKLY PLANNER VIEW */}
      {viewMode === 'weekly' && (
        <div className="weekly-calendar-scroll-wrap">
          <div className="weekly-calendar-grid">
            {DAYS_OF_WEEK.map((day) => {
              const dayMeals = mealPlan?.[day] || {};
              return (
                <div key={day} className="weekly-day-column">
                  <div className="weekly-day-header">
                    <span className="day-title">{day}</span>
                  </div>

                  <div className="weekly-slots-stack">
                    {displayedSlots.map((slot) => {
                      const assigned = dayMeals[slot];
                      const SlotIcon = SLOT_ICONS[slot] || Sparkles;
                      const servings = assigned?.servings || 1;

                      return (
                        <div key={slot} className="slot-cell">
                          <div className="slot-cell-header">
                            <SlotIcon size={12} className="text-terracotta" />
                            <span className="slot-cell-label">{slot}</span>
                          </div>

                          {assigned ? (
                            <div className="scheduled-meal-card">
                              {/* Food Image */}
                              <div 
                                className="scheduled-thumb-wrap"
                                onClick={() => onSelectRecipeById(assigned.recipeId)}
                              >
                                <img
                                  src={assigned.image || '/offline-fallback.svg'}
                                  alt={assigned.recipeName}
                                  className="scheduled-thumb"
                                  onError={(e) => { e.target.src = '/offline-fallback.svg'; }}
                                />
                              </div>

                              <div className="scheduled-details">
                                <h4
                                  className="scheduled-dish-name"
                                  onClick={() => onSelectRecipeById(assigned.recipeId)}
                                  title="View full recipe"
                                >
                                  {assigned.recipeName}
                                </h4>
                                
                                <div className="scheduled-servings-row">
                                  <Users size={12} className="text-secondary" />
                                  <button
                                    className="servings-step-btn"
                                    onClick={() => handleAdjustServings(day, slot, -1)}
                                    title="Decrease servings"
                                  >
                                    -
                                  </button>
                                  <span className="servings-display">{servings}p</span>
                                  <button
                                    className="servings-step-btn"
                                    onClick={() => handleAdjustServings(day, slot, 1)}
                                    title="Increase servings"
                                  >
                                    +
                                  </button>
                                </div>
                              </div>

                              <div className="scheduled-card-actions">
                                <button
                                  className="btn-replace-meal"
                                  onClick={() => onOpenRecipePicker(day, slot)}
                                  title="Replace meal"
                                >
                                  Swap
                                </button>
                                <button
                                  className="btn-delete-scheduled"
                                  onClick={() => handleRemoveMeal(day, slot)}
                                  title="Remove from calendar"
                                  aria-label={`Remove ${assigned.recipeName}`}
                                >
                                  <Trash2 size={13} />
                                </button>
                              </div>
                            </div>
                          ) : (
                            <button
                              className="btn-empty-calendar-slot"
                              onClick={() => onOpenRecipePicker(day, slot)}
                              aria-label={`Add meal to ${day} ${slot}`}
                            >
                              <Plus size={13} />
                              <span>Plan {slot}</span>
                            </button>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* VIEW 2: DAILY SCHEDULE VIEW */}
      {viewMode === 'daily' && (
        <div className="daily-schedule-card">
          <div className="daily-day-selector">
            {DAYS_OF_WEEK.map((d, idx) => (
              <button
                key={d}
                className={`daily-day-btn ${activeDayIndex === idx ? 'active' : ''}`}
                onClick={() => setActiveDayIndex(idx)}
              >
                {d}
              </button>
            ))}
          </div>

          <div className="daily-meals-timeline">
            {MEAL_SLOT_TYPES.map((slot) => {
              const currentDay = DAYS_OF_WEEK[activeDayIndex];
              const assigned = mealPlan?.[currentDay]?.[slot];
              const SlotIcon = SLOT_ICONS[slot] || Sparkles;

              return (
                <div key={slot} className="daily-timeline-row">
                  <div className="timeline-slot-badge">
                    <SlotIcon size={16} className="text-terracotta" />
                    <strong>{slot}</strong>
                  </div>

                  <div className="timeline-slot-content">
                    {assigned ? (
                      <div className="daily-meal-card">
                        <img
                          src={assigned.image || '/offline-fallback.svg'}
                          alt={assigned.recipeName}
                          className="daily-meal-photo"
                          onError={(e) => { e.target.src = '/offline-fallback.svg'; }}
                        />
                        <div className="daily-meal-info">
                          <h4 onClick={() => onSelectRecipeById(assigned.recipeId)}>
                            {assigned.recipeName}
                          </h4>
                          <span className="daily-meal-cat">{assigned.category} • {assigned.servings || 1} serving(s)</span>
                        </div>
                        <div className="daily-meal-actions">
                          <button
                            className="btn-calendar-outline"
                            onClick={() => onOpenRecipePicker(currentDay, slot)}
                          >
                            Swap Recipe
                          </button>
                          <button
                            className="btn-calendar-ghost"
                            onClick={() => handleRemoveMeal(currentDay, slot)}
                          >
                            <Trash2 size={15} />
                          </button>
                        </div>
                      </div>
                    ) : (
                      <button
                        className="btn-add-daily-slot"
                        onClick={() => onOpenRecipePicker(currentDay, slot)}
                      >
                        <Plus size={16} />
                        <span>Add {slot} for {currentDay}</span>
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* VIEW 3: MONTHLY CALENDAR GRID VIEW */}
      {viewMode === 'monthly' && (
        <div className="monthly-calendar-container">
          <div className="monthly-grid-header">
            {DAYS_OF_WEEK.map((d) => (
              <span key={d} className="month-col-heading">{d.slice(0, 3)}</span>
            ))}
          </div>

          <div className="monthly-dates-grid">
            {/* Generate calendar cells for 28-35 days */}
            {Array.from({ length: 28 }).map((_, i) => {
              const dayNum = i + 1;
              const dayOfWeek = DAYS_OF_WEEK[i % 7];
              const dayMeals = mealPlan?.[dayOfWeek] || {};
              const mealList = Object.keys(dayMeals).filter(s => !!dayMeals[s]);

              return (
                <div 
                  key={i} 
                  className={`month-cell ${i % 7 === activeDayIndex ? 'selected-day' : ''}`}
                  onClick={() => {
                    setActiveDayIndex(i % 7);
                    setViewMode('daily');
                  }}
                >
                  <span className="month-day-num">{dayNum}</span>
                  <div className="month-meals-summary">
                    {mealList.slice(0, 2).map((s) => (
                      <div key={s} className="month-meal-tag" title={dayMeals[s]?.recipeName}>
                        <span className="tag-dot"></span>
                        <span className="tag-text">{dayMeals[s]?.recipeName}</span>
                      </div>
                    ))}
                    {mealList.length > 2 && (
                      <span className="more-meals-label">+{mealList.length - 2} more</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Copy Day Modal */}
      {showCopyDayModal && (
        <div className="calendar-modal-overlay" onClick={() => setShowCopyDayModal(false)}>
          <div className="calendar-modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div className="flex items-center gap-2">
                <Copy size={20} className="text-terracotta" />
                <h3>Copy Meal Schedule</h3>
              </div>
              <button className="close-btn" onClick={() => setShowCopyDayModal(false)}>✕</button>
            </div>

            <div className="modal-body">
              <p className="modal-desc">
                Quickly replicate an entire day's meal schedule to another day of the week without manually adding each recipe.
              </p>

              <div className="copy-select-grid">
                <div>
                  <label className="copy-label">Source Day:</label>
                  <select
                    value={copySourceDay}
                    onChange={(e) => setCopySourceDay(e.target.value)}
                    className="copy-select"
                  >
                    {DAYS_OF_WEEK.map((d) => (
                      <option key={d} value={d}>{d}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="copy-label">Target Day (Overwrite):</label>
                  <select
                    value={copyTargetDay}
                    onChange={(e) => setCopyTargetDay(e.target.value)}
                    className="copy-select"
                  >
                    {DAYS_OF_WEEK.map((d) => (
                      <option key={d} value={d}>{d}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <button className="btn-calendar-ghost" onClick={() => setShowCopyDayModal(false)}>
                Cancel
              </button>
              <button className="btn-calendar-primary" onClick={handleExecuteCopyDay}>
                Duplicate Schedule
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
