import React from 'react';
import { Minus, Plus, Users } from 'lucide-react';

export default function ServingsControl({ servings, onChange, min = 1, max = 12 }) {
  const handleDecrement = (e) => {
    e.stopPropagation();
    if (servings > min) onChange(servings - 1);
  };

  const handleIncrement = (e) => {
    e.stopPropagation();
    if (servings < max) onChange(servings + 1);
  };

  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        background: '#FAF8F5',
        border: '1px solid #D8E2DC',
        borderRadius: '9999px',
        padding: '4px 8px',
      }}
      role="group"
      aria-label="Adjust servings"
    >
      <Users size={15} color="#2D5A37" />
      <span style={{ fontSize: '0.82rem', fontWeight: 600, color: '#3A4B3F' }}>
        Servings:
      </span>
      <button
        onClick={handleDecrement}
        disabled={servings <= min}
        style={{
          width: '24px',
          height: '24px',
          borderRadius: '50%',
          border: 'none',
          background: servings <= min ? '#E5E7EB' : '#2D5A37',
          color: '#FFFFFF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: servings <= min ? 'not-allowed' : 'pointer',
        }}
        aria-label="Decrease servings"
      >
        <Minus size={12} />
      </button>

      <span style={{ fontSize: '0.9rem', fontWeight: 700, minWidth: '18px', textAlign: 'center', color: '#1E3E26' }}>
        {servings}
      </span>

      <button
        onClick={handleIncrement}
        disabled={servings >= max}
        style={{
          width: '24px',
          height: '24px',
          borderRadius: '50%',
          border: 'none',
          background: servings >= max ? '#E5E7EB' : '#2D5A37',
          color: '#FFFFFF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: servings >= max ? 'not-allowed' : 'pointer',
        }}
        aria-label="Increase servings"
      >
        <Plus size={12} />
      </button>
    </div>
  );
}
