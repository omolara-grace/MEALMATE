import React, { useState } from 'react';
import { X, Check, SlidersHorizontal, Sparkles } from 'lucide-react';

const BUDGET_OPTIONS = [
  { id: 'under-800', label: 'Tight Budget (< ₦800 / meal)', max: 800 },
  { id: 'under-1200', label: 'Moderate Budget (< ₦1,200 / meal)', max: 1200 },
  { id: 'under-1800', label: 'Flexible Student (< ₦1,800 / meal)', max: 1800 },
  { id: 'any', label: 'Any Budget', max: null }
];

const FACILITY_OPTIONS = [
  'No cooking equipment',
  'Electric kettle',
  'Single hot plate',
  'Shared kitchen',
  'Fully equipped kitchen'
];

const TIME_OPTIONS = [
  { id: 'under-15', label: 'Under 15 mins (Speed rush)' },
  { id: '15-30', label: '15–30 mins (Normal lecture break)' },
  { id: '30-60', label: '30–60 mins (Evening cooking)' },
  { id: 'any', label: 'Any preparation time' }
];

const DIETARY_OPTIONS = ['High-Protein', 'Vegetarian', 'Vegan', 'Pescatarian', 'Gluten-Free', 'High-Fiber'];
const ALLERGEN_OPTIONS = ['Peanuts', 'Fish', 'Eggs', 'Gluten', 'Dairy', 'Soy', 'Crayfish'];

