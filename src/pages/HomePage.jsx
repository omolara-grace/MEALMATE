import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Sparkles, 
  Filter, 
  Clock, 
  Calendar, 
  ChefHat,
  ArrowRight,
  GraduationCap,
  Heart,
  ShoppingCart,
  CheckCircle2,
  TrendingUp,
  Flame,
  UtensilsCrossed,
  Activity
} from 'lucide-react';
import { Link } from 'react-router-dom';
import RecipeCard from '../components/RecipeCard';
import './HomePage.css';

const CATEGORIES = [
  'All', 
  'Nigerian Classics',
  'Swallow & Soups',
  'Weight Loss',
  'Weight Gain',
  'Diabetes Care',
  'Liver Care',
  'Heart Health',
  'Ulcer Care',
  'Breakfast', 
  'Lunch', 
  'Dinner', 
  'Snacks', 
  'Juices & Smoothies',
  'Fruits & Light Bites',
  'Desserts'
];

export default function HomePage({
  recipes,
  mealPlan,
  shoppingList,
  favoriteIds,
  onToggleFavorite,
  offlineRecipeIds,
  onToggleOffline,
  onSelectRecipe,
  onAssignMeal,
  studentPreferences
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [maxTime, setMaxTime] = useState('all');
  const [dietaryFilter, setDietaryFilter] = useState('all');

  // Today's Meals lookup
  const todayName = useMemo(() => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[new Date().getDay()];
  }, []);

  const todayMeals = useMemo(() => {
    return mealPlan?.[todayName] || {};
  }, [mealPlan, todayName]);

  // Filtered recipes for the discovery section
  const filteredRecipes = useMemo(() => {
    return recipes.filter((recipe) => {
      // 1. Search matching
      const matchesSearch =
        recipe.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        recipe.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        recipe.ingredients?.some(ing => ing.name.toLowerCase().includes(searchQuery.toLowerCase()));

      if (!matchesSearch) return false;

      // 2. Category matching
      if (selectedCategory === 'Nigerian Classics') {
        const isNigerian = recipe.dietaryTags?.includes('Nigerian Classic') || 
                           recipe.name.toLowerCase().includes('nigerian') || 
                           recipe.name.toLowerCase().includes('egusi') ||
                           recipe.name.toLowerCase().includes('efo') ||
                           recipe.name.toLowerCase().includes('moi moi') ||
                           recipe.name.toLowerCase().includes('ofada') ||
                           recipe.name.toLowerCase().includes('okro') ||
                           recipe.name.toLowerCase().includes('yam') ||
                           recipe.name.toLowerCase().includes('boli') ||
                           recipe.name.toLowerCase().includes('zobo') ||
                           recipe.name.toLowerCase().includes('kunu') ||
                           recipe.name.toLowerCase().includes('chapman') ||
                           recipe.name.toLowerCase().includes('jollof') ||
                           recipe.name.toLowerCase().includes('asaro');
        if (!isNigerian) return false;
      } else if (selectedCategory === 'Swallow & Soups') {
        const isSwallow = recipe.dietaryTags?.includes('Swallow & Soups') || 
                          recipe.name.toLowerCase().includes('soup') || 
                          recipe.name.toLowerCase().includes('swallow') ||
                          recipe.name.toLowerCase().includes('egusi') ||
                          recipe.name.toLowerCase().includes('efo') ||
                          recipe.name.toLowerCase().includes('okro');
        if (!isSwallow) return false;
      } else if (selectedCategory === 'Weight Loss') {
        if (!recipe.dietaryTags?.includes('Weight Loss') && !recipe.weightFriendly) return false;
      } else if (selectedCategory === 'Weight Gain') {
        if (!recipe.dietaryTags?.includes('Weight Gain') && !recipe.dietaryTags?.includes('High Calorie')) return false;
      } else if (selectedCategory === 'Diabetes Care') {
        if (!recipe.dietaryTags?.includes('Diabetes') && !recipe.dietaryTags?.includes('Low Glycemic')) return false;
      } else if (selectedCategory === 'Liver Care') {
        if (!recipe.dietaryTags?.includes('Liver Care') && !recipe.dietaryTags?.includes('Liver Friendly')) return false;
      } else if (selectedCategory === 'Heart Health') {
        if (!recipe.dietaryTags?.includes('Heart Health') && !recipe.dietaryTags?.includes('Low Sodium')) return false;
      } else if (selectedCategory === 'Ulcer Care') {
        if (!recipe.dietaryTags?.includes('Ulcer Friendly') && !recipe.dietaryTags?.includes('Gut Healing')) return false;
      } else if (selectedCategory !== 'All' && recipe.category !== selectedCategory) {
        return false;
      }

      // 3. Max time
      if (maxTime !== 'all') {
        const total = (recipe.preparationTime || 0) + (recipe.cookingTime || 0);
        if (total > parseInt(maxTime, 10)) return false;
      }

      // 4. Dietary tag
      if (dietaryFilter !== 'all') {
        if (!recipe.dietaryTags?.includes(dietaryFilter)) return false;
      }

      return true;
    });
  }, [recipes, searchQuery, selectedCategory, maxTime, dietaryFilter]);

  // Contextual Recommendations based on student preferences or quick balanced meals
  const contextualRecommendations = useMemo(() => {
    if (studentPreferences?.dietary?.length > 0) {
      return recipes.filter(r => 
        r.dietaryTags?.some(tag => studentPreferences.dietary.includes(tag))
      ).slice(0, 3);
    }
    return recipes.slice(0, 3);
  }, [recipes, studentPreferences]);

  return (
    <div className="home-dashboard-container">
      {/* 1. Distinctive Welcome & Food Photography Editorial Hero */}
      <section className="editorial-hero-section">
        <div className="hero-text-block">
          <div className="badge-pill badge-terracotta mb-3">
            <Sparkles size={14} />
            <span>Nourishing Kitchen &amp; Meal Planner</span>
          </div>

          <h1 className="hero-main-title">
            Artisan Meals, <em>Planned with Ease</em> &amp; Purpose.
          </h1>

          <p className="hero-subtext">
            Discover wholesome, culturally rich recipes, tailor your week to match your budget and cooking facilities, and access your culinary life anywhere—completely offline.
          </p>

          <div className="hero-cta-group">
            <Link to="/planner" className="btn-hero-primary">
              <Calendar size={18} />
              <span>Plan My Meals</span>
            </Link>

            <Link to="/student" className="btn-hero-student">
              <GraduationCap size={18} />
              <span>Explore Student Mode</span>
            </Link>
          </div>
        </div>

        <div className="hero-visual-card">
          <div className="hero-image-wrap">
            <img
              src="/meals/akara-pap.jpg"
              alt="Crispy Akara Bean Cakes with Silky Millet Pap"
              className="hero-featured-image"
            />
            <div className="hero-image-caption">
              <span className="caption-badge">Featured Recipe</span>
              <strong>Crispy Akara &amp; Silky Pap</strong>
              <span>High protein • Traditional Nigerian Breakfast</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Today's Meals & Weekly Calendar Preview Grid */}
      <section className="todays-routine-section">
        {/* Left: Today's Scheduled Meals */}
        <div className="today-meals-card">
          <div className="section-header-row">
            <div>
              <span className="section-pre-label">Daily Schedule</span>
              <h2 className="section-heading">Today's Meals ({todayName})</h2>
            </div>
            <Link to="/planner" className="text-link-view">
              View Calendar <ArrowRight size={14} />
            </Link>
          </div>

          <div className="today-slots-grid">
            {['Breakfast', 'Lunch', 'Dinner'].map((slot) => {
              const assigned = todayMeals[slot];
              return (
                <div key={slot} className="today-slot-item">
                  <div className="slot-badge-label">{slot}</div>
                  {assigned ? (
                    <div 
                      className="today-dish-preview"
                      onClick={() => {
                        const rec = recipes.find(r => r.id === assigned.recipeId);
                        if (rec) onSelectRecipe(rec);
                      }}
                    >
                      <img
                        src={assigned.image || '/offline-fallback.svg'}
                        alt={assigned.recipeName}
                        className="today-dish-thumb"
                        onError={(e) => { e.target.src = '/offline-fallback.svg'; }}
                      />
                      <div className="today-dish-text">
                        <strong>{assigned.recipeName}</strong>
                        <span>{assigned.category}</span>
                      </div>
                    </div>
                  ) : (
                    <button 
                      className="btn-plan-today-empty"
                      onClick={() => onAssignMeal({ name: `${slot} Meal`, category: slot, id: null })}
                    >
                      <span>No meal scheduled</span>
                      <small>Click to add</small>
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: Quick Access & Preferences Highlights */}
        <div className="dashboard-side-card">
          <div className="side-card-header">
            <h3>Quick Pantry &amp; Favourites</h3>
          </div>

          <div className="side-card-content">
            <Link to="/grocery" className="quick-access-box">
              <div className="icon-avatar">
                <ShoppingCart size={18} color="#C66B4E" />
              </div>
              <div className="box-details">
                <strong>Shopping Checklist</strong>
                <span>{shoppingList.filter(i => !i.checked).length} items remaining to buy</span>
              </div>
              <ArrowRight size={16} className="text-secondary" />
            </Link>

            <Link to="/health" className="quick-access-box">
              <div className="icon-avatar">
                <Activity size={18} color="#C66B4E" />
              </div>
              <div className="box-details">
                <strong>Weight &amp; Vitality Blueprint</strong>
                <span>Plate composition &amp; daily hydration</span>
              </div>
              <ArrowRight size={16} className="text-secondary" />
            </Link>

            {studentPreferences && (
              <div className="active-preferences-chip">
                <Sparkles size={14} className="text-terracotta" />
                <span>
                  Budget: <strong>{studentPreferences.budget}</strong> • Facilities: <strong>{studentPreferences.facilities?.length || 2} selected</strong>
                </span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 3. Curated Recommendations for You */}
      <section className="recommendations-section">
        <div className="section-header-row mb-4">
          <div>
            <span className="section-pre-label">Personalized For You</span>
            <h2 className="section-heading">Curated Chef &amp; Nutritionist Picks</h2>
          </div>
          <Link to="/planner" className="text-link-view">
            Plan Week <ArrowRight size={14} />
          </Link>
        </div>

        <div className="recipes-shelf-grid">
          {contextualRecommendations.map((recipe) => (
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
      </section>

      {/* 4. Recipe Discovery & Filtering Area */}
      <section className="discovery-main-section">
        <div className="discovery-header-wrap">
          <div>
            <span className="section-pre-label">Explore Our Collection</span>
            <h2 className="section-heading">Recipe Discovery</h2>
          </div>
          <span className="results-badge">{filteredRecipes.length} recipes</span>
        </div>

        {/* Search & Filter Toolbar */}
        <div className="search-and-filters-toolbar">
          <div className="search-bar-wrap">
            <Search size={18} className="search-lens" />
            <input
              type="text"
              placeholder="Search recipes, ingredients (e.g. beans, plantain, eggs, mackerel)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input-field"
              aria-label="Search recipes"
            />
            {searchQuery && (
              <button className="btn-clear-search" onClick={() => setSearchQuery('')}>
                Clear
              </button>
            )}
          </div>

          <div className="filter-selects-row">
            <div className="select-pill-wrap">
              <Filter size={14} className="text-terracotta" />
              <select
                value={dietaryFilter}
                onChange={(e) => setDietaryFilter(e.target.value)}
                className="select-field"
              >
                <option value="all">All Diets &amp; Goals</option>
                <option value="Nigerian Classic">Nigerian Classic</option>
                <option value="Weight Loss">Weight Loss</option>
                <option value="High-Protein">High-Protein</option>
                <option value="Vegetarian">Vegetarian</option>
                <option value="Vegan">Vegan</option>
                <option value="Gluten-Free">Gluten-Free</option>
                <option value="One-Pot">One-Pot</option>
              </select>
            </div>
          </div>
        </div>

        {/* Category Pills Scroll */}
        <div className="category-chips-scroll">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`category-chip-btn ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Recipe Grid */}
        {filteredRecipes.length === 0 ? (
          <div className="empty-discovery-card">
            <ChefHat size={46} className="text-terracotta mb-2" />
            <h3>No culinary matches found</h3>
            <p>Try refining your search query or selecting a different dietary filter.</p>
            <button
              className="btn-reset-discovery"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
                setMaxTime('all');
                setDietaryFilter('all');
              }}
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="recipes-shelf-grid">
            {filteredRecipes.map((recipe) => (
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
    </div>
  );
}
