import React, { useState } from 'react';
import { 
  X, 
  Clock, 
  Flame, 
  HardDriveDownload, 
  Check, 
  CalendarPlus, 
  Heart,
  Info, 
  Wrench, 
  ShieldAlert, 
  Sparkles,
  ShoppingBag,
  Users,
  CheckCircle2
} from 'lucide-react';
import ServingsControl from './ServingsControl';
import { formatNaira, formatTime } from '../utils/formatters';
import './RecipeDetailModal.css';

export default function RecipeDetailModal({
  recipe,
  onClose,
  isFavorite = false,
  onToggleFavorite,
  isOfflineSaved,
  onToggleOffline,
  onAssignMeal,
  onAddIngredientsToGrocery
}) {
  const [servings, setServings] = useState(recipe?.servings || 1);
  const [savingOffline, setSavingOffline] = useState(false);
  const [addedGroceryNotice, setAddedGroceryNotice] = useState(false);
  const [checkedIngredients, setCheckedIngredients] = useState({});

  if (!recipe) return null;

  const baseServings = recipe.servings || 1;
  const multiplier = servings / baseServings;

  const handleOfflineClick = async () => {
    setSavingOffline(true);
    try {
      await onToggleOffline(recipe);
    } finally {
      setSavingOffline(false);
    }
  };

  const handleToggleIngredientCheck = (idx) => {
    setCheckedIngredients(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  const handleAddGrocery = () => {
    if (onAddIngredientsToGrocery) {
      const scaledIngredients = recipe.ingredients.map(ing => ({
        ...ing,
        amount: Math.round((ing.amount * multiplier) * 100) / 100
      }));
      onAddIngredientsToGrocery(scaledIngredients, recipe.name);
      setAddedGroceryNotice(true);
      setTimeout(() => setAddedGroceryNotice(false), 2500);
    }
  };

  const displayImage = recipe.offlineImage && isOfflineSaved ? recipe.offlineImage : recipe.image || '/offline-fallback.svg';

  return (
    <div className="recipe-modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="recipe-modal-card-terracotta" onClick={(e) => e.stopPropagation()}>
        <button className="recipe-modal-close-round" onClick={onClose} aria-label="Close recipe details">
          <X size={20} />
        </button>

        <div className="recipe-modal-scrollable">
          {/* Prominent Hero Food Photograph */}
          <div className="recipe-detail-hero">
            <img 
              src={displayImage} 
              alt={recipe.name} 
              className="recipe-detail-hero-img" 
              onError={(e) => { e.target.src = '/offline-fallback.svg'; }}
            />
            <div className="recipe-detail-hero-gradient">
              <div className="flex gap-2 mb-2 flex-wrap">
                <span className="badge-pill" style={{ background: '#FAF5EF', color: '#49352D' }}>
                  {recipe.category}
                </span>
                {recipe.studentFriendly && (
                  <span className="badge-pill badge-terracotta">
                    <Sparkles size={12} />
                    Student Practical
                  </span>
                )}
                {recipe.weightFriendly && (
                  <span className="badge-pill" style={{ background: '#E8D5C4', color: '#49352D' }}>
                    {recipe.weightGoal || 'Balanced Vitality'}
                  </span>
                )}
              </div>
              <h2 className="recipe-detail-hero-title">{recipe.name}</h2>
            </div>
          </div>

          <div className="recipe-modal-content-body">
            {/* Action Bar with Calories, Dietary, Favorite, Offline, Plan */}
            <div className="modal-top-action-bar">
              <div className="metrics-summary-group">
                {recipe.calories && (
                  <div className="metric-tag">
                    <Sparkles size={15} className="text-terracotta" />
                    <div>
                      <span className="tag-label">Nutritional Energy</span>
                      <strong>{recipe.calories} kcal</strong>
                    </div>
                  </div>
                )}
                {recipe.category && (
                  <div className="metric-tag">
                    <div>
                      <span className="tag-label">Category</span>
                      <strong>{recipe.category}</strong>
                    </div>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="modal-cta-buttons">
                {onToggleFavorite && (
                  <button
                    className={`btn-modal-action ${isFavorite ? 'favorite-active' : ''}`}
                    onClick={() => onToggleFavorite(recipe.id)}
                    title={isFavorite ? 'Remove from favorites' : 'Save to favorites'}
                  >
                    <Heart size={16} fill={isFavorite ? '#C66B4E' : 'none'} color={isFavorite ? '#C66B4E' : '#49352D'} />
                    <span>{isFavorite ? 'Favorited' : 'Favorite'}</span>
                  </button>
                )}

                <button 
                  className={`btn-modal-action ${isOfflineSaved ? 'saved-active' : ''}`}
                  onClick={handleOfflineClick}
                  disabled={savingOffline}
                >
                  {isOfflineSaved ? <Check size={16} color="#C66B4E" /> : <HardDriveDownload size={16} />}
                  <span>{savingOffline ? 'Saving...' : isOfflineSaved ? 'Saved Offline' : 'Save Offline'}</span>
                </button>

                <button 
                  className="btn-modal-primary-cta"
                  onClick={() => onAssignMeal(recipe)}
                >
                  <CalendarPlus size={16} />
                  <span>Add to Calendar</span>
                </button>
              </div>
            </div>

            {/* Servings Adjuster Bar */}
            <div className="servings-calculator-box">
              <ServingsControl 
                servings={servings} 
                onChange={setServings} 
                min={1} 
                max={12} 
              />
              <span className="servings-note">
                Ingredient measurements scale automatically for <strong>{servings}</strong> {servings === 1 ? 'serving' : 'servings'}.
              </span>
            </div>

            {/* Why This Meal (Nutritional Note) */}
            {recipe.whyThisMeal && (
              <div className="why-meal-banner">
                <div className="flex items-center gap-2 mb-1">
                  <Info size={18} className="text-terracotta" />
                  <h4>Why This Meal? (Nutritional Note)</h4>
                </div>
                <p>{recipe.whyThisMeal}</p>
                <small>General nutritional guidance for balanced wellness.</small>
              </div>
            )}

            {/* Nutritional Breakdown Grid */}
            {recipe.nutritionalInfo && (
              <div className="macro-breakdown-card">
                <h4>Nutritional Values (Per Serving)</h4>
                <div className="macros-grid">
                  <div className="macro-cell">
                    <span className="macro-lbl">Calories</span>
                    <strong>{recipe.nutritionalInfo.calories || 350} kcal</strong>
                  </div>
                  <div className="macro-cell">
                    <span className="macro-lbl">Protein</span>
                    <strong>{recipe.nutritionalInfo.protein || '18g'}</strong>
                  </div>
                  <div className="macro-cell">
                    <span className="macro-lbl">Carbs</span>
                    <strong>{recipe.nutritionalInfo.carbs || '45g'}</strong>
                  </div>
                  <div className="macro-cell">
                    <span className="macro-lbl">Fats</span>
                    <strong>{recipe.nutritionalInfo.fat || '12g'}</strong>
                  </div>
                  <div className="macro-cell">
                    <span className="macro-lbl">Fiber</span>
                    <strong>{recipe.nutritionalInfo.fiber || '6g'}</strong>
                  </div>
                  {recipe.nutritionalInfo.keyNutrients && (
                    <div className="macro-cell full-width">
                      <span className="macro-lbl">Key Nutrients</span>
                      <strong>{recipe.nutritionalInfo.keyNutrients}</strong>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Hostel Facilities & Food Safety if applicable */}
            {(recipe.equipmentRequired || recipe.storageRequirements) && (
              <div className="equipment-advisory-card">
                {recipe.equipmentRequired && (
                  <div className="advisory-line">
                    <Wrench size={16} className="text-terracotta flex-shrink-0" />
                    <div>
                      <strong>Equipment Required:</strong> {recipe.equipmentRequired.join(', ')}
                    </div>
                  </div>
                )}
                {recipe.storageRequirements && (
                  <div className="advisory-line mt-2">
                    <ShieldAlert size={16} className="text-chocolate flex-shrink-0" />
                    <div>
                      <strong>Hostel Storage Safety:</strong> {recipe.storageRequirements}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Interactive Ingredients Checklist */}
            <div className="modal-block-section">
              <div className="section-title-wrap">
                <h3>Ingredients Checklist ({recipe.ingredients?.length || 0})</h3>
                <button className="btn-add-grocery-pill" onClick={handleAddGrocery}>
                  <ShoppingBag size={14} />
                  <span>Send to Shopping List</span>
                </button>
              </div>

              {addedGroceryNotice && (
                <div className="toast-grocery-added">
                  <CheckCircle2 size={16} /> Added ingredients to your Shopping List!
                </div>
              )}

              <div className="ingredients-checklist-grid">
                {recipe.ingredients?.map((ing, idx) => {
                  const calculatedAmount = Math.round((ing.amount * multiplier) * 100) / 100;
                  const isChecked = checkedIngredients[idx];

                  return (
                    <div 
                      key={idx} 
                      className={`ingredient-check-item ${isChecked ? 'item-checked' : ''}`}
                      onClick={() => handleToggleIngredientCheck(idx)}
                    >
                      <input
                        type="checkbox"
                        checked={!!isChecked}
                        onChange={() => {}}
                        className="ing-checkbox"
                        aria-label={`Mark ${ing.name} as available`}
                      />
                      <div className="ing-info">
                        <strong>{calculatedAmount} {ing.unit}</strong>
                        <span>{ing.name}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Cooking Instructions */}
            <div className="modal-block-section">
              <h3>Step-by-Step Cooking Guide</h3>
              <ol className="instructions-timeline">
                {recipe.instructions?.map((step, idx) => (
                  <li key={idx} className="instruction-timeline-item">
                    <span className="step-circle">{idx + 1}</span>
                    <p className="step-instruction-text">{step}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
