import React, { useState } from 'react';
import { X, GraduationCap, Sparkles, CheckCircle2, Calendar, Coffee } from 'lucide-react';

export default function ExamWeekModal({ onClose, onApplyExamPlan, recipes }) {
  const [examName, setExamName] = useState('Final Semester Exams');
  const [examDuration, setExamDuration] = useState('1-week');
  const [maxCookingTime, setMaxCookingTime] = useState(20);
  const [enableReminders, setEnableReminders] = useState(true);
  const [applied, setApplied] = useState(false);

  const handleApply = () => {
    const examRecipes = recipes.filter(r => (r.preparationTime || 10) <= maxCookingTime);
    const breakfasts = examRecipes.filter(r => r.category === 'Breakfast');
    const lunches = examRecipes.filter(r => r.category === 'Lunch');
    const dinners = examRecipes.filter(r => r.category === 'Dinner');
    const snacks = examRecipes.filter(r => r.category === 'Snacks' || r.category === 'Juices & Smoothies');

    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const newPlan = {};

    days.forEach((day, index) => {
      newPlan[day] = {
        Breakfast: breakfasts.length > 0 ? {
          recipeId: breakfasts[index % breakfasts.length].id,
          recipeName: breakfasts[index % breakfasts.length].name,
          category: 'Breakfast',
          image: breakfasts[index % breakfasts.length].image
        } : null,
        Lunch: lunches.length > 0 ? {
          recipeId: lunches[index % lunches.length].id,
          recipeName: lunches[index % lunches.length].name,
          category: 'Lunch',
          image: lunches[index % lunches.length].image
        } : null,
        Dinner: dinners.length > 0 ? {
          recipeId: dinners[index % dinners.length].id,
          recipeName: dinners[index % dinners.length].name,
          category: 'Dinner',
          image: dinners[index % dinners.length].image
        } : null,
        Snacks: snacks.length > 0 ? {
          recipeId: snacks[index % snacks.length].id,
          recipeName: snacks[index % snacks.length].name,
          category: 'Snacks',
          image: snacks[index % snacks.length].image
        } : null,
      };
    });

    onApplyExamPlan({
      examName,
      examDuration,
      maxCookingTime,
      enableReminders,
      generatedPlan: newPlan
    });

    setApplied(true);
    setTimeout(() => {
      onClose();
    }, 800);
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(47, 33, 26, 0.65)',
        backdropFilter: 'blur(5px)',
        zIndex: 1100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px',
        overflowY: 'auto'
      }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        style={{
          background: '#FAF5EF',
          borderRadius: '24px',
          maxWidth: '520px',
          width: '100%',
          border: '1px solid #E8DDD3',
          boxShadow: '0 24px 48px -12px rgba(47, 33, 26, 0.25)',
          overflow: 'hidden'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          style={{
            padding: '20px 24px',
            borderBottom: '1px solid #E8DDD3',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: '#FFFFFF'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <GraduationCap size={24} color="#C66B4E" />
            <div>
              <h3 style={{ margin: 0, fontSize: '1.25rem', color: '#49352D', fontWeight: 800, fontFamily: "'Playfair Display', serif" }}>
                Exam Week Survival Setup
              </h3>
              <span style={{ fontSize: '0.8rem', color: '#786C65' }}>
                Zero-stress nutrition for test papers and study periods
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: '#786C65' }}
            aria-label="Close"
          >
            <X size={20} />
          </button>
        </div>

        <div style={{ padding: '24px' }}>
          <div
            style={{
              background: '#F4E4DC',
              border: '1px solid #C66B4E',
              borderRadius: '12px',
              padding: '12px 16px',
              marginBottom: '20px',
              fontSize: '0.85rem',
              color: '#49352D',
              lineHeight: 1.45
            }}
          >
            <strong>Survival Mode:</strong> Pre-populates your weekly meal calendar with quick, high-nutrient recipes (under your chosen prep limit) so you maintain steady glucose and avoid crashing.
          </div>

          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#49352D', marginBottom: '6px' }}>
              Exam Period Name:
            </label>
            <input
              type="text"
              value={examName}
              onChange={(e) => setExamName(e.target.value)}
              style={{
                width: '100%',
                padding: '10px 14px',
                borderRadius: '8px',
                border: '1px solid #E8DDD3',
                background: '#FFFFFF',
                fontSize: '0.9rem',
                color: '#49352D'
              }}
            />
          </div>

          <div style={{ marginBottom: '18px' }}>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#49352D', marginBottom: '6px' }}>
              Max Cooking Time During Exams:
            </label>
            <div style={{ display: 'flex', gap: '8px' }}>
              {[15, 20, 30].map((mins) => (
                <button
                  key={mins}
                  type="button"
                  onClick={() => setMaxCookingTime(mins)}
                  style={{
                    flex: 1,
                    padding: '9px',
                    borderRadius: '8px',
                    border: maxCookingTime === mins ? '2px solid #C66B4E' : '1px solid #E8DDD3',
                    background: maxCookingTime === mins ? '#F4E4DC' : '#FFFFFF',
                    color: maxCookingTime === mins ? '#49352D' : '#786C65',
                    fontWeight: maxCookingTime === mins ? 800 : 500,
                    fontSize: '0.84rem',
                    cursor: 'pointer'
                  }}
                >
                  ≤ {mins} mins
                </button>
              ))}
            </div>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', fontSize: '0.85rem', color: '#49352D' }}>
              <input
                type="checkbox"
                checked={enableReminders}
                onChange={(e) => setEnableReminders(e.target.checked)}
                style={{ width: '16px', height: '16px', accentColor: '#C66B4E' }}
              />
              <span>Enable in-app meal &amp; hydration reminders</span>
            </label>
          </div>

          {applied ? (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                background: '#F4E4DC',
                color: '#49352D',
                padding: '12px',
                borderRadius: '10px',
                fontWeight: 700,
                fontSize: '0.9rem'
              }}
            >
              <CheckCircle2 size={20} color="#C66B4E" />
              Exam Survival Plan Applied to Calendar!
            </div>
          ) : (
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
              <button
                type="button"
                onClick={onClose}
                style={{
                  background: '#E8D5C4',
                  border: 'none',
                  padding: '10px 18px',
                  borderRadius: '9999px',
                  fontWeight: 700,
                  fontSize: '0.85rem',
                  color: '#49352D',
                  cursor: 'pointer'
                }}
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleApply}
                style={{
                  background: '#C66B4E',
                  color: '#FFFFFF',
                  border: 'none',
                  padding: '10px 22px',
                  borderRadius: '9999px',
                  fontWeight: 800,
                  fontSize: '0.88rem',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                <Sparkles size={16} />
                Activate Survival Mode
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
