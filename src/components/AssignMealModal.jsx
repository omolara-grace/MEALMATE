import React, { useState } from 'react';
import { X, CalendarCheck, Check, Users } from 'lucide-react';
import { MEAL_SLOT_TYPES } from '../data/defaultRecipes';

const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

export default function AssignMealModal({ recipe, onClose, onConfirmAssign }) {
  const [selectedDay, setSelectedDay] = useState('Monday');
  const [selectedSlot, setSelectedSlot] = useState(recipe?.category || 'Breakfast');
  const [servings, setServings] = useState(recipe?.servings || 1);
  const [savedSuccess, setSavedSuccess] = useState(false);

  if (!recipe) return null;

  const handleSave = () => {
    onConfirmAssign({
      recipeId: recipe.id,
      recipeName: recipe.name,
      category: recipe.category,
      image: recipe.image,
      day: selectedDay,
      slot: selectedSlot,
      servings: servings
    });
    setSavedSuccess(true);
    setTimeout(() => {
      onClose();
    }, 600);
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(47, 33, 26, 0.55)',
        backdropFilter: 'blur(5px)',
        zIndex: 1100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px'
      }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        style={{
          background: '#FAF5EF',
          borderRadius: '20px',
          maxWidth: '480px',
          width: '100%',
          border: '1px solid #E8DDD3',
          boxShadow: '0 24px 48px -12px rgba(47, 33, 26, 0.25)',
          overflow: 'hidden'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          style={{
            padding: '18px 24px',
            borderBottom: '1px solid #E8DDD3',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: '#FFFFFF'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <CalendarCheck size={20} color="#C66B4E" />
            <h3 style={{ margin: 0, fontSize: '1.2rem', color: '#49352D', fontWeight: 800, fontFamily: "'Playfair Display', serif" }}>
              Add to Meal Calendar
            </h3>
          </div>
          <button
            onClick={onClose}
            style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: '#786C65' }}
            aria-label="Close"
          >
            <X size={18} />
          </button>
        </div>

        <div style={{ padding: '22px' }}>
          <p style={{ margin: '0 0 16px', fontSize: '0.9rem', color: '#786C65' }}>
            Scheduling: <strong style={{ color: '#49352D' }}>{recipe.name}</strong>
          </p>

          <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 800, color: '#C66B4E', marginBottom: '8px', textTransform: 'uppercase' }}>
            Day of Week:
          </label>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '6px', marginBottom: '16px' }}>
            {DAYS.map((day) => (
              <button
                key={day}
                type="button"
                onClick={() => setSelectedDay(day)}
                style={{
                  padding: '8px 4px',
                  borderRadius: '8px',
                  border: selectedDay === day ? '2px solid #C66B4E' : '1px solid #E8DDD3',
                  background: selectedDay === day ? '#F4E4DC' : '#FFFFFF',
                  color: selectedDay === day ? '#49352D' : '#786C65',
                  fontWeight: selectedDay === day ? 800 : 500,
                  fontSize: '0.8rem',
                  cursor: 'pointer'
                }}
              >
                {day.slice(0, 3)}
              </button>
            ))}
          </div>

          <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 800, color: '#C66B4E', marginBottom: '8px', textTransform: 'uppercase' }}>
            Meal Slot:
          </label>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '6px', marginBottom: '16px' }}>
            {MEAL_SLOT_TYPES.map((slot) => (
              <button
                key={slot}
                type="button"
                onClick={() => setSelectedSlot(slot)}
                style={{
                  padding: '8px 10px',
                  borderRadius: '8px',
                  border: selectedSlot === slot ? '2px solid #C66B4E' : '1px solid #E8DDD3',
                  background: selectedSlot === slot ? '#F4E4DC' : '#FFFFFF',
                  color: selectedSlot === slot ? '#49352D' : '#786C65',
                  fontWeight: selectedSlot === slot ? 800 : 500,
                  fontSize: '0.78rem',
                  cursor: 'pointer',
                  textAlign: 'center'
                }}
              >
                {slot}
              </button>
            ))}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#FFFFFF', padding: '10px 14px', borderRadius: '10px', border: '1px solid #E8DDD3', marginBottom: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Users size={16} color="#C66B4E" />
              <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#49352D' }}>Planned Servings:</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <button
                type="button"
                onClick={() => setServings(Math.max(1, servings - 1))}
                style={{ width: '26px', height: '26px', borderRadius: '50%', border: '1px solid #E8DDD3', background: '#FAF5EF', cursor: 'pointer', fontWeight: 800 }}
              >
                -
              </button>
              <span style={{ fontWeight: 800, color: '#49352D', minWidth: '20px', textAlign: 'center' }}>{servings}</span>
              <button
                type="button"
                onClick={() => setServings(Math.min(12, servings + 1))}
                style={{ width: '26px', height: '26px', borderRadius: '50%', border: '1px solid #E8DDD3', background: '#FAF5EF', cursor: 'pointer', fontWeight: 800 }}
              >
                +
              </button>
            </div>
          </div>

          {savedSuccess ? (
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
              <Check size={18} color="#C66B4E" /> Added to {selectedDay} {selectedSlot}!
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
                onClick={handleSave}
                style={{
                  background: '#C66B4E',
                  border: 'none',
                  padding: '10px 22px',
                  borderRadius: '9999px',
                  fontWeight: 700,
                  fontSize: '0.85rem',
                  color: '#FFFFFF',
                  cursor: 'pointer'
                }}
              >
                Confirm Schedule
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
