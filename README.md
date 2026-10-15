# MealMate - PWA & Student Nutrition Meal Planner

MealMate is an installable Progressive Web App (PWA) built with React, Vite, and Workbox, featuring a dedicated **Student Mode** designed for practical, affordable, and balanced eating for university and college students.

---

## 🌟 Highlights

### Part A: Progressive Web App (PWA)
1. **Valid Web App Manifest (`manifest.webmanifest`)**:
   - Application Name: **MealMate**
   - Short Name: **MealMate**
   - Display: `standalone`
   - Theme Color: `#2D5A37` (signature forest green)
   - Background Color: `#FAF8F5` (warm cream)
   - Icons: 192x192, 512x512, and 512x512 maskable icons in `/public`.
2. **Service Worker with Workbox**:
   - Automatic pre-caching of application shell, navigation assets, styles, and offline fallbacks.
   - Stale-while-revalidate for static resources and Cache-first for public recipe imagery.
   - Respects user privacy: personal meal plans and health data are stored locally and never dumped in shared public caches.
3. **Smart Installation Experience**:
   - Non-intrusive prompt banner appearing when installation is available.
   - Automatic detection of standalone mode to hide prompts for already-installed users.
   - Platform instructions modal with guided steps for iOS Safari, Android, and Desktop browsers.
4. **Offline Persistence (IndexedDB + localStorage)**:
   - Built on a structured IndexedDB abstraction (`src/utils/indexedDB.js`) with localStorage backup.
   - Allows viewing, adding, and modifying **Weekly Meal Plans** and **Shopping Lists** completely offline.
   - "Save for Offline" feature on all recipe cards with local base64/blob image caching and `/offline-fallback.svg` support.
   - Real-time `OfflineBanner` notifying users when connectivity is lost.
5. **Responsible Update Handling**:
   - `UpdateNotification` listens for new service worker releases without abruptly refreshing while a student is actively planning meals.

---

### Part B: Student Mode ("Fuel Your Day")
1. **Dedicated Student Landing Page (`/student`)**:
   - Heading: **"Fuel Your Day."**
   - Description: *"Find practical meals for busy days, long lectures, and study sessions."*
2. **Interactive Feature Cards**:
   - 🧠 **Brain & Focus**: Nutrient-dense meals rich in choline, omega-3, iron, and complex carbs (Eggs with whole-wheat, oats with fruit & peanut butter, beans and plantain, mackerel with rice & slaw). Includes an educational *"Why This Meal?"* panel in plain English without medical hype.
   - ⚡ **Energy & Alertness**: Fast breakfasts, between-lecture lunches, and snacks categorized by prep time (<15m, 15–30m, 30–60m, >60m) with hydration tips.
   - 💰 **Student Budget Meals**: Transparent, editable price estimates in Nigerian Naira (₦) with one-pot meals, low-cost proteins, batch cooking, and safe leftover reheating rules.
   - ⏱️ **Quick Meals Between Lectures**: High-speed, low-cleanup meals ready under 10 minutes.
   - 🏠 **Hostel Kitchen Mode**: Filter by real dorm facilities (No cooking equipment, Electric kettle, Single hot plate, Shared kitchen, Fully equipped) with fridge-free food storage safety guidance.
   - 🎓 **Exam Week Survival Mode**: High-efficiency setup configuring exam duration, max cooking time, and dietary constraints, auto-populating the existing weekly planner with nourishing, low-stress meals.
3. **Integrated Student Setup Form**:
   - Configurable budget, available facilities, prep time limits, dietary preferences, and allergen exclusions.
4. **Shared Weekly Meal Planner & Shopping List**:
   - One unified system for standard recipes and student meals.
   - Single-click grocery list generation that aggregates all ingredients across planned meals.

---

## 📁 Project Structure

```
MEALMATE/
├── public/
│   ├── favicon.svg
│   ├── icon.svg
│   ├── pwa-192x192.png
│   ├── pwa-512x512.png
│   ├── maskable-icon-512x512.png
│   ├── apple-touch-icon.png
│   └── offline-fallback.svg
├── src/
│   ├── components/
│   │   ├── AssignMealModal.jsx
│   │   ├── ExamWeekModal.jsx
│   │   ├── Footer.jsx & Footer.css
│   │   ├── InstallPrompt.jsx & InstallPrompt.css
│   │   ├── Navbar.jsx & Navbar.css
│   │   ├── OfflineBanner.jsx & OfflineBanner.css
│   │   ├── RecipeCard.jsx & RecipeCard.css
│   │   ├── RecipeDetailModal.jsx & RecipeDetailModal.css
│   │   ├── ServingsControl.jsx
│   │   ├── StudentPreferencesModal.jsx
│   │   └── UpdateNotification.jsx
│   ├── data/
│   │   ├── defaultRecipes.js
│   │   └── healthPlans.js
│   ├── hooks/
│   │   ├── useLocalStorage.js
│   │   └── useOnlineStatus.js
│   ├── Layout/
│   │   ├── Layout.jsx & Layout.css
│   │   └── index.js
│   ├── pages/
│   │   ├── HomePage.jsx & HomePage.css
│   │   ├── MealPlannerPage.jsx & MealPlannerPage.css
│   │   ├── GroceryPage.jsx & GroceryPage.css
│   │   ├── HealthPage.jsx & HealthPage.css
│   │   └── StudentPage.jsx & StudentPage.css
│   ├── utils/
│   │   ├── indexedDB.js
│   │   ├── storage.js
│   │   └── formatters.js
│   ├── App.jsx
│   ├── global.css
│   └── main.jsx
├── index.html
├── vite.config.js
└── package.json
```

---

## 🚀 Running the Project

In `C:\Users\Lara\Desktop\MEALMATE`:

```bash
# Start Vite development server
npm run dev

# Build production bundle with PWA assets
npm run build

# Preview production build locally
npm run preview
```
