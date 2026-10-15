// Robust IndexedDB wrapper with graceful localStorage fallback

const DB_NAME = 'MealMateDB';
const DB_VERSION = 2;

const STORES = {
  OFFLINE_RECIPES: 'offline_recipes',
  MEAL_PLANS: 'meal_plans',
  SHOPPING_LIST: 'shopping_list',
  STUDENT_PREFERENCES: 'student_preferences',
  USER_RECIPES: 'user_recipes'
};

let dbPromise = null;

function isIndexedDBSupported() {
  return typeof window !== 'undefined' && 'indexedDB' in window;
}

function openDB() {
  if (!isIndexedDBSupported()) {
    return Promise.resolve(null);
  }

  if (dbPromise) return dbPromise;

  dbPromise = new Promise((resolve, reject) => {
    try {
      const request = window.indexedDB.open(DB_NAME, DB_VERSION);

      request.onupgradeneeded = (event) => {
        const db = event.target.result;
        if (!db.objectStoreNames.contains(STORES.OFFLINE_RECIPES)) {
          db.createObjectStore(STORES.OFFLINE_RECIPES, { keyPath: 'id' });
        }
        if (!db.objectStoreNames.contains(STORES.MEAL_PLANS)) {
          db.createObjectStore(STORES.MEAL_PLANS, { keyPath: 'id' });
        }
        if (!db.objectStoreNames.contains(STORES.SHOPPING_LIST)) {
          db.createObjectStore(STORES.SHOPPING_LIST, { keyPath: 'id' });
        }
        if (!db.objectStoreNames.contains(STORES.STUDENT_PREFERENCES)) {
          db.createObjectStore(STORES.STUDENT_PREFERENCES, { keyPath: 'key' });
        }
        if (!db.objectStoreNames.contains(STORES.USER_RECIPES)) {
          db.createObjectStore(STORES.USER_RECIPES, { keyPath: 'id' });
        }
      };

      request.onsuccess = () => {
        resolve(request.result);
      };

      request.onerror = (error) => {
        console.warn('IndexedDB failed to open, falling back to localStorage:', error);
        resolve(null);
      };
    } catch (err) {
      console.warn('IndexedDB initialization error:', err);
      resolve(null);
    }
  });

  return dbPromise;
}

// Fallback localStorage key mapper
function getFallbackKey(storeName, key) {
  return `mealmate_idb_${storeName}_${key}`;
}

export async function idbGet(storeName, key) {
  try {
    const db = await openDB();
    if (!db) {
      const item = localStorage.getItem(getFallbackKey(storeName, key));
      return item ? JSON.parse(item) : null;
    }

    return new Promise((resolve) => {
      try {
        const tx = db.transaction(storeName, 'readonly');
        const store = tx.objectStore(storeName);
        const req = store.get(key);
        req.onsuccess = () => resolve(req.result || null);
        req.onerror = () => {
          const item = localStorage.getItem(getFallbackKey(storeName, key));
          resolve(item ? JSON.parse(item) : null);
        };
      } catch (e) {
        const item = localStorage.getItem(getFallbackKey(storeName, key));
        resolve(item ? JSON.parse(item) : null);
      }
    });
  } catch (err) {
    console.error(`idbGet error in ${storeName}:`, err);
    return null;
  }
}

export async function idbGetAll(storeName) {
  try {
    const db = await openDB();
    if (!db) {
      const results = [];
      const prefix = `mealmate_idb_${storeName}_`;
      for (let i = 0; i < localStorage.length; i++) {
        const k = localStorage.key(i);
        if (k && k.startsWith(prefix)) {
          try {
            results.push(JSON.parse(localStorage.getItem(k)));
          } catch (e) {
            // ignore malformed
          }
        }
      }
      return results;
    }

    return new Promise((resolve) => {
      try {
        const tx = db.transaction(storeName, 'readonly');
        const store = tx.objectStore(storeName);
        const req = store.getAll();
        req.onsuccess = () => resolve(req.result || []);
        req.onerror = () => resolve([]);
      } catch (e) {
        resolve([]);
      }
    });
  } catch (err) {
    console.error(`idbGetAll error in ${storeName}:`, err);
    return [];
  }
}

export async function idbSet(storeName, record) {
  try {
    const db = await openDB();
    const key = record.id || record.key;
    // Always mirror to localStorage fallback for critical resilience
    try {
      localStorage.setItem(getFallbackKey(storeName, key), JSON.stringify(record));
    } catch (e) {
      // localStorage quota or private mode
    }

    if (!db) return record;

    return new Promise((resolve, reject) => {
      try {
        const tx = db.transaction(storeName, 'readwrite');
        const store = tx.objectStore(storeName);
        const req = store.put(record);
        req.onsuccess = () => resolve(record);
        req.onerror = (e) => reject(e);
      } catch (err) {
        resolve(record);
      }
    });
  } catch (err) {
    console.error(`idbSet error in ${storeName}:`, err);
    return record;
  }
}

export async function idbDelete(storeName, key) {
  try {
    localStorage.removeItem(getFallbackKey(storeName, key));
    const db = await openDB();
    if (!db) return true;

    return new Promise((resolve) => {
      try {
        const tx = db.transaction(storeName, 'readwrite');
        const store = tx.objectStore(storeName);
        const req = store.delete(key);
        req.onsuccess = () => resolve(true);
        req.onerror = () => resolve(false);
      } catch (e) {
        resolve(true);
      }
    });
  } catch (err) {
    console.error(`idbDelete error in ${storeName}:`, err);
    return false;
  }
}

export async function idbClear(storeName) {
  try {
    const prefix = `mealmate_idb_${storeName}_`;
    const keysToRemove = [];
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (k && k.startsWith(prefix)) keysToRemove.push(k);
    }
    keysToRemove.forEach((k) => localStorage.removeItem(k));

    const db = await openDB();
    if (!db) return true;

    return new Promise((resolve) => {
      try {
        const tx = db.transaction(storeName, 'readwrite');
        const store = tx.objectStore(storeName);
        const req = store.clear();
        req.onsuccess = () => resolve(true);
        req.onerror = () => resolve(false);
      } catch (e) {
        resolve(true);
      }
    });
  } catch (err) {
    return false;
  }
}

export { STORES };