export default function StudentPreferencesModal({ currentPrefs, onClose, onSave }) {
  const [budget, setBudget] = useState(currentPrefs?.budget || 'under-1200');
  const [facilities, setFacilities] = useState(currentPrefs?.facilities || ['Single hot plate', 'Electric kettle']);
  const [time, setTime] = useState(currentPrefs?.time || '15-30');
  const [dietary, setDietary] = useState(currentPrefs?.dietary || []);
  const [allergens, setAllergens] = useState(currentPrefs?.allergens || []);

  const toggleItem = (list, setList, item) => {
    if (list.includes(item)) {
      setList(list.filter((x) => x !== item));
    } else {
      setList([...list, item]);
    }
  };

  const handleSave = () => {
    onSave({
      budget,
      facilities,
      time,
      dietary,
      allergens,
      completedAt: new Date().toISOString()
    });
    onClose();
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(47, 33, 26, 0.6)',
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
          maxWidth: '560px',
          width: '100%',
          maxHeight: '90vh',
          display: 'flex',
          flexDirection: 'column',
          border: '1px solid #E8DDD3',
          boxShadow: '0 24px 48px -12px rgba(47, 33, 26, 0.25)',
          overflow: 'hidden'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          style={{
            padding: '20px 26px',
            borderBottom: '1px solid #E8DDD3',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: '#FFFFFF'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <SlidersHorizontal size={22} color="#C66B4E" />
            <div>
              <h3 style={{ margin: 0, fontSize: '1.25rem', color: '#49352D', fontWeight: 800, fontFamily: "'Playfair Display', serif" }}>
                Student Meal Preferences
              </h3>
              <span style={{ fontSize: '0.8rem', color: '#786C65' }}>
                Tailor student budget recipes & equipment filters
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: '#786C65' }}
            aria-label="Close setup modal"
          >
            <X size={20} />
          </button>
        </div>

        <div style={{ padding: '24px', overflowY: 'auto', flex: 1 }}>
          {/* Question 1: Budget */}
          <div style={{ marginBottom: '22px' }}>
            <label style={{ display: 'block', fontWeight: 800, fontSize: '0.88rem', color: '#49352D', marginBottom: '8px' }}>
              1. Approximate Food Budget per Serving:
            </label>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px' }}>
              {BUDGET_OPTIONS.map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setBudget(opt.id)}
                  style={{
                    padding: '10px 12px',
                    borderRadius: '8px',
                    border: budget === opt.id ? '2px solid #C66B4E' : '1px solid #E8DDD3',
                    background: budget === opt.id ? '#F4E4DC' : '#FFFFFF',
                    color: budget === opt.id ? '#49352D' : '#786C65',
                    fontWeight: budget === opt.id ? 800 : 500,
                    fontSize: '0.82rem',
                    textAlign: 'left',
                    cursor: 'pointer'
                  }}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Question 2: Facilities */}
          <div style={{ marginBottom: '22px' }}>
            <label style={{ display: 'block', fontWeight: 800, fontSize: '0.88rem', color: '#49352D', marginBottom: '8px' }}>
              2. Available Cooking Facilities (Select all you have):
            </label>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {FACILITY_OPTIONS.map((fac) => {
                const active = facilities.includes(fac);
                return (
                  <button
                    key={fac}
                    type="button"
                    onClick={() => toggleItem(facilities, setFacilities, fac)}
                    style={{
                      padding: '8px 14px',
                      borderRadius: '8px',
                      border: active ? '1.5px solid #C66B4E' : '1px solid #E8DDD3',
                      background: active ? '#C66B4E' : '#FFFFFF',
                      color: active ? '#FFFFFF' : '#49352D',
                      fontWeight: active ? 700 : 500,
                      fontSize: '0.82rem',
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}
                  >
                    {active && <Check size={14} />}
                    {fac}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Question 3: Prep Time */}
          <div style={{ marginBottom: '22px' }}>
            <label style={{ display: 'block', fontWeight: 800, fontSize: '0.88rem', color: '#49352D', marginBottom: '8px' }}>
              3. Preparation Time Available:
            </label>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px' }}>
              {TIME_OPTIONS.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setTime(t.id)}
                  style={{
                    padding: '10px 12px',
                    borderRadius: '8px',
                    border: time === t.id ? '2px solid #C66B4E' : '1px solid #E8DDD3',
                    background: time === t.id ? '#F4E4DC' : '#FFFFFF',
                    color: time === t.id ? '#49352D' : '#786C65',
                    fontWeight: time === t.id ? 800 : 500,
                    fontSize: '0.82rem',
                    textAlign: 'left',
                    cursor: 'pointer'
                  }}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          {/* Question 4: Dietary preferences */}
          <div style={{ marginBottom: '22px' }}>
            <label style={{ display: 'block', fontWeight: 800, fontSize: '0.88rem', color: '#49352D', marginBottom: '8px' }}>
              4. Dietary Preferences:
            </label>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {DIETARY_OPTIONS.map((d) => {
                const active = dietary.includes(d);
                return (
                  <button
                    key={d}
                    type="button"
                    onClick={() => toggleItem(dietary, setDietary, d)}
                    style={{
                      padding: '7px 14px',
                      borderRadius: '9999px',
                      border: active ? '1.5px solid #C66B4E' : '1px solid #E8DDD3',
                      background: active ? '#F4E4DC' : '#FFFFFF',
                      color: active ? '#C66B4E' : '#786C65',
                      fontWeight: active ? 800 : 500,
                      fontSize: '0.8rem',
                      cursor: 'pointer'
                    }}
                  >
                    {active ? '✓ ' : ''}{d}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Question 5: Allergen exclusions */}
          <div style={{ marginBottom: '10px' }}>
            <label style={{ display: 'block', fontWeight: 800, fontSize: '0.88rem', color: '#B83B26', marginBottom: '8px' }}>
              5. Ingredients / Allergens to Exclude:
            </label>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {ALLERGEN_OPTIONS.map((al) => {
                const active = allergens.includes(al);
                return (
                  <button
                    key={al}
                    type="button"
                    onClick={() => toggleItem(allergens, setAllergens, al)}
                    style={{
                      padding: '7px 14px',
                      borderRadius: '9999px',
                      border: active ? '1.5px solid #B83B26' : '1px solid #E8DDD3',
                      background: active ? '#FCEBE8' : '#FFFFFF',
                      color: active ? '#B83B26' : '#786C65',
                      fontWeight: active ? 800 : 500,
                      fontSize: '0.8rem',
                      cursor: 'pointer'
                    }}
                  >
                    {active ? '✗ ' : ''}{al}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div
          style={{
            padding: '16px 26px',
            borderTop: '1px solid #E8DDD3',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: '#FFFFFF'
          }}
        >
          <button
            type="button"
            onClick={onClose}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#786C65',
              fontSize: '0.85rem',
              fontWeight: 700,
              cursor: 'pointer'
            }}
          >
            Skip for now
          </button>

          <button
            type="button"
            onClick={handleSave}
            style={{
              background: '#C66B4E',
              color: '#FFFFFF',
              border: 'none',
              padding: '10px 24px',
              borderRadius: '9999px',
              fontWeight: 800,
              fontSize: '0.88rem',
              cursor: 'pointer'
            }}
          >
            Save Preferences
          </button>
        </div>
      </div>
    </div>
  );
}
