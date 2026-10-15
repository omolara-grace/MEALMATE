export const WEIGHT_MANAGEMENT_PROGRAMS = [
  {
    id: 'wm-weight-loss',
    title: 'Weight Loss & Calorie Deficit',
    goal: 'Safe, Sustainable Fat Loss & High Satiety',
    calorieGuideline: '1,300 – 1,600 kcal / day',
    macroRatio: '35% Lean Protein • 40% High-Fiber Carbs • 25% Healthy Fats',
    overview: 'Calibrated moderate calorie deficit that preserves lean muscle while accelerating fat oxidation through fiber-dense Nigerian vegetables, lean seafood, steamed beans, and light herbal pepper soups.',
    rules: [
      'Maintain a comfortable 400–500 kcal daily deficit without skipping meals or crash dieting.',
      'Prioritize high-satiety low-calorie density Nigerian foods: okro soup, steamed moi moi, boiled plantain, cabbage stir-fry, and garden eggs.',
      'Drink 500ml of water 15–20 minutes before meals to promote satiety and metabolic efficiency.',
      'Favor steaming, boiling, and grilling over deep-frying and excessive palm/vegetable oils.',
      'Eat dinner at least 2.5 to 3 hours before sleep and replace late-night snacking with unsweetened ginger zobo.'
    ],
    recommendedRecipeIds: [
      'rec-hl-wl-1', 'rec-hl-wl-2', 'rec-hl-wl-3', 'rec-hl-wl-4', 'rec-hl-wl-5',
      'rec-hl-wl-6', 'rec-hl-wl-7', 'rec-hl-wl-8', 'rec-hl-wl-9', 'rec-hl-wl-10',
      'rec-hl-wl-11', 'rec-hl-wl-12', 'rec-hl-wl-13', 'rec-hl-wl-14', 'rec-hl-wl-15',
      'rec-hl-wl-16', 'rec-hl-wl-17', 'rec-hl-wl-18', 'rec-hl-wl-19', 'rec-hl-wl-20',
      'rec-hl-wl-21', 'rec-hl-wl-22', 'rec-bf-ng-1', 'rec-lu-ng-4', 'rec-wl-ng-1'
    ]
  },
  {
    id: 'wm-weight-gain',
    title: 'Weight Gain & Muscle Building',
    goal: 'Clean Bulking, Muscle Growth & Calorie Surplus',
    calorieGuideline: '2,400 – 2,900 kcal / day',
    macroRatio: '30% Bioavailable Protein • 50% Nutrient-Dense Carbs • 20% Healthy Fats',
    overview: 'Healthy caloric surplus focused on whole Nigerian superfoods: rich egusi melon oils, pounded yam, beans porridge with dodo, whole mackerel titus, tiger nut milk, and energy-packed student staples.',
    rules: [
      'Consume an intentional 350–600 kcal daily surplus above maintenance to support muscular hypertrophy.',
      'Incorporate calorie-dense healthy Nigerian foods: peanut butter, roasted groundnuts, avocado, whole eggs, and kunu aya.',
      'Pair high-protein swallows (egusi, ogbono, assorted beef) with complex carbohydrates to fuel strength and endurance.',
      'Eat 4 to 5 consistent meals a day rather than 2 sparse meals to meet daily caloric targets effortlessly.',
      'Drink energy-dense whole shakes (tiger nut coconut date milk, banana peanut smoothies) between study sessions.'
    ],
    recommendedRecipeIds: [
      'rec-hl-wg-1', 'rec-hl-wg-2', 'rec-hl-wg-3', 'rec-hl-wg-4', 'rec-hl-wg-5',
      'rec-hl-wg-6', 'rec-hl-wg-7', 'rec-hl-wg-8', 'rec-hl-wg-9', 'rec-hl-wg-10',
      'rec-hl-wg-11', 'rec-hl-wg-12', 'rec-hl-wg-13', 'rec-hl-wg-14', 'rec-hl-wg-15',
      'rec-hl-wg-16', 'rec-hl-wg-17', 'rec-hl-wg-18', 'rec-hl-wg-19', 'rec-hl-wg-20',
      'rec-hl-wg-21', 'rec-hl-wg-22', 'rec-lu-ng-1', 'rec-lu-ng-3', 'rec-ap-ng-1'
    ]
  },
  {
    id: 'wm-diabetes',
    title: 'Diabetes & Blood Sugar Control',
    goal: 'Glycemic Stability & Insulin Sensitivity',
    calorieGuideline: '1,500 – 1,800 kcal / day',
    macroRatio: '30% Lean Protein • 45% Low-GI Fiber Carbs • 25% Unsaturated Fats',
    overview: 'Low-glycemic index Nigerian meal plan that avoids glucose surges, optimizes HbA1c, and enhances insulin sensitivity with unripe plantain, oat swallow, bitter leaf, local brown Ofada rice, and cinnamon.',
    rules: [
      'Choose low glycemic index starches: unripe plantain, whole oat swallow, and unpolished Ofada rice over refined white carbs.',
      'Always combine complex carbohydrates with high dietary fiber (ugwu, okro, garden eggs) and lean protein to blunt glucose spikes.',
      'Incorporate traditional bioactive foods: bitter leaf (onugbu), garlic, scent leaves (efirin), and cinnamon.',
      'Avoid sugar-sweetened drinks, sodas, and sweetened malt; replace with unsweetened ginger zobo and cucumber water.',
      'Maintain regular, predictable meal timing to prevent hypoglycemia or reactive hyperglycemia.'
    ],
    recommendedRecipeIds: [
      'rec-hl-db-1', 'rec-hl-db-2', 'rec-hl-db-3', 'rec-hl-db-4', 'rec-hl-db-5',
      'rec-hl-db-6', 'rec-hl-db-7', 'rec-hl-db-8', 'rec-hl-db-9', 'rec-hl-db-10',
      'rec-hl-db-11', 'rec-hl-db-12', 'rec-hl-db-13', 'rec-hl-db-14', 'rec-hl-db-15',
      'rec-hl-db-16', 'rec-hl-db-17', 'rec-hl-db-18', 'rec-hl-db-19', 'rec-hl-db-20',
      'rec-hl-db-21', 'rec-hl-db-22', 'rec-bf-ng-2', 'rec-lu-ng-4', 'rec-fr-ng-2'
    ]
  },
  {
    id: 'wm-liver-care',
    title: 'Liver Health & Detox Care',
    goal: 'Hepatoprotective Support & Hepatic De-fatting',
    calorieGuideline: '1,600 – 1,900 kcal / day',
    macroRatio: '30% Clean Protein • 45% Whole Antioxidant Carbs • 25% Healthy Plant Fats',
    overview: 'Hepatoprotective nutrition blueprint supporting liver detoxification (Phase I & II Cytochrome P450), hepatic steatosis reduction, and cellular glutathione regeneration with turmeric, bitter leaf, beetroot, and light clean cooking.',
    rules: [
      'Minimize heavily bleached palm oils, deep-fried foods, and trans-fats that stress hepatic lipid clearance.',
      'Incorporate cruciferous vegetables (cabbage), bitter leaf, garlic, and turmeric to stimulate natural glutathione synthesis.',
      'Rely on clean boiling, light steaming, and clear herbal broths (pepper soup spices, calabash nutmeg ehuru).',
      'Stay thoroughly hydrated with fresh beetroot-ginger juice and lemon water to encourage healthy bile excretion.',
      'Eliminate alcohol and industrial food chemicals; emphasize unprocessed local market produce.'
    ],
    recommendedRecipeIds: [
      'rec-hl-lp-1', 'rec-hl-lp-2', 'rec-hl-lp-3', 'rec-hl-lp-4', 'rec-hl-lp-5',
      'rec-hl-lp-6', 'rec-hl-lp-7', 'rec-hl-lp-8', 'rec-hl-lp-9', 'rec-hl-lp-10',
      'rec-hl-lp-11', 'rec-hl-lp-12', 'rec-hl-lp-13', 'rec-hl-lp-14', 'rec-hl-lp-15',
      'rec-hl-lp-16', 'rec-hl-lp-17', 'rec-hl-lp-18', 'rec-hl-lp-19', 'rec-hl-lp-20',
      'rec-hl-lp-21', 'rec-hl-lp-22', 'rec-dn-ng-1', 'rec-jc-ng-1', 'rec-wl-ng-2'
    ]
  },
  {
    id: 'wm-heart-health',
    title: 'Heart Health & Blood Pressure (Hypertension)',
    goal: 'Arterial Elasticity, DASH Blueprint & Low Sodium',
    calorieGuideline: '1,500 – 1,800 kcal / day',
    macroRatio: '30% Lean Marine Protein • 50% High-Potassium Carbs • 20% Unsaturated Fats',
    overview: 'Low-sodium, high-potassium Nigerian DASH nutritional framework designed to lower systolic and diastolic blood pressure, reduce arterial stiffness, and support long-term cardiovascular health.',
    rules: [
      'Strictly minimize high-sodium seasoning cubes and salted dried fish; flavor foods with scent leaves, ginger, garlic, and uda seeds.',
      'Emphasize high-potassium Nigerian staples: sweet potatoes, plantains, beans, and fresh pawpaw to counterbalance sodium.',
      'Eat oceanic oily fish (Titus mackerel, salmon) 3–4 times weekly for cardioprotective omega-3 fatty acids (EPA/DHA).',
      'Drink unsweetened hibiscus zobo tea daily, scientifically shown to support healthy arterial vasodilation.',
      'Prioritize whole grains and soluble oat fibers to help naturally bind and clear LDL cholesterol particles.'
    ],
    recommendedRecipeIds: [
      'rec-hl-ht-1', 'rec-hl-ht-2', 'rec-hl-ht-3', 'rec-hl-ht-4', 'rec-hl-ht-5',
      'rec-hl-ht-6', 'rec-hl-ht-7', 'rec-hl-ht-8', 'rec-hl-ht-9', 'rec-hl-ht-10',
      'rec-hl-ht-11', 'rec-hl-ht-12', 'rec-hl-ht-13', 'rec-hl-ht-14', 'rec-hl-ht-15',
      'rec-hl-ht-16', 'rec-hl-ht-17', 'rec-hl-ht-18', 'rec-hl-ht-19', 'rec-hl-ht-20',
      'rec-hl-ht-21', 'rec-hl-ht-22', 'rec-lu-3', 'rec-jc-ng-4', 'rec-fr-1'
    ]
  },
  {
    id: 'wm-ulcer-gut',
    title: 'Ulcer & Sensitive Stomach Care',
    goal: 'Gastric Mucosal Healing, Bland Nutrition & Acid Relief',
    calorieGuideline: '1,600 – 1,900 kcal / day',
    macroRatio: '25% Gentle Protein • 55% Soothing Alkaline Carbs • 20% Mild Fats',
    overview: 'Non-irritating, soothing Nigerian culinary blueprint crafted for individuals with peptic ulcers, gastritis, or GERD. Eliminates stinging chili peppers, excess citrus acid, and deep frying while coating the stomach lining.',
    rules: [
      'Strictly avoid hot scotch bonnet (ata rodo), raw black pepper, and excessive vinegar that irritate stomach lesions.',
      'Emphasize mucilage-rich and soothing alkaline foods: fresh okro soup, boiled ripe plantains, sweet potato mash, and custard.',
      'Eat small, frequent meals rather than large heavy dinners to avoid excess gastric acid accumulation.',
      'Incorporate traditional fermented probiotic foods like smooth pap (ogi) and tiger nut milk (kunu aya) to restore gut barrier.',
      'Never skip morning breakfast; finish dinner at least 3 hours before resting to prevent nighttime acid reflux.'
    ],
    recommendedRecipeIds: [
      'rec-hl-gt-1', 'rec-hl-gt-2', 'rec-hl-gt-3', 'rec-hl-gt-4', 'rec-hl-gt-5',
      'rec-hl-gt-6', 'rec-hl-gt-7', 'rec-hl-gt-8', 'rec-hl-gt-9', 'rec-hl-gt-10',
      'rec-hl-gt-11', 'rec-hl-gt-12', 'rec-hl-gt-13', 'rec-hl-gt-14', 'rec-hl-gt-15',
      'rec-hl-gt-16', 'rec-hl-gt-17', 'rec-hl-gt-18', 'rec-hl-gt-19', 'rec-hl-gt-20',
      'rec-hl-gt-21', 'rec-hl-gt-22', 'rec-bf-2', 'rec-lu-ng-4', 'rec-ds-ng-1'
    ]
  }
];

