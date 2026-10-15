import React, { useState } from 'react';
import { 
  Activity, 
  Droplet, 
  Plus, 
  Minus, 
  Sparkles, 
  Check, 
  Scale, 
  ChevronRight,
  Target,
  CalendarPlus,
  Flame,
  Info
} from 'lucide-react';
import { WEIGHT_MANAGEMENT_PROGRAMS, HEALTH_PLANS, DAILY_HYDRATION_TIPS } from '../data/healthPlans';
import './HealthPage.css';

export default function HealthPage({ recipes, onSelectRecipeById, onAssignMeal }) {
  const [glasses, setGlasses] = useState(5);
  const [activeWeightProgram, setActiveWeightProgram] = useState(WEIGHT_MANAGEMENT_PROGRAMS[0].id);
  const [showAllRecipes, setShowAllRecipes] = useState(false);
  const targetGlasses = 8;

  const handleDrink = () => {
    if (glasses < 15) setGlasses(glasses + 1);
  };

  const handleUndo = () => {
    if (glasses > 0) setGlasses(glasses - 1);
  };

  const selectedProgram = WEIGHT_MANAGEMENT_PROGRAMS.find(p => p.id === activeWeightProgram) || WEIGHT_MANAGEMENT_PROGRAMS[0];

  // Limit to first 5 recipes by default, allow "See More" toggle
  const allRecipeIds = selectedProgram.recommendedRecipeIds || [];
  const displayedRecipeIds = showAllRecipes ? allRecipeIds : allRecipeIds.slice(0, 5);
  const hasMoreRecipes = allRecipeIds.length > 5;

  return (
    <div className="health-page-container">
      {/* Header */}
      <div className="health-header-bar">
        <div className="badge-pill badge-terracotta mb-2">
          <Activity size={14} />
          <span>Weight Management &amp; Vitality</span>
        </div>
        <h1 className="health-title">Nutrition &amp; Weight Management</h1>
        <p className="health-subtitle">
          Sustainable nutrition blueprints designed for lean energy, metabolic vitality, and balanced everyday living. Connected directly to your meal calendar.
        </p>
      </div>

      {/* Weight Management Programs Tabs & Details */}
      <section className="weight-management-section">
        <div className="weight-tabs-header">
          {WEIGHT_MANAGEMENT_PROGRAMS.map((program) => (
            <button
              key={program.id}
              className={`weight-tab-btn ${activeWeightProgram === program.id ? 'active' : ''}`}
              onClick={() => {
                setActiveWeightProgram(program.id);
                setShowAllRecipes(false);
              }}
            >
              <Target size={15} />
              <span>{program.title}</span>
            </button>
          ))}
        </div>

        <div className="weight-program-card">
          <div className="program-meta-banner">
            <div>
              <span className="program-goal-label">Program Goal</span>
              <h2 className="program-title">{selectedProgram.title}</h2>
              <p className="program-overview">{selectedProgram.overview}</p>
            </div>
            <div className="program-guidelines-box">
              <div className="guide-pill">
                <Flame size={14} className="text-terracotta" />
                <span>{selectedProgram.calorieGuideline}</span>
              </div>
              <div className="guide-pill">
                <Scale size={14} className="text-chocolate" />
                <span>{selectedProgram.macroRatio}</span>
              </div>
            </div>
          </div>

          <div className="program-content-grid">
            <div className="program-rules-block">
              <h3>Core Dietary Guidelines</h3>
              <ul className="program-rules-list">
                {selectedProgram.rules.map((rule, idx) => (
                  <li key={idx}>
                    <Check size={16} className="text-terracotta flex-shrink-0" />
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="program-recommended-recipes">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                <h3 style={{ margin: 0 }}>Recommended Recipes for this Blueprint</h3>
                <span style={{ fontSize: '0.8rem', color: 'var(--color-secondary-text)', fontWeight: 600 }}>
                  Showing {displayedRecipeIds.length} of {allRecipeIds.length} meals
                </span>
              </div>

              <div className="rec-mini-grid">
                {displayedRecipeIds.map((rId) => {
                  const rec = recipes.find(r => r.id === rId);
                  if (!rec) return null;
                  return (
                    <div key={rId} className="mini-recipe-item">
                      <img
                        src={rec.image || '/offline-fallback.svg'}
                        alt={rec.name}
                        className="mini-recipe-thumb"
                        onError={(e) => { e.target.src = '/offline-fallback.svg'; }}
                      />
                      <div className="mini-recipe-info">
                        <h4 onClick={() => onSelectRecipeById(rId)}>{rec.name}</h4>
                        <span>{rec.calories || 380} kcal • {rec.preparationTime || 10} min</span>
                      </div>
                      <button
                        className="btn-plan-mini"
                        onClick={() => onAssignMeal(rec)}
                        title="Add to calendar"
                        aria-label={`Schedule ${rec.name}`}
                      >
                        <CalendarPlus size={14} />
                      </button>
                    </div>
                  );
                })}
              </div>

              {/* See More / Show Less Toggle Button */}
              {hasMoreRecipes && (
                <div style={{ textAlign: 'center', marginTop: '14px' }}>
                  <button
                    onClick={() => setShowAllRecipes(!showAllRecipes)}
                    style={{
                      background: 'var(--color-cream)',
                      border: '1px solid var(--color-terracotta)',
                      color: 'var(--color-terracotta)',
                      padding: '8px 20px',
                      borderRadius: 'var(--radius-full)',
                      fontSize: '0.86rem',
                      fontWeight: 700,
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      transition: 'all 0.2s'
                    }}
                  >
                    <span>{showAllRecipes ? 'Show Less' : `See More Meals (${allRecipeIds.length - 5} more)`}</span>
                    <ChevronRight size={15} style={{ transform: showAllRecipes ? 'rotate(-90deg)' : 'rotate(90deg)', transition: 'transform 0.2s' }} />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Hydration Tracker Card */}
      <section className="hydration-card">
        <div className="hydration-left">
          <div className="flex items-center gap-2 mb-2">
            <Droplet size={22} className="text-terracotta" />
            <h3>Daily Hydration Tracker</h3>
          </div>
          <p className="hydration-desc">
            Aim for {targetGlasses} glasses (approx. 2 liters) of fresh water daily. Adequate cellular hydration curbs false hunger signals and supports metabolic digestion.
          </p>

          <div className="glasses-counter-row">
            <button 
              className="btn-counter" 
              onClick={handleUndo} 
              disabled={glasses === 0}
              aria-label="Decrease water count"
            >
              <Minus size={16} />
            </button>
            <div className="counter-display">
              <span className="current-count">{glasses}</span>
              <span className="target-count">/ {targetGlasses} glasses</span>
            </div>
            <button 
              className="btn-counter primary-terracotta" 
              onClick={handleDrink}
              aria-label="Add a glass of water"
            >
              <Plus size={16} />
            </button>
          </div>

          <div className="hydration-progress-bar">
            <div 
              className="hydration-fill" 
              style={{ width: `${Math.min(100, (glasses / targetGlasses) * 100)}%` }}
            ></div>
          </div>
        </div>

        <div className="hydration-tips-box">
          <h4>
            <Sparkles size={16} className="text-terracotta" />
            Hydration Principle
          </h4>
          <p>{DAILY_HYDRATION_TIPS[glasses % DAILY_HYDRATION_TIPS.length]}</p>
        </div>
      </section>

      {/* Plate Composition Guide */}
      <section className="plate-guide-section">
        <h2>The Balanced Plate Blueprint</h2>
        <div className="plate-grid">
          <div className="plate-col veggies">
            <div className="plate-col-header">
              <span className="plate-pct">50%</span>
              <h4>Greens &amp; High-Volume Vegetables</h4>
            </div>
            <p>Fresh ugwu (fluted pumpkin greens), spinach, garden eggs, tomatoes, sweet bell peppers, and cucumbers. Dense in micro-nutrients and digestive fiber.</p>
          </div>

          <div className="plate-col protein">
            <div className="plate-col-header">
              <span className="plate-pct">25%</span>
              <h4>Sustained Lean Protein</h4>
            </div>
            <p>Eggs, black-eyed beans, oceanic mackerel, grilled skinless chicken, and roasted groundnuts. Preserves muscular lean tissue and ensures long satiety.</p>
          </div>

          <div className="plate-col carbs">
            <div className="plate-col-header">
              <span className="plate-pct">25%</span>
              <h4>Whole Complex Carbohydrates</h4>
            </div>
            <p>Boiled yam, rolled oats, brown beans, whole-wheat sourdough, and steamed sweet potatoes. Delivers steady energy without glycemic rollercoasters.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
