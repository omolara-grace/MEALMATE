import { idbGet, idbGetAll, idbSet, idbDelete, STORES } from './indexedDB';

const LOCAL_STORAGE_KEYS = {
  PREFERENCES: 'mealmate_user_preferences',
  STUDENT_PREFERENCES: 'mealmate_student_preferences',
  FAVORITES: 'mealmate_favorites',
  THEME: 'mealmate_theme',
  DISMISSED_INSTALL: 'mealmate_install_dismissed_time'
};

// --- LocalStorage helpers for small UI preferences ---
export function getStoredItem(key, fallback = null) {
  try {
    const val = localStorage.getItem(key);
    return val !== null ? JSON.parse(val) : fallback;
  } catch (e) {
    return fallback;
  }
}

export function setStoredItem(key, val) {
  try {
    localStorage.setItem(key, JSON.stringify(val));
    return true;
  } catch (e) {
    return false;
  }
}

// --- Offline Recipe Saving & Image Caching ---
export async function saveRecipeForOffline(recipe) {
  try {
    let cachedImageUrl = recipe.image;

    // Try fetching the image to store as a local base64 data-URL so it renders reliably offline
    if (recipe.image && (recipe.image.startsWith('http') || recipe.image.startsWith('/'))) {
      try {
        const response = await fetch(recipe.image, { mode: 'cors' });
        if (response.ok) {
          const blob = await response.blob();
          cachedImageUrl = await new Promise((resolve) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result);
            reader.onerror = () => resolve(recipe.image);
            reader.readAsDataURL(blob);
          });
        }
      } catch (imgErr) {
        console.warn('Could not cache remote image offline, using fallback:', imgErr);
        cachedImageUrl = '/offline-fallback.svg';
      }
    }

    const offlineRecord = {
      ...recipe,
      savedOfflineAt: new Date().toISOString(),
      offlineImage: cachedImageUrl || '/offline-fallback.svg',
      isOfflineSaved: true
    };

    await idbSet(STORES.OFFLINE_RECIPES, offlineRecord);
    return offlineRecord;
  } catch (err) {
    console.error('Error saving recipe offline:', err);
    throw err;
  }
}

export async function removeRecipeFromOffline(recipeId) {
  try {
    return await idbDelete(STORES.OFFLINE_RECIPES, recipeId);
  } catch (err) {
    console.error('Error removing offline recipe:', err);
    return false;
  }
}

export async function getOfflineRecipes() {
  try {
    return await idbGetAll(STORES.OFFLINE_RECIPES);
  } catch (err) {
    console.error('Error getting offline recipes:', err);
    return [];
  }
}

export async function isRecipeOfflineSaved(recipeId) {
  try {
    const item = await idbGet(STORES.OFFLINE_RECIPES, recipeId);
    return !!item;
  } catch (err) {
    return false;
  }
}

// --- Meal Planner Persistence ---
export async function saveMealPlan(weekPlan) {
  try {
    // Persist to indexedDB
    await idbSet(STORES.MEAL_PLANS, { id: 'current_week_plan', plan: weekPlan, updatedAt: new Date().toISOString() });
    // Also backup to localStorage
    setStoredItem('mealmate_active_meal_plan', weekPlan);
    return true;
  } catch (e) {
    console.error('Failed to save meal plan:', e);
    return false;
  }
}

export async function loadMealPlan() {
  try {
    const record = await idbGet(STORES.MEAL_PLANS, 'current_week_plan');
    if (record && record.plan) return record.plan;
    return getStoredItem('mealmate_active_meal_plan', null);
  } catch (e) {
    return getStoredItem('mealmate_active_meal_plan', null);
  }
}

// --- Shopping List Persistence ---
export async function saveShoppingList(list) {
  try {
    await idbSet(STORES.SHOPPING_LIST, { id: 'active_shopping_list', items: list, updatedAt: new Date().toISOString() });
    setStoredItem('mealmate_active_shopping_list', list);
    return true;
  } catch (e) {
    return false;
  }
}

export async function loadShoppingList() {
  try {
    const record = await idbGet(STORES.SHOPPING_LIST, 'active_shopping_list');
    if (record && record.items) return record.items;
    return getStoredItem('mealmate_active_shopping_list', []);
  } catch (e) {
    return getStoredItem('mealmate_active_shopping_list', []);
  }
}

// --- Student Preferences Persistence ---
export async function saveStudentPreferences(prefs) {
  try {
    await idbSet(STORES.STUDENT_PREFERENCES, { key: 'student_setup', ...prefs });
    setStoredItem(LOCAL_STORAGE_KEYS.STUDENT_PREFERENCES, prefs);
    return true;
  } catch (e) {
    setStoredItem(LOCAL_STORAGE_KEYS.STUDENT_PREFERENCES, prefs);
    return true;
  }
}

export async function loadStudentPreferences() {
  try {
    const record = await idbGet(STORES.STUDENT_PREFERENCES, 'student_setup');
    if (record) {
      const { key, ...rest } = record;
      return rest;
    }
    return getStoredItem(LOCAL_STORAGE_KEYS.STUDENT_PREFERENCES, null);
  } catch (e) {
    return getStoredItem(LOCAL_STORAGE_KEYS.STUDENT_PREFERENCES, null);
  }
}

export { LOCAL_STORAGE_KEYS };