export const HEALTH_PLANS = [
  {
    id: 'hp-balanced',
    title: 'Artisan Balanced Plate',
    subtitle: 'Everyday energy and culinary wellness',
    targetAudience: 'Everyone seeking consistent, wholesome nutrition',
    overview: 'Emphasizes equal portions of nutrient-dense carbohydrates, lean proteins, colorful vegetables, and essential fats to maintain steady blood glucose.',
    tips: [
      'Fill half your plate with colorful vegetables and raw salads.',
      'Aim for 2–2.5 liters of clean water spread evenly across the day.',
      'Incorporate a plant-based pulse (beans, lentils) at least 3 times a week.'
    ],
    recommendedRecipes: ['rec-bf-1', 'rec-lu-1', 'rec-lu-3']
  },
  {
    id: 'hp-study-stamina',
    title: 'Student Cognitive Stamina',
    subtitle: 'Designed for focus & sustained study endurance',
    targetAudience: 'University & college students managing intense exam prep and lectures',
    overview: 'Focuses on iron-rich leafy greens, choline from eggs, and omega-3 fatty acids to help combat afternoon sluggishness during prolonged study blocks.',
    tips: [
      'Never skip breakfast before a 3-hour exam; complex carbs keep working memory steady.',
      'Keep a water bottle on your study desk; mild dehydration degrades concentration.',
      'Replace high-sugar energy drinks with whole fruits, roasted nuts, or herbal tea.'
    ],
    recommendedRecipes: ['rec-bf-1', 'rec-bf-2', 'rec-sn-1', 'rec-dn-1']
  }
];

export const DAILY_HYDRATION_TIPS = [
  'Drinking a glass of water right after waking up helps jumpstart alertness.',
  'Studying in air-conditioned libraries increases water loss through breathing.',
  'If your urine is dark yellow, drink two large glasses of water over the next hour.',
  'Balance every cup of coffee with a refreshing glass of water to maintain cellular hydration.'
];
