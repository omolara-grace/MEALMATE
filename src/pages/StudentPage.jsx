import React, { useState, useMemo } from 'react';
import { 
  GraduationCap, 
  Brain, 
  Zap, 
  PiggyBank, 
  Clock, 
  Home, 
  Sparkles, 
  SlidersHorizontal, 
  Calendar, 
  ShoppingCart, 
  Flame, 
  CheckCircle2, 
  AlertCircle, 
  Droplet,
  Info,
  ChevronRight,
  ShieldCheck,
  Filter,
  DollarSign
} from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';
import RecipeCard from '../components/RecipeCard';
import StudentPreferencesModal from '../components/StudentPreferencesModal';
import ExamWeekModal from '../components/ExamWeekModal';
import { 
  STUDENT_FEATURE_CARDS, 
  HOSTEL_EQUIPMENT_OPTIONS, 
  PREPARATION_TIME_RANGES, 
  NIGERIAN_BUDGET_TIERS 
} from '../data/defaultRecipes';
import { formatNaira, formatTime } from '../utils/formatters';
import './StudentPage.css';

const ICON_MAP = {
  Brain,
  Zap,
  PiggyBank,
  Clock,
  Home,
  GraduationCap
};

export default function StudentPage({
  recipes,
  mealPlan,
  shoppingList,
  favoriteIds,
  onToggleFavorite,
  offlineRecipeIds,
  studentPreferences,
  onSaveStudentPreferences,
  onApplyExamPlan,
  onToggleOffline,
  onSelectRecipe,
  onAssignMeal
}) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentTab = searchParams.get('tab') || 'all';

  const [showPrefsModal, setShowPrefsModal] = useState(false);
  const [showExamModal, setShowExamModal] = useState(false);

  // Filters state
  const [selectedEquipment, setSelectedEquipment] = useState('all');
  const [selectedPrepTime, setSelectedPrepTime] = useState('all');
  const [selectedBudget, setSelectedBudget] = useState('all');
  const [examSurvivalActive, setExamSurvivalActive] = useState(false);
  const [examSurvivalData, setExamSurvivalData] = useState(null);

  // Today's meals lookup
  const todayName = useMemo(() => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[new Date().getDay()];
  }, []);

  const todayMeals = useMemo(() => {
    return mealPlan?.[todayName] || {};
  }, [mealPlan, todayName]);

  // Determine next planned meal for today
  const nextPlannedMeal = useMemo(() => {
    const currentHour = new Date().getHours();
    if (currentHour < 11 && todayMeals.Breakfast) {
      return { slot: 'Breakfast', ...todayMeals.Breakfast };
    }
    if (currentHour < 16 && todayMeals.Lunch) {
      return { slot: 'Lunch', ...todayMeals.Lunch };
    }
    if (todayMeals.Dinner) {
      return { slot: 'Dinner', ...todayMeals.Dinner };
    }
    if (todayMeals.Snacks) {
      return { slot: 'Snacks', ...todayMeals.Snacks };
    }
    return null;
  }, [todayMeals]);

  const handleSelectTab = (tabId) => {
    if (tabId === 'exam-week') {
      setShowExamModal(true);
    }
    setSearchParams({ tab: tabId });
  };

  const studentRecipes = useMemo(() => {
    return recipes.filter((r) => r.studentFriendly);
  }, [recipes]);

  const filteredStudentRecipes = useMemo(() => {
    return studentRecipes.filter((r) => {
      // 1. Allergens exclusion
      if (studentPreferences?.allergens?.length > 0) {
        const hasAllergen = r.allergens?.some((al) =>
          studentPreferences.allergens.includes(al)
        );
        if (hasAllergen) return false;
      }

      // 2. Tab Filter
      if (currentTab === 'brain-focus') {
        if (!r.studentCategories?.includes('Brain & Focus')) return false;
      } else if (currentTab === 'energy-alertness') {
        if (!r.studentCategories?.includes('Energy & Alertness')) return false;
      } else if (currentTab === 'budget-meals') {
        if (!r.studentCategories?.includes('Student Budget Meals')) return false;
      } else if (currentTab === 'quick-meals') {
        if (!r.studentCategories?.includes('Quick Meals Between Lectures')) return false;
      } else if (currentTab === 'hostel-kitchen') {
        if (!r.studentCategories?.includes('Hostel Kitchen')) return false;
      } else if (currentTab === 'exam-week') {
        if (!r.studentCategories?.includes('Exam Week')) return false;
      }

      // 3. Equipment Filter
      if (selectedEquipment !== 'all') {
        if (!r.equipmentRequired?.includes(selectedEquipment)) return false;
      }

      // 4. Preparation Time Filter
      if (selectedPrepTime !== 'all') {
        const prep = r.preparationTime || 0;
        if (selectedPrepTime === 'under-15' && prep > 15) return false;
        if (selectedPrepTime === '15-30' && (prep < 15 || prep > 30)) return false;
        if (selectedPrepTime === '30-60' && (prep < 30 || prep > 60)) return false;
        if (selectedPrepTime === 'over-60' && prep <= 60) return false;
      }

      // 5. Budget Filter in Naira
      if (selectedBudget !== 'all') {
        const cost = r.estimatedCostPerServing || 0;
        if (selectedBudget === 'under-800' && cost > 800) return false;
        if (selectedBudget === 'under-1200' && cost > 1200) return false;
        if (selectedBudget === 'under-1800' && cost > 1800) return false;
      }

      return true;
    });
  }, [
    studentRecipes,
    currentTab,
    selectedEquipment,
    selectedPrepTime,
    selectedBudget,
    studentPreferences
  ]);

  // Suggestions
  const affordableSuggestions = useMemo(() => {
    return studentRecipes
      .filter((r) => (r.estimatedCostPerServing || 0) <= 950)
      .slice(0, 3);
  }, [studentRecipes]);

  const quickSuggestions = useMemo(() => {
    return studentRecipes
      .filter((r) => (r.preparationTime || 0) <= 10)
      .slice(0, 3);
  }, [studentRecipes]);

  const savedStudentRecipes = useMemo(() => {
    return studentRecipes.filter((r) => offlineRecipeIds?.has(r.id));
  }, [studentRecipes, offlineRecipeIds]);

  const handleApplyExamPlanInternal = (data) => {
    setExamSurvivalActive(true);
    setExamSurvivalData(data);
    onApplyExamPlan(data.generatedPlan);
  };

  return (
    <div className="student-page-container">
      {/* 1. Hero Header */}
      <section className="student-hero-banner-terracotta">
        <div className="student-hero-text">
          <div className="badge-pill badge-terracotta mb-2">
            <GraduationCap size={14} />
            <span>Campus &amp; University Nutrition</span>
          </div>
          <h1 className="student-hero-heading">Fuel Your Day.</h1>
          <p className="student-hero-desc">
            Find practical meals for busy days, long lectures, and study sessions.
          </p>
          <div className="hero-disclaimer-note">
            Nutritious food discovery designed for real hostel setups, Nigerian markets, and tight study routines.
          </div>

          <div className="student-hero-actions">
            <button
              className="btn-open-student-prefs"
              onClick={() => setShowPrefsModal(true)}
            >
              <SlidersHorizontal size={15} />
              <span>
                {studentPreferences?.completedAt
                  ? 'Update Student Preferences'
                  : 'Set Up Student Preferences'}
              </span>
            </button>

            <button
              className="btn-trigger-exam-mode"
              onClick={() => setShowExamModal(true)}
            >
              <Sparkles size={15} />
              <span>Exam Week Survival Mode</span>
            </button>
          </div>
        </div>
      </section>

      {/* Exam Week Survival Banner if Active */}
      {examSurvivalActive && (
        <section className="exam-survival-active-banner">
          <div className="exam-active-info">
            <div className="flex items-center gap-2">
              <Sparkles size={18} className="text-terracotta" />
              <strong>Exam Survival Mode Active: {examSurvivalData?.examName}</strong>
            </div>
            <p>
              Your weekly meal calendar has been auto-populated with fast, nourishing meals (≤ {examSurvivalData?.maxCookingTime} min).
            </p>
          </div>
          <div className="exam-active-links">
            <Link to="/planner" className="btn-exam-link">
              <Calendar size={14} /> View Meal Calendar
            </Link>
            <Link to="/grocery" className="btn-exam-link">
              <ShoppingCart size={14} /> Exam Grocery List
            </Link>
          </div>
        </section>
      )}

      {/* 2. Feature Cards Grid */}
      <section className="student-feature-cards-section">
        <h2 className="student-section-title">Focus Areas &amp; Categories</h2>
        <div className="student-cards-grid">
          {STUDENT_FEATURE_CARDS.map((card) => {
            const Icon = ICON_MAP[card.icon] || Sparkles;
            const isSelected = currentTab === card.id;
            return (
              <div
                key={card.id}
                className={`student-feature-card ${isSelected ? 'active-tab' : ''}`}
                onClick={() => handleSelectTab(card.id)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter') handleSelectTab(card.id); }}
              >
                <div className="card-top-row">
                  <div className="card-icon-avatar">
                    <Icon size={20} color="#C66B4E" />
                  </div>
                  <span className="card-pill-tag">
                    {card.badge}
                  </span>
                </div>

                <h3 className="student-card-heading">{card.title}</h3>
                <p className="student-card-desc">{card.description}</p>

                <div className="student-card-footer-link">
                  <span>{isSelected ? 'Viewing Filtered Meals' : 'Explore Category'}</span>
                  <ChevronRight size={15} />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. Dashboard Overview: Today's Meals & Shopping List */}
      <section className="student-dashboard-overview">
        <div className="overview-card today-meals-card">
          <div className="overview-card-header">
            <div className="flex items-center gap-2">
              <Calendar size={18} className="text-terracotta" />
              <h3>Today's Meals ({todayName})</h3>
            </div>
            <Link to="/planner" className="view-planner-link">
              Full Calendar <ChevronRight size={14} />
            </Link>
          </div>

          <div className="today-slots-summary">
            {['Breakfast', 'Lunch', 'Dinner'].map((slot) => {
              const item = todayMeals[slot];
              return (
                <div key={slot} className="today-slot-pill">
                  <span className="slot-name">{slot}:</span>
                  {item ? (
                    <strong 
                      className="slot-dish-link" 
                      onClick={() => {
                        const rec = recipes.find(r => r.id === item.recipeId);
                        if (rec) onSelectRecipe(rec);
                      }}
                    >
                      {item.recipeName}
                    </strong>
                  ) : (
                    <span className="slot-empty">No meal planned</span>
                  )}
                </div>
              );
            })}
          </div>

          {nextPlannedMeal && (
            <div className="next-meal-highlight">
              <div className="next-meal-tag">Next Planned Meal</div>
              <p className="next-meal-text">
                <strong>{nextPlannedMeal.slot}:</strong> {nextPlannedMeal.recipeName}
              </p>
            </div>
          )}
        </div>

        <div className="overview-card shopping-status-card">
          <div className="overview-card-header">
            <div className="flex items-center gap-2">
              <ShoppingCart size={18} className="text-terracotta" />
              <h3>Campus Grocery Checklist</h3>
            </div>
            <Link to="/grocery" className="view-planner-link">
              Open List <ChevronRight size={14} />
            </Link>
          </div>

          <p className="shopping-summary-text">
            {shoppingList.length === 0 ? (
              'No items in your shopping list yet. Plan your week to auto-generate affordable grocery staples!'
            ) : (
              <>
                You have <strong>{shoppingList.filter(i => !i.checked).length} items</strong> left to buy this week.
              </>
            )}
          </p>

          <div className="quick-nav-pills">
            <Link to="/planner" className="btn-nav-pill">
              <Calendar size={14} /> Meal Calendar
            </Link>
            <Link to="/grocery" className="btn-nav-pill">
              <ShoppingCart size={14} /> Shopping List
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Toolbar & Filters */}
      <section className="student-filter-toolbar">
        <div className="toolbar-top">
          <div className="toolbar-title-wrap">
            <Filter size={18} className="text-terracotta" />
            <h3>
              {currentTab === 'all'
                ? 'All Student-Friendly Recipes'
                : STUDENT_FEATURE_CARDS.find(c => c.id === currentTab)?.title || 'Filtered Recipes'}
            </h3>
            <span className="filter-count-badge">
              {filteredStudentRecipes.length} recipes
            </span>
          </div>

          {currentTab !== 'all' && (
            <button
              className="btn-show-all-tabs"
              onClick={() => setSearchParams({ tab: 'all' })}
            >
              Show All Student Recipes
            </button>
          )}
        </div>

        <div className="filters-row">
          <div className="filter-group">
            <label>Cooking Facilities:</label>
            <select
              value={selectedEquipment}
              onChange={(e) => setSelectedEquipment(e.target.value)}
              className="filter-select"
            >
              {HOSTEL_EQUIPMENT_OPTIONS.map((opt) => (
                <option key={opt.id} value={opt.id}>{opt.label}</option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <label>Preparation Time:</label>
            <select
              value={selectedPrepTime}
              onChange={(e) => setSelectedPrepTime(e.target.value)}
              className="filter-select"
            >
              {PREPARATION_TIME_RANGES.map((opt) => (
                <option key={opt.id} value={opt.id}>{opt.label}</option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <label>Naira Budget (₦):</label>
            <select
              value={selectedBudget}
              onChange={(e) => setSelectedBudget(e.target.value)}
              className="filter-select"
            >
              {NIGERIAN_BUDGET_TIERS.map((opt) => (
                <option key={opt.id} value={opt.id}>{opt.label}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Tab Educational Context */}
        {currentTab === 'brain-focus' && (
          <div className="tab-educational-callout">
            <Info size={18} className="text-terracotta flex-shrink-0" />
            <div>
              <strong>Brain &amp; Focus Principles:</strong> Nutrition supports cognitive endurance via steady glucose availability, choline in eggs for neurotransmitter pathways, and omega-3 lipids in fish. Balanced meals are practical options for physical well-being, not medical treatments.
            </div>
          </div>
        )}

        {currentTab === 'energy-alertness' && (
          <div className="tab-educational-callout">
            <Zap size={18} className="text-terracotta flex-shrink-0" />
            <div>
              <strong>Sustained Energy &amp; Alertness:</strong> Avoid relying solely on energy drinks and sugar-laden snacks that cause sharp afternoon crashes. Prep times are clearly distinguished from cooking times to fit around class periods.
            </div>
          </div>
        )}

        {currentTab === 'budget-meals' && (
          <div className="tab-educational-callout">
            <PiggyBank size={18} className="text-terracotta flex-shrink-0" />
            <div>
              <strong>Budget Transparency:</strong> Cost estimates are calculated in Nigerian Naira (₦) based on common local student staple prices (beans, eggs, plantains, rice). All estimates are editable and clearly labelled.
            </div>
          </div>
        )}

        {currentTab === 'hostel-kitchen' && (
          <div className="tab-educational-callout">
            <Home size={18} className="text-terracotta flex-shrink-0" />
            <div>
              <strong>Hostel Safety &amp; Fridge-Free Storage:</strong> We do not assume you have a refrigerator. Cook beans and stews thoroughly; keep eggs, oats, and groundnuts in dry containers away from humidity and heat.
            </div>
          </div>
        )}
      </section>

      {/* 5. Main Filtered Recipe Grid */}
      <section className="student-recipe-grid-section">
        {filteredStudentRecipes.length === 0 ? (
          <div className="empty-student-state">
            <Sparkles size={40} className="text-terracotta mb-2" />
            <h3>No recipes matched your active student filters</h3>
            <p>Try widening your equipment choice or resetting preparation time filters.</p>
            <button
              className="btn-reset-filters"
              onClick={() => {
                setSelectedEquipment('all');
                setSelectedPrepTime('all');
                setSelectedBudget('all');
                setSearchParams({ tab: 'all' });
              }}
            >
              Reset All Student Filters
            </button>
          </div>
        ) : (
          <div className="recipes-shelf-grid">
            {filteredStudentRecipes.map((recipe) => (
              <RecipeCard
                key={recipe.id}
                recipe={recipe}
                isFavorite={favoriteIds?.has(recipe.id)}
                onToggleFavorite={onToggleFavorite}
                isOfflineSaved={offlineRecipeIds?.has(recipe.id)}
                onToggleOffline={onToggleOffline}
                onSelectRecipe={onSelectRecipe}
                onAssignMeal={onAssignMeal}
              />
            ))}
          </div>
        )}
      </section>

      {/* 6. Quick Suggestions & Shelves */}
      <section className="curated-shelves-section">
        <div className="curated-shelf">
          <div className="shelf-header">
            <div className="flex items-center gap-2">
              <Sparkles size={20} className="text-terracotta" />
              <h3>Campus Quick Bites &amp; Study Fuel</h3>
            </div>
            <span className="shelf-sub">Fast, simple recipes between classes</span>
          </div>
          <div className="recipes-shelf-grid">
            {quickSuggestions.map((recipe) => (
              <RecipeCard
                key={recipe.id}
                recipe={recipe}
                isFavorite={favoriteIds?.has(recipe.id)}
                onToggleFavorite={onToggleFavorite}
                isOfflineSaved={offlineRecipeIds?.has(recipe.id)}
                onToggleOffline={onToggleOffline}
                onSelectRecipe={onSelectRecipe}
                onAssignMeal={onAssignMeal}
              />
            ))}
          </div>
        </div>

        <div className="curated-shelf">
          <div className="shelf-header">
            <div className="flex items-center gap-2">
              <PiggyBank size={20} className="text-chocolate" />
              <h3>Hostel Friendly Meal Suggestions</h3>
            </div>
            <span className="shelf-sub">Wholesome, practical Nigerian recipes</span>
          </div>
          <div className="recipes-shelf-grid">
            {affordableSuggestions.map((recipe) => (
              <RecipeCard
                key={recipe.id}
                recipe={recipe}
                isFavorite={favoriteIds?.has(recipe.id)}
                onToggleFavorite={onToggleFavorite}
                isOfflineSaved={offlineRecipeIds?.has(recipe.id)}
                onToggleOffline={onToggleOffline}
                onSelectRecipe={onSelectRecipe}
                onAssignMeal={onAssignMeal}
              />
            ))}
          </div>
        </div>

        {savedStudentRecipes.length > 0 && (
          <div className="curated-shelf">
            <div className="shelf-header">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={20} className="text-terracotta" />
                <h3>Your Saved Offline Student Recipes</h3>
              </div>
              <span className="shelf-sub">Always accessible even without Wi-Fi</span>
            </div>
            <div className="recipes-shelf-grid">
              {savedStudentRecipes.map((recipe) => (
                <RecipeCard
                  key={recipe.id}
                  recipe={recipe}
                  isFavorite={favoriteIds?.has(recipe.id)}
                  onToggleFavorite={onToggleFavorite}
                  isOfflineSaved={true}
                  onToggleOffline={onToggleOffline}
                  onSelectRecipe={onSelectRecipe}
                  onAssignMeal={onAssignMeal}
                />
              ))}
            </div>
          </div>
        )}
      </section>

      {/* Modals */}
      {showPrefsModal && (
        <StudentPreferencesModal
          currentPrefs={studentPreferences}
          onClose={() => setShowPrefsModal(false)}
          onSave={onSaveStudentPreferences}
        />
      )}

      {showExamModal && (
        <ExamWeekModal
          recipes={recipes}
          onClose={() => setShowExamModal(false)}
          onApplyExamPlan={handleApplyExamPlanInternal}
        />
      )}
    </div>
  );
}
