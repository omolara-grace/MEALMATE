import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';
import HomePage from './pages/HomePage';
import MealPlannerPage from './pages/MealPlannerPage';
import GroceryPage from './pages/GroceryPage';
import HealthPage from './pages/HealthPage';
import StudentPage from './pages/StudentPage';
import RecipeDetailModal from './components/RecipeDetailModal';
import AssignMealModal from './components/AssignMealModal';
import { DEFAULT_RECIPES, MEAL_SLOT_TYPES } from './data/defaultRecipes';
import { 
  saveRecipeForOffline, 
  removeRecipeFromOffline, 
  getOfflineRecipes,
  saveMealPlan,
  loadMealPlan,
  saveShoppingList,
  loadShoppingList,
  saveStudentPreferences,
  loadStudentPreferences,
  getStoredItem,
  setStoredItem,
  LOCAL_STORAGE_KEYS
} from './utils/storage';

export default function App() {
  const [recipes, setRecipes] = useState(DEFAULT_RECIPES);
  const [offlineRecipes, setOfflineRecipes] = useState([]);
  const [favoriteIds, setFavoriteIds] = useState(() => {
    const saved = getStoredItem(LOCAL_STORAGE_KEYS.FAVORITES, ['rec-bf-1', 'rec-lu-1', 'rec-bf-2']);
    return new Set(saved);
  });
  
  const [selectedRecipeForDetail, setSelectedRecipeForDetail] = useState(null);
  const [selectedRecipeForAssign, setSelectedRecipeForAssign] = useState(null);
  const [pickerTarget, setPickerTarget] = useState(null); // { day, slot }
  const [pickerSearch, setPickerSearch] = useState('');
  const [pickerCategoryFilter, setPickerCategoryFilter] = useState('All');

  // Shared 7-Day Meal Plan state (persisted in IndexedDB)
  const [mealPlan, setMealPlan] = useState(() => {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const initial = {};
    days.forEach(d => {
      initial[d] = {};
      MEAL_SLOT_TYPES.forEach(s => {
        initial[d][s] = null;
      });
    });

    // Default rich sample plan for Monday, Tuesday, Wednesday featuring authentic Nigerian staples
    initial['Monday']['Breakfast'] = {
      recipeId: 'rec-bf-1',
      recipeName: 'Spiced Stir-Fry Indomie Noodles with Fried Egg & Chopped Veggies',
      category: 'Breakfast',
      image: '/meals/indomie.jpg',
      servings: 1
    };
    initial['Monday']['Lunch'] = {
      recipeId: 'rec-lu-1',
      recipeName: 'One-Pot Campus Jollof Spaghetti with Boiled Egg',
      category: 'Lunch',
      image: '/meals/jollof-rice.jpg',
      servings: 2
    };
    initial['Monday']['Dinner'] = {
      recipeId: 'rec-dn-1',
      recipeName: 'Boiled Sweet Potatoes with Quick Spiced Tomato Egg Sauce',
      category: 'Dinner',
      image: '/meals/sweet-potato-egg-sauce.jpg',
      servings: 1
    };
    initial['Monday']['Juices & Smoothies'] = {
      recipeId: 'rec-jc-1',
      recipeName: 'Chilled Hibiscus Zobo Infusion with Crushed Ginger & Pineapple',
      category: 'Juices & Smoothies',
      image: '/meals/zobo-drink.jpg',
      servings: 2
    };

    initial['Tuesday']['Breakfast'] = {
      recipeId: 'rec-bf-2',
      recipeName: 'Creamy Golden Vanilla Custard with Liquid Milk & Sugar',
      category: 'Breakfast',
      image: '/meals/custard.jpg',
      servings: 1
    };
    initial['Tuesday']['Lunch'] = {
      recipeId: 'rec-lu-2',
      recipeName: 'Slow-Simmered Beans Porridge & Golden Dodo',
      category: 'Lunch',
      image: '/meals/stewed-beans-plantains.jpg',
      servings: 2
    };
    initial['Tuesday']['Dinner'] = {
      recipeId: 'rec-lu-3',
      recipeName: 'Steamed White Rice with Quick Peppered Titus Fish Stew',
      category: 'Lunch',
      image: '/meals/white-rice-fish-stew.jpg',
      servings: 2
    };

    return initial;
  });

  // Shared Shopping List state (persisted in IndexedDB)
  const [shoppingList, setShoppingList] = useState([
    { id: 'item-1', name: 'Fresh Farm Eggs', amount: '1 crate', unit: '', checked: false, sourceRecipe: 'Indomie & Egg Sauce' },
    { id: 'item-2', name: 'Instant Noodles (Indomie)', amount: '5 packets', unit: '', checked: false, sourceRecipe: 'Stir-Fry Indomie' },
    { id: 'item-3', name: 'Brown Honey Beans', amount: '2 dericas', unit: '', checked: false, sourceRecipe: 'Beans & Dodo' },
    { id: 'item-4', name: 'Sweet Ripe Plantains', amount: '4 pieces', unit: '', checked: true, sourceRecipe: 'Golden Dodo' },
    { id: 'item-5', name: 'Golden Penny Spaghetti', amount: '2 packs', unit: '', checked: false, sourceRecipe: 'Jollof Spaghetti' },
    { id: 'item-6', name: 'Fresh Titus Mackerel', amount: '3 pieces', unit: '', checked: false, sourceRecipe: 'Fish Stew' },
    { id: 'item-7', name: 'Dried Zobo Leaves (Hibiscus)', amount: '2 cups', unit: '', checked: false, sourceRecipe: 'Zobo Elixir' }
  ]);

  // Student Preferences state (persisted in IndexedDB)
  const [studentPreferences, setStudentPreferences] = useState({
    budget: 'under-1200',
    facilities: ['Single hot plate', 'Electric kettle'],
    time: '15-30',
    dietary: [],
    allergens: []
  });

  // Load persistent data from IndexedDB on startup
  useEffect(() => {
    async function initStorageData() {
      const savedOffline = await getOfflineRecipes();
      if (savedOffline && savedOffline.length > 0) {
        setOfflineRecipes(savedOffline);
      }

      const storedPlan = await loadMealPlan();
      if (storedPlan) {
        setMealPlan(storedPlan);
      }

      const storedList = await loadShoppingList();
      if (storedList && storedList.length > 0) {
        setShoppingList(storedList);
      }

      const storedPrefs = await loadStudentPreferences();
      if (storedPrefs) {
        setStudentPreferences(storedPrefs);
      }
    }

    initStorageData();

    // Dynamically enforce the steaming pot favicon to immediately clear any cached Vite logo
    try {
      const existingIcons = document.querySelectorAll("link[rel*='icon']");
      existingIcons.forEach(el => el.remove());

      const svgLink = document.createElement('link');
      svgLink.rel = 'icon';
      svgLink.type = 'image/svg+xml';
      svgLink.href = `/favicon.svg?t=${Date.now()}`;
      document.head.appendChild(svgLink);

      const icoLink = document.createElement('link');
      icoLink.rel = 'icon';
      icoLink.type = 'image/x-icon';
      icoLink.href = `/favicon.ico?t=${Date.now()}`;
      document.head.appendChild(icoLink);
    } catch (e) {
      // ignore
    }
  }, []);

  // Offline recipe IDs set
  const offlineRecipeIds = new Set(offlineRecipes.map((r) => r.id));

  // Toggle Save for Offline
  const handleToggleOffline = async (recipe) => {
    if (offlineRecipeIds.has(recipe.id)) {
      await removeRecipeFromOffline(recipe.id);
      setOfflineRecipes(prev => prev.filter(r => r.id !== recipe.id));
    } else {
      const saved = await saveRecipeForOffline(recipe);
      setOfflineRecipes(prev => [...prev.filter(r => r.id !== recipe.id), saved]);
    }
  };

  // Toggle Favorite
  const handleToggleFavorite = (recipeId) => {
    setFavoriteIds((prev) => {
      const next = new Set(prev);
      if (next.has(recipeId)) {
        next.delete(recipeId);
      } else {
        next.add(recipeId);
      }
      setStoredItem(LOCAL_STORAGE_KEYS.FAVORITES, Array.from(next));
      return next;
    });
  };

  // Update Meal Plan & Persist
  const handleUpdateMealPlan = async (newPlan) => {
    setMealPlan(newPlan);
    await saveMealPlan(newPlan);
  };

  // Confirm assign meal from modal
  const handleConfirmAssign = async ({ recipeId, recipeName, category, image, day, slot, servings }) => {
    const updatedPlan = {
      ...mealPlan,
      [day]: {
        ...mealPlan[day],
        [slot]: { recipeId, recipeName, category, image, servings: servings || 1 }
      }
    };
    await handleUpdateMealPlan(updatedPlan);
  };

  // Update Shopping List & Persist
  const handleUpdateShoppingList = async (newList) => {
    setShoppingList(newList);
    await saveShoppingList(newList);
  };

  // Save Student Preferences & Persist
  const handleSaveStudentPreferences = async (newPrefs) => {
    setStudentPreferences(newPrefs);
    await saveStudentPreferences(newPrefs);
  };

  // Apply Exam Week Survival Plan to the shared meal planner
  const handleApplyExamPlan = async (examPlan) => {
    await handleUpdateMealPlan(examPlan);
  };

  // Generate Shopping List from current week's planned meals
  const handleGenerateShoppingList = () => {
    const newItems = [];
    const days = Object.keys(mealPlan);

    days.forEach(day => {
      MEAL_SLOT_TYPES.forEach(slot => {
        const item = mealPlan[day]?.[slot];
        if (item) {
          const rec = recipes.find(r => r.id === item.recipeId);
          if (rec && rec.ingredients) {
            rec.ingredients.forEach(ing => {
              newItems.push({
                id: `gen-${day}-${slot}-${ing.name}-${Date.now()}-${Math.random()}`,
                name: ing.name,
                amount: ing.amount,
                unit: ing.unit,
                checked: false,
                sourceRecipe: `${rec.name} (${day} ${slot})`
              });
            });
          }
        }
      });
    });

    if (newItems.length > 0) {
      const combined = [...shoppingList, ...newItems];
      handleUpdateShoppingList(combined);
      return newItems.length;
    }
    return 0;
  };

  // Add individual recipe ingredients to grocery list
  const handleAddIngredientsToGrocery = (ingredients, recipeName) => {
    const newItems = ingredients.map(ing => ({
      id: `ing-${Date.now()}-${Math.random()}`,
      name: ing.name,
      amount: ing.amount,
      unit: ing.unit,
      checked: false,
      sourceRecipe: recipeName
    }));
    handleUpdateShoppingList([...newItems, ...shoppingList]);
  };

  // Open Recipe by ID
  const handleSelectRecipeById = (recipeId) => {
    const rec = recipes.find(r => r.id === recipeId);
    if (rec) setSelectedRecipeForDetail(rec);
  };

  // Open recipe picker for a specific planner slot
  const handleOpenRecipePicker = (day, slot) => {
    setPickerTarget({ day, slot });
  };

  const handlePickRecipeForSlot = (recipe) => {
    if (pickerTarget) {
      handleConfirmAssign({
        recipeId: recipe.id,
        recipeName: recipe.name,
        category: recipe.category,
        image: recipe.image,
        day: pickerTarget.day,
        slot: pickerTarget.slot,
        servings: recipe.servings || 1
      });
      setPickerTarget(null);
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <Layout
              offlineRecipes={offlineRecipes}
              onRemoveOfflineRecipe={(id) => handleToggleOffline({ id })}
              onSelectRecipe={setSelectedRecipeForDetail}
              onAssignMeal={setSelectedRecipeForAssign}
              favoritesCount={favoriteIds.size}
            />
          }
        >
          <Route
            path="/"
            element={
              <HomePage
                recipes={recipes}
                mealPlan={mealPlan}
                shoppingList={shoppingList}
                favoriteIds={favoriteIds}
                onToggleFavorite={handleToggleFavorite}
                offlineRecipeIds={offlineRecipeIds}
                onToggleOffline={handleToggleOffline}
                onSelectRecipe={setSelectedRecipeForDetail}
                onAssignMeal={setSelectedRecipeForAssign}
                studentPreferences={studentPreferences}
              />
            }
          />

          <Route
            path="/planner"
            element={
              <MealPlannerPage
                mealPlan={mealPlan}
                recipes={recipes}
                onUpdateMealPlan={handleUpdateMealPlan}
                onGenerateShoppingList={handleGenerateShoppingList}
                onSelectRecipeById={handleSelectRecipeById}
                onOpenRecipePicker={handleOpenRecipePicker}
              />
            }
          />

          <Route
            path="/grocery"
            element={
              <GroceryPage
                shoppingList={shoppingList}
                onUpdateShoppingList={handleUpdateShoppingList}
              />
            }
          />

          <Route
            path="/health"
            element={
              <HealthPage
                recipes={recipes}
                onSelectRecipeById={handleSelectRecipeById}
                onAssignMeal={setSelectedRecipeForAssign}
              />
            }
          />

          <Route
            path="/student"
            element={
              <StudentPage
                recipes={recipes}
                mealPlan={mealPlan}
                shoppingList={shoppingList}
                favoriteIds={favoriteIds}
                onToggleFavorite={handleToggleFavorite}
                offlineRecipeIds={offlineRecipeIds}
                studentPreferences={studentPreferences}
                onSaveStudentPreferences={handleSaveStudentPreferences}
                onApplyExamPlan={handleApplyExamPlan}
                onToggleOffline={handleToggleOffline}
                onSelectRecipe={setSelectedRecipeForDetail}
                onAssignMeal={setSelectedRecipeForAssign}
              />
            }
          />
        </Route>
      </Routes>

      {/* Global Recipe Detail Modal */}
      {selectedRecipeForDetail && (
        <RecipeDetailModal
          recipe={selectedRecipeForDetail}
          onClose={() => setSelectedRecipeForDetail(null)}
          isFavorite={favoriteIds.has(selectedRecipeForDetail.id)}
          onToggleFavorite={handleToggleFavorite}
          isOfflineSaved={offlineRecipeIds.has(selectedRecipeForDetail.id)}
          onToggleOffline={handleToggleOffline}
          onAssignMeal={(rec) => {
            setSelectedRecipeForDetail(null);
            setSelectedRecipeForAssign(rec);
          }}
          onAddIngredientsToGrocery={handleAddIngredientsToGrocery}
        />
      )}

      {/* Global Assign Meal Modal */}
      {selectedRecipeForAssign && (
        <AssignMealModal
          recipe={selectedRecipeForAssign}
          onClose={() => setSelectedRecipeForAssign(null)}
          onConfirmAssign={handleConfirmAssign}
        />
      )}

      {/* Slot Recipe Picker Modal */}
      {pickerTarget && (() => {
        const filteredForSlot = recipes.filter((r) => {
          // Category / Tag filter
          if (pickerCategoryFilter === 'Nigerian Classics') {
            const isNigerian = r.dietaryTags?.includes('Nigerian Classic') || 
                               r.name.toLowerCase().includes('nigerian') || 
                               r.name.toLowerCase().includes('egusi') ||
                               r.name.toLowerCase().includes('efo') ||
                               r.name.toLowerCase().includes('moi moi') ||
                               r.name.toLowerCase().includes('ofada') ||
                               r.name.toLowerCase().includes('okro') ||
                               r.name.toLowerCase().includes('yam') ||
                               r.name.toLowerCase().includes('boli') ||
                               r.name.toLowerCase().includes('zobo') ||
                               r.name.toLowerCase().includes('kunu') ||
                               r.name.toLowerCase().includes('chapman') ||
                               r.name.toLowerCase().includes('jollof') ||
                               r.name.toLowerCase().includes('beans porridge') ||
                               r.name.toLowerCase().includes('asaro');
            if (!isNigerian) return false;
          } else if (pickerCategoryFilter === 'Swallow & Soups') {
            const isSwallow = r.dietaryTags?.includes('Swallow & Soups') || 
                              r.name.toLowerCase().includes('soup') || 
                              r.name.toLowerCase().includes('swallow') ||
                              r.name.toLowerCase().includes('egusi') ||
                              r.name.toLowerCase().includes('efo') ||
                              r.name.toLowerCase().includes('okro');
            if (!isSwallow) return false;
          } else if (pickerCategoryFilter === 'Weight Loss') {
            const isWL = r.dietaryTags?.includes('Weight Loss') || r.weightFriendly;
            if (!isWL) return false;
          } else if (pickerCategoryFilter === 'Weight Gain') {
            const isWG = r.dietaryTags?.includes('Weight Gain') || r.dietaryTags?.includes('High Calorie');
            if (!isWG) return false;
          } else if (pickerCategoryFilter === 'Diabetes Care') {
            const isDB = r.dietaryTags?.includes('Diabetes') || r.dietaryTags?.includes('Low Glycemic');
            if (!isDB) return false;
          } else if (pickerCategoryFilter === 'Liver Care') {
            const isLP = r.dietaryTags?.includes('Liver Care') || r.dietaryTags?.includes('Liver Friendly');
            if (!isLP) return false;
          } else if (pickerCategoryFilter === 'Heart Health') {
            const isHT = r.dietaryTags?.includes('Heart Health') || r.dietaryTags?.includes('Low Sodium');
            if (!isHT) return false;
          } else if (pickerCategoryFilter === 'Ulcer Care') {
            const isGT = r.dietaryTags?.includes('Ulcer Friendly') || r.dietaryTags?.includes('Gut Healing');
            if (!isGT) return false;
          } else if (pickerCategoryFilter !== 'All') {
            if (r.category !== pickerCategoryFilter) return false;
          }

          // Search term
          if (pickerSearch.trim()) {
            const q = pickerSearch.toLowerCase().trim();
            const matchName = r.name.toLowerCase().includes(q);
            const matchDesc = r.description?.toLowerCase().includes(q);
            const matchTags = r.dietaryTags?.some(t => t.toLowerCase().includes(q));
            if (!matchName && !matchDesc && !matchTags) return false;
          }

          return true;
        });

        return (
          <div
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(47, 33, 26, 0.6)',
              backdropFilter: 'blur(5px)',
              zIndex: 1100,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '16px'
            }}
            onClick={() => {
              setPickerTarget(null);
              setPickerSearch('');
              setPickerCategoryFilter('All');
            }}
          >
            <div
              style={{
                background: '#FAF5EF',
                borderRadius: '24px',
                maxWidth: '620px',
                width: '100%',
                maxHeight: '85vh',
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
                boxShadow: '0 24px 48px -12px rgba(47, 33, 26, 0.25)',
                border: '1px solid #E8DDD3'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div
                style={{
                  padding: '18px 24px 14px',
                  borderBottom: '1px solid #E8DDD3',
                  background: '#FFFFFF'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                  <div>
                    <h3 style={{ margin: 0, fontSize: '1.25rem', color: '#49352D', fontWeight: 800, fontFamily: "'Playfair Display', serif" }}>
                      Choose Meal for {pickerTarget.day}
                    </h3>
                    <span style={{ fontSize: '0.82rem', color: '#786C65' }}>
                      Slot: <strong style={{ color: '#C66B4E' }}>{pickerTarget.slot}</strong> • Pick any recipe or authentic Nigerian dish
                    </span>
                  </div>
                  <button
                    onClick={() => {
                      setPickerTarget(null);
                      setPickerSearch('');
                      setPickerCategoryFilter('All');
                    }}
                    style={{ 
                      background: '#FAF5EF', 
                      border: '1px solid #E8DDD3', 
                      borderRadius: '50%',
                      width: '32px',
                      height: '32px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer', 
                      color: '#786C65',
                      fontWeight: 700
                    }}
                    aria-label="Close modal"
                  >
                    ✕
                  </button>
                </div>

                {/* Search Bar */}
                <div style={{ position: 'relative', marginBottom: '10px' }}>
                  <input
                    type="text"
                    value={pickerSearch}
                    onChange={(e) => setPickerSearch(e.target.value)}
                    placeholder="Search Nigerian dishes, soups, drinks, fruits..."
                    style={{
                      width: '100%',
                      padding: '9px 14px',
                      borderRadius: '9999px',
                      border: '1px solid #E8DDD3',
                      background: '#FAF5EF',
                      fontSize: '0.88rem',
                      color: '#332A26',
                      outline: 'none',
                      boxSizing: 'border-box'
                    }}
                  />
                  {pickerSearch && (
                    <button
                      onClick={() => setPickerSearch('')}
                      style={{
                        position: 'absolute',
                        right: '12px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        background: 'transparent',
                        border: 'none',
                        cursor: 'pointer',
                        color: '#786C65',
                        fontSize: '0.8rem'
                      }}
                    >
                      Clear
                    </button>
                  )}
                </div>

                {/* Filter Tabs */}
                <div style={{ display: 'flex', gap: '6px', overflowX: 'auto', paddingBottom: '4px' }}>
                  {[
                    'All',
                    'Nigerian Classics',
                    'Swallow & Soups',
                    'Weight Loss',
                    'Weight Gain',
                    'Diabetes Care',
                    'Liver Care',
                    'Heart Health',
                    'Ulcer Care',
                    pickerTarget.slot,
                    'Juices & Smoothies',
                    'Fruits & Light Bites'
                  ].filter((v, i, a) => a.indexOf(v) === i).map((filterName) => (
                    <button
                      key={filterName}
                      onClick={() => setPickerCategoryFilter(filterName)}
                      style={{
                        padding: '5px 12px',
                        borderRadius: '9999px',
                        fontSize: '0.78rem',
                        fontWeight: 700,
                        border: '1px solid',
                        borderColor: pickerCategoryFilter === filterName ? '#C66B4E' : '#E8DDD3',
                        background: pickerCategoryFilter === filterName ? '#C66B4E' : '#FAF5EF',
                        color: pickerCategoryFilter === filterName ? '#FFFFFF' : '#49352D',
                        cursor: 'pointer',
                        whiteSpace: 'nowrap',
                        transition: 'all 0.2s'
                      }}
                    >
                      {filterName}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Recipe List */}
              <div style={{ padding: '16px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '10px', flex: 1 }}>
                {filteredForSlot.length === 0 ? (
                  <div style={{ textAlign: 'center', padding: '32px 16px', color: '#786C65' }}>
                    <p style={{ margin: '0 0 6px', fontWeight: 700, color: '#49352D' }}>No recipes match your filter.</p>
                    <span style={{ fontSize: '0.82rem' }}>Try clearing your search or switching to "All" or "Nigerian Classics".</span>
                  </div>
                ) : (
                  filteredForSlot.map((r) => (
                    <div
                      key={r.id}
                      style={{
                        background: '#FFFFFF',
                        border: '1px solid #E8DDD3',
                        borderRadius: '14px',
                        padding: '12px 14px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                        boxShadow: '0 2px 6px rgba(0,0,0,0.02)'
                      }}
                      onClick={() => {
                        handlePickRecipeForSlot(r);
                        setPickerSearch('');
                        setPickerCategoryFilter('All');
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flex: 1, minWidth: 0 }}>
                        <img
                          src={r.image || '/offline-fallback.svg'}
                          alt={r.name}
                          style={{ width: '54px', height: '54px', borderRadius: '12px', objectFit: 'cover', flexShrink: 0 }}
                          onError={(e) => { e.target.src = '/offline-fallback.svg'; }}
                        />
                        <div style={{ minWidth: 0, paddingRight: '8px' }}>
                          <strong style={{ 
                            fontSize: '0.94rem', 
                            color: '#49352D', 
                            display: 'block',
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis' 
                          }}>
                            {r.name}
                          </strong>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '3px', flexWrap: 'wrap' }}>
                            <span style={{ fontSize: '0.76rem', color: '#786C65' }}>
                              {r.category} • {r.calories || 350} kcal
                            </span>
                            {r.dietaryTags?.includes('Nigerian Classic') && (
                              <span style={{ 
                                fontSize: '0.7rem', 
                                background: '#E8D5C4', 
                                color: '#49352D', 
                                padding: '1px 6px', 
                                borderRadius: '4px',
                                fontWeight: 700 
                              }}>
                                🇳🇬 Nigerian
                              </span>
                            )}
                            {r.dietaryTags?.includes('Weight Loss') && (
                              <span style={{ 
                                fontSize: '0.7rem', 
                                background: '#C66B4E', 
                                color: '#FFFFFF', 
                                padding: '1px 6px', 
                                borderRadius: '4px',
                                fontWeight: 700 
                              }}>
                                Weight Loss
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                      <button
                        style={{
                          background: '#C66B4E',
                          color: '#FFFFFF',
                          border: 'none',
                          padding: '8px 18px',
                          borderRadius: '9999px',
                          fontSize: '0.82rem',
                          fontWeight: 700,
                          cursor: 'pointer',
                          flexShrink: 0
                        }}
                      >
                        Select
                      </button>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        );
      })()}
    </BrowserRouter>
  );
}
