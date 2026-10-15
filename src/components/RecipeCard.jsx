import React, { useState } from 'react';
import { 
  Clock, 
  Flame, 
  CalendarPlus, 
  HardDriveDownload, 
  Check, 
  Heart,
  Sparkles, 
  Info,
  DollarSign
} from 'lucide-react';
import { formatNaira, formatTime } from '../utils/formatters';
import './RecipeCard.css';

export default function RecipeCard({
  recipe,
  isOfflineSaved = false,
  isFavorite = false,
  onToggleFavorite,
  onToggleOffline,
  onSelectRecipe,
  onAssignMeal
}) {
  const [imgError, setImgError] = useState(false);
  const [savingOffline, setSavingOffline] = useState(false);

  const handleOfflineClick = async (e) => {
    e.stopPropagation();
    setSavingOffline(true);
    try {
      await onToggleOffline(recipe);
    } finally {
      setSavingOffline(false);
    }
  };

  const handleFavoriteClick = (e) => {
    e.stopPropagation();
    if (onToggleFavorite) onToggleFavorite(recipe.id);
  };

  const handleAssignClick = (e) => {
    e.stopPropagation();
    onAssignMeal(recipe);
  };

  const displayImage = imgError || !recipe.image
    ? '/offline-fallback.svg'
    : (recipe.offlineImage && isOfflineSaved ? recipe.offlineImage : recipe.image);

  return (
    <article 
      className={`recipe-card-premium ${isOfflineSaved ? 'saved-locally' : ''}`}
      onClick={() => onSelectRecipe(recipe)}
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter') onSelectRecipe(recipe); }}
      aria-label={`Recipe: ${recipe.name}`}
    >
      <div className="card-media-wrapper">
        <img
          src={displayImage}
          alt={recipe.name}
          className="card-food-image"
          onError={() => setImgError(true)}
          loading="lazy"
        />
        
        {/* Category Pill */}
        <span className="card-category-tag">{recipe.category}</span>
        
        {/* Student or Weight Tag */}
        {recipe.studentFriendly && (
          <span className="card-student-tag" title="Student-tailored balanced meal">
            <Sparkles size={11} />
            Student Choice
          </span>
        )}

        {/* Favorite & Offline Buttons in Top Right */}
        <div className="card-top-actions">
          {onToggleFavorite && (
            <button
              className={`card-icon-action-btn ${isFavorite ? 'favorite-active' : ''}`}
              onClick={handleFavoriteClick}
              title={isFavorite ? 'Remove from favorites' : 'Save to favorites'}
              aria-label={isFavorite ? 'Remove from favorites' : 'Save to favorites'}
            >
              <Heart size={15} fill={isFavorite ? '#C66B4E' : 'none'} color={isFavorite ? '#C66B4E' : '#49352D'} />
            </button>
          )}

          <button
            className={`card-icon-action-btn ${isOfflineSaved ? 'offline-active' : ''}`}
            onClick={handleOfflineClick}
            disabled={savingOffline}
            title={isOfflineSaved ? 'Saved offline (click to remove)' : 'Save for offline access'}
            aria-label={isOfflineSaved ? 'Remove from offline' : 'Save for offline'}
          >
            {isOfflineSaved ? <Check size={14} color="#C66B4E" /> : <HardDriveDownload size={14} color="#49352D" />}
          </button>
        </div>
      </div>

      <div className="card-content-block">
        {recipe.calories && (
          <div className="card-meta-line">
            <span className="calorie-snippet">{recipe.calories} kcal</span>
            {recipe.category && (
              <span style={{ fontSize: '0.8rem', color: '#786C65' }}>• {recipe.category}</span>
            )}
          </div>
        )}

        <h3 className="card-recipe-heading">{recipe.name}</h3>
        <p className="card-recipe-summary">{recipe.description}</p>

        {/* Dietary Pills */}
        {recipe.dietaryTags && recipe.dietaryTags.length > 0 && (
          <div className="card-dietary-row">
            {recipe.dietaryTags.slice(0, 3).map((tag) => (
              <span key={tag} className="dietary-chip">{tag}</span>
            ))}
          </div>
        )}

        <div className="card-bottom-actions">
          <button
            className="btn-card-inspect"
            onClick={(e) => {
              e.stopPropagation();
              onSelectRecipe(recipe);
            }}
          >
            View Recipe
          </button>

          <button
            className="btn-card-schedule"
            onClick={handleAssignClick}
            title="Add to meal calendar"
            aria-label={`Add ${recipe.name} to calendar`}
          >
            <CalendarPlus size={15} />
            <span>Plan</span>
          </button>
        </div>
      </div>
    </article>
  );
}
