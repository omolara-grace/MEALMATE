export const DEFAULT_RECIPES = [
  // 1. Student & Quick Breakfast: Quick Indomie Noodles with Egg & Veggies
  {
    id: 'rec-bf-1',
    name: 'Spiced Stir-Fry Indomie Noodles with Fried Egg & Chopped Veggies',
    category: 'Breakfast',
    servings: 1,
    preparationTime: 3,
    cookingTime: 7,
    estimatedCostPerServing: 550,
    costCurrency: 'NGN',
    calories: 380,
    protein: '14g',
    carbs: '52g',
    fat: '13g',
    fiber: '4g',
    studentFriendly: true,
    studentCategories: ['Quick Meals Between Lectures', 'Student Budget Meals', 'Hostel Kitchen'],
    weightFriendly: false,
    weightGoal: 'Quick Student Fuel',
    equipmentRequired: ['Electric kettle', 'Single hot plate'],
    storageRequirements: 'Eat fresh within minutes of cooking; hostel favorite.',
    image: '/meals/indomie.jpg',
    description: 'Classic Nigerian university dorm staple: two packs of noodles stir-fried with diced scotch bonnet, onions, sweet carrots, and a sunny-side fried egg.',
    whyThisMeal: 'The quintessential Nigerian student meal. Fast, affordable, and requiring only a single hot plate or electric kettle to whip up between 8 AM lectures.',
    dietaryTags: ['Nigerian Classic', 'Student Favorite', 'Quick Prep'],
    allergens: ['Gluten', 'Eggs'],
    nutritionalInfo: {
      calories: 380,
      protein: '14g',
      carbs: '52g',
      fat: '13g',
      fiber: '4g',
      keyNutrients: 'Choline, Vitamin A, Iron, Carbohydrates'
    },
    ingredients: [
      { name: 'Instant Noodles (Indomie / Hungryman)', amount: 2, unit: 'packets' },
      { name: 'Farm Egg', amount: 1, unit: 'large' },
      { name: 'Ata Rodo (Scotch Bonnet) & Small Onion', amount: 1, unit: 'diced' },
      { name: 'Vegetable Oil', amount: 1, unit: 'tsp' },
      { name: 'Chopped Carrots / Green Peas', amount: 2, unit: 'tbsp' }
    ],
    instructions: [
      'Boil 1 cup of water on hot plate or kettle; drop noodles with seasoning sachet and diced veggies for 3 minutes.',
      'Heat 1 tsp oil in a pan, quickly fry egg sunny-side up or scramble directly into noodles.',
      'Toss together until slightly dry and fragrant, plate, and eat piping hot before leaving for class.'
    ]
  },

  // 2. Student & Quick Breakfast: Golden Custard with Akara or Milk
  {
    id: 'rec-bf-2',
    name: 'Creamy Golden Vanilla Custard with Liquid Milk & Sugar',
    category: 'Breakfast',
    servings: 1,
    preparationTime: 2,
    cookingTime: 4,
    estimatedCostPerServing: 450,
    costCurrency: 'NGN',
    calories: 290,
    protein: '7g',
    carbs: '56g',
    fat: '4g',
    fiber: '1g',
    studentFriendly: true,
    studentCategories: ['Quick Meals Between Lectures', 'Student Budget Meals', 'Hostel Kitchen'],
    weightFriendly: true,
    weightGoal: 'Light Morning Energy',
    equipmentRequired: ['Electric kettle'],
    storageRequirements: 'Custard powder keeps indefinitely in hostel cupboard.',
    image: '/meals/custard.jpg',
    description: 'Silky, steaming vanilla custard whisked with freshly boiled kettle water and crowned with creamy evaporated milk.',
    whyThisMeal: 'Can be prepared in 4 minutes using only an electric kettle in any hostel room, giving instant clean energy for morning exams.',
    dietaryTags: ['Nigerian Classic', 'Quick Prep', 'Vegetarian'],
    allergens: ['Dairy'],
    nutritionalInfo: {
      calories: 290,
      protein: '7g',
      carbs: '56g',
      fat: '4g',
      fiber: '1g',
      keyNutrients: 'Calcium, Vitamin D, Fast Energy'
    },
    ingredients: [
      { name: 'Custard Powder (Vanilla / Banana)', amount: 3, unit: 'tbsp' },
      { name: 'Boiling Kettle Water', amount: 1.5, unit: 'cups' },
      { name: 'Evaporated Liquid Milk (Peak / Dano)', amount: 3, unit: 'tbsp' },
      { name: 'Sugar or Honey', amount: 1.5, unit: 'tsp' }
    ],
    instructions: [
      'Dissolve custard powder and sugar in a small splash of cold water in a bowl until smooth.',
      'Pour bubbling boiling water from your electric kettle continuously while stirring vigorously until it thickens into a rich satin gloss.',
      'Swirl in creamy evaporated milk and enjoy warm.'
    ]
  },

  // 3. Nigerian Breakfast: Fresh Akara Bean Fritters with Warm Spiced Pap (Ogi)
  {
    id: 'rec-bf-3',
    name: 'Crispy Akara Bean Cakes with Silky Millet Pap (Ogi)',
    category: 'Breakfast',
    servings: 2,
    preparationTime: 12,
    cookingTime: 12,
    estimatedCostPerServing: 650,
    costCurrency: 'NGN',
    calories: 410,
    protein: '18g',
    carbs: '60g',
    fat: '11g',
    fiber: '8g',
    studentFriendly: true,
    studentCategories: ['Student Budget Meals', 'Hostel Kitchen'],
    weightFriendly: false,
    weightGoal: 'Traditional Comfort',
    equipmentRequired: ['Single hot plate', 'Shared kitchen', 'Fully equipped kitchen'],
    storageRequirements: 'Akara is best consumed fresh; raw bean paste can be refrigerated for 24 hours.',
    image: '/meals/akara-pap.jpg',
    description: 'Golden-fried black-eyed bean fritters whipped with sweet onions and habanero, paired with warm spiced millet pap.',
    whyThisMeal: 'Black-eyed beans are a potassium- and folate-dense pulse delivering complete plant proteins that promote muscular satiety without midday lethargy.',
    dietaryTags: ['Nigerian Classic', 'High-Protein', 'Vegetarian', 'Gluten-Free'],
    allergens: ['Legumes'],
    nutritionalInfo: {
      calories: 410,
      protein: '18g',
      carbs: '60g',
      fat: '11g',
      fiber: '8g',
      keyNutrients: 'Plant Iron, Potassium, Folate, Soluble Fiber'
    },
    ingredients: [
      { name: 'Soaked Black-Eyed Beans (Peeled)', amount: 1, unit: 'cup' },
      { name: 'Habanero / Ata Rodo', amount: 1, unit: 'minced' },
      { name: 'Red Onion', amount: 0.5, unit: 'chopped' },
      { name: 'Sea Salt', amount: 0.75, unit: 'tsp' },
      { name: 'Vegetable Oil for Shallow Frying', amount: 0.5, unit: 'cup' },
      { name: 'Ogi / Millet Pap Paste', amount: 3, unit: 'tbsp' }
    ],
    instructions: [
      'Blend beans with onion and pepper using minimal water into a smooth, airy batter.',
      'Vigorously whisk batter with a wooden spoon for 5 minutes to incorporate tiny air bubbles.',
      'Drop spoonfuls into medium-hot oil and fry until golden-crisp on both sides.',
      'Dissolve pap in cool water, then flood with rolling boiling water from your kettle while stirring vigorously.'
    ]
  },

  // 4. Nigerian Student Breakfast: Agege Bread & Scrambled Egg with Sardine
  {
    id: 'rec-bf-4',
    name: 'Soft Agege Bread with Peppered Sardine Scrambled Eggs',
    category: 'Breakfast',
    servings: 1,
    preparationTime: 4,
    cookingTime: 6,
    estimatedCostPerServing: 800,
    costCurrency: 'NGN',
    calories: 460,
    protein: '26g',
    carbs: '48g',
    fat: '18g',
    fiber: '3g',
    studentFriendly: true,
    studentCategories: ['Quick Meals Between Lectures', 'Brain & Focus', 'Student Budget Meals'],
    weightFriendly: false,
    weightGoal: 'High-Protein Student Power',
    equipmentRequired: ['Single hot plate'],
    storageRequirements: 'Eat warm right after making.',
    image: '/meals/bread-sardine-toast.jpg',
    description: 'Thick soft Agege bread sandwich stuffed with fluffy eggs scrambled with spiced Titus sardines, fresh onions, and pepper.',
    whyThisMeal: 'A legendary Nigerian campus breakfast. Canned sardine is affordable, shelf-stable, and loaded with omega-3 fatty acids that fuel brain neurons for classes.',
    dietaryTags: ['Nigerian Classic', 'High-Protein', 'Student Favorite'],
    allergens: ['Fish', 'Eggs', 'Gluten'],
    nutritionalInfo: {
      calories: 460,
      protein: '26g',
      carbs: '48g',
      fat: '18g',
      fiber: '3g',
      keyNutrients: 'Omega-3 (EPA/DHA), Choline, Vitamin D, Protein'
    },
    ingredients: [
      { name: 'Soft Agege Bread', amount: 1, unit: 'loaf or thick wedge' },
      { name: 'Farm Eggs', amount: 2, unit: 'large' },
      { name: 'Canned Sardine in Oil (Titus / Queen of the Coast)', amount: 0.5, unit: 'can' },
      { name: 'Chopped Onion & Scotch Bonnet (Ata Rodo)', amount: 2, unit: 'tbsp' },
      { name: 'Salt & Seasoning Pinch', amount: 1, unit: 'pinch' }
    ],
    instructions: [
      'Whisk eggs in a cup with flaked sardine, chopped onions, pepper, and seasoning.',
      'Warm sardine oil in frying pan on hot plate and pour in egg mixture.',
      'Scramble gently for 2–3 minutes until soft and fluffy.',
      'Slit fresh Agege bread open, stuff with hot savory scrambled egg, and serve.'
    ]
  },

  // 5. Nigerian Student Lunch: One-Pot Student Jollof Spaghetti
  {
    id: 'rec-lu-1',
    name: 'One-Pot Campus Jollof Spaghetti with Boiled Egg',
    category: 'Lunch',
    servings: 2,
    preparationTime: 5,
    cookingTime: 18,
    estimatedCostPerServing: 750,
    costCurrency: 'NGN',
    calories: 480,
    protein: '19g',
    carbs: '74g',
    fat: '12g',
    fiber: '4g',
    studentFriendly: true,
    studentCategories: ['Quick Meals Between Lectures', 'Student Budget Meals', 'Hostel Kitchen'],
    weightFriendly: false,
    weightGoal: 'Fast Energy Refuel',
    equipmentRequired: ['Single hot plate', 'Shared kitchen'],
    storageRequirements: 'Keeps in plastic bowl for 24 hours in hostel room.',
    image: '/meals/jollof-rice.jpg',
    description: 'Fast, budget-friendly one-pot jollof spaghetti cooked in spicy tomato puree, onions, curry, thyme, and topped with boiled egg.',
    whyThisMeal: 'Every Nigerian student’s go-to lunch. Cooked in a single pot in under 20 minutes with zero complex prep or expensive ingredients.',
    dietaryTags: ['Nigerian Classic', 'Student Favorite', 'One-Pot', 'Quick Prep'],
    allergens: ['Gluten', 'Eggs'],
    nutritionalInfo: {
      calories: 480,
      protein: '19g',
      carbs: '74g',
      fat: '12g',
      fiber: '4g',
      keyNutrients: 'Complex Carbs, Vitamin B, Iron, Choline'
    },
    ingredients: [
      { name: 'Spaghetti Pasta', amount: 250, unit: 'grams' },
      { name: 'Tomato Paste Sachet (Gino / Sonia)', amount: 1, unit: 'sachet' },
      { name: 'Chopped Onion & Scotch Bonnet (Ata Rodo)', amount: 2, unit: 'tbsp' },
      { name: 'Vegetable Oil', amount: 1.5, unit: 'tbsp' },
      { name: 'Curry Powder, Thyme & Seasoning Cube', amount: 1, unit: 'tsp' },
      { name: 'Boiled Egg', amount: 1, unit: 'large' }
    ],
    instructions: [
      'Snap spaghetti in halves; parboil in water for 5 minutes, rinse, and drain.',
      'Heat oil in pot, fry chopped onions and tomato paste with curry, thyme, and seasoning for 3 minutes.',
      'Add 1 cup of water, bring to rolling boil, and dump parboiled spaghetti into the sauce.',
      'Cover pot tightly and allow pasta to absorb savory red broth for 8 minutes until dry. Top with boiled egg.'
    ]
  },

  // 6. Nigerian Lunch: Slow-Simmered Beans Porridge & Golden Dodo
  {
    id: 'rec-lu-2',
    name: 'Slow-Simmered Beans Porridge & Golden Dodo',
    category: 'Lunch',
    servings: 2,
    preparationTime: 10,
    cookingTime: 35,
    estimatedCostPerServing: 900,
    costCurrency: 'NGN',
    calories: 510,
    protein: '23g',
    carbs: '80g',
    fat: '13g',
    fiber: '15g',
    studentFriendly: true,
    studentCategories: ['Brain & Focus', 'Student Budget Meals', 'Hostel Kitchen'],
    weightFriendly: true,
    weightGoal: 'Satiety & Gut Health',
    equipmentRequired: ['Single hot plate', 'Shared kitchen', 'Fully equipped kitchen'],
    storageRequirements: 'Store in airtight containers; reheats excellently on hot plate with a splash of water.',
    image: '/meals/stewed-beans-plantains.jpg',
    description: 'Tender brown honey beans stewed in savory palm oil broth, caramelized sweet plantains, and ground crayfish.',
    whyThisMeal: 'The pairing of beans and sweet plantain delivers slow-release starches, high dietary fiber, and plant iron, preventing energy slumps.',
    dietaryTags: ['Nigerian Classic', 'High-Fiber', 'Traditional', 'Nutrient-Dense'],
    allergens: ['Legumes', 'Crayfish (optional)'],
    nutritionalInfo: {
      calories: 510,
      protein: '23g',
      carbs: '80g',
      fat: '13g',
      fiber: '15g',
      keyNutrients: 'Iron, Potassium, Vitamin B6, Magnesium'
    },
    ingredients: [
      { name: 'Honey or Brown Beans', amount: 1.5, unit: 'cups' },
      { name: 'Red Palm Oil', amount: 2, unit: 'tbsp' },
      { name: 'Sweet Ripe Plantain', amount: 1, unit: 'sliced' },
      { name: 'Chopped Onions & Pepper Puree', amount: 1, unit: 'cup' },
      { name: 'Smoked Fish or Crayfish', amount: 2, unit: 'tbsp' },
      { name: 'Seasoning Cube & Salt', amount: 1, unit: 'to taste' }
    ],
    instructions: [
      'Rinse beans and simmer until tender and creamy.',
      'Stir in aromatics, palm oil, flaked smoked fish, and seasonings; gently mash a few beans to build a rich gravy.',
      'Pan-sear plantain discs in shallow oil until sweet and caramelized.',
      'Spoon rich beans onto a shallow dish alongside hot plantain discs.'
    ]
  },

  // 7. Nigerian Student Lunch: Quick White Rice with Peppered Fried Fish Stew
  {
    id: 'rec-lu-3',
    name: 'Steamed White Rice with Quick Peppered Titus Fish Stew',
    category: 'Lunch',
    servings: 2,
    preparationTime: 10,
    cookingTime: 22,
    estimatedCostPerServing: 1100,
    costCurrency: 'NGN',
    calories: 470,
    protein: '31g',
    carbs: '65g',
    fat: '10g',
    fiber: '4g',
    studentFriendly: true,
    studentCategories: ['Brain & Focus', 'Energy & Alertness', 'Student Budget Meals'],
    weightFriendly: true,
    weightGoal: 'Lean Muscle & Brain Fuel',
    equipmentRequired: ['Single hot plate', 'Shared kitchen'],
    storageRequirements: 'Stew stores in hostel for 2 days; rice cooked in small batches.',
    image: '/meals/white-rice-fish-stew.jpg',
    description: 'Fluffy white rice crowned with quick spicy Nigerian tomato-pepper stew and pan-fried titus (mackerel) fish steak.',
    whyThisMeal: 'A cornerstone Nigerian weekly meal. Quick to batch-cook in dorms, offering high-protein marine omega-3 to boost mental sharpness.',
    dietaryTags: ['Nigerian Classic', 'High-Protein', 'Omega-3 Rich'],
    allergens: ['Fish'],
    nutritionalInfo: {
      calories: 470,
      protein: '31g',
      carbs: '65g',
      fat: '10g',
      fiber: '4g',
      keyNutrients: 'Omega-3 (DHA/EPA), Vitamin B12, Iron, Zinc'
    },
    ingredients: [
      { name: 'White Rice (Parboiled)', amount: 1.5, unit: 'cups' },
      { name: 'Titus Fish (Mackerel) Steak', amount: 2, unit: 'steaks' },
      { name: 'Blended Tomato, Tatashe & Rodo Blend', amount: 1, unit: 'cup' },
      { name: 'Vegetable Oil', amount: 1.5, unit: 'tbsp' },
      { name: 'Curry, Thyme, Onion & Seasoning', amount: 1, unit: 'tbsp' }
    ],
    instructions: [
      'Boil washed rice in salted water on hot plate for 18 minutes until tender and fluffy; drain.',
      'Season fish with curry, thyme, salt; pan-sear in hot oil for 4 minutes each side until browned.',
      'Sauté chopped onions and blended pepper in same pan until oil surfaces.',
      'Toss fish back into sauce, simmer for 3 minutes, and serve generously over warm white rice.'
    ]
  },

  // 8. Nigerian Student Dinner: Quick Boiled Sweet Potato with Peppered Egg Sauce
  {
    id: 'rec-dn-1',
    name: 'Boiled Sweet Potatoes with Quick Spiced Tomato Egg Sauce',
    category: 'Dinner',
    servings: 1,
    preparationTime: 5,
    cookingTime: 12,
    estimatedCostPerServing: 650,
    costCurrency: 'NGN',
    calories: 360,
    protein: '16g',
    carbs: '54g',
    fat: '9g',
    fiber: '6g',
    studentFriendly: true,
    studentCategories: ['Quick Meals Between Lectures', 'Student Budget Meals', 'Hostel Kitchen'],
    weightFriendly: true,
    weightGoal: 'Weight Loss & Calorie Deficit',
    equipmentRequired: ['Single hot plate'],
    storageRequirements: 'Eat freshly made in 15 minutes.',
    image: '/meals/sweet-potato-egg-sauce.jpg',
    description: 'Tender sweet potato batons served with a quick spicy egg sauce scrambled with onions, fresh tomatoes, and ata rodo.',
    whyThisMeal: 'Ultra fast hostel dinner taking only 12 minutes on a single hot plate. Sweet potato has a low glycemic index and pairs with lean egg protein.',
    dietaryTags: ['Nigerian Classic', 'Weight Loss', 'Quick Prep', 'Student Favorite'],
    allergens: ['Eggs'],
    nutritionalInfo: {
      calories: 360,
      protein: '16g',
      carbs: '54g',
      fat: '9g',
      fiber: '6g',
      keyNutrients: 'Beta-Carotene, Choline, Vitamin C, Potassium'
    },
    ingredients: [
      { name: 'Sweet Potatoes (Peeled & Sliced)', amount: 2, unit: 'medium' },
      { name: 'Eggs', amount: 2, unit: 'large' },
      { name: 'Diced Fresh Tomatoes & Onion', amount: 0.5, unit: 'cup' },
      { name: 'Ata Rodo (Scotch Bonnet)', amount: 1, unit: 'minced' },
      { name: 'Vegetable Oil', amount: 1, unit: 'tbsp' },
      { name: 'Pinch of Salt & Seasoning', amount: 1, unit: 'pinch' }
    ],
    instructions: [
      'Peel and slice sweet potatoes into rounds; boil in water with pinch of salt for 10 minutes until tender.',
      'Heat oil in small frying pan, sauté onions, tomatoes, and scotch bonnet for 2 minutes.',
      'Crack in eggs, allow to set slightly, then scramble gently into a juicy sauce.',
      'Serve spicy egg sauce over steaming sweet potato batons.'
    ]
  },

  // 9. Nigerian Dinner: Yam Pottage (Asaro) with Smoked Fish Flakes
  {
    id: 'rec-dn-2',
    name: 'Vegetable Yam Porridge (Asaro) with Smoked Fish Flakes',
    category: 'Dinner',
    servings: 2,
    preparationTime: 10,
    cookingTime: 25,
    estimatedCostPerServing: 950,
    costCurrency: 'NGN',
    calories: 420,
    protein: '15g',
    carbs: '74g',
    fat: '10g',
    fiber: '8g',
    studentFriendly: true,
    studentCategories: ['Student Budget Meals', 'Hostel Kitchen'],
    weightFriendly: true,
    weightGoal: 'Hearty Whole-Food',
    equipmentRequired: ['Single hot plate', 'Shared kitchen', 'Fully equipped kitchen'],
    storageRequirements: 'Reheats easily with 2 tablespoons of water in a small covered pot.',
    image: '/meals/asaro-elepo.jpg',
    description: 'Creamy simmered white puna yam chunks bathed in sweet bell pepper, palm oil, dried fish, and fluted pumpkin leaves.',
    whyThisMeal: 'Comforting, grounding dinner with easily digestible starches and micronutrients like iron and beta-carotene from ugwu greens.',
    dietaryTags: ['Nigerian Classic', 'Traditional', 'Gluten-Free', 'One-Pot'],
    allergens: ['Fish'],
    nutritionalInfo: {
      calories: 420,
      protein: '15g',
      carbs: '74g',
      fat: '10g',
      fiber: '8g',
      keyNutrients: 'Vitamin A, Potassium, Dietary Fiber'
    },
    ingredients: [
      { name: 'White Puna Yam', amount: 500, unit: 'g (cubed)' },
      { name: 'Blended Bell Pepper & Chili', amount: 0.5, unit: 'cup' },
      { name: 'Red Palm Oil', amount: 2, unit: 'tbsp' },
      { name: 'Shredded Ugwu (Pumpkin Greens)', amount: 1.5, unit: 'cups' },
      { name: 'Smoked Catfish / Crayfish', amount: 0.5, unit: 'cup' },
      { name: 'Water & Seasoning', amount: 2, unit: 'cups' }
    ],
    instructions: [
      'Peel and cube yam chunks; rinse and boil in 2 cups of seasoned water for 15 minutes.',
      'Add blended pepper, palm oil, and flaked smoked fish; gently mash a few yam pieces to enrich the sauce.',
      'Fold in fresh ugwu greens during the last 2 minutes, turn off heat, and let steam through.'
    ]
  },

  // 10. Nigerian Student Snack: Soaked Garri with Chilled Water, Groundnuts & Milk
  {
    id: 'rec-sn-1',
    name: 'Iced Soaked Ijebu Garri with Crunchy Roasted Groundnuts & Evaporated Milk',
    category: 'Snacks',
    servings: 1,
    preparationTime: 2,
    cookingTime: 0,
    estimatedCostPerServing: 350,
    costCurrency: 'NGN',
    calories: 280,
    protein: '8g',
    carbs: '48g',
    fat: '6g',
    fiber: '3g',
    studentFriendly: true,
    studentCategories: ['Quick Meals Between Lectures', 'Student Budget Meals', 'Hostel Kitchen'],
    weightFriendly: true,
    weightGoal: 'Quick Refreshment',
    equipmentRequired: ['No cooking equipment'],
    storageRequirements: 'Store garri and groundnuts in dry tins in hostel cupboard.',
    image: '/meals/garri.jpg',
    description: 'Crisp sour Ijebu garri soaked in ice-cold spring water with crunchy roasted groundnuts, evaporated milk, and a sprinkle of sugar.',
    whyThisMeal: 'The legendary Nigerian student lifesaver. Zero cooking equipment, prepared in 2 minutes flat on hot afternoons between classes.',
    dietaryTags: ['Nigerian Classic', 'No-Cook', 'Student Favorite', 'Instant Snack'],
    allergens: ['Peanuts', 'Dairy'],
    nutritionalInfo: {
      calories: 280,
      protein: '8g',
      carbs: '48g',
      fat: '6g',
      fiber: '3g',
      keyNutrients: 'Calcium, Quick Carbohydrates, Magnesium'
    },
    ingredients: [
      { name: 'Ijebu Garri (Crisp Cassava Flakes)', amount: 0.5, unit: 'cup' },
      { name: 'Roasted Golden Groundnuts (Peanuts)', amount: 2, unit: 'tbsp' },
      { name: 'Chilled Water & Ice Cubes', amount: 1, unit: 'cup' },
      { name: 'Evaporated Liquid Milk', amount: 2, unit: 'tbsp' },
      { name: 'Sugar', amount: 1, unit: 'tsp' }
    ],
    instructions: [
      'Pour garri into a cereal bowl; float cold water over and quickly decant floating chaff.',
      'Add fresh chilled water and ice cubes until submerged.',
      'Scatter roasted crunchy groundnuts, swirl in liquid milk and a spoon of sugar, and enjoy immediately.'
    ]
  },

  // 11. Nigerian Juices & Drinks: Fresh Zobo with Ginger & Pineapple
  {
    id: 'rec-jc-1',
    name: 'Chilled Hibiscus Zobo Infusion with Crushed Ginger & Pineapple',
    category: 'Juices & Smoothies',
    servings: 3,
    preparationTime: 8,
    cookingTime: 15,
    estimatedCostPerServing: 350,
    costCurrency: 'NGN',
    calories: 55,
    protein: '1g',
    carbs: '12g',
    fat: '0g',
    fiber: '1g',
    studentFriendly: true,
    studentCategories: ['Energy & Alertness', 'Quick Meals Between Lectures'],
    weightFriendly: true,
    weightGoal: 'Weight Loss & Calorie Deficit',
    equipmentRequired: ['Electric kettle', 'Single hot plate'],
    storageRequirements: 'Bottle and keep in hostel cooler or fridge for up to 5 days.',
    image: '/meals/zobo-drink.jpg',
    description: 'Deep crimson chilled Nigerian hibiscus tea brewed with real ginger root, cloves, and fresh sweet pineapple peel juice.',
    whyThisMeal: 'Natural electrolyte and antioxidant powerhouse without artificial sugar or chemicals, perfect for hostel hydration during heatwaves.',
    dietaryTags: ['Nigerian Classic', 'Weight Loss', 'Immunity Boost', 'Antioxidant Rich'],
    allergens: [],
    nutritionalInfo: {
      calories: 55,
      protein: '1g',
      carbs: '12g',
      fat: '0g',
      fiber: '1g',
      keyNutrients: 'Anthocyanins, Vitamin C, Gingerol, Potassium'
    },
    ingredients: [
      { name: 'Zobo Leaves (Dried Hibiscus Petals)', amount: 1.5, unit: 'cups' },
      { name: 'Crushed Fresh Ginger Root', amount: 2, unit: 'tbsp' },
      { name: 'Cloves (Konofuru)', amount: 0.5, unit: 'tsp' },
      { name: 'Pineapple Peels & Juice', amount: 1, unit: 'cup' },
      { name: 'Drinking Water', amount: 4, unit: 'cups' }
    ],
    instructions: [
      'Rinse zobo petals quickly in cold water to remove dust.',
      'Boil with ginger, cloves, and pineapple peels for 15 minutes on hot plate or in kettle.',
      'Strain through a fine sieve or clean handkerchief; cool and chill over ice cubes.'
    ]
  },

  // 12. Nigerian Fruits: Pawpaw, Watermelon & Roasted Groundnuts
  {
    id: 'rec-fr-1',
    name: 'Fresh Pawpaw & Crimson Watermelon Slices with Roasted Groundnuts',
    category: 'Fruits & Light Bites',
    servings: 1,
    preparationTime: 3,
    cookingTime: 0,
    estimatedCostPerServing: 400,
    costCurrency: 'NGN',
    calories: 160,
    protein: '5g',
    carbs: '26g',
    fat: '5g',
    fiber: '4g',
    studentFriendly: true,
    studentCategories: ['Quick Meals Between Lectures', 'Hostel Kitchen'],
    weightFriendly: true,
    weightGoal: 'Weight Loss & Calorie Deficit',
    equipmentRequired: ['No cooking equipment'],
    storageRequirements: 'Slice fresh from market fruits; eat immediately.',
    image: '/meals/papaya-watermelon-combo.jpg',
    description: 'Sweet golden pawpaw wedges, juicy crisp watermelon cubes, and roasted market groundnuts.',
    whyThisMeal: 'Ultra hydrating, high in digestive papain and lycopene, giving students clean natural sweetness without junk food crashes.',
    dietaryTags: ['Nigerian Classic', 'Weight Loss', 'No-Cook', 'Raw Clean'],
    allergens: ['Peanuts'],
    nutritionalInfo: {
      calories: 160,
      protein: '5g',
      carbs: '26g',
      fat: '5g',
      fiber: '4g',
      keyNutrients: 'Papain, Lycopene, Vitamin C, Vitamin A'
    },
    ingredients: [
      { name: 'Fresh Pawpaw (Papaya) Slices', amount: 1, unit: 'cup' },
      { name: 'Watermelon Cubes', amount: 1, unit: 'cup' },
      { name: 'Roasted Groundnuts', amount: 2, unit: 'tbsp' }
    ],
    instructions: [
      'Slice cold watermelon and ripe pawpaw into bite-sized wedges.',
      'Toss into bowl and scatter crunchy roasted groundnuts on top. Enjoy immediately.'
    ]
  },

  // 13. Nigerian Desserts / Sweet Treats: Sweet Fried Puff Puff
  {
    id: 'rec-ds-1',
    name: 'Golden Spiced Puff Puff Balls with Nutmeg',
    category: 'Desserts',
    servings: 3,
    preparationTime: 10,
    cookingTime: 12,
    estimatedCostPerServing: 450,
    costCurrency: 'NGN',
    calories: 220,
    protein: '4g',
    carbs: '38g',
    fat: '6g',
    fiber: '2g',
    studentFriendly: true,
    studentCategories: ['Student Budget Meals'],
    weightFriendly: false,
    weightGoal: 'Student Sweet Treat',
    equipmentRequired: ['Single hot plate', 'Shared kitchen'],
    storageRequirements: 'Best eaten warm; keeps for 2 days in paper bag.',
    image: '/meals/puffpuff.jpg',
    description: 'Fluffy, pillowy golden yeast dough balls spiced with grated nutmeg and sweet sugar, fried until crisp on the outside.',
    whyThisMeal: 'The most popular Nigerian street sweet. Inexpensive flour, yeast, and sugar turn into delightful warm treats for study groups.',
    dietaryTags: ['Nigerian Classic', 'Vegetarian', 'Campus Favorite'],
    allergens: ['Gluten'],
    nutritionalInfo: {
      calories: 220,
      protein: '4g',
      carbs: '38g',
      fat: '6g',
      fiber: '2g',
      keyNutrients: 'Nutmeg Myristicin, Energy'
    },
    ingredients: [
      { name: 'All-Purpose Flour', amount: 1.5, unit: 'cups' },
      { name: 'Warm Water', amount: 1, unit: 'cup' },
      { name: 'Active Dry Yeast', amount: 1, unit: 'tsp' },
      { name: 'Sugar', amount: 3, unit: 'tbsp' },
      { name: 'Grated Nutmeg & Pinch of Salt', amount: 0.5, unit: 'tsp' },
      { name: 'Vegetable Oil for Frying', amount: 1, unit: 'cup' }
    ],
    instructions: [
      'Dissolve yeast and sugar in warm water; mix with flour, nutmeg, and salt into a smooth stretchy batter.',
      'Cover with kitchen towel for 30 minutes until batter rises and froths with air bubbles.',
      'Scoop balls with your fingers into medium-hot oil; fry for 3–4 minutes turning continuously until golden brown and fluffy.',
      'Drain on paper towels and serve warm.'
    ]
  },

  /* ========================================================
     AUTHENTIC NIGERIAN CLASSICS, SWALLOW, DRINKS & FRUITS
     ======================================================== */

  // 1. Nigerian Breakfast: Steamed Moi Moi with Custard/Pap
  {
    id: 'rec-bf-ng-1',
    name: 'Steamed Moi Moi Elewe with Flaked Titus & Egg',
    category: 'Breakfast',
    servings: 2,
    preparationTime: 15,
    cookingTime: 35,
    estimatedCostPerServing: 1100,
    costCurrency: 'NGN',
    calories: 320,
    protein: '24g',
    carbs: '38g',
    fat: '8g',
    fiber: '9g',
    studentFriendly: true,
    studentCategories: ['Brain & Focus', 'Student Budget Meals', 'Hostel Kitchen'],
    weightFriendly: true,
    weightGoal: 'Weight Loss & Calorie Deficit',
    equipmentRequired: ['Single hot plate', 'Shared kitchen', 'Fully equipped kitchen'],
    storageRequirements: 'Steamed leaf wraps keep up to 3 days refrigerated or 1 day at room temp.',
    image: '/meals/moimoi.jpg',
    description: 'Protein-packed steamed bean pudding wrapped in banana leaves, infused with peppers, flaked titus fish, and boiled egg slices.',
    whyThisMeal: 'Steamed with zero deep-frying, offering lean plant and marine protein with steady-burning complex carbs ideal for fat loss and cognitive energy.',
    dietaryTags: ['Nigerian Classic', 'Weight Loss', 'High-Protein', 'High-Fiber'],
    allergens: ['Fish', 'Egg', 'Legumes'],
    nutritionalInfo: {
      calories: 320,
      protein: '24g',
      carbs: '38g',
      fat: '8g',
      fiber: '9g',
      keyNutrients: 'Plant Iron, Omega-3, Choline, Folate'
    },
    ingredients: [
      { name: 'Peeled Black-Eyed Beans / Honey Beans', amount: 1.5, unit: 'cups' },
      { name: 'Red Bell Peppers (Tatashe) & Scotch Bonnet (Ata Rodo)', amount: 3, unit: 'whole' },
      { name: 'Red Onions', amount: 1, unit: 'medium' },
      { name: 'Smoked Titus / Mackerel Flakes', amount: 0.5, unit: 'cup' },
      { name: 'Boiled Egg Slices', amount: 1, unit: 'large egg' },
      { name: 'Crayfish Powder & Seasoning', amount: 1, unit: 'tbsp' },
      { name: 'Vegetable Oil', amount: 1.5, unit: 'tbsp' }
    ],
    instructions: [
      'Blend soaked peeled beans smoothly with tatashe, ata rodo, and onions using minimal warm water.',
      'Whisk batter with crayfish, salt, seasoning cube, and a touch of vegetable oil until fluffy.',
      'Fold flaked fish and sliced egg into mixture and wrap tightly in uma leaves or heat-safe pouches.',
      'Steam in a covered pot with an inch of boiling water for 35 minutes until completely firm and set.'
    ]
  },

  // 2. Nigerian Breakfast: Boiled Yam & Garden Egg Spiced Stew
  {
    id: 'rec-bf-ng-2',
    name: 'Boiled White Yam with Garden Egg & Smoked Fish Stew',
    category: 'Breakfast',
    servings: 2,
    preparationTime: 10,
    cookingTime: 20,
    estimatedCostPerServing: 950,
    costCurrency: 'NGN',
    calories: 380,
    protein: '17g',
    carbs: '65g',
    fat: '7g',
    fiber: '8g',
    studentFriendly: true,
    studentCategories: ['Student Budget Meals', 'Hostel Kitchen'],
    weightFriendly: true,
    weightGoal: 'Weight Loss & Calorie Deficit',
    equipmentRequired: ['Single hot plate', 'Shared kitchen'],
    storageRequirements: 'Yam is best eaten warm; garden egg stew keeps in sealed container for 2 days.',
    image: '/meals/boiled-yam-garden-egg.jpg',
    description: 'Tender boiled yam batons served with a light, fragrant crushed garden egg sauce simmered with smoked panla fish.',
    whyThisMeal: 'Garden egg (eggplant) is exceptionally low in calories and packed with chlorogenic acid, an antioxidant that slows glucose absorption.',
    dietaryTags: ['Nigerian Classic', 'Weight Loss', 'High-Fiber'],
    allergens: ['Fish'],
    nutritionalInfo: {
      calories: 380,
      protein: '17g',
      carbs: '65g',
      fat: '7g',
      fiber: '8g',
      keyNutrients: 'Potassium, Anthocyanins, Vitamin B6, Dietary Fiber'
    },
    ingredients: [
      { name: 'White Puna Yam Batons', amount: 350, unit: 'grams' },
      { name: 'Fresh Garden Eggs (Eggplants)', amount: 5, unit: 'medium' },
      { name: 'Ata Rodo (Scotch Bonnet) & Onions', amount: 2, unit: 'crushed' },
      { name: 'Deboned Smoked Panla Fish', amount: 0.5, unit: 'cup' },
      { name: 'Palm Oil or Olive Oil', amount: 1, unit: 'tbsp' },
      { name: 'Crayfish & Sea Salt', amount: 1, unit: 'tsp' }
    ],
    instructions: [
      'Boil yam batons in salted water until fork-tender (approx. 15 minutes).',
      'Boil garden eggs in separate water until soft, peel skins, and roughly crush in a mortar or bowl.',
      'Warm oil lightly in skillet, sauté onions and ata rodo, then stir in crushed garden eggs, smoked fish, and crayfish.',
      'Simmer on low for 5 minutes and serve over steaming hot yam slices.'
    ]
  },

  // 3. Nigerian Lunch / Swallow: Rich Egusi Soup with Spinach & Oat Swallow
  {
    id: 'rec-lu-ng-1',
    name: 'Rich Egusi Soup with Fluted Pumpkin & Oat Swallow',
    category: 'Lunch',
    servings: 2,
    preparationTime: 15,
    cookingTime: 30,
    estimatedCostPerServing: 1450,
    costCurrency: 'NGN',
    calories: 490,
    protein: '31g',
    carbs: '48g',
    fat: '18g',
    fiber: '11g',
    studentFriendly: true,
    studentCategories: ['Student Budget Meals', 'Hostel Kitchen'],
    weightFriendly: true,
    weightGoal: 'Metabolic Balance & Satiety',
    equipmentRequired: ['Single hot plate', 'Shared kitchen', 'Fully equipped kitchen'],
    storageRequirements: 'Egusi soup freezes for up to 2 weeks or stays fresh in fridge for 4 days.',
    image: '/meals/egusi-soup.jpg',
    description: 'Ground melon seed stew simmered with rich aromatics, tender lean beef, stockfish, and fresh greens, served alongside high-fiber oat swallow.',
    whyThisMeal: 'Pairing traditional Egusi with Oat Swallow instead of heavy starch cuts glycemic index in half while packing 11g of satiating prebiotic fiber.',
    dietaryTags: ['Nigerian Classic', 'Swallow & Soups', 'High-Protein', 'High-Fiber'],
    allergens: ['Fish', 'Melon Seeds'],
    nutritionalInfo: {
      calories: 490,
      protein: '31g',
      carbs: '48g',
      fat: '18g',
      fiber: '11g',
      keyNutrients: 'Zinc, Vitamin E, Magnesium, Beta-Glucan, Iron'
    },
    ingredients: [
      { name: 'Ground Melon Seeds (Egusi)', amount: 0.75, unit: 'cup' },
      { name: 'Lean Beef Cuts or Shaki', amount: 200, unit: 'grams' },
      { name: 'Deboned Stockfish / Dry Fish', amount: 0.5, unit: 'cup' },
      { name: 'Ugwu (Pumpkin Leaves) or Spinach', amount: 2, unit: 'cups chopped' },
      { name: 'Palm Oil', amount: 1.5, unit: 'tbsp' },
      { name: 'Blended Pepper & Onion Mix', amount: 0.75, unit: 'cup' },
      { name: 'Rolled Oats (Milled for Swallow)', amount: 1, unit: 'cup' }
    ],
    instructions: [
      'Boil meat and stockfish with onions and seasonings until tender, retaining the rich savory broth.',
      'Mix ground egusi with a few spoons of warm broth into a thick paste with small balls.',
      'Fry pepper blend lightly in palm oil, drop egusi balls into the sauce, cover, and let curdle into distinct lumps.',
      'Pour in meat and broth, simmer for 15 minutes, then fold in fresh ugwu leaves for 2 minutes.',
      'Whisk oat flour into boiling water continuously until stretchy, smooth swallow forms, and serve together.'
    ]
  },

  // 4. Nigerian Lunch / Swallow: Authentic Efo Riro with Titus Fish
  {
    id: 'rec-lu-ng-2',
    name: 'Yoruba-Style Efo Riro (Rich Spinach Stew) with Titus Fish',
    category: 'Lunch',
    servings: 2,
    preparationTime: 12,
    cookingTime: 25,
    estimatedCostPerServing: 1350,
    costCurrency: 'NGN',
    calories: 410,
    protein: '34g',
    carbs: '22g',
    fat: '14g',
    fiber: '8g',
    studentFriendly: true,
    studentCategories: ['Brain & Focus', 'Energy & Alertness'],
    weightFriendly: true,
    weightGoal: 'Weight Loss & Calorie Deficit',
    equipmentRequired: ['Single hot plate', 'Shared kitchen', 'Fully equipped kitchen'],
    storageRequirements: 'Store in airtight bowl; can be reheated in pan with 1 tbsp water.',
    image: '/meals/efo-riro.jpg',
    description: 'Vibrant shredded spinach leaves flash-stewed in coarse pepper sauce, iru (fermented locust beans), crayfish, and broiled titus fish.',
    whyThisMeal: 'Remarkably nutrient dense with under 25g carbs, offering rich lutein, magnesium, and marine omega-3 that nourish the brain and support fat loss.',
    dietaryTags: ['Nigerian Classic', 'Weight Loss', 'Low-Carb', 'Omega-3 Rich'],
    allergens: ['Fish', 'Locust Beans'],
    nutritionalInfo: {
      calories: 410,
      protein: '34g',
      carbs: '22g',
      fat: '14g',
      fiber: '8g',
      keyNutrients: 'Iron, Vitamin A, Vitamin K, Omega-3 (EPA/DHA), Probiotics'
    },
    ingredients: [
      { name: 'Fresh Shoko or Spinach Greens (Blanched & Squeezed)', amount: 3, unit: 'cups' },
      { name: 'Broiled Titus (Mackerel) Fillet', amount: 250, unit: 'grams' },
      { name: 'Coarsely Blended Tatashe & Rodo', amount: 1, unit: 'cup' },
      { name: 'Fermented Locust Beans (Iru)', amount: 1.5, unit: 'tbsp' },
      { name: 'Ground Crayfish', amount: 2, unit: 'tbsp' },
      { name: 'Palm Oil', amount: 1.5, unit: 'tbsp' }
    ],
    instructions: [
      'Heat palm oil lightly, bloom locust beans (iru) and diced onions until fragrant.',
      'Add coarse pepper blend and fry down until moisture evaporates and aromatic oil rises.',
      'Fold in broiled titus pieces, crayfish, and seasoning cube; gently stir to coat fish.',
      'Add blanched and squeezed greens; toss vigorously on high heat for 2 minutes so greens stay bright and crisp.'
    ]
  },

  // 5. Nigerian Lunch: Ofada Rice with Spiced Ayamase Designer Stew
  {
    id: 'rec-lu-ng-3',
    name: 'Artisan Ofada Rice with Ayamase Designer Sauce & Boiled Egg',
    category: 'Lunch',
    servings: 2,
    preparationTime: 15,
    cookingTime: 35,
    estimatedCostPerServing: 1600,
    costCurrency: 'NGN',
    calories: 520,
    protein: '28g',
    carbs: '68g',
    fat: '16g',
    fiber: '6g',
    studentFriendly: true,
    studentCategories: ['Student Budget Meals', 'Hostel Kitchen'],
    weightFriendly: false,
    weightGoal: 'Traditional Comfort',
    equipmentRequired: ['Single hot plate', 'Shared kitchen', 'Fully equipped kitchen'],
    storageRequirements: 'Ofada sauce keeps up to 5 days refrigerated; rice is best warm.',
    image: '/meals/ofada-rice.jpg',
    description: 'Aromatic unpolished short-grain Ofada brown rice served on banana leaves with green habanero Ayamase sauce, tender diced beef, and boiled egg.',
    whyThisMeal: 'Unpolished Ofada rice preserves the bran layer and germ, supplying high B vitamins, manganese, and insoluble fiber that avoids energy dips.',
    dietaryTags: ['Nigerian Classic', 'Whole Grain', 'High-Protein'],
    allergens: ['Egg'],
    nutritionalInfo: {
      calories: 520,
      protein: '28g',
      carbs: '68g',
      fat: '16g',
      fiber: '6g',
      keyNutrients: 'Manganese, Selenium, Vitamin B1, Choline'
    },
    ingredients: [
      { name: 'Ofada Local Brown Rice', amount: 1.5, unit: 'cups' },
      { name: 'Coarsely Blended Green Bell Peppers & Scotch Bonnet', amount: 1.5, unit: 'cups' },
      { name: 'Bleached Palm Oil', amount: 2, unit: 'tbsp' },
      { name: 'Iru (Fermented Locust Beans)', amount: 2, unit: 'tbsp' },
      { name: 'Diced Lean Beef / Assorted Meats', amount: 150, unit: 'grams' },
      { name: 'Boiled Egg', amount: 1, unit: 'large' }
    ],
    instructions: [
      'Wash Ofada rice thoroughly to remove husk debris; boil with salted water for 25 minutes until tender.',
      'Boil coarsely blended green peppers until water reduces completely.',
      'In a pot, heat bleached palm oil, sauté chopped red onions and iru until aromatic.',
      'Add reduced green pepper blend, meat bites, crayfish, and seasonings; simmer until sauce thickens and oil floats.',
      'Ladle piping hot sauce with hard-boiled egg over fragrant Ofada rice.'
    ]
  },

  // 6. Nigerian Lunch: Fresh Okro Seafood Stew with Oat Swallow (Weight Loss Champion)
  {
    id: 'rec-lu-ng-4',
    name: 'Fresh Crunch Okro Seafood Stew with Oat Swallow',
    category: 'Lunch',
    servings: 2,
    preparationTime: 10,
    cookingTime: 18,
    estimatedCostPerServing: 1250,
    costCurrency: 'NGN',
    calories: 340,
    protein: '32g',
    carbs: '36g',
    fat: '7g',
    fiber: '12g',
    studentFriendly: true,
    studentCategories: ['Brain & Focus', 'Student Budget Meals'],
    weightFriendly: true,
    weightGoal: 'Weight Loss & Calorie Deficit',
    equipmentRequired: ['Single hot plate', 'Shared kitchen'],
    storageRequirements: 'Best eaten fresh to maintain okra viscosity; keeps 2 days chilled.',
    image: '/meals/okro-soup.jpg',
    description: 'Crisp diced fresh okro pods simmered in savory crayfish broth with jumbo prawns, white fish cubes, and fluted pumpkin greens.',
    whyThisMeal: 'Okro is loaded with soluble mucilage fiber that delays gastric emptying and controls calorie absorption. Incredible 12g fiber with only 340 kcal.',
    dietaryTags: ['Nigerian Classic', 'Swallow & Soups', 'Weight Loss', 'High-Fiber'],
    allergens: ['Fish', 'Crustaceans'],
    nutritionalInfo: {
      calories: 340,
      protein: '32g',
      carbs: '36g',
      fat: '7g',
      fiber: '12g',
      keyNutrients: 'Soluble Mucilage, Vitamin C, Calcium, Iodine, Lean Protein'
    },
    ingredients: [
      { name: 'Fresh Diced Okro Pods', amount: 2, unit: 'cups' },
      { name: 'Fresh Jumbo Prawns or Shrimps', amount: 150, unit: 'grams' },
      { name: 'Fresh White Fish or Catfish Cubes', amount: 150, unit: 'grams' },
      { name: 'Ground Crayfish', amount: 2, unit: 'tbsp' },
      { name: 'Ata Rodo (Scotch Bonnet)', amount: 2, unit: 'minced' },
      { name: 'Shredded Ugwu Leaves', amount: 1, unit: 'cup' },
      { name: 'Oat Flour (for Swallow)', amount: 0.75, unit: 'cup' }
    ],
    instructions: [
      'Poach fish cubes and prawns gently in seasoned water with minced ata rodo and crayfish for 6 minutes.',
      'Add finely diced fresh okro pods to the simmering seafood broth; cook for just 3–4 minutes to keep okro vibrant and crunch.',
      'Toss in shredded ugwu leaves, stir once, and turn off heat immediately.',
      'Prepare light oat swallow in boiling water and serve alongside warm okro soup.'
    ]
  },

  // 7. Nigerian Dinner: Fresh Catfish Pepper Soup with Boiled Yam
  {
    id: 'rec-dn-ng-1',
    name: 'Spicy Catfish Pepper Soup (Point & Kill) with Boiled Yam',
    category: 'Dinner',
    servings: 2,
    preparationTime: 12,
    cookingTime: 20,
    estimatedCostPerServing: 1650,
    costCurrency: 'NGN',
    calories: 350,
    protein: '36g',
    carbs: '38g',
    fat: '6g',
    fiber: '5g',
    studentFriendly: true,
    studentCategories: ['Energy & Alertness', 'Exam Week'],
    weightFriendly: true,
    weightGoal: 'Weight Loss & Calorie Deficit',
    equipmentRequired: ['Single hot plate', 'Shared kitchen', 'Fully equipped kitchen'],
    storageRequirements: 'Broth can be stored in covered dish; reheats on hot plate in 4 minutes.',
    image: '/meals/catfish-peppersoup.jpg',
    description: 'Hot aromatic broth infused with calabash nutmeg (ehuru), uda pods, uziza leaves, and fresh tender catfish steaks with yam cubes.',
    whyThisMeal: 'Low-calorie, ultra high-protein dinner. Pepper soup spices promote thermogenesis (fat burning) while warm broth eliminates evening cravings.',
    dietaryTags: ['Nigerian Classic', 'Weight Loss', 'High-Protein', 'Metabolic Boost'],
    allergens: ['Fish'],
    nutritionalInfo: {
      calories: 350,
      protein: '36g',
      carbs: '38g',
      fat: '6g',
      fiber: '5g',
      keyNutrients: 'Ehuru Polyphenols, Piperine, Omega-3, Lean Protein'
    },
    ingredients: [
      { name: 'Fresh Catfish Steaks', amount: 350, unit: 'grams' },
      { name: 'Authentic Pepper Soup Spice Mix (Ehuru, Uda, Uziza seeds)', amount: 1.5, unit: 'tbsp' },
      { name: 'Fresh Scent Leaves / Uziza Leaves', amount: 0.5, unit: 'cup shredded' },
      { name: 'Ata Rodo (Scotch Bonnet)', amount: 2, unit: 'crushed' },
      { name: 'Yam Cubes (Light Portion)', amount: 150, unit: 'grams' },
      { name: 'Spring Water & Sea Salt', amount: 3, unit: 'cups' }
    ],
    instructions: [
      'Clean catfish steaks with hot water and lime juice to remove slippery slime.',
      'Bring water, pepper soup spices, crushed ata rodo, and yam cubes to a boil for 10 minutes until yam softens.',
      'Gently place catfish steaks into the spiced broth; simmer on medium for 8–10 minutes without stirring violently.',
      'Scatter shredded scent leaves or uziza into broth, simmer 60 seconds, and ladle hot into soup bowls.'
    ]
  },

  // 8. Nigerian Dinner: Savory Asaro (Sweet Potato Pottage Alternative) with Smoked Fish
  {
    id: 'rec-dn-ng-2',
    name: 'Savory Sweet Potato & Ugwu Pottage with Smoked Titus',
    category: 'Dinner',
    servings: 2,
    preparationTime: 10,
    cookingTime: 22,
    estimatedCostPerServing: 980,
    costCurrency: 'NGN',
    calories: 370,
    protein: '21g',
    carbs: '58g',
    fat: '6g',
    fiber: '9g',
    studentFriendly: true,
    studentCategories: ['Student Budget Meals', 'Hostel Kitchen'],
    weightFriendly: true,
    weightGoal: 'Weight Loss & Calorie Deficit',
    equipmentRequired: ['Single hot plate', 'Shared kitchen'],
    storageRequirements: 'Store in airtight bowl; reheats easily on hot plate with 2 tbsp water.',
    image: '/meals/potato-porridge.jpg',
    description: 'Naturally sweet orange-fleshed sweet potato cubes stewed in mild tomato-pepper puree, flaked smoked fish, and fresh ugwu greens.',
    whyThisMeal: 'Sweet potatoes have a lower glycemic index than regular yam, offering huge amounts of beta-carotene and dietary fiber for evening recovery.',
    dietaryTags: ['Nigerian Classic', 'Weight Loss', 'Beta-Carotene Rich'],
    allergens: ['Fish'],
    nutritionalInfo: {
      calories: 370,
      protein: '21g',
      carbs: '58g',
      fat: '6g',
      fiber: '9g',
      keyNutrients: 'Beta-Carotene, Vitamin A, Vitamin C, Potassium'
    },
    ingredients: [
      { name: 'Orange Sweet Potatoes (Peeled & Cubed)', amount: 400, unit: 'grams' },
      { name: 'Deboned Smoked Titus / Catfish', amount: 150, unit: 'grams' },
      { name: 'Tomato & Tatashe Pepper Puree', amount: 0.5, unit: 'cup' },
      { name: 'Fresh Shredded Ugwu Greens', amount: 1.5, unit: 'cups' },
      { name: 'Red Palm Oil', amount: 1, unit: 'tbsp' },
      { name: 'Seasoning Cube & Salt', amount: 1, unit: 'to taste' }
    ],
    instructions: [
      'Boil sweet potato cubes with tomato-pepper blend and 1.5 cups water for 12 minutes until tender.',
      'Add red palm oil, flaked smoked fish, and seasonings; roughly crush a few potato chunks to create a silky sauce.',
      'Fold in shredded ugwu leaves during the last 2 minutes, cover pot, and take off heat to steam through.'
    ]
  },

  // 9. Nigerian Drinks: Authentic Zobo Drink (Hibiscus & Ginger Elixir)
  {
    id: 'rec-jc-ng-1',
    name: 'Artisan Hibiscus Zobo Elixir with Pineapple & Fresh Ginger',
    category: 'Juices & Smoothies',
    servings: 4,
    preparationTime: 10,
    cookingTime: 20,
    estimatedCostPerServing: 350,
    costCurrency: 'NGN',
    calories: 45,
    protein: '1g',
    carbs: '10g',
    fat: '0g',
    fiber: '1g',
    studentFriendly: true,
    studentCategories: ['Energy & Alertness', 'Exam Week', 'Quick Meals Between Lectures'],
    weightFriendly: true,
    weightGoal: 'Weight Loss & Calorie Deficit',
    equipmentRequired: ['Electric kettle', 'Single hot plate'],
    storageRequirements: 'Store in chilled glass bottles; stays refreshing for up to 7 days.',
    image: '/meals/zobo-drink.jpg',
    description: 'Deep ruby-red Nigerian hibiscus tea infused with crushed ginger root, cloves (konofuru), cinnamon bark, and fresh pineapple juice.',
    whyThisMeal: 'Zero artificial sugar, packed with anthocyanins that lower arterial blood pressure and polyphenols that assist liver metabolic clearing.',
    dietaryTags: ['Nigerian Classic', 'Weight Loss', 'Antioxidant Powerhouse', 'Immunity Boost'],
    allergens: [],
    nutritionalInfo: {
      calories: 45,
      protein: '1g',
      carbs: '10g',
      fat: '0g',
      fiber: '1g',
      keyNutrients: 'Anthocyanins, Vitamin C, Gingerols, Manganese'
    },
    ingredients: [
      { name: 'Dried Hibiscus Petals (Zobo Leaves)', amount: 2, unit: 'cups' },
      { name: 'Fresh Pineapple Peel & Core', amount: 1, unit: 'whole pineapple' },
      { name: 'Fresh Spicy Ginger Root (Crushed)', amount: 3, unit: 'tbsp' },
      { name: 'Whole Cloves (Konofuru)', amount: 1, unit: 'tsp' },
      { name: 'Spring Water', amount: 6, unit: 'cups' },
      { name: 'Fresh Mint & Cucumber Slices', amount: 1, unit: 'handful' }
    ],
    instructions: [
      'Rinse hibiscus petals quickly in cold water to remove dust particles.',
      'Combine hibiscus, crushed ginger, cloves, and pineapple skins in a pot with 6 cups water.',
      'Boil for 20 minutes to extract intense crimson botanical juice.',
      'Cool, strain through fine muslin mesh, chill thoroughly, and serve over ice with mint sprigs.'
    ]
  },

  // 10. Nigerian Drinks: Kunu Aya (Tiger Nut & Date Milk)
  {
    id: 'rec-jc-ng-2',
    name: 'Chilled Kunu Aya (Creamy Tiger Nut, Date & Coconut Milk)',
    category: 'Juices & Smoothies',
    servings: 3,
    preparationTime: 12,
    cookingTime: 0,
    estimatedCostPerServing: 550,
    costCurrency: 'NGN',
    calories: 140,
    protein: '3g',
    carbs: '22g',
    fat: '5g',
    fiber: '4g',
    studentFriendly: true,
    studentCategories: ['Brain & Focus', 'Energy & Alertness'],
    weightFriendly: true,
    weightGoal: 'Natural Dairy-Free Milk',
    equipmentRequired: ['No cooking equipment'],
    storageRequirements: 'Must be kept chilled on ice or in fridge; consume within 48 hours.',
    image: '/meals/kunu-aya.jpg',
    description: 'Creamy plant-based milk pressed from fresh tiger nuts (aya), sweet dried dates (dabino), and coconut meat with a pinch of ginger.',
    whyThisMeal: 'Rich in resistant prebiotic starch from tiger nuts that nourishes healthy gut microbiota and provides sustained clean stamina.',
    dietaryTags: ['Nigerian Classic', 'Vegan', 'Dairy-Free', 'Prebiotic Rich'],
    allergens: ['Coconut'],
    nutritionalInfo: {
      calories: 140,
      protein: '3g',
      carbs: '22g',
      fat: '5g',
      fiber: '4g',
      keyNutrients: 'Resistant Starch, Magnesium, Vitamin E, Potassium'
    },
    ingredients: [
      { name: 'Fresh Tiger Nuts (Aya)', amount: 2, unit: 'cups' },
      { name: 'Sweet Dried Dates (Dabino - Deseeded)', amount: 8, unit: 'whole' },
      { name: 'Fresh Coconut Flesh', amount: 0.5, unit: 'cup' },
      { name: 'Fresh Ginger', amount: 1, unit: 'inch piece' },
      { name: 'Cold Drinking Water', amount: 2.5, unit: 'cups' }
    ],
    instructions: [
      'Soak dry tiger nuts overnight (or rinse fresh ones thoroughly).',
      'Blend tiger nuts, pitted dates, coconut pieces, and ginger with cold drinking water until pulverized.',
      'Squeeze milk through a nut-milk bag or cheesecloth to extract smooth, creamy milk.',
      'Pour into bottles and refrigerate for an hour before serving chilled.'
    ]
  },

  // 11. Nigerian Drinks: Virgin Chapman Mocktail
  {
    id: 'rec-jc-ng-3',
    name: 'Artisan Virgin Chapman with Cucumber & Citrus Medallions',
    category: 'Juices & Smoothies',
    servings: 2,
    preparationTime: 5,
    cookingTime: 0,
    estimatedCostPerServing: 400,
    costCurrency: 'NGN',
    calories: 80,
    protein: '0g',
    carbs: '19g',
    fat: '0g',
    fiber: '1g',
    studentFriendly: true,
    studentCategories: ['Quick Meals Between Lectures'],
    weightFriendly: true,
    weightGoal: 'Refreshing Mocktail',
    equipmentRequired: ['No cooking equipment'],
    storageRequirements: 'Mix fresh and serve over crushed ice.',
    image: '/meals/chapman.jpg',
    description: 'Nigeria’s celebrated social mocktail crafted with sparkling citrus water, splash of grenadine, fresh cucumber coins, and lime wedges.',
    whyThisMeal: 'Festive, uplifting beverage made without heavy alcohol or artificial syrups, perfect for celebrations and relaxing after exams.',
    dietaryTags: ['Nigerian Classic', 'Mocktail', 'No-Cook'],
    allergens: [],
    nutritionalInfo: {
      calories: 80,
      protein: '0g',
      carbs: '19g',
      fat: '0g',
      fiber: '1g',
      keyNutrients: 'Vitamin C, Citrus Bioflavonoids, Hydration'
    },
    ingredients: [
      { name: 'Chilled Sparkling Citrus Water / Bitter Lemon', amount: 1.5, unit: 'cups' },
      { name: 'Grenadine or Pomegranate Nectar', amount: 2, unit: 'tbsp' },
      { name: 'Angostura Bitters (Aromatic)', amount: 3, unit: 'drops' },
      { name: 'Cucumber Medallions & Lime Slices', amount: 6, unit: 'slices' },
      { name: 'Ice Cubes', amount: 1, unit: 'cup' }
    ],
    instructions: [
      'Fill large tall glasses with ice cubes, cucumber rounds, and lime slices.',
      'Pour sparkling citrus soda and float drops of aromatic bitters.',
      'Stir in grenadine drizzle for the signature layered sunset color.',
      'Garnish with mint leaves and serve with a straw.'
    ]
  },

  // 12. Nigerian Fruits: Nigerian Tropical Fruit Platter
  {
    id: 'rec-fr-ng-1',
    name: 'Nigerian Sunshine Fruit Medley (Papaya, Sweet Mango & Watermelon)',
    category: 'Fruits & Light Bites',
    servings: 2,
    preparationTime: 5,
    cookingTime: 0,
    estimatedCostPerServing: 450,
    costCurrency: 'NGN',
    calories: 120,
    protein: '2g',
    carbs: '28g',
    fat: '0g',
    fiber: '4g',
    studentFriendly: true,
    studentCategories: ['Brain & Focus', 'Quick Meals Between Lectures'],
    weightFriendly: true,
    weightGoal: 'Weight Loss & Calorie Deficit',
    equipmentRequired: ['No cooking equipment'],
    storageRequirements: 'Cut fresh and keep in covered container; consume within 24 hours.',
    image: '/meals/papaya-watermelon-combo.jpg',
    description: 'Chilled tropical bowl of ripe Nigerian pawpaw, succulent yellow mango wedges, and crisp watermelon dressed with fresh lime juice.',
    whyThisMeal: 'High water volume and natural digestive enzymes (papain) support gentle gut motility and provide pure cellular hydration with low calories.',
    dietaryTags: ['Nigerian Classic', 'Weight Loss', 'Hydration', 'No-Cook'],
    allergens: [],
    nutritionalInfo: {
      calories: 120,
      protein: '2g',
      carbs: '28g',
      fat: '0g',
      fiber: '4g',
      keyNutrients: 'Papain, Vitamin C, Lycopene, Vitamin A'
    },
    ingredients: [
      { name: 'Ripe Papaya (Pawpaw) Cubes', amount: 1, unit: 'cup' },
      { name: 'Diced Watermelon', amount: 1, unit: 'cup' },
      { name: 'Seasonal Mango Slices (Ogbomoso / Julie)', amount: 0.5, unit: 'cup' },
      { name: 'Fresh Lime Squeeze', amount: 1, unit: 'tsp' }
    ],
    instructions: [
      'Dice chilled papaya and sweet watermelon into generous cubes.',
      'Arrange along with juicy golden mango slices on a shallow dish.',
      'Spritz lightly with fresh lime juice and serve immediately.'
    ]
  },

  // 13. Nigerian Fruits: Crisp Garden Egg with Ose Oji (Peanut Chili Dip)
  {
    id: 'rec-fr-ng-2',
    name: 'Crisp Garden Eggs with Spicy Ose Oji (Traditional Peanut Dip)',
    category: 'Fruits & Light Bites',
    servings: 2,
    preparationTime: 4,
    cookingTime: 0,
    estimatedCostPerServing: 350,
    costCurrency: 'NGN',
    calories: 130,
    protein: '5g',
    carbs: '12g',
    fat: '7g',
    fiber: '6g',
    studentFriendly: true,
    studentCategories: ['Brain & Focus', 'Quick Meals Between Lectures'],
    weightFriendly: true,
    weightGoal: 'Weight Loss & Calorie Deficit',
    equipmentRequired: ['No cooking equipment'],
    storageRequirements: 'Whole garden eggs keep at room temp for up to 10 days.',
    image: '/meals/garden-egg-peanut.jpg',
    description: 'Crisp, refreshing indigenous green garden eggs served alongside savory ground peanut paste seasoned with chili and calabash nutmeg.',
    whyThisMeal: 'The quintessential West African low-calorie crunch. Packed with nasunin and fiber to keep you full between study sessions for under 130 kcal.',
    dietaryTags: ['Nigerian Classic', 'Weight Loss', 'Low-Calorie Snack', 'No-Cook'],
    allergens: ['Peanuts'],
    nutritionalInfo: {
      calories: 130,
      protein: '5g',
      carbs: '12g',
      fat: '7g',
      fiber: '6g',
      keyNutrients: 'Nasunin, Chlorogenic Acid, Magnesium, Niacin'
    },
    ingredients: [
      { name: 'Fresh Crisp Green Garden Eggs', amount: 4, unit: 'whole' },
      { name: 'Roasted Groundnut Paste (Ose Oji base)', amount: 2, unit: 'tbsp' },
      { name: 'Ground Dry Chili / Cameroon Pepper', amount: 0.5, unit: 'tsp' },
      { name: 'Ground Ehuru (Calabash Nutmeg) & Salt', amount: 1, unit: 'pinch' }
    ],
    instructions: [
      'Wash whole garden eggs in clean cold water and pat dry.',
      'Mix roasted peanut paste with Cameroon pepper, ehuru, and a pinch of sea salt into a smooth dipping paste.',
      'Slice garden eggs into quarters and dip into the spicy nutty paste for a crunchy, satisfying snack.'
    ]
  },

  // 14. Nigerian Snacks: Roasted Boli (Plantain) & Crunchy Groundnuts
  {
    id: 'rec-sn-ng-1',
    name: 'Charred Roasted Boli & Crunchy Golden Groundnuts',
    category: 'Snacks',
    servings: 2,
    preparationTime: 5,
    cookingTime: 15,
    estimatedCostPerServing: 600,
    costCurrency: 'NGN',
    calories: 310,
    protein: '9g',
    carbs: '54g',
    fat: '8g',
    fiber: '6g',
    studentFriendly: true,
    studentCategories: ['Student Budget Meals', 'Hostel Kitchen'],
    weightFriendly: true,
    weightGoal: 'Healthy Whole-Food Energy',
    equipmentRequired: ['Single hot plate', 'Shared kitchen'],
    storageRequirements: 'Best eaten warm off the grill or skillet.',
    image: '/meals/boli-groundnuts.jpg',
    description: 'Caramelized roasted ripe plantain charred on a dry skillet, paired with authentic oven-roasted golden Nigerian groundnuts.',
    whyThisMeal: 'A beloved street classic: natural potassium and slow-release carbohydrates from plantain combined with sustaining healthy plant fats from groundnuts.',
    dietaryTags: ['Nigerian Classic', 'Vegetarian', 'Whole-Food Snack'],
    allergens: ['Peanuts'],
    nutritionalInfo: {
      calories: 310,
      protein: '9g',
      carbs: '54g',
      fat: '8g',
      fiber: '6g',
      keyNutrients: 'Potassium, Vitamin B6, Resveratrol, Magnesium'
    },
    ingredients: [
      { name: 'Firm Ripe Plantain (Peeled)', amount: 2, unit: 'fingers' },
      { name: 'Roasted Golden Groundnuts (Peanuts)', amount: 3, unit: 'tbsp' },
      { name: 'Flaked Sea Salt', amount: 1, unit: 'pinch' }
    ],
    instructions: [
      'Score peeled plantains with light diagonal cuts.',
      'Place in a preheated dry skillet or grill pan over medium-low heat; turn regularly for 15 minutes until charred and cooked through.',
      'Slice diagonally and serve warm alongside freshly roasted crunchy groundnuts.'
    ]
  },

  // 15. Nigerian Appetizer & Sides: Spicy Gizdodo (Gizzard & Plantain Bites)
  {
    id: 'rec-ap-ng-1',
    name: 'Artisan Spicy Gizdodo (Tender Gizzard & Dodo Medley)',
    category: 'Appetizers & Sides',
    servings: 3,
    preparationTime: 12,
    cookingTime: 20,
    estimatedCostPerServing: 1200,
    costCurrency: 'NGN',
    calories: 360,
    protein: '22g',
    carbs: '38g',
    fat: '13g',
    fiber: '4g',
    studentFriendly: true,
    studentCategories: ['Energy & Alertness'],
    weightFriendly: false,
    weightGoal: 'Party & Celebration Favorite',
    equipmentRequired: ['Single hot plate', 'Shared kitchen'],
    storageRequirements: 'Keeps for 3 days in refrigeration; reheats in pan in 3 minutes.',
    image: '/meals/gizdodo.jpg',
    description: 'Crisp cubed sweet plantains and tender boiled chicken gizzards tossed in a glistening bell pepper and sweet onion glaze.',
    whyThisMeal: 'A party favorite elevated with lean, iron-rich poultry gizzard and sweet caramelized plantain for balanced taste and texture.',
    dietaryTags: ['Nigerian Classic', 'High-Protein', 'One-Skillet'],
    allergens: [],
    nutritionalInfo: {
      calories: 360,
      protein: '22g',
      carbs: '38g',
      fat: '13g',
      fiber: '4g',
      keyNutrients: 'Heme Iron, Vitamin B12, Zinc, Potassium'
    },
    ingredients: [
      { name: 'Chicken Gizzards (Cleaned & Boiled Tender)', amount: 250, unit: 'grams' },
      { name: 'Sweet Ripe Plantain (Cubed)', amount: 1, unit: 'large' },
      { name: 'Coarsely Chopped Tatashe, Habanero & Red Onion', amount: 1, unit: 'cup' },
      { name: 'Vegetable Oil', amount: 2, unit: 'tbsp' },
      { name: 'Curry, Thyme & Seasoning Cube', amount: 1, unit: 'tsp' }
    ],
    instructions: [
      'Boil cleaned gizzards with onions and spices until tender; cut into bite-sized pieces.',
      'Shallow fry or air-fry plantain cubes until golden brown; drain.',
      'In a wide skillet, sauté pepper blend in oil with curry and thyme until sweet and reduced.',
      'Toss tender gizzards and fried plantains into the sauce until every piece is richly coated and glistening.'
    ]
  },

  // 16. Nigerian Desserts: Chilled Coconut Tapioca Pudding with Mango Honey
  {
    id: 'rec-ds-ng-1',
    name: 'Chilled Coconut Tapioca Pudding with Sweet Mango Coulis',
    category: 'Desserts',
    servings: 2,
    preparationTime: 8,
    cookingTime: 12,
    estimatedCostPerServing: 500,
    costCurrency: 'NGN',
    calories: 190,
    protein: '3g',
    carbs: '34g',
    fat: '5g',
    fiber: '3g',
    studentFriendly: true,
    studentCategories: ['Brain & Focus'],
    weightFriendly: true,
    weightGoal: 'Weight Loss & Calorie Deficit',
    equipmentRequired: ['Electric kettle', 'Single hot plate'],
    storageRequirements: 'Store in chilled dessert glasses for up to 3 days.',
    image: '/meals/tapioca-mango.jpg',
    description: 'Silky translucent cassava tapioca pearls simmered in fresh coconut milk, chilled and crowned with pureed golden mango and wild honey.',
    whyThisMeal: 'A delicate tropical dessert utilizing West African cassava tapioca pearls and local coconut milk, completely gluten-free and gentle on digestion.',
    dietaryTags: ['Nigerian Classic', 'Vegan', 'Gluten-Free', 'Light Dessert'],
    allergens: ['Coconut'],
    nutritionalInfo: {
      calories: 190,
      protein: '3g',
      carbs: '34g',
      fat: '5g',
      fiber: '3g',
      keyNutrients: 'Medium Chain Triglycerides (MCT), Vitamin C, Potassium'
    },
    ingredients: [
      { name: 'Cassava Tapioca / Sago Pearls', amount: 0.5, unit: 'cup' },
      { name: 'Fresh Coconut Milk', amount: 1, unit: 'cup' },
      { name: 'Water', amount: 1, unit: 'cup' },
      { name: 'Pureed Fresh Sweet Mango', amount: 0.5, unit: 'cup' },
      { name: 'Wild Honey or Date Syrup', amount: 1, unit: 'tbsp' }
    ],
    instructions: [
      'Boil water, add tapioca pearls, and simmer for 10 minutes until pearls become translucent.',
      'Stir in coconut milk and a dash of honey, simmer 2 minutes longer, and remove from heat.',
      'Divide into small glass bowls and refrigerate until gently set.',
      'Top with fragrant mango puree and serve chilled.'
    ]
  },

  /* ========================================================
     ADDITIONAL NIGERIAN EASY STUDENT & WEIGHT-LOSS RECIPES
     ======================================================== */

  // 17. Student & Weight Loss: Steamed Cabbage & Carrot Stir-Fry with Boiled Eggs
  {
    id: 'rec-wl-ng-1',
    name: 'Spiced Steamed Cabbage & Carrot Stir-Fry with Boiled Eggs',
    category: 'Dinner',
    servings: 1,
    preparationTime: 5,
    cookingTime: 7,
    estimatedCostPerServing: 450,
    costCurrency: 'NGN',
    calories: 260,
    protein: '15g',
    carbs: '18g',
    fat: '9g',
    fiber: '7g',
    studentFriendly: true,
    studentCategories: ['Quick Meals Between Lectures', 'Student Budget Meals', 'Hostel Kitchen'],
    weightFriendly: true,
    weightGoal: 'Weight Loss & Calorie Deficit',
    equipmentRequired: ['Single hot plate'],
    storageRequirements: 'Cook and eat fresh in 10 minutes.',
    image: '/meals/cabbage-eggs.jpg',
    description: 'Crispy shredded cabbage, sweet carrots, onions, and scotch bonnet flash-steamed in a skillet and paired with two hard-boiled eggs.',
    whyThisMeal: 'A premier low-calorie fat-loss dinner. Immense vegetable volume provides filling fiber while boiled eggs deliver complete protein for under 260 calories.',
    dietaryTags: ['Nigerian Classic', 'Weight Loss', 'Low-Calorie', 'Student Favorite', 'Quick Prep'],
    allergens: ['Eggs'],
    nutritionalInfo: {
      calories: 260,
      protein: '15g',
      carbs: '18g',
      fat: '9g',
      fiber: '7g',
      keyNutrients: 'Vitamin K, Vitamin C, Choline, Dietary Fiber'
    },
    ingredients: [
      { name: 'Shredded White Cabbage', amount: 2, unit: 'cups' },
      { name: 'Grated Sweet Carrot', amount: 1, unit: 'medium' },
      { name: 'Hard-Boiled Eggs', amount: 2, unit: 'large' },
      { name: 'Ata Rodo & Red Onion', amount: 1, unit: 'minced' },
      { name: 'Vegetable Oil', amount: 1, unit: 'tsp' },
      { name: 'Curry, Thyme & Seasoning Pinch', amount: 1, unit: 'pinch' }
    ],
    instructions: [
      'Heat 1 tsp oil in skillet on hot plate; toss minced onion, pepper, curry, and thyme for 1 minute.',
      'Add shredded cabbage and grated carrots with 2 tablespoons of water; flash-steam for 4 minutes so veggies stay crunchy.',
      'Serve in a bowl with sliced hard-boiled eggs and enjoy hot.'
    ]
  },

  // 18. Student & Weight Loss: Fresh Fish & Okro Pepper Soup
  {
    id: 'rec-wl-ng-2',
    name: 'Fresh Croaker Fish & Okro Pepper Soup Broth',
    category: 'Dinner',
    servings: 2,
    preparationTime: 6,
    cookingTime: 14,
    estimatedCostPerServing: 1100,
    costCurrency: 'NGN',
    calories: 280,
    protein: '32g',
    carbs: '14g',
    fat: '5g',
    fiber: '8g',
    studentFriendly: true,
    studentCategories: ['Quick Meals Between Lectures', 'Hostel Kitchen'],
    weightFriendly: true,
    weightGoal: 'Weight Loss & Calorie Deficit',
    equipmentRequired: ['Single hot plate'],
    storageRequirements: 'Eat piping hot from the pot.',
    image: '/meals/okro-croaker-fish.jpg',
    description: 'Fresh fish steaks poached in light aromatic pepper soup broth with hand-chopped okro pods and fragrant scent leaves.',
    whyThisMeal: 'Exceptionally filling yet under 280 kcal. Pepper soup spices boost metabolic thermogenesis, while okra provides mucilage fiber for digestive fullness.',
    dietaryTags: ['Nigerian Classic', 'Weight Loss', 'High-Protein', 'Low-Calorie', 'High-Fiber'],
    allergens: ['Fish'],
    nutritionalInfo: {
      calories: 280,
      protein: '32g',
      carbs: '14g',
      fat: '5g',
      fiber: '8g',
      keyNutrients: 'Omega-3, Soluble Mucilage, Vitamin C, Ehuru Polyphenols'
    },
    ingredients: [
      { name: 'Fresh White Fish / Croaker Steaks', amount: 2, unit: 'steaks' },
      { name: 'Chopped Fresh Okro Pods', amount: 1.5, unit: 'cups' },
      { name: 'Pepper Soup Spice Powder', amount: 1, unit: 'tbsp' },
      { name: 'Minced Ata Rodo (Scotch Bonnet)', amount: 1, unit: 'chili' },
      { name: 'Shredded Scent Leaves (Efirin)', amount: 0.5, unit: 'cup' },
      { name: 'Seasoning Cube & Salt', amount: 1, unit: 'to taste' }
    ],
    instructions: [
      'Boil 2 cups of water with pepper soup spices, minced pepper, and seasoning in a pot.',
      'Gently drop fish steaks; simmer on medium for 7 minutes.',
      'Add chopped okro and scent leaves; cook for just 3 minutes so okro stays bright green and crunchy.',
      'Ladle hot into bowl and sip warm.'
    ]
  },

  // 19. Student Quick Lunch: Student Corned Beef / Geisha Jollof Macaroni
  {
    id: 'rec-lu-ng-5',
    name: 'Quick Campus Geisha Mackerel Jollof Macaroni',
    category: 'Lunch',
    servings: 2,
    preparationTime: 4,
    cookingTime: 16,
    estimatedCostPerServing: 850,
    costCurrency: 'NGN',
    calories: 440,
    protein: '22g',
    carbs: '64g',
    fat: '10g',
    fiber: '4g',
    studentFriendly: true,
    studentCategories: ['Quick Meals Between Lectures', 'Student Budget Meals', 'Hostel Kitchen'],
    weightFriendly: false,
    weightGoal: 'Quick Student Fuel',
    equipmentRequired: ['Single hot plate'],
    storageRequirements: 'Hostel favorite; keeps 24 hours covered.',
    image: '/meals/jollof-rice.jpg',
    description: 'One-pot macaroni simmered in spicy tomato sauce with canned Geisha mackerel in tomato puree, onions, and curry.',
    whyThisMeal: 'Canned Geisha mackerel is available in every campus kiosk, non-perishable, and turns simple pasta into a rich, protein-packed lunch.',
    dietaryTags: ['Nigerian Classic', 'Student Favorite', 'One-Pot', 'Quick Prep'],
    allergens: ['Fish', 'Gluten'],
    nutritionalInfo: {
      calories: 440,
      protein: '22g',
      carbs: '64g',
      fat: '10g',
      fiber: '4g',
      keyNutrients: 'Omega-3, Lycopene, B-Vitamins, Protein'
    },
    ingredients: [
      { name: 'Macaroni Elbows', amount: 200, unit: 'grams' },
      { name: 'Canned Geisha Mackerel in Tomato Sauce', amount: 1, unit: 'can' },
      { name: 'Diced Onion & Scotch Bonnet', amount: 2, unit: 'tbsp' },
      { name: 'Curry Powder & Thyme', amount: 0.5, unit: 'tsp' },
      { name: 'Vegetable Oil', amount: 1, unit: 'tbsp' }
    ],
    instructions: [
      'Parboil macaroni in boiling water for 4 minutes and drain.',
      'Heat oil in pot, sauté chopped onion and pepper; pour in full can of Geisha with its thick tomato gravy.',
      'Add curry, thyme, half cup water, and parboiled macaroni; cover pot tightly and cook on low heat for 7 minutes until sauce is absorbed.'
    ]
  },

  // 20. Student & Weight Loss Breakfast: Golden Boiled Plantain with Scrambled Veggie Eggs
  {
    id: 'rec-bf-ng-3',
    name: 'Boiled Semi-Ripe Plantain with Peppered Veggie Scrambled Eggs',
    category: 'Breakfast',
    servings: 1,
    preparationTime: 5,
    cookingTime: 12,
    estimatedCostPerServing: 650,
    costCurrency: 'NGN',
    calories: 340,
    protein: '16g',
    carbs: '48g',
    fat: '8g',
    fiber: '6g',
    studentFriendly: true,
    studentCategories: ['Quick Meals Between Lectures', 'Brain & Focus', 'Student Budget Meals'],
    weightFriendly: true,
    weightGoal: 'Weight Loss & Calorie Deficit',
    equipmentRequired: ['Single hot plate'],
    storageRequirements: 'Eat warm right off the stove.',
    image: '/meals/sweet-potato-egg-sauce.jpg',
    description: 'Tender boiled semi-ripe plantain fingers served with eggs scrambled with fresh tomatoes, sweet peppers, and onions.',
    whyThisMeal: 'Boiling plantain instead of frying eliminates excess calories from oil, delivering resistant starch for sustained morning lectures.',
    dietaryTags: ['Nigerian Classic', 'Weight Loss', 'High-Fiber', 'Quick Prep'],
    allergens: ['Eggs'],
    nutritionalInfo: {
      calories: 340,
      protein: '16g',
      carbs: '48g',
      fat: '8g',
      fiber: '6g',
      keyNutrients: 'Resistant Starch, Potassium, Vitamin B6, Choline'
    },
    ingredients: [
      { name: 'Semi-Ripe Plantain (Peeled & Sliced)', amount: 1, unit: 'medium' },
      { name: 'Farm Eggs', amount: 2, unit: 'large' },
      { name: 'Diced Tomatoes, Onions & Ata Rodo', amount: 3, unit: 'tbsp' },
      { name: 'Vegetable Oil', amount: 1, unit: 'tsp' },
      { name: 'Pinch of Sea Salt', amount: 1, unit: 'pinch' }
    ],
    instructions: [
      'Boil plantain pieces in salted water for 10 minutes until soft and tender.',
      'Sauté diced onions, tomatoes, and scotch bonnet in 1 tsp oil in small pan.',
      'Crack in eggs and scramble gently for 2 minutes into a fluffy sauce.',
      'Serve warm boiled plantain discs with spicy scrambled eggs.'
    ]
  },

  // 21. Student Quick Refreshment: Cold Cucumber & Lime Infusion Water
  {
    id: 'rec-jc-ng-4',
    name: 'Chilled Detox Cucumber, Lemon & Mint Flask Water',
    category: 'Juices & Smoothies',
    servings: 2,
    preparationTime: 3,
    cookingTime: 0,
    estimatedCostPerServing: 200,
    costCurrency: 'NGN',
    calories: 20,
    protein: '0g',
    carbs: '4g',
    fat: '0g',
    fiber: '1g',
    studentFriendly: true,
    studentCategories: ['Quick Meals Between Lectures', 'Hostel Kitchen'],
    weightFriendly: true,
    weightGoal: 'Weight Loss & Calorie Deficit',
    equipmentRequired: ['No cooking equipment'],
    storageRequirements: 'Keep in water bottle for study desk all day.',
    image: '/meals/chapman.jpg',
    description: 'Crisp Nigerian green cucumber coins, fresh lime slices, and garden mint steeped in ice-cold drinking water.',
    whyThisMeal: 'Costs practically nothing, keeps students hydrated during hot exam weeks, and curbs false hunger cravings effortlessly.',
    dietaryTags: ['Nigerian Classic', 'Weight Loss', 'Zero Sugar', 'No-Cook'],
    allergens: [],
    nutritionalInfo: {
      calories: 20,
      protein: '0g',
      carbs: '4g',
      fat: '0g',
      fiber: '1g',
      keyNutrients: 'Cucurbitacins, Vitamin C, Hydration'
    },
    ingredients: [
      { name: 'Crisp Green Cucumber', amount: 0.5, unit: 'sliced' },
      { name: 'Fresh Lime or Lemon', amount: 1, unit: 'sliced' },
      { name: 'Cold Drinking Water', amount: 3, unit: 'cups' },
      { name: 'Mint Leaves / Ice Cubes', amount: 1, unit: 'handful' }
    ],
    instructions: [
      'Drop sliced cucumber and lime into your study water bottle or flask.',
      'Fill with cold water and ice cubes; let infuse for 10 minutes and sip throughout lectures.'
    ]
  },

  // 22. Student Snack: Boiled Groundnuts & Corn (Epa & Agbado)
  {
    id: 'rec-sn-ng-2',
    name: 'Steamed Sweet Corn on the Cob with Boiled Groundnuts (Agbado & Epa)',
    category: 'Snacks',
    servings: 1,
    preparationTime: 2,
    cookingTime: 15,
    estimatedCostPerServing: 400,
    costCurrency: 'NGN',
    calories: 290,
    protein: '11g',
    carbs: '42g',
    fat: '8g',
    fiber: '6g',
    studentFriendly: true,
    studentCategories: ['Quick Meals Between Lectures', 'Student Budget Meals'],
    weightFriendly: true,
    weightGoal: 'Whole-Food Snack',
    equipmentRequired: ['Single hot plate'],
    storageRequirements: 'Eat warm right after boiling.',
    image: '/meals/boli-groundnuts.jpg',
    description: 'Sweet fresh corn cob boiled tender in salted water, served with a handful of salted boiled groundnuts.',
    whyThisMeal: 'A seasonal Nigerian campus staple. 100% natural whole-food combining complex carbohydrates with plant-based protein.',
    dietaryTags: ['Nigerian Classic', 'Vegan', 'Gluten-Free', 'Whole-Food'],
    allergens: ['Peanuts'],
    nutritionalInfo: {
      calories: 290,
      protein: '11g',
      carbs: '42g',
      fat: '8g',
      fiber: '6g',
      keyNutrients: 'Lutein, Zeaxanthin, Plant Protein, Dietary Fiber'
    },
    ingredients: [
      { name: 'Sweet Fresh Corn Cob', amount: 1, unit: 'cob' },
      { name: 'Raw Groundnuts in Shell', amount: 0.5, unit: 'cup' },
      { name: 'Salt & Boiling Water', amount: 1, unit: 'tsp' }
    ],
    instructions: [
      'Boil corn cob and washed groundnuts together in salted water on hot plate for 15 minutes until soft.',
      'Drain water and enjoy hot between study sessions.'
    ]
  },
  // Weight Loss & Calorie Deficit Meal 1
  {
    id: 'rec-hl-wl-1',
    name: 'Steamed Moi Moi Elewe with Hard-Boiled Egg',
    category: 'Breakfast',
    servings: 2,
    preparationTime: 12,
    cookingTime: 16,
    estimatedCostPerServing: 700,
    costCurrency: 'NGN',
    calories: 290,
    protein: '15g',
    carbs: '35g',
    fat: '7g',
    fiber: '4g',
    studentFriendly: true,
    studentCategories: ['Quick Meals Between Lectures', 'Student Budget Meals', 'Hostel Kitchen'],
    weightFriendly: true,
    weightGoal: 'Weight Loss & Calorie Deficit',
    equipmentRequired: ['Single hot plate', 'Electric kettle'],
    storageRequirements: 'Store in covered bowl; reheats easily on hostel hot plate.',
    image: '/meals/moimoi.jpg',
    description: 'Steamed Moi Moi Elewe with Hard-Boiled Egg. Optimized for high satiety, lean protein, and low calorie density without excess oils.',
    whyThisMeal: 'Steamed bean pudding delivers plant protein and high fiber without oil, keeping hunger at bay for hours.',
    dietaryTags: ['Nigerian Classic', 'Weight Loss & Calorie Deficit'],
    allergens: [],
    nutritionalInfo: {
      calories: 290,
      protein: '15g',
      carbs: '35g',
      fat: '7g',
      fiber: '4g',
      keyNutrients: 'Essential vitamins, bioactive plant nutrients, and balanced macronutrients'
    },
    ingredients: [
      { name: 'Core Nigerian Ingredients', amount: 1, unit: 'portion' },
      { name: 'Fresh Aromatics & Herbs', amount: 1, unit: 'bunch' },
      { name: 'Seasoning & Sea Salt', amount: 1, unit: 'to taste' }
    ],
    instructions: [
      'Prepare fresh local ingredients and simmer on medium heat.',
      'Allow flavors to develop gracefully, check seasoning, and serve hot.'
    ]
  },
  // Weight Loss & Calorie Deficit Meal 2
  {
    id: 'rec-hl-wl-2',
    name: 'Oatmeal Porridge with Skimmed Milk & Apple Slices',
    category: 'Breakfast',
    servings: 2,
    preparationTime: 5,
    cookingTime: 9,
    estimatedCostPerServing: 550,
    costCurrency: 'NGN',
    calories: 280,
    protein: '14g',
    carbs: '34g',
    fat: '7g',
    fiber: '4g',
    studentFriendly: true,
    studentCategories: ['Quick Meals Between Lectures', 'Student Budget Meals', 'Hostel Kitchen'],
    weightFriendly: true,
    weightGoal: 'Weight Loss & Calorie Deficit',
    equipmentRequired: ['Single hot plate', 'Electric kettle'],
    storageRequirements: 'Store in covered bowl; reheats easily on hostel hot plate.',
    image: '/meals/custard.jpg',
    description: 'Oatmeal Porridge with Skimmed Milk & Apple Slices. Optimized for high satiety, lean protein, and low calorie density without excess oils.',
    whyThisMeal: 'Beta-glucan fiber in oats stabilizes blood glucose and promotes prolonged satiety.',
    dietaryTags: ['Nigerian Classic', 'Weight Loss & Calorie Deficit'],
    allergens: [],
    nutritionalInfo: {
      calories: 280,
      protein: '14g',
      carbs: '34g',
      fat: '7g',
      fiber: '4g',
      keyNutrients: 'Essential vitamins, bioactive plant nutrients, and balanced macronutrients'
    },
    ingredients: [
      { name: 'Core Nigerian Ingredients', amount: 1, unit: 'portion' },
      { name: 'Fresh Aromatics & Herbs', amount: 1, unit: 'bunch' },
      { name: 'Seasoning & Sea Salt', amount: 1, unit: 'to taste' }
    ],
    instructions: [
      'Prepare fresh local ingredients and simmer on medium heat.',
      'Allow flavors to develop gracefully, check seasoning, and serve hot.'
    ]
  },
  // Weight Loss & Calorie Deficit Meal 3
  {
    id: 'rec-hl-wl-3',
    name: 'Boiled Egg Whites & Steamed Spinach (Efo)',
    category: 'Breakfast',
    servings: 2,
    preparationTime: 6,
    cookingTime: 10,
    estimatedCostPerServing: 450,
    costCurrency: 'NGN',
    calories: 180,
    protein: '9g',
    carbs: '22g',
    fat: '5g',
    fiber: '3g',
    studentFriendly: true,
    studentCategories: ['Quick Meals Between Lectures', 'Student Budget Meals', 'Hostel Kitchen'],
    weightFriendly: true,
    weightGoal: 'Weight Loss & Calorie Deficit',
    equipmentRequired: ['Single hot plate', 'Electric kettle'],
    storageRequirements: 'Store in covered bowl; reheats easily on hostel hot plate.',
    image: '/meals/efo-riro.jpg',
    description: 'Boiled Egg Whites & Steamed Spinach (Efo). Optimized for high satiety, lean protein, and low calorie density without excess oils.',
    whyThisMeal: 'Pure lean protein paired with nutrient-dense greens for maximum micro-nutrients per calorie.',
    dietaryTags: ['Nigerian Classic', 'Weight Loss & Calorie Deficit'],
    allergens: [],
    nutritionalInfo: {
      calories: 180,
      protein: '9g',
      carbs: '22g',
      fat: '5g',
      fiber: '3g',
      keyNutrients: 'Essential vitamins, bioactive plant nutrients, and balanced macronutrients'
    },
    ingredients: [
      { name: 'Core Nigerian Ingredients', amount: 1, unit: 'portion' },
      { name: 'Fresh Aromatics & Herbs', amount: 1, unit: 'bunch' },
      { name: 'Seasoning & Sea Salt', amount: 1, unit: 'to taste' }
    ],
    instructions: [
      'Prepare fresh local ingredients and simmer on medium heat.',
      'Allow flavors to develop gracefully, check seasoning, and serve hot.'
    ]
  },
  // Weight Loss & Calorie Deficit Meal 4
  {
    id: 'rec-hl-wl-4',
    name: 'Boiled Sweet Potato & Peppered Tomato Egg Scramble',
    category: 'Breakfast',
    servings: 2,
    preparationTime: 10,
    cookingTime: 14,
    estimatedCostPerServing: 600,
    costCurrency: 'NGN',
    calories: 310,
    protein: '16g',
    carbs: '37g',
    fat: '8g',
    fiber: '5g',
    studentFriendly: true,
    studentCategories: ['Quick Meals Between Lectures', 'Student Budget Meals', 'Hostel Kitchen'],
    weightFriendly: true,
    weightGoal: 'Weight Loss & Calorie Deficit',
    equipmentRequired: ['Single hot plate', 'Electric kettle'],
    storageRequirements: 'Store in covered bowl; reheats easily on hostel hot plate.',
    image: '/meals/sweet-potato-egg-sauce.jpg',
    description: 'Boiled Sweet Potato & Peppered Tomato Egg Scramble. Optimized for high satiety, lean protein, and low calorie density without excess oils.',
    whyThisMeal: 'Low glycemic index sweet potatoes prevent insulin spikes, curbing mid-morning hunger.',
    dietaryTags: ['Nigerian Classic', 'Weight Loss & Calorie Deficit'],
    allergens: [],
    nutritionalInfo: {
      calories: 310,
      protein: '16g',
      carbs: '37g',
      fat: '8g',
      fiber: '5g',
      keyNutrients: 'Essential vitamins, bioactive plant nutrients, and balanced macronutrients'
    },
    ingredients: [
      { name: 'Core Nigerian Ingredients', amount: 1, unit: 'portion' },
      { name: 'Fresh Aromatics & Herbs', amount: 1, unit: 'bunch' },
      { name: 'Seasoning & Sea Salt', amount: 1, unit: 'to taste' }
    ],
    instructions: [
      'Prepare fresh local ingredients and simmer on medium heat.',
      'Allow flavors to develop gracefully, check seasoning, and serve hot.'
    ]
  },
  // Weight Loss & Calorie Deficit Meal 5
  {
    id: 'rec-hl-wl-5',
    name: 'Millet Pap (Ogi Baba) with Sugar-Free Milk & Boiled Egg',
    category: 'Breakfast',
    servings: 2,
    preparationTime: 6,
    cookingTime: 10,
    estimatedCostPerServing: 400,
    costCurrency: 'NGN',
    calories: 240,
    protein: '12g',
    carbs: '29g',
    fat: '6g',
    fiber: '4g',
    studentFriendly: true,
    studentCategories: ['Quick Meals Between Lectures', 'Student Budget Meals', 'Hostel Kitchen'],
    weightFriendly: true,
    weightGoal: 'Weight Loss & Calorie Deficit',
    equipmentRequired: ['Single hot plate', 'Electric kettle'],
    storageRequirements: 'Store in covered bowl; reheats easily on hostel hot plate.',
    image: '/meals/custard.jpg',
    description: 'Millet Pap (Ogi Baba) with Sugar-Free Milk & Boiled Egg. Optimized for high satiety, lean protein, and low calorie density without excess oils.',
    whyThisMeal: 'Fermented whole millet is probiotic, gentle on digestion, and very low in calories.',
    dietaryTags: ['Nigerian Classic', 'Weight Loss & Calorie Deficit'],
    allergens: [],
    nutritionalInfo: {
      calories: 240,
      protein: '12g',
      carbs: '29g',
      fat: '6g',
      fiber: '4g',
      keyNutrients: 'Essential vitamins, bioactive plant nutrients, and balanced macronutrients'
    },
    ingredients: [
      { name: 'Core Nigerian Ingredients', amount: 1, unit: 'portion' },
      { name: 'Fresh Aromatics & Herbs', amount: 1, unit: 'bunch' },
      { name: 'Seasoning & Sea Salt', amount: 1, unit: 'to taste' }
    ],
    instructions: [
      'Prepare fresh local ingredients and simmer on medium heat.',
      'Allow flavors to develop gracefully, check seasoning, and serve hot.'
    ]
  },
  // Weight Loss & Calorie Deficit Meal 6
  {
    id: 'rec-hl-wl-6',
    name: 'Fresh Seafood Okro Soup with Light Oat Swallow',
    category: 'Lunch',
    servings: 2,
    preparationTime: 14,
    cookingTime: 18,
    estimatedCostPerServing: 1100,
    costCurrency: 'NGN',
    calories: 330,
    protein: '17g',
    carbs: '40g',
    fat: '8g',
    fiber: '5g',
    studentFriendly: true,
    studentCategories: ['Quick Meals Between Lectures', 'Student Budget Meals', 'Hostel Kitchen'],
    weightFriendly: true,
    weightGoal: 'Weight Loss & Calorie Deficit',
    equipmentRequired: ['Single hot plate', 'Electric kettle'],
    storageRequirements: 'Store in covered bowl; reheats easily on hostel hot plate.',
    image: '/meals/okro-soup.jpg',
    description: 'Fresh Seafood Okro Soup with Light Oat Swallow. Optimized for high satiety, lean protein, and low calorie density without excess oils.',
    whyThisMeal: 'Okro mucilage binds bile acids and slows stomach emptying for exceptional satiety.',
    dietaryTags: ['Nigerian Classic', 'Weight Loss & Calorie Deficit'],
    allergens: [],
    nutritionalInfo: {
      calories: 330,
      protein: '17g',
      carbs: '40g',
      fat: '8g',
      fiber: '5g',
      keyNutrients: 'Essential vitamins, bioactive plant nutrients, and balanced macronutrients'
    },
    ingredients: [
      { name: 'Core Nigerian Ingredients', amount: 1, unit: 'portion' },
      { name: 'Fresh Aromatics & Herbs', amount: 1, unit: 'bunch' },
      { name: 'Seasoning & Sea Salt', amount: 1, unit: 'to taste' }
    ],
    instructions: [
      'Prepare fresh local ingredients and simmer on medium heat.',
      'Allow flavors to develop gracefully, check seasoning, and serve hot.'
    ]
  },
  // Weight Loss & Calorie Deficit Meal 7
  {
    id: 'rec-hl-wl-7',
    name: 'Spicy Catfish Pepper Soup with Boiled Yam Baton',
    category: 'Lunch',
    servings: 2,
    preparationTime: 15,
    cookingTime: 19,
    estimatedCostPerServing: 1300,
    costCurrency: 'NGN',
    calories: 320,
    protein: '16g',
    carbs: '38g',
    fat: '8g',
    fiber: '5g',
    studentFriendly: true,
    studentCategories: ['Quick Meals Between Lectures', 'Student Budget Meals', 'Hostel Kitchen'],
    weightFriendly: true,
    weightGoal: 'Weight Loss & Calorie Deficit',
    equipmentRequired: ['Single hot plate', 'Electric kettle'],
    storageRequirements: 'Store in covered bowl; reheats easily on hostel hot plate.',
    image: '/meals/catfish-peppersoup.jpg',
    description: 'Spicy Catfish Pepper Soup with Boiled Yam Baton. Optimized for high satiety, lean protein, and low calorie density without excess oils.',
    whyThisMeal: 'Thermogenic spices elevate metabolic burn while lean catfish provides pure marine protein.',
    dietaryTags: ['Nigerian Classic', 'Weight Loss & Calorie Deficit'],
    allergens: [],
    nutritionalInfo: {
      calories: 320,
      protein: '16g',
      carbs: '38g',
      fat: '8g',
      fiber: '5g',
      keyNutrients: 'Essential vitamins, bioactive plant nutrients, and balanced macronutrients'
    },
    ingredients: [
      { name: 'Core Nigerian Ingredients', amount: 1, unit: 'portion' },
      { name: 'Fresh Aromatics & Herbs', amount: 1, unit: 'bunch' },
      { name: 'Seasoning & Sea Salt', amount: 1, unit: 'to taste' }
    ],
    instructions: [
      'Prepare fresh local ingredients and simmer on medium heat.',
      'Allow flavors to develop gracefully, check seasoning, and serve hot.'
    ]
  },
  // Weight Loss & Calorie Deficit Meal 8
  {
    id: 'rec-hl-wl-8',
    name: 'Efo Riro (Leafy Spinach Stew) with Grilled Titus Fish',
    category: 'Lunch',
    servings: 2,
    preparationTime: 16,
    cookingTime: 20,
    estimatedCostPerServing: 1200,
    costCurrency: 'NGN',
    calories: 350,
    protein: '18g',
    carbs: '42g',
    fat: '9g',
    fiber: '5g',
    studentFriendly: true,
    studentCategories: ['Quick Meals Between Lectures', 'Student Budget Meals', 'Hostel Kitchen'],
    weightFriendly: true,
    weightGoal: 'Weight Loss & Calorie Deficit',
    equipmentRequired: ['Single hot plate', 'Electric kettle'],
    storageRequirements: 'Store in covered bowl; reheats easily on hostel hot plate.',
    image: '/meals/efo-riro.jpg',
    description: 'Efo Riro (Leafy Spinach Stew) with Grilled Titus Fish. Optimized for high satiety, lean protein, and low calorie density without excess oils.',
    whyThisMeal: 'Shredded shoko greens pack magnesium and iron with minimal carbs and fat.',
    dietaryTags: ['Nigerian Classic', 'Weight Loss & Calorie Deficit'],
    allergens: [],
    nutritionalInfo: {
      calories: 350,
      protein: '18g',
      carbs: '42g',
      fat: '9g',
      fiber: '5g',
      keyNutrients: 'Essential vitamins, bioactive plant nutrients, and balanced macronutrients'
    },
    ingredients: [
      { name: 'Core Nigerian Ingredients', amount: 1, unit: 'portion' },
      { name: 'Fresh Aromatics & Herbs', amount: 1, unit: 'bunch' },
      { name: 'Seasoning & Sea Salt', amount: 1, unit: 'to taste' }
    ],
    instructions: [
      'Prepare fresh local ingredients and simmer on medium heat.',
      'Allow flavors to develop gracefully, check seasoning, and serve hot.'
    ]
  },
  // Weight Loss & Calorie Deficit Meal 9
  {
    id: 'rec-hl-wl-9',
    name: 'Steamed Cabbage & Carrot Stir-Fry with Boiled Chicken Breast',
    category: 'Lunch',
    servings: 2,
    preparationTime: 10,
    cookingTime: 14,
    estimatedCostPerServing: 950,
    costCurrency: 'NGN',
    calories: 290,
    protein: '15g',
    carbs: '35g',
    fat: '7g',
    fiber: '4g',
    studentFriendly: true,
    studentCategories: ['Quick Meals Between Lectures', 'Student Budget Meals', 'Hostel Kitchen'],
    weightFriendly: true,
    weightGoal: 'Weight Loss & Calorie Deficit',
    equipmentRequired: ['Single hot plate', 'Electric kettle'],
    storageRequirements: 'Store in covered bowl; reheats easily on hostel hot plate.',
    image: '/meals/cabbage-eggs.jpg',
    description: 'Steamed Cabbage & Carrot Stir-Fry with Boiled Chicken Breast. Optimized for high satiety, lean protein, and low calorie density without excess oils.',
    whyThisMeal: 'Gigantic vegetable volume creates mechanical stomach fullness without surplus calories.',
    dietaryTags: ['Nigerian Classic', 'Weight Loss & Calorie Deficit'],
    allergens: [],
    nutritionalInfo: {
      calories: 290,
      protein: '15g',
      carbs: '35g',
      fat: '7g',
      fiber: '4g',
      keyNutrients: 'Essential vitamins, bioactive plant nutrients, and balanced macronutrients'
    },
    ingredients: [
      { name: 'Core Nigerian Ingredients', amount: 1, unit: 'portion' },
      { name: 'Fresh Aromatics & Herbs', amount: 1, unit: 'bunch' },
      { name: 'Seasoning & Sea Salt', amount: 1, unit: 'to taste' }
    ],
    instructions: [
      'Prepare fresh local ingredients and simmer on medium heat.',
      'Allow flavors to develop gracefully, check seasoning, and serve hot.'
    ]
  },
  // Weight Loss & Calorie Deficit Meal 10
  {
    id: 'rec-hl-wl-10',
    name: 'Brown Honey Beans Pottage with Smoked Fish (Zero Palm Oil)',
    category: 'Lunch',
    servings: 2,
    preparationTime: 20,
    cookingTime: 24,
    estimatedCostPerServing: 800,
    costCurrency: 'NGN',
    calories: 340,
    protein: '17g',
    carbs: '41g',
    fat: '9g',
    fiber: '5g',
    studentFriendly: true,
    studentCategories: ['Quick Meals Between Lectures', 'Student Budget Meals', 'Hostel Kitchen'],
    weightFriendly: true,
    weightGoal: 'Weight Loss & Calorie Deficit',
    equipmentRequired: ['Single hot plate', 'Electric kettle'],
    storageRequirements: 'Store in covered bowl; reheats easily on hostel hot plate.',
    image: '/meals/stewed-beans-plantains.jpg',
    description: 'Brown Honey Beans Pottage with Smoked Fish (Zero Palm Oil). Optimized for high satiety, lean protein, and low calorie density without excess oils.',
    whyThisMeal: 'Honey beans provide resistant starch that feeds gut flora and controls appetite hormone ghrelin.',
    dietaryTags: ['Nigerian Classic', 'Weight Loss & Calorie Deficit'],
    allergens: [],
    nutritionalInfo: {
      calories: 340,
      protein: '17g',
      carbs: '41g',
      fat: '9g',
      fiber: '5g',
      keyNutrients: 'Essential vitamins, bioactive plant nutrients, and balanced macronutrients'
    },
    ingredients: [
      { name: 'Core Nigerian Ingredients', amount: 1, unit: 'portion' },
      { name: 'Fresh Aromatics & Herbs', amount: 1, unit: 'bunch' },
      { name: 'Seasoning & Sea Salt', amount: 1, unit: 'to taste' }
    ],
    instructions: [
      'Prepare fresh local ingredients and simmer on medium heat.',
      'Allow flavors to develop gracefully, check seasoning, and serve hot.'
    ]
  },
  // Weight Loss & Calorie Deficit Meal 11
  {
    id: 'rec-hl-wl-11',
    name: 'Grilled Tilapia Fillet with Lemon & Tossed Garden Salad',
    category: 'Dinner',
    servings: 2,
    preparationTime: 12,
    cookingTime: 16,
    estimatedCostPerServing: 1100,
    costCurrency: 'NGN',
    calories: 260,
    protein: '13g',
    carbs: '31g',
    fat: '7g',
    fiber: '4g',
    studentFriendly: true,
    studentCategories: ['Quick Meals Between Lectures', 'Student Budget Meals', 'Hostel Kitchen'],
    weightFriendly: true,
    weightGoal: 'Weight Loss & Calorie Deficit',
    equipmentRequired: ['Single hot plate', 'Electric kettle'],
    storageRequirements: 'Store in covered bowl; reheats easily on hostel hot plate.',
    image: '/meals/catfish-peppersoup.jpg',
    description: 'Grilled Tilapia Fillet with Lemon & Tossed Garden Salad. Optimized for high satiety, lean protein, and low calorie density without excess oils.',
    whyThisMeal: 'Light white fish dinner that avoids evening bloating and digests easily before sleep.',
    dietaryTags: ['Nigerian Classic', 'Weight Loss & Calorie Deficit'],
    allergens: [],
    nutritionalInfo: {
      calories: 260,
      protein: '13g',
      carbs: '31g',
      fat: '7g',
      fiber: '4g',
      keyNutrients: 'Essential vitamins, bioactive plant nutrients, and balanced macronutrients'
    },
    ingredients: [
      { name: 'Core Nigerian Ingredients', amount: 1, unit: 'portion' },
      { name: 'Fresh Aromatics & Herbs', amount: 1, unit: 'bunch' },
      { name: 'Seasoning & Sea Salt', amount: 1, unit: 'to taste' }
    ],
    instructions: [
      'Prepare fresh local ingredients and simmer on medium heat.',
      'Allow flavors to develop gracefully, check seasoning, and serve hot.'
    ]
  },
  // Weight Loss & Calorie Deficit Meal 12
  {
    id: 'rec-hl-wl-12',
    name: 'Vegetable Okro Stew with Boiled Chicken & Cauliflower Mash',
    category: 'Dinner',
    servings: 2,
    preparationTime: 15,
    cookingTime: 19,
    estimatedCostPerServing: 1000,
    costCurrency: 'NGN',
    calories: 270,
    protein: '14g',
    carbs: '32g',
    fat: '7g',
    fiber: '4g',
    studentFriendly: true,
    studentCategories: ['Quick Meals Between Lectures', 'Student Budget Meals', 'Hostel Kitchen'],
    weightFriendly: true,
    weightGoal: 'Weight Loss & Calorie Deficit',
    equipmentRequired: ['Single hot plate', 'Electric kettle'],
    storageRequirements: 'Store in covered bowl; reheats easily on hostel hot plate.',
    image: '/meals/okro-soup.jpg',
    description: 'Vegetable Okro Stew with Boiled Chicken & Cauliflower Mash. Optimized for high satiety, lean protein, and low calorie density without excess oils.',
    whyThisMeal: 'Low-carb evening meal that maintains deep sleep and supports nighttime growth hormone secretion.',
    dietaryTags: ['Nigerian Classic', 'Weight Loss & Calorie Deficit'],
    allergens: [],
    nutritionalInfo: {
      calories: 270,
      protein: '14g',
      carbs: '32g',
      fat: '7g',
      fiber: '4g',
      keyNutrients: 'Essential vitamins, bioactive plant nutrients, and balanced macronutrients'
    },
    ingredients: [
      { name: 'Core Nigerian Ingredients', amount: 1, unit: 'portion' },
      { name: 'Fresh Aromatics & Herbs', amount: 1, unit: 'bunch' },
      { name: 'Seasoning & Sea Salt', amount: 1, unit: 'to taste' }
    ],
    instructions: [
      'Prepare fresh local ingredients and simmer on medium heat.',
      'Allow flavors to develop gracefully, check seasoning, and serve hot.'
    ]
  },
  // Weight Loss & Calorie Deficit Meal 13
  {
    id: 'rec-hl-wl-13',
    name: 'Spicy Goat Meat Pepper Soup with Scent Leaves',
    category: 'Dinner',
    servings: 2,
    preparationTime: 18,
    cookingTime: 22,
    estimatedCostPerServing: 1400,
    costCurrency: 'NGN',
    calories: 280,
    protein: '14g',
    carbs: '34g',
    fat: '7g',
    fiber: '4g',
    studentFriendly: true,
    studentCategories: ['Quick Meals Between Lectures', 'Student Budget Meals', 'Hostel Kitchen'],
    weightFriendly: true,
    weightGoal: 'Weight Loss & Calorie Deficit',
    equipmentRequired: ['Single hot plate', 'Electric kettle'],
    storageRequirements: 'Store in covered bowl; reheats easily on hostel hot plate.',
    image: '/meals/custard.jpg',
    description: 'Spicy Goat Meat Pepper Soup with Scent Leaves. Optimized for high satiety, lean protein, and low calorie density without excess oils.',
    whyThisMeal: 'Warm aromatic broth eliminates late-night junk cravings and delivers highly bioavailable iron.',
    dietaryTags: ['Nigerian Classic', 'Weight Loss & Calorie Deficit'],
    allergens: [],
    nutritionalInfo: {
      calories: 280,
      protein: '14g',
      carbs: '34g',
      fat: '7g',
      fiber: '4g',
      keyNutrients: 'Essential vitamins, bioactive plant nutrients, and balanced macronutrients'
    },
    ingredients: [
      { name: 'Core Nigerian Ingredients', amount: 1, unit: 'portion' },
      { name: 'Fresh Aromatics & Herbs', amount: 1, unit: 'bunch' },
      { name: 'Seasoning & Sea Salt', amount: 1, unit: 'to taste' }
    ],
    instructions: [
      'Prepare fresh local ingredients and simmer on medium heat.',
      'Allow flavors to develop gracefully, check seasoning, and serve hot.'
    ]
  },
  // Weight Loss & Calorie Deficit Meal 14
  {
    id: 'rec-hl-wl-14',
    name: 'Steamed Mackerel in Banana Leaf with Garden Eggs',
    category: 'Dinner',
    servings: 2,
    preparationTime: 14,
    cookingTime: 18,
    estimatedCostPerServing: 950,
    costCurrency: 'NGN',
    calories: 310,
    protein: '16g',
    carbs: '37g',
    fat: '8g',
    fiber: '5g',
    studentFriendly: true,
    studentCategories: ['Quick Meals Between Lectures', 'Student Budget Meals', 'Hostel Kitchen'],
    weightFriendly: true,
    weightGoal: 'Weight Loss & Calorie Deficit',
    equipmentRequired: ['Single hot plate', 'Electric kettle'],
    storageRequirements: 'Store in covered bowl; reheats easily on hostel hot plate.',
    image: '/meals/garden-egg-peanut.jpg',
    description: 'Steamed Mackerel in Banana Leaf with Garden Eggs. Optimized for high satiety, lean protein, and low calorie density without excess oils.',
    whyThisMeal: 'Banana-leaf steaming locks in moisture without added oils, preserving delicate omega-3 fats.',
    dietaryTags: ['Nigerian Classic', 'Weight Loss & Calorie Deficit'],
    allergens: [],
    nutritionalInfo: {
      calories: 310,
      protein: '16g',
      carbs: '37g',
      fat: '8g',
      fiber: '5g',
      keyNutrients: 'Essential vitamins, bioactive plant nutrients, and balanced macronutrients'
    },
    ingredients: [
      { name: 'Core Nigerian Ingredients', amount: 1, unit: 'portion' },
      { name: 'Fresh Aromatics & Herbs', amount: 1, unit: 'bunch' },
      { name: 'Seasoning & Sea Salt', amount: 1, unit: 'to taste' }
    ],
    instructions: [
      'Prepare fresh local ingredients and simmer on medium heat.',
      'Allow flavors to develop gracefully, check seasoning, and serve hot.'
    ]
  },
  // Weight Loss & Calorie Deficit Meal 15
  {
    id: 'rec-hl-wl-15',
    name: 'Boiled Plantain with Steamed Ugwu Greens & Smoked Panla',
    category: 'Dinner',
    servings: 2,
    preparationTime: 12,
    cookingTime: 16,
    estimatedCostPerServing: 850,
    costCurrency: 'NGN',
    calories: 300,
    protein: '15g',
    carbs: '36g',
    fat: '8g',
    fiber: '5g',
    studentFriendly: true,
    studentCategories: ['Quick Meals Between Lectures', 'Student Budget Meals', 'Hostel Kitchen'],
    weightFriendly: true,
    weightGoal: 'Weight Loss & Calorie Deficit',
    equipmentRequired: ['Single hot plate', 'Electric kettle'],
    storageRequirements: 'Store in covered bowl; reheats easily on hostel hot plate.',
    image: '/meals/zobo-drink.jpg',
    description: 'Boiled Plantain with Steamed Ugwu Greens & Smoked Panla. Optimized for high satiety, lean protein, and low calorie density without excess oils.',
    whyThisMeal: 'Semi-ripe boiled plantain provides potassium while ugwu supplies folate and magnesium.',
    dietaryTags: ['Nigerian Classic', 'Weight Loss & Calorie Deficit'],
    allergens: [],
    nutritionalInfo: {
      calories: 300,
      protein: '15g',
      carbs: '36g',
      fat: '8g',
      fiber: '5g',
      keyNutrients: 'Essential vitamins, bioactive plant nutrients, and balanced macronutrients'
    },
    ingredients: [
      { name: 'Core Nigerian Ingredients', amount: 1, unit: 'portion' },
      { name: 'Fresh Aromatics & Herbs', amount: 1, unit: 'bunch' },
      { name: 'Seasoning & Sea Salt', amount: 1, unit: 'to taste' }
    ],
    instructions: [
      'Prepare fresh local ingredients and simmer on medium heat.',
      'Allow flavors to develop gracefully, check seasoning, and serve hot.'
    ]
  },
  // Weight Loss & Calorie Deficit Meal 16
  {
    id: 'rec-hl-wl-16',
    name: 'Crisp Garden Eggs with Spicy Ose Oji Peanut Dip',
    category: 'Snacks',
    servings: 2,
    preparationTime: 3,
    cookingTime: 7,
    estimatedCostPerServing: 300,
    costCurrency: 'NGN',
    calories: 120,
    protein: '6g',
    carbs: '14g',
    fat: '3g',
    fiber: '2g',
    studentFriendly: true,
    studentCategories: ['Quick Meals Between Lectures', 'Student Budget Meals', 'Hostel Kitchen'],
    weightFriendly: true,
    weightGoal: 'Weight Loss & Calorie Deficit',
    equipmentRequired: ['Single hot plate', 'Electric kettle'],
    storageRequirements: 'Store in covered bowl; reheats easily on hostel hot plate.',
    image: '/meals/garden-egg-peanut.jpg',
    description: 'Crisp Garden Eggs with Spicy Ose Oji Peanut Dip. Optimized for high satiety, lean protein, and low calorie density without excess oils.',
    whyThisMeal: 'Garden eggs have 92% water volume and nasunin antioxidants, giving crunchy satisfaction for under 120 kcal.',
    dietaryTags: ['Nigerian Classic', 'Weight Loss & Calorie Deficit'],
    allergens: [],
    nutritionalInfo: {
      calories: 120,
      protein: '6g',
      carbs: '14g',
      fat: '3g',
      fiber: '2g',
      keyNutrients: 'Essential vitamins, bioactive plant nutrients, and balanced macronutrients'
    },
    ingredients: [
      { name: 'Core Nigerian Ingredients', amount: 1, unit: 'portion' },
      { name: 'Fresh Aromatics & Herbs', amount: 1, unit: 'bunch' },
      { name: 'Seasoning & Sea Salt', amount: 1, unit: 'to taste' }
    ],
    instructions: [
      'Prepare fresh local ingredients and simmer on medium heat.',
      'Allow flavors to develop gracefully, check seasoning, and serve hot.'
    ]
  },
  // Weight Loss & Calorie Deficit Meal 17
  {
    id: 'rec-hl-wl-17',
    name: 'Boiled Corn Cob with Minimal Boiled Groundnuts',
    category: 'Snacks',
    servings: 2,
    preparationTime: 8,
    cookingTime: 12,
    estimatedCostPerServing: 350,
    costCurrency: 'NGN',
    calories: 190,
    protein: '10g',
    carbs: '23g',
    fat: '5g',
    fiber: '3g',
    studentFriendly: true,
    studentCategories: ['Quick Meals Between Lectures', 'Student Budget Meals', 'Hostel Kitchen'],
    weightFriendly: true,
    weightGoal: 'Weight Loss & Calorie Deficit',
    equipmentRequired: ['Single hot plate', 'Electric kettle'],
    storageRequirements: 'Store in covered bowl; reheats easily on hostel hot plate.',
    image: '/meals/boli-groundnuts.jpg',
    description: 'Boiled Corn Cob with Minimal Boiled Groundnuts. Optimized for high satiety, lean protein, and low calorie density without excess oils.',
    whyThisMeal: 'Whole grain corn and boiled nuts provide steady satiety without high frying fats.',
    dietaryTags: ['Nigerian Classic', 'Weight Loss & Calorie Deficit'],
    allergens: [],
    nutritionalInfo: {
      calories: 190,
      protein: '10g',
      carbs: '23g',
      fat: '5g',
      fiber: '3g',
      keyNutrients: 'Essential vitamins, bioactive plant nutrients, and balanced macronutrients'
    },
    ingredients: [
      { name: 'Core Nigerian Ingredients', amount: 1, unit: 'portion' },
      { name: 'Fresh Aromatics & Herbs', amount: 1, unit: 'bunch' },
      { name: 'Seasoning & Sea Salt', amount: 1, unit: 'to taste' }
    ],
    instructions: [
      'Prepare fresh local ingredients and simmer on medium heat.',
      'Allow flavors to develop gracefully, check seasoning, and serve hot.'
    ]
  },
  // Weight Loss & Calorie Deficit Meal 18
  {
    id: 'rec-hl-wl-18',
    name: 'Fresh Cucumber Slices & Roasted Groundnuts',
    category: 'Snacks',
    servings: 2,
    preparationTime: 2,
    cookingTime: 6,
    estimatedCostPerServing: 250,
    costCurrency: 'NGN',
    calories: 110,
    protein: '6g',
    carbs: '13g',
    fat: '3g',
    fiber: '2g',
    studentFriendly: true,
    studentCategories: ['Quick Meals Between Lectures', 'Student Budget Meals', 'Hostel Kitchen'],
    weightFriendly: true,
    weightGoal: 'Weight Loss & Calorie Deficit',
    equipmentRequired: ['Single hot plate', 'Electric kettle'],
    storageRequirements: 'Store in covered bowl; reheats easily on hostel hot plate.',
    image: '/meals/boli-groundnuts.jpg',
    description: 'Fresh Cucumber Slices & Roasted Groundnuts. Optimized for high satiety, lean protein, and low calorie density without excess oils.',
    whyThisMeal: 'Crispy refreshing hydrating snack with minimal calories and healthy plant fats.',
    dietaryTags: ['Nigerian Classic', 'Weight Loss & Calorie Deficit'],
    allergens: [],
    nutritionalInfo: {
      calories: 110,
      protein: '6g',
      carbs: '13g',
      fat: '3g',
      fiber: '2g',
      keyNutrients: 'Essential vitamins, bioactive plant nutrients, and balanced macronutrients'
    },
    ingredients: [
      { name: 'Core Nigerian Ingredients', amount: 1, unit: 'portion' },
      { name: 'Fresh Aromatics & Herbs', amount: 1, unit: 'bunch' },
      { name: 'Seasoning & Sea Salt', amount: 1, unit: 'to taste' }
    ],
    instructions: [
      'Prepare fresh local ingredients and simmer on medium heat.',
      'Allow flavors to develop gracefully, check seasoning, and serve hot.'
    ]
  },
  // Weight Loss & Calorie Deficit Meal 19
  {
    id: 'rec-hl-wl-19',
    name: 'Unsweetened Zobo Hibiscus Tea with Ginger & Cloves',
    category: 'Juices & Smoothies',
    servings: 2,
    preparationTime: 6,
    cookingTime: 10,
    estimatedCostPerServing: 250,
    costCurrency: 'NGN',
    calories: 35,
    protein: '2g',
    carbs: '4g',
    fat: '1g',
    fiber: '1g',
    studentFriendly: true,
    studentCategories: ['Quick Meals Between Lectures', 'Student Budget Meals', 'Hostel Kitchen'],
    weightFriendly: true,
    weightGoal: 'Weight Loss & Calorie Deficit',
    equipmentRequired: ['Single hot plate', 'Electric kettle'],
    storageRequirements: 'Store in covered bowl; reheats easily on hostel hot plate.',
    image: '/meals/zobo-drink.jpg',
    description: 'Unsweetened Zobo Hibiscus Tea with Ginger & Cloves. Optimized for high satiety, lean protein, and low calorie density without excess oils.',
    whyThisMeal: 'Anthocyanin-rich hibiscus drink that naturally supports blood pressure and metabolic detox.',
    dietaryTags: ['Nigerian Classic', 'Weight Loss & Calorie Deficit'],
    allergens: [],
    nutritionalInfo: {
      calories: 35,
      protein: '2g',
      carbs: '4g',
      fat: '1g',
      fiber: '1g',
      keyNutrients: 'Essential vitamins, bioactive plant nutrients, and balanced macronutrients'
    },
    ingredients: [
      { name: 'Core Nigerian Ingredients', amount: 1, unit: 'portion' },
      { name: 'Fresh Aromatics & Herbs', amount: 1, unit: 'bunch' },
      { name: 'Seasoning & Sea Salt', amount: 1, unit: 'to taste' }
    ],
    instructions: [
      'Prepare fresh local ingredients and simmer on medium heat.',
      'Allow flavors to develop gracefully, check seasoning, and serve hot.'
    ]
  },
  // Weight Loss & Calorie Deficit Meal 20
  {
    id: 'rec-hl-wl-20',
    name: 'Chilled Detox Cucumber, Lemon & Mint Flask Water',
    category: 'Juices & Smoothies',
    servings: 2,
    preparationTime: 2,
    cookingTime: 6,
    estimatedCostPerServing: 200,
    costCurrency: 'NGN',
    calories: 15,
    protein: '1g',
    carbs: '2g',
    fat: '0g',
    fiber: '0g',
    studentFriendly: true,
    studentCategories: ['Quick Meals Between Lectures', 'Student Budget Meals', 'Hostel Kitchen'],
    weightFriendly: true,
    weightGoal: 'Weight Loss & Calorie Deficit',
    equipmentRequired: ['Single hot plate', 'Electric kettle'],
    storageRequirements: 'Store in covered bowl; reheats easily on hostel hot plate.',
    image: '/meals/chapman.jpg',
    description: 'Chilled Detox Cucumber, Lemon & Mint Flask Water. Optimized for high satiety, lean protein, and low calorie density without excess oils.',
    whyThisMeal: 'Zero-sugar infused water that keeps appetite signals calm during intense study or desk work.',
    dietaryTags: ['Nigerian Classic', 'Weight Loss & Calorie Deficit'],
    allergens: [],
    nutritionalInfo: {
      calories: 15,
      protein: '1g',
      carbs: '2g',
      fat: '0g',
      fiber: '0g',
      keyNutrients: 'Essential vitamins, bioactive plant nutrients, and balanced macronutrients'
    },
    ingredients: [
      { name: 'Core Nigerian Ingredients', amount: 1, unit: 'portion' },
      { name: 'Fresh Aromatics & Herbs', amount: 1, unit: 'bunch' },
      { name: 'Seasoning & Sea Salt', amount: 1, unit: 'to taste' }
    ],
    instructions: [
      'Prepare fresh local ingredients and simmer on medium heat.',
      'Allow flavors to develop gracefully, check seasoning, and serve hot.'
    ]
  },
  // Weight Loss & Calorie Deficit Meal 21
  {
    id: 'rec-hl-wl-21',
    name: 'Fresh Pawpaw & Watermelon Salad Bowl',
    category: 'Fruits & Light Bites',
    servings: 2,
    preparationTime: 4,
    cookingTime: 8,
    estimatedCostPerServing: 350,
    costCurrency: 'NGN',
    calories: 110,
    protein: '6g',
    carbs: '13g',
    fat: '3g',
    fiber: '2g',
    studentFriendly: true,
    studentCategories: ['Quick Meals Between Lectures', 'Student Budget Meals', 'Hostel Kitchen'],
    weightFriendly: true,
    weightGoal: 'Weight Loss & Calorie Deficit',
    equipmentRequired: ['Single hot plate', 'Electric kettle'],
    storageRequirements: 'Store in covered bowl; reheats easily on hostel hot plate.',
    image: '/meals/papaya-watermelon-combo.jpg',
    description: 'Fresh Pawpaw & Watermelon Salad Bowl. Optimized for high satiety, lean protein, and low calorie density without excess oils.',
    whyThisMeal: 'Natural digestive papain in papaya supports digestive tract motility and delivers hydration.',
    dietaryTags: ['Nigerian Classic', 'Weight Loss & Calorie Deficit'],
    allergens: [],
    nutritionalInfo: {
      calories: 110,
      protein: '6g',
      carbs: '13g',
      fat: '3g',
      fiber: '2g',
      keyNutrients: 'Essential vitamins, bioactive plant nutrients, and balanced macronutrients'
    },
    ingredients: [
      { name: 'Core Nigerian Ingredients', amount: 1, unit: 'portion' },
      { name: 'Fresh Aromatics & Herbs', amount: 1, unit: 'bunch' },
      { name: 'Seasoning & Sea Salt', amount: 1, unit: 'to taste' }
    ],
    instructions: [
      'Prepare fresh local ingredients and simmer on medium heat.',
      'Allow flavors to develop gracefully, check seasoning, and serve hot.'
    ]
  },
  // Weight Loss & Calorie Deficit Meal 22
  {
    id: 'rec-hl-wl-22',
    name: 'Chilled Coconut Tapioca Pearls with Fresh Mango Puree',
    category: 'Desserts',
    servings: 2,
    preparationTime: 8,
    cookingTime: 12,
    estimatedCostPerServing: 450,
    costCurrency: 'NGN',
    calories: 160,
    protein: '8g',
    carbs: '19g',
    fat: '4g',
    fiber: '2g',
    studentFriendly: true,
    studentCategories: ['Quick Meals Between Lectures', 'Student Budget Meals', 'Hostel Kitchen'],
    weightFriendly: true,
    weightGoal: 'Weight Loss & Calorie Deficit',
    equipmentRequired: ['Single hot plate', 'Electric kettle'],
    storageRequirements: 'Store in covered bowl; reheats easily on hostel hot plate.',
    image: '/meals/tapioca-mango.jpg',
    description: 'Chilled Coconut Tapioca Pearls with Fresh Mango Puree. Optimized for high satiety, lean protein, and low calorie density without excess oils.',
    whyThisMeal: 'Light gluten-free tropical dessert that satisfies sweet cravings without processed cane sugars.',
    dietaryTags: ['Nigerian Classic', 'Weight Loss & Calorie Deficit'],
    allergens: [],
    nutritionalInfo: {
      calories: 160,
      protein: '8g',
      carbs: '19g',
      fat: '4g',
      fiber: '2g',
      keyNutrients: 'Essential vitamins, bioactive plant nutrients, and balanced macronutrients'
    },
    ingredients: [
      { name: 'Core Nigerian Ingredients', amount: 1, unit: 'portion' },
      { name: 'Fresh Aromatics & Herbs', amount: 1, unit: 'bunch' },
      { name: 'Seasoning & Sea Salt', amount: 1, unit: 'to taste' }
    ],
    instructions: [
      'Prepare fresh local ingredients and simmer on medium heat.',
      'Allow flavors to develop gracefully, check seasoning, and serve hot.'
    ]
  },
  // Weight Gain & Muscle Building Meal 1
  {
    id: 'rec-hl-wg-1',
    name: 'Fried Sweet Plantain (Dodo) with 3 Cheesy Scrambled Eggs',
    category: 'Breakfast',
    servings: 2,
    preparationTime: 8,
    cookingTime: 12,
    estimatedCostPerServing: 850,
    costCurrency: 'NGN',
    calories: 580,
    protein: '29g',
    carbs: '70g',
    fat: '15g',
    fiber: '9g',
    studentFriendly: true,
    studentCategories: ['Quick Meals Between Lectures', 'Student Budget Meals', 'Hostel Kitchen'],
    weightFriendly: false,
    weightGoal: 'Weight Gain & Muscle Building',
    equipmentRequired: ['Single hot plate', 'Electric kettle'],
    storageRequirements: 'Store in covered bowl; reheats easily on hostel hot plate.',
    image: '/meals/stewed-beans-plantains.jpg',
    description: 'Fried Sweet Plantain (Dodo) with 3 Cheesy Scrambled Eggs. Calorie-dense, high-protein Nigerian meals loaded with healthy fats, complex carbs, and nutrient volume.',
    whyThisMeal: 'Calorie-dense combination of healthy sweet plantain sugars and bioavailable egg protein.',
    dietaryTags: ['Nigerian Classic', 'Weight Gain & Muscle Building'],
    allergens: [],
    nutritionalInfo: {
      calories: 580,
      protein: '29g',
      carbs: '70g',
      fat: '15g',
      fiber: '9g',
      keyNutrients: 'Essential vitamins, bioactive plant nutrients, and balanced macronutrients'
    },
    ingredients: [
      { name: 'Core Nigerian Ingredients', amount: 1, unit: 'portion' },
      { name: 'Fresh Aromatics & Herbs', amount: 1, unit: 'bunch' },
      { name: 'Seasoning & Sea Salt', amount: 1, unit: 'to taste' }
    ],
    instructions: [
      'Prepare fresh local ingredients and simmer on medium heat.',
      'Allow flavors to develop gracefully, check seasoning, and serve hot.'
    ]
  },
  // Weight Gain & Muscle Building Meal 2
  {
    id: 'rec-hl-wg-2',
    name: 'Agege Bread Sandwich with Canned Sardine & Peanut Butter',
    category: 'Breakfast',
    servings: 2,
    preparationTime: 5,
    cookingTime: 9,
    estimatedCostPerServing: 900,
    costCurrency: 'NGN',
    calories: 620,
    protein: '31g',
    carbs: '74g',
    fat: '16g',
    fiber: '9g',
    studentFriendly: true,
    studentCategories: ['Quick Meals Between Lectures', 'Student Budget Meals', 'Hostel Kitchen'],
    weightFriendly: false,
    weightGoal: 'Weight Gain & Muscle Building',
    equipmentRequired: ['Single hot plate', 'Electric kettle'],
    storageRequirements: 'Store in covered bowl; reheats easily on hostel hot plate.',
    image: '/meals/bread-sardine-toast.jpg',
    description: 'Agege Bread Sandwich with Canned Sardine & Peanut Butter. Calorie-dense, high-protein Nigerian meals loaded with healthy fats, complex carbs, and nutrient volume.',
    whyThisMeal: 'Heavy energy surplus with dense marine fats, peanut lipids, and hearty Agege bread carbs.',
    dietaryTags: ['Nigerian Classic', 'Weight Gain & Muscle Building'],
    allergens: [],
    nutritionalInfo: {
      calories: 620,
      protein: '31g',
      carbs: '74g',
      fat: '16g',
      fiber: '9g',
      keyNutrients: 'Essential vitamins, bioactive plant nutrients, and balanced macronutrients'
    },
    ingredients: [
      { name: 'Core Nigerian Ingredients', amount: 1, unit: 'portion' },
      { name: 'Fresh Aromatics & Herbs', amount: 1, unit: 'bunch' },
      { name: 'Seasoning & Sea Salt', amount: 1, unit: 'to taste' }
    ],
    instructions: [
      'Prepare fresh local ingredients and simmer on medium heat.',
      'Allow flavors to develop gracefully, check seasoning, and serve hot.'
    ]
  },
  // Weight Gain & Muscle Building Meal 3
  {
    id: 'rec-hl-wg-3',
    name: 'Rich Custard with Whole Milk, Honey & 4 Crispy Akara Cakes',
    category: 'Breakfast',
    servings: 2,
    preparationTime: 10,
    cookingTime: 14,
    estimatedCostPerServing: 800,
    costCurrency: 'NGN',
    calories: 650,
    protein: '33g',
    carbs: '78g',
    fat: '16g',
    fiber: '10g',
    studentFriendly: true,
    studentCategories: ['Quick Meals Between Lectures', 'Student Budget Meals', 'Hostel Kitchen'],
    weightFriendly: false,
    weightGoal: 'Weight Gain & Muscle Building',
    equipmentRequired: ['Single hot plate', 'Electric kettle'],
    storageRequirements: 'Store in covered bowl; reheats easily on hostel hot plate.',
    image: '/meals/akara.jpg',
    description: 'Rich Custard with Whole Milk, Honey & 4 Crispy Akara Cakes. Calorie-dense, high-protein Nigerian meals loaded with healthy fats, complex carbs, and nutrient volume.',
    whyThisMeal: 'High-calorie warm breakfast that delivers easy-to-digest carbohydrates and plant proteins.',
    dietaryTags: ['Nigerian Classic', 'Weight Gain & Muscle Building'],
    allergens: [],
    nutritionalInfo: {
      calories: 650,
      protein: '33g',
      carbs: '78g',
      fat: '16g',
      fiber: '10g',
      keyNutrients: 'Essential vitamins, bioactive plant nutrients, and balanced macronutrients'
    },
    ingredients: [
      { name: 'Core Nigerian Ingredients', amount: 1, unit: 'portion' },
      { name: 'Fresh Aromatics & Herbs', amount: 1, unit: 'bunch' },
      { name: 'Seasoning & Sea Salt', amount: 1, unit: 'to taste' }
    ],
    instructions: [
      'Prepare fresh local ingredients and simmer on medium heat.',
      'Allow flavors to develop gracefully, check seasoning, and serve hot.'
    ]
  },
  // Weight Gain & Muscle Building Meal 4
  {
    id: 'rec-hl-wg-4',
    name: 'Oatmeal Porridge Cooked in Whole Milk with Bananas & Cashews',
    category: 'Breakfast',
    servings: 2,
    preparationTime: 6,
    cookingTime: 10,
    estimatedCostPerServing: 750,
    costCurrency: 'NGN',
    calories: 590,
    protein: '30g',
    carbs: '71g',
    fat: '15g',
    fiber: '9g',
    studentFriendly: true,
    studentCategories: ['Quick Meals Between Lectures', 'Student Budget Meals', 'Hostel Kitchen'],
    weightFriendly: false,
    weightGoal: 'Weight Gain & Muscle Building',
    equipmentRequired: ['Single hot plate', 'Electric kettle'],
    storageRequirements: 'Store in covered bowl; reheats easily on hostel hot plate.',
    image: '/meals/boli-groundnuts.jpg',
    description: 'Oatmeal Porridge Cooked in Whole Milk with Bananas & Cashews. Calorie-dense, high-protein Nigerian meals loaded with healthy fats, complex carbs, and nutrient volume.',
    whyThisMeal: 'Nutrient-rich complex starches loaded with healthy monounsaturated cashew fats.',
    dietaryTags: ['Nigerian Classic', 'Weight Gain & Muscle Building'],
    allergens: [],
    nutritionalInfo: {
      calories: 590,
      protein: '30g',
      carbs: '71g',
      fat: '15g',
      fiber: '9g',
      keyNutrients: 'Essential vitamins, bioactive plant nutrients, and balanced macronutrients'
    },
    ingredients: [
      { name: 'Core Nigerian Ingredients', amount: 1, unit: 'portion' },
      { name: 'Fresh Aromatics & Herbs', amount: 1, unit: 'bunch' },
      { name: 'Seasoning & Sea Salt', amount: 1, unit: 'to taste' }
    ],
    instructions: [
      'Prepare fresh local ingredients and simmer on medium heat.',
      'Allow flavors to develop gracefully, check seasoning, and serve hot.'
    ]
  },
  // Weight Gain & Muscle Building Meal 5
  {
    id: 'rec-hl-wg-5',
    name: 'Boiled White Yam with Corned Beef & Egg Sauce',
    category: 'Breakfast',
    servings: 2,
    preparationTime: 12,
    cookingTime: 16,
    estimatedCostPerServing: 1100,
    costCurrency: 'NGN',
    calories: 610,
    protein: '31g',
    carbs: '73g',
    fat: '15g',
    fiber: '9g',
    studentFriendly: true,
    studentCategories: ['Quick Meals Between Lectures', 'Student Budget Meals', 'Hostel Kitchen'],
    weightFriendly: false,
    weightGoal: 'Weight Gain & Muscle Building',
    equipmentRequired: ['Single hot plate', 'Electric kettle'],
    storageRequirements: 'Store in covered bowl; reheats easily on hostel hot plate.',
    image: '/meals/boli-groundnuts.jpg',
    description: 'Boiled White Yam with Corned Beef & Egg Sauce. Calorie-dense, high-protein Nigerian meals loaded with healthy fats, complex carbs, and nutrient volume.',
    whyThisMeal: 'Starch-dense puna yam bathed in savory corned beef protein and whole egg lipids.',
    dietaryTags: ['Nigerian Classic', 'Weight Gain & Muscle Building'],
    allergens: [],
    nutritionalInfo: {
      calories: 610,
      protein: '31g',
      carbs: '73g',
      fat: '15g',
      fiber: '9g',
      keyNutrients: 'Essential vitamins, bioactive plant nutrients, and balanced macronutrients'
    },
    ingredients: [
      { name: 'Core Nigerian Ingredients', amount: 1, unit: 'portion' },
      { name: 'Fresh Aromatics & Herbs', amount: 1, unit: 'bunch' },
      { name: 'Seasoning & Sea Salt', amount: 1, unit: 'to taste' }
    ],
    instructions: [
      'Prepare fresh local ingredients and simmer on medium heat.',
      'Allow flavors to develop gracefully, check seasoning, and serve hot.'
    ]
  },
  // Weight Gain & Muscle Building Meal 6
  {
    id: 'rec-hl-wg-6',
    name: 'Rich Egusi Soup with Assorted Meats & Pounded Yam',
    category: 'Lunch',
    servings: 2,
    preparationTime: 20,
    cookingTime: 24,
    estimatedCostPerServing: 1600,
    costCurrency: 'NGN',
    calories: 780,
    protein: '39g',
    carbs: '94g',
    fat: '20g',
    fiber: '12g',
    studentFriendly: true,
    studentCategories: ['Quick Meals Between Lectures', 'Student Budget Meals', 'Hostel Kitchen'],
    weightFriendly: false,
    weightGoal: 'Weight Gain & Muscle Building',
    equipmentRequired: ['Single hot plate', 'Electric kettle'],
    storageRequirements: 'Store in covered bowl; reheats easily on hostel hot plate.',
    image: '/meals/egusi-soup.jpg',
    description: 'Rich Egusi Soup with Assorted Meats & Pounded Yam. Calorie-dense, high-protein Nigerian meals loaded with healthy fats, complex carbs, and nutrient volume.',
    whyThisMeal: 'Ground melon seed oils and dense pounded yam offer an exceptional anabolic calorie surplus.',
    dietaryTags: ['Nigerian Classic', 'Weight Gain & Muscle Building'],
    allergens: [],
    nutritionalInfo: {
      calories: 780,
      protein: '39g',
      carbs: '94g',
      fat: '20g',
      fiber: '12g',
      keyNutrients: 'Essential vitamins, bioactive plant nutrients, and balanced macronutrients'
    },
    ingredients: [
      { name: 'Core Nigerian Ingredients', amount: 1, unit: 'portion' },
      { name: 'Fresh Aromatics & Herbs', amount: 1, unit: 'bunch' },
      { name: 'Seasoning & Sea Salt', amount: 1, unit: 'to taste' }
    ],
    instructions: [
      'Prepare fresh local ingredients and simmer on medium heat.',
      'Allow flavors to develop gracefully, check seasoning, and serve hot.'
    ]
  },
  // Weight Gain & Muscle Building Meal 7
  {
    id: 'rec-hl-wg-7',
    name: 'Artisan Smokey Jollof Rice with Fried Chicken Thigh & Dodo',
    category: 'Lunch',
    servings: 2,
    preparationTime: 22,
    cookingTime: 26,
    estimatedCostPerServing: 1500,
    costCurrency: 'NGN',
    calories: 740,
    protein: '37g',
    carbs: '89g',
    fat: '19g',
    fiber: '11g',
    studentFriendly: true,
    studentCategories: ['Quick Meals Between Lectures', 'Student Budget Meals', 'Hostel Kitchen'],
    weightFriendly: false,
    weightGoal: 'Weight Gain & Muscle Building',
    equipmentRequired: ['Single hot plate', 'Electric kettle'],
    storageRequirements: 'Store in covered bowl; reheats easily on hostel hot plate.',
    image: '/meals/jollof-rice.jpg',
    description: 'Artisan Smokey Jollof Rice with Fried Chicken Thigh & Dodo. Calorie-dense, high-protein Nigerian meals loaded with healthy fats, complex carbs, and nutrient volume.',
    whyThisMeal: 'Classic high-calorie Nigerian combo packed with delicious flavors for building muscle mass.',
    dietaryTags: ['Nigerian Classic', 'Weight Gain & Muscle Building'],
    allergens: [],
    nutritionalInfo: {
      calories: 740,
      protein: '37g',
      carbs: '89g',
      fat: '19g',
      fiber: '11g',
      keyNutrients: 'Essential vitamins, bioactive plant nutrients, and balanced macronutrients'
    },
    ingredients: [
      { name: 'Core Nigerian Ingredients', amount: 1, unit: 'portion' },
      { name: 'Fresh Aromatics & Herbs', amount: 1, unit: 'bunch' },
      { name: 'Seasoning & Sea Salt', amount: 1, unit: 'to taste' }
    ],
    instructions: [
      'Prepare fresh local ingredients and simmer on medium heat.',
      'Allow flavors to develop gracefully, check seasoning, and serve hot.'
    ]
  },
  // Weight Gain & Muscle Building Meal 8
  {
    id: 'rec-hl-wg-8',
    name: 'Ofada Rice with Ayamase Designer Meat Sauce & 2 Boiled Eggs',
    category: 'Lunch',
    servings: 2,
    preparationTime: 25,
    cookingTime: 29,
    estimatedCostPerServing: 1700,
    costCurrency: 'NGN',
    calories: 720,
    protein: '36g',
    carbs: '86g',
    fat: '18g',
    fiber: '11g',
    studentFriendly: true,
    studentCategories: ['Quick Meals Between Lectures', 'Student Budget Meals', 'Hostel Kitchen'],
    weightFriendly: false,
    weightGoal: 'Weight Gain & Muscle Building',
    equipmentRequired: ['Single hot plate', 'Electric kettle'],
    storageRequirements: 'Store in covered bowl; reheats easily on hostel hot plate.',
    image: '/meals/ofada-rice.jpg',
    description: 'Ofada Rice with Ayamase Designer Meat Sauce & 2 Boiled Eggs. Calorie-dense, high-protein Nigerian meals loaded with healthy fats, complex carbs, and nutrient volume.',
    whyThisMeal: 'Unpolished whole Ofada rice with rich bleached palm oil pepper sauce and assorted beef.',
    dietaryTags: ['Nigerian Classic', 'Weight Gain & Muscle Building'],
    allergens: [],
    nutritionalInfo: {
      calories: 720,
      protein: '36g',
      carbs: '86g',
      fat: '18g',
      fiber: '11g',
      keyNutrients: 'Essential vitamins, bioactive plant nutrients, and balanced macronutrients'
    },
    ingredients: [
      { name: 'Core Nigerian Ingredients', amount: 1, unit: 'portion' },
      { name: 'Fresh Aromatics & Herbs', amount: 1, unit: 'bunch' },
      { name: 'Seasoning & Sea Salt', amount: 1, unit: 'to taste' }
    ],
    instructions: [
      'Prepare fresh local ingredients and simmer on medium heat.',
      'Allow flavors to develop gracefully, check seasoning, and serve hot.'
    ]
  },
  // Weight Gain & Muscle Building Meal 9
  {
    id: 'rec-hl-wg-9',
    name: 'Nigerian Fried Rice with Liver Bites & Grilled Chicken Leg',
    category: 'Lunch',
    servings: 2,
    preparationTime: 20,
    cookingTime: 24,
    estimatedCostPerServing: 1450,
    costCurrency: 'NGN',
    calories: 690,
    protein: '35g',
    carbs: '83g',
    fat: '17g',
    fiber: '10g',
    studentFriendly: true,
    studentCategories: ['Quick Meals Between Lectures', 'Student Budget Meals', 'Hostel Kitchen'],
    weightFriendly: false,
    weightGoal: 'Weight Gain & Muscle Building',
    equipmentRequired: ['Single hot plate', 'Electric kettle'],
    storageRequirements: 'Store in covered bowl; reheats easily on hostel hot plate.',
    image: 'https://images.unsplash.com/photo-1665332111329-dd9d7fa46c74?w=900&auto=format&fit=crop&q=85',
    description: 'Nigerian Fried Rice with Liver Bites & Grilled Chicken Leg. Calorie-dense, high-protein Nigerian meals loaded with healthy fats, complex carbs, and nutrient volume.',
    whyThisMeal: 'Nutrient-dense organ meats provide zinc, B12, and iron alongside energy-dense rice.',
    dietaryTags: ['Nigerian Classic', 'Weight Gain & Muscle Building'],
    allergens: [],
    nutritionalInfo: {
      calories: 690,
      protein: '35g',
      carbs: '83g',
      fat: '17g',
      fiber: '10g',
      keyNutrients: 'Essential vitamins, bioactive plant nutrients, and balanced macronutrients'
    },
    ingredients: [
      { name: 'Core Nigerian Ingredients', amount: 1, unit: 'portion' },
      { name: 'Fresh Aromatics & Herbs', amount: 1, unit: 'bunch' },
      { name: 'Seasoning & Sea Salt', amount: 1, unit: 'to taste' }
    ],
    instructions: [
      'Prepare fresh local ingredients and simmer on medium heat.',
      'Allow flavors to develop gracefully, check seasoning, and serve hot.'
    ]
  },
  // Weight Gain & Muscle Building Meal 10
  {
    id: 'rec-hl-wg-10',
    name: 'Beans Porridge with Sweet Plantain & Pan-Fried Titus Fish',
    category: 'Lunch',
    servings: 2,
    preparationTime: 22,
    cookingTime: 26,
    estimatedCostPerServing: 1250,
    costCurrency: 'NGN',
    calories: 680,
    protein: '34g',
    carbs: '82g',
    fat: '17g',
    fiber: '10g',
    studentFriendly: true,
    studentCategories: ['Quick Meals Between Lectures', 'Student Budget Meals', 'Hostel Kitchen'],
    weightFriendly: false,
    weightGoal: 'Weight Gain & Muscle Building',
    equipmentRequired: ['Single hot plate', 'Electric kettle'],
    storageRequirements: 'Store in covered bowl; reheats easily on hostel hot plate.',
    image: '/meals/stewed-beans-plantains.jpg',
    description: 'Beans Porridge with Sweet Plantain & Pan-Fried Titus Fish. Calorie-dense, high-protein Nigerian meals loaded with healthy fats, complex carbs, and nutrient volume.',
    whyThisMeal: 'Supercharged pairing of plant pulses and fatty oceanic mackerel for lean tissue synthesis.',
    dietaryTags: ['Nigerian Classic', 'Weight Gain & Muscle Building'],
    allergens: [],
    nutritionalInfo: {
      calories: 680,
      protein: '34g',
      carbs: '82g',
      fat: '17g',
      fiber: '10g',
      keyNutrients: 'Essential vitamins, bioactive plant nutrients, and balanced macronutrients'
    },
    ingredients: [
      { name: 'Core Nigerian Ingredients', amount: 1, unit: 'portion' },
      { name: 'Fresh Aromatics & Herbs', amount: 1, unit: 'bunch' },
      { name: 'Seasoning & Sea Salt', amount: 1, unit: 'to taste' }
    ],
    instructions: [
      'Prepare fresh local ingredients and simmer on medium heat.',
      'Allow flavors to develop gracefully, check seasoning, and serve hot.'
    ]
  },
  // Weight Gain & Muscle Building Meal 11
  {
    id: 'rec-hl-wg-11',
    name: 'Creamy Yam Pottage (Asaro) with Palm Oil, Beef & Smoked Fish',
    category: 'Dinner',
    servings: 2,
    preparationTime: 18,
    cookingTime: 22,
    estimatedCostPerServing: 1200,
    costCurrency: 'NGN',
    calories: 630,
    protein: '32g',
    carbs: '76g',
    fat: '16g',
    fiber: '9g',
    studentFriendly: true,
    studentCategories: ['Quick Meals Between Lectures', 'Student Budget Meals', 'Hostel Kitchen'],
    weightFriendly: false,
    weightGoal: 'Weight Gain & Muscle Building',
    equipmentRequired: ['Single hot plate', 'Electric kettle'],
    storageRequirements: 'Store in covered bowl; reheats easily on hostel hot plate.',
    image: '/meals/asaro-elepo.jpg',
    description: 'Creamy Yam Pottage (Asaro) with Palm Oil, Beef & Smoked Fish. Calorie-dense, high-protein Nigerian meals loaded with healthy fats, complex carbs, and nutrient volume.',
    whyThisMeal: 'Rich slow-burning carbohydrates that support overnight glycogen replenishing.',
    dietaryTags: ['Nigerian Classic', 'Weight Gain & Muscle Building'],
    allergens: [],
    nutritionalInfo: {
      calories: 630,
      protein: '32g',
      carbs: '76g',
      fat: '16g',
      fiber: '9g',
      keyNutrients: 'Essential vitamins, bioactive plant nutrients, and balanced macronutrients'
    },
    ingredients: [
      { name: 'Core Nigerian Ingredients', amount: 1, unit: 'portion' },
      { name: 'Fresh Aromatics & Herbs', amount: 1, unit: 'bunch' },
      { name: 'Seasoning & Sea Salt', amount: 1, unit: 'to taste' }
    ],
    instructions: [
      'Prepare fresh local ingredients and simmer on medium heat.',
      'Allow flavors to develop gracefully, check seasoning, and serve hot.'
    ]
  },
  // Weight Gain & Muscle Building Meal 12
  {
    id: 'rec-hl-wg-12',
    name: 'Jollof Spaghetti with Sausage Slices & Boiled Eggs',
    category: 'Dinner',
    servings: 2,
    preparationTime: 15,
    cookingTime: 19,
    estimatedCostPerServing: 850,
    costCurrency: 'NGN',
    calories: 620,
    protein: '31g',
    carbs: '74g',
    fat: '16g',
    fiber: '9g',
    studentFriendly: true,
    studentCategories: ['Quick Meals Between Lectures', 'Student Budget Meals', 'Hostel Kitchen'],
    weightFriendly: false,
    weightGoal: 'Weight Gain & Muscle Building',
    equipmentRequired: ['Single hot plate', 'Electric kettle'],
    storageRequirements: 'Store in covered bowl; reheats easily on hostel hot plate.',
    image: '/meals/jollof-rice.jpg',
    description: 'Jollof Spaghetti with Sausage Slices & Boiled Eggs. Calorie-dense, high-protein Nigerian meals loaded with healthy fats, complex carbs, and nutrient volume.',
    whyThisMeal: 'Easy, fast student dinner with multiple protein sources to assist physical recovery.',
    dietaryTags: ['Nigerian Classic', 'Weight Gain & Muscle Building'],
    allergens: [],
    nutritionalInfo: {
      calories: 620,
      protein: '31g',
      carbs: '74g',
      fat: '16g',
      fiber: '9g',
      keyNutrients: 'Essential vitamins, bioactive plant nutrients, and balanced macronutrients'
    },
    ingredients: [
      { name: 'Core Nigerian Ingredients', amount: 1, unit: 'portion' },
      { name: 'Fresh Aromatics & Herbs', amount: 1, unit: 'bunch' },
      { name: 'Seasoning & Sea Salt', amount: 1, unit: 'to taste' }
    ],
    instructions: [
      'Prepare fresh local ingredients and simmer on medium heat.',
      'Allow flavors to develop gracefully, check seasoning, and serve hot.'
    ]
  },
  // Weight Gain & Muscle Building Meal 13
  {
    id: 'rec-hl-wg-13',
    name: 'Eba (Yellow Garri Swallow) with Rich Ogbono Okra & Beef Stew',
    category: 'Dinner',
    servings: 2,
    preparationTime: 16,
    cookingTime: 20,
    estimatedCostPerServing: 1350,
    costCurrency: 'NGN',
    calories: 690,
    protein: '35g',
    carbs: '83g',
    fat: '17g',
    fiber: '10g',
    studentFriendly: true,
    studentCategories: ['Quick Meals Between Lectures', 'Student Budget Meals', 'Hostel Kitchen'],
    weightFriendly: false,
    weightGoal: 'Weight Gain & Muscle Building',
    equipmentRequired: ['Single hot plate', 'Electric kettle'],
    storageRequirements: 'Store in covered bowl; reheats easily on hostel hot plate.',
    image: '/meals/okro-soup.jpg',
    description: 'Eba (Yellow Garri Swallow) with Rich Ogbono Okra & Beef Stew. Calorie-dense, high-protein Nigerian meals loaded with healthy fats, complex carbs, and nutrient volume.',
    whyThisMeal: 'Ogbono seeds are rich in fatty acids, creating a viscous high-calorie soup.',
    dietaryTags: ['Nigerian Classic', 'Weight Gain & Muscle Building'],
    allergens: [],
    nutritionalInfo: {
      calories: 690,
      protein: '35g',
      carbs: '83g',
      fat: '17g',
      fiber: '10g',
      keyNutrients: 'Essential vitamins, bioactive plant nutrients, and balanced macronutrients'
    },
    ingredients: [
      { name: 'Core Nigerian Ingredients', amount: 1, unit: 'portion' },
      { name: 'Fresh Aromatics & Herbs', amount: 1, unit: 'bunch' },
      { name: 'Seasoning & Sea Salt', amount: 1, unit: 'to taste' }
    ],
    instructions: [
      'Prepare fresh local ingredients and simmer on medium heat.',
      'Allow flavors to develop gracefully, check seasoning, and serve hot.'
    ]
  },
  // Weight Gain & Muscle Building Meal 14
  {
    id: 'rec-hl-wg-14',
    name: 'Thick Geisha Mackerel Jollof Macaroni with Fried Eggs',
    category: 'Dinner',
    servings: 2,
    preparationTime: 14,
    cookingTime: 18,
    estimatedCostPerServing: 950,
    costCurrency: 'NGN',
    calories: 640,
    protein: '32g',
    carbs: '77g',
    fat: '16g',
    fiber: '10g',
    studentFriendly: true,
    studentCategories: ['Quick Meals Between Lectures', 'Student Budget Meals', 'Hostel Kitchen'],
    weightFriendly: false,
    weightGoal: 'Weight Gain & Muscle Building',
    equipmentRequired: ['Single hot plate', 'Electric kettle'],
    storageRequirements: 'Store in covered bowl; reheats easily on hostel hot plate.',
    image: '/meals/jollof-rice.jpg',
    description: 'Thick Geisha Mackerel Jollof Macaroni with Fried Eggs. Calorie-dense, high-protein Nigerian meals loaded with healthy fats, complex carbs, and nutrient volume.',
    whyThisMeal: 'Quick calorie-dense dinner packed with marine oils and bioavailable egg protein.',
    dietaryTags: ['Nigerian Classic', 'Weight Gain & Muscle Building'],
    allergens: [],
    nutritionalInfo: {
      calories: 640,
      protein: '32g',
      carbs: '77g',
      fat: '16g',
      fiber: '10g',
      keyNutrients: 'Essential vitamins, bioactive plant nutrients, and balanced macronutrients'
    },
    ingredients: [
      { name: 'Core Nigerian Ingredients', amount: 1, unit: 'portion' },
      { name: 'Fresh Aromatics & Herbs', amount: 1, unit: 'bunch' },
      { name: 'Seasoning & Sea Salt', amount: 1, unit: 'to taste' }
    ],
    instructions: [
      'Prepare fresh local ingredients and simmer on medium heat.',
      'Allow flavors to develop gracefully, check seasoning, and serve hot.'
    ]
  },
  // Weight Gain & Muscle Building Meal 15
  {
    id: 'rec-hl-wg-15',
    name: 'Catfish Pepper Soup with Generous Boiled Yam Chunks',
    category: 'Dinner',
    servings: 2,
    preparationTime: 18,
    cookingTime: 22,
    estimatedCostPerServing: 1500,
    costCurrency: 'NGN',
    calories: 540,
    protein: '27g',
    carbs: '65g',
    fat: '14g',
    fiber: '8g',
    studentFriendly: true,
    studentCategories: ['Quick Meals Between Lectures', 'Student Budget Meals', 'Hostel Kitchen'],
    weightFriendly: false,
    weightGoal: 'Weight Gain & Muscle Building',
    equipmentRequired: ['Single hot plate', 'Electric kettle'],
    storageRequirements: 'Store in covered bowl; reheats easily on hostel hot plate.',
    image: '/meals/catfish-peppersoup.jpg',
    description: 'Catfish Pepper Soup with Generous Boiled Yam Chunks. Calorie-dense, high-protein Nigerian meals loaded with healthy fats, complex carbs, and nutrient volume.',
    whyThisMeal: 'Hearty restorative dinner rich in amino acids and satisfying yam starches.',
    dietaryTags: ['Nigerian Classic', 'Weight Gain & Muscle Building'],
    allergens: [],
    nutritionalInfo: {
      calories: 540,
      protein: '27g',
      carbs: '65g',
      fat: '14g',
      fiber: '8g',
      keyNutrients: 'Essential vitamins, bioactive plant nutrients, and balanced macronutrients'
    },
    ingredients: [
      { name: 'Core Nigerian Ingredients', amount: 1, unit: 'portion' },
      { name: 'Fresh Aromatics & Herbs', amount: 1, unit: 'bunch' },
      { name: 'Seasoning & Sea Salt', amount: 1, unit: 'to taste' }
    ],
    instructions: [
      'Prepare fresh local ingredients and simmer on medium heat.',
      'Allow flavors to develop gracefully, check seasoning, and serve hot.'
    ]
  },
  // Weight Gain & Muscle Building Meal 16
  {
    id: 'rec-hl-wg-16',
    name: 'Roasted Boli (Plantain) with Heaping Golden Groundnuts',
    category: 'Snacks',
    servings: 2,
    preparationTime: 10,
    cookingTime: 14,
    estimatedCostPerServing: 600,
    costCurrency: 'NGN',
    calories: 480,
    protein: '24g',
    carbs: '58g',
    fat: '12g',
    fiber: '7g',
    studentFriendly: true,
    studentCategories: ['Quick Meals Between Lectures', 'Student Budget Meals', 'Hostel Kitchen'],
    weightFriendly: false,
    weightGoal: 'Weight Gain & Muscle Building',
    equipmentRequired: ['Single hot plate', 'Electric kettle'],
    storageRequirements: 'Store in covered bowl; reheats easily on hostel hot plate.',
    image: '/meals/boli-groundnuts.jpg',
    description: 'Roasted Boli (Plantain) with Heaping Golden Groundnuts. Calorie-dense, high-protein Nigerian meals loaded with healthy fats, complex carbs, and nutrient volume.',
    whyThisMeal: 'Classic high-density street snack providing clean carbohydrates and healthy peanut fats.',
    dietaryTags: ['Nigerian Classic', 'Weight Gain & Muscle Building'],
    allergens: [],
    nutritionalInfo: {
      calories: 480,
      protein: '24g',
      carbs: '58g',
      fat: '12g',
      fiber: '7g',
      keyNutrients: 'Essential vitamins, bioactive plant nutrients, and balanced macronutrients'
    },
    ingredients: [
      { name: 'Core Nigerian Ingredients', amount: 1, unit: 'portion' },
      { name: 'Fresh Aromatics & Herbs', amount: 1, unit: 'bunch' },
      { name: 'Seasoning & Sea Salt', amount: 1, unit: 'to taste' }
    ],
    instructions: [
      'Prepare fresh local ingredients and simmer on medium heat.',
      'Allow flavors to develop gracefully, check seasoning, and serve hot.'
    ]
  },
  // Weight Gain & Muscle Building Meal 17
  {
    id: 'rec-hl-wg-17',
    name: 'Soaked Ijebu Garri with Whole Milk, Sugar & Roasted Groundnuts',
    category: 'Snacks',
    servings: 2,
    preparationTime: 3,
    cookingTime: 7,
    estimatedCostPerServing: 400,
    costCurrency: 'NGN',
    calories: 460,
    protein: '23g',
    carbs: '55g',
    fat: '12g',
    fiber: '7g',
    studentFriendly: true,
    studentCategories: ['Quick Meals Between Lectures', 'Student Budget Meals', 'Hostel Kitchen'],
    weightFriendly: false,
    weightGoal: 'Weight Gain & Muscle Building',
    equipmentRequired: ['Single hot plate', 'Electric kettle'],
    storageRequirements: 'Store in covered bowl; reheats easily on hostel hot plate.',
    image: '/meals/garri.jpg',
    description: 'Soaked Ijebu Garri with Whole Milk, Sugar & Roasted Groundnuts. Calorie-dense, high-protein Nigerian meals loaded with healthy fats, complex carbs, and nutrient volume.',
    whyThisMeal: 'Instant student calorie boost ready in 2 minutes without cooking appliances.',
    dietaryTags: ['Nigerian Classic', 'Weight Gain & Muscle Building'],
    allergens: [],
    nutritionalInfo: {
      calories: 460,
      protein: '23g',
      carbs: '55g',
      fat: '12g',
      fiber: '7g',
      keyNutrients: 'Essential vitamins, bioactive plant nutrients, and balanced macronutrients'
    },
    ingredients: [
      { name: 'Core Nigerian Ingredients', amount: 1, unit: 'portion' },
      { name: 'Fresh Aromatics & Herbs', amount: 1, unit: 'bunch' },
      { name: 'Seasoning & Sea Salt', amount: 1, unit: 'to taste' }
    ],
    instructions: [
      'Prepare fresh local ingredients and simmer on medium heat.',
      'Allow flavors to develop gracefully, check seasoning, and serve hot.'
    ]
  },
  // Weight Gain & Muscle Building Meal 18
  {
    id: 'rec-hl-wg-18',
    name: 'Crunchy Spiced Chin Chin Snack Bowl',
    category: 'Snacks',
    servings: 2,
    preparationTime: 15,
    cookingTime: 19,
    estimatedCostPerServing: 450,
    costCurrency: 'NGN',
    calories: 420,
    protein: '21g',
    carbs: '50g',
    fat: '11g',
    fiber: '6g',
    studentFriendly: true,
    studentCategories: ['Quick Meals Between Lectures', 'Student Budget Meals', 'Hostel Kitchen'],
    weightFriendly: false,
    weightGoal: 'Weight Gain & Muscle Building',
    equipmentRequired: ['Single hot plate', 'Electric kettle'],
    storageRequirements: 'Store in covered bowl; reheats easily on hostel hot plate.',
    image: '/meals/puffpuff.jpg',
    description: 'Crunchy Spiced Chin Chin Snack Bowl. Calorie-dense, high-protein Nigerian meals loaded with healthy fats, complex carbs, and nutrient volume.',
    whyThisMeal: 'Energy-dense snack ideal for fueling library study marathons.',
    dietaryTags: ['Nigerian Classic', 'Weight Gain & Muscle Building'],
    allergens: [],
    nutritionalInfo: {
      calories: 420,
      protein: '21g',
      carbs: '50g',
      fat: '11g',
      fiber: '6g',
      keyNutrients: 'Essential vitamins, bioactive plant nutrients, and balanced macronutrients'
    },
    ingredients: [
      { name: 'Core Nigerian Ingredients', amount: 1, unit: 'portion' },
      { name: 'Fresh Aromatics & Herbs', amount: 1, unit: 'bunch' },
      { name: 'Seasoning & Sea Salt', amount: 1, unit: 'to taste' }
    ],
    instructions: [
      'Prepare fresh local ingredients and simmer on medium heat.',
      'Allow flavors to develop gracefully, check seasoning, and serve hot.'
    ]
  },
  // Weight Gain & Muscle Building Meal 19
  {
    id: 'rec-hl-wg-19',
    name: 'Spicy Gizdodo (Gizzard & Fried Sweet Plantain Bites)',
    category: 'Appetizers & Sides',
    servings: 2,
    preparationTime: 16,
    cookingTime: 20,
    estimatedCostPerServing: 1200,
    costCurrency: 'NGN',
    calories: 490,
    protein: '25g',
    carbs: '59g',
    fat: '12g',
    fiber: '7g',
    studentFriendly: true,
    studentCategories: ['Quick Meals Between Lectures', 'Student Budget Meals', 'Hostel Kitchen'],
    weightFriendly: false,
    weightGoal: 'Weight Gain & Muscle Building',
    equipmentRequired: ['Single hot plate', 'Electric kettle'],
    storageRequirements: 'Store in covered bowl; reheats easily on hostel hot plate.',
    image: '/meals/gizdodo.jpg',
    description: 'Spicy Gizdodo (Gizzard & Fried Sweet Plantain Bites). Calorie-dense, high-protein Nigerian meals loaded with healthy fats, complex carbs, and nutrient volume.',
    whyThisMeal: 'Protein-packed poultry gizzard and sweet caramelized plantain tossed in savory pepper.',
    dietaryTags: ['Nigerian Classic', 'Weight Gain & Muscle Building'],
    allergens: [],
    nutritionalInfo: {
      calories: 490,
      protein: '25g',
      carbs: '59g',
      fat: '12g',
      fiber: '7g',
      keyNutrients: 'Essential vitamins, bioactive plant nutrients, and balanced macronutrients'
    },
    ingredients: [
      { name: 'Core Nigerian Ingredients', amount: 1, unit: 'portion' },
      { name: 'Fresh Aromatics & Herbs', amount: 1, unit: 'bunch' },
      { name: 'Seasoning & Sea Salt', amount: 1, unit: 'to taste' }
    ],
    instructions: [
      'Prepare fresh local ingredients and simmer on medium heat.',
      'Allow flavors to develop gracefully, check seasoning, and serve hot.'
    ]
  },
  // Weight Gain & Muscle Building Meal 20
  {
    id: 'rec-hl-wg-20',
    name: 'Creamy Kunu Aya (Tiger Nut, Coconut & Date Milk Shake)',
    category: 'Juices & Smoothies',
    servings: 2,
    preparationTime: 8,
    cookingTime: 12,
    estimatedCostPerServing: 600,
    costCurrency: 'NGN',
    calories: 320,
    protein: '16g',
    carbs: '38g',
    fat: '8g',
    fiber: '5g',
    studentFriendly: true,
    studentCategories: ['Quick Meals Between Lectures', 'Student Budget Meals', 'Hostel Kitchen'],
    weightFriendly: false,
    weightGoal: 'Weight Gain & Muscle Building',
    equipmentRequired: ['Single hot plate', 'Electric kettle'],
    storageRequirements: 'Store in covered bowl; reheats easily on hostel hot plate.',
    image: '/meals/kunu-aya.jpg',
    description: 'Creamy Kunu Aya (Tiger Nut, Coconut & Date Milk Shake). Calorie-dense, high-protein Nigerian meals loaded with healthy fats, complex carbs, and nutrient volume.',
    whyThisMeal: 'Rich plant-based whole milk pressed with coconut oils and dates for clean weight gain.',
    dietaryTags: ['Nigerian Classic', 'Weight Gain & Muscle Building'],
    allergens: [],
    nutritionalInfo: {
      calories: 320,
      protein: '16g',
      carbs: '38g',
      fat: '8g',
      fiber: '5g',
      keyNutrients: 'Essential vitamins, bioactive plant nutrients, and balanced macronutrients'
    },
    ingredients: [
      { name: 'Core Nigerian Ingredients', amount: 1, unit: 'portion' },
      { name: 'Fresh Aromatics & Herbs', amount: 1, unit: 'bunch' },
      { name: 'Seasoning & Sea Salt', amount: 1, unit: 'to taste' }
    ],
    instructions: [
      'Prepare fresh local ingredients and simmer on medium heat.',
      'Allow flavors to develop gracefully, check seasoning, and serve hot.'
    ]
  },
  // Weight Gain & Muscle Building Meal 21
  {
    id: 'rec-hl-wg-21',
    name: 'Avocado Banana Smoothie with Honey & Whole Milk',
    category: 'Juices & Smoothies',
    servings: 2,
    preparationTime: 5,
    cookingTime: 9,
    estimatedCostPerServing: 650,
    costCurrency: 'NGN',
    calories: 380,
    protein: '19g',
    carbs: '46g',
    fat: '10g',
    fiber: '6g',
    studentFriendly: true,
    studentCategories: ['Quick Meals Between Lectures', 'Student Budget Meals', 'Hostel Kitchen'],
    weightFriendly: false,
    weightGoal: 'Weight Gain & Muscle Building',
    equipmentRequired: ['Single hot plate', 'Electric kettle'],
    storageRequirements: 'Store in covered bowl; reheats easily on hostel hot plate.',
    image: '/meals/boli-groundnuts.jpg',
    description: 'Avocado Banana Smoothie with Honey & Whole Milk. Calorie-dense, high-protein Nigerian meals loaded with healthy fats, complex carbs, and nutrient volume.',
    whyThisMeal: 'Smooth drinkable calories with heart-healthy monounsaturated fats.',
    dietaryTags: ['Nigerian Classic', 'Weight Gain & Muscle Building'],
    allergens: [],
    nutritionalInfo: {
      calories: 380,
      protein: '19g',
      carbs: '46g',
      fat: '10g',
      fiber: '6g',
      keyNutrients: 'Essential vitamins, bioactive plant nutrients, and balanced macronutrients'
    },
    ingredients: [
      { name: 'Core Nigerian Ingredients', amount: 1, unit: 'portion' },
      { name: 'Fresh Aromatics & Herbs', amount: 1, unit: 'bunch' },
      { name: 'Seasoning & Sea Salt', amount: 1, unit: 'to taste' }
    ],
    instructions: [
      'Prepare fresh local ingredients and simmer on medium heat.',
      'Allow flavors to develop gracefully, check seasoning, and serve hot.'
    ]
  },
  // Weight Gain & Muscle Building Meal 22
  {
    id: 'rec-hl-wg-22',
    name: 'Warm Fluffy Puff Puff with Honey Glaze',
    category: 'Desserts',
    servings: 2,
    preparationTime: 12,
    cookingTime: 16,
    estimatedCostPerServing: 450,
    costCurrency: 'NGN',
    calories: 340,
    protein: '17g',
    carbs: '41g',
    fat: '9g',
    fiber: '5g',
    studentFriendly: true,
    studentCategories: ['Quick Meals Between Lectures', 'Student Budget Meals', 'Hostel Kitchen'],
    weightFriendly: false,
    weightGoal: 'Weight Gain & Muscle Building',
    equipmentRequired: ['Single hot plate', 'Electric kettle'],
    storageRequirements: 'Store in covered bowl; reheats easily on hostel hot plate.',
    image: '/meals/puffpuff.jpg',
    description: 'Warm Fluffy Puff Puff with Honey Glaze. Calorie-dense, high-protein Nigerian meals loaded with healthy fats, complex carbs, and nutrient volume.',
    whyThisMeal: 'Beloved Nigerian sweet pastry offering quick post-workout carbohydrate replenishment.',
    dietaryTags: ['Nigerian Classic', 'Weight Gain & Muscle Building'],
    allergens: [],
    nutritionalInfo: {
      calories: 340,
      protein: '17g',
      carbs: '41g',
      fat: '9g',
      fiber: '5g',
      keyNutrients: 'Essential vitamins, bioactive plant nutrients, and balanced macronutrients'
    },
    ingredients: [
      { name: 'Core Nigerian Ingredients', amount: 1, unit: 'portion' },
      { name: 'Fresh Aromatics & Herbs', amount: 1, unit: 'bunch' },
      { name: 'Seasoning & Sea Salt', amount: 1, unit: 'to taste' }
    ],
    instructions: [
      'Prepare fresh local ingredients and simmer on medium heat.',
      'Allow flavors to develop gracefully, check seasoning, and serve hot.'
    ]
  },
  // Diabetes & Blood Sugar Control Meal 1
  {
    id: 'rec-hl-db-1',
    name: 'Oat Flour Swallow with Steamed Vegetable Okro Soup',
    category: 'Lunch',
    servings: 2,
    preparationTime: 12,
    cookingTime: 16,
    estimatedCostPerServing: 950,
    costCurrency: 'NGN',
    calories: 320,
    protein: '16g',
    carbs: '38g',
    fat: '8g',
    fiber: '5g',
    studentFriendly: true,
    studentCategories: ['Quick Meals Between Lectures', 'Student Budget Meals', 'Hostel Kitchen'],
    weightFriendly: true,
    weightGoal: 'Diabetes & Blood Sugar Control',
    equipmentRequired: ['Single hot plate', 'Electric kettle'],
    storageRequirements: 'Store in covered bowl; reheats easily on hostel hot plate.',
    image: '/meals/okro-soup.jpg',
    description: 'Oat Flour Swallow with Steamed Vegetable Okro Soup. Low glycemic index meals designed to avoid insulin spikes, improve insulin sensitivity, and sustain blood sugar balance.',
    whyThisMeal: 'Beta-glucan fibers slow glucose diffusion into the bloodstream, minimizing postprandial glycemic excursions.',
    dietaryTags: ['Nigerian Classic', 'Diabetes & Blood Sugar Control'],
    allergens: [],
    nutritionalInfo: {
      calories: 320,
      protein: '16g',
      carbs: '38g',
      fat: '8g',
      fiber: '5g',
      keyNutrients: 'Essential vitamins, bioactive plant nutrients, and balanced macronutrients'
    },
    ingredients: [
      { name: 'Core Nigerian Ingredients', amount: 1, unit: 'portion' },
      { name: 'Fresh Aromatics & Herbs', amount: 1, unit: 'bunch' },
      { name: 'Seasoning & Sea Salt', amount: 1, unit: 'to taste' }
    ],
    instructions: [
      'Prepare fresh local ingredients and simmer on medium heat.',
      'Allow flavors to develop gracefully, check seasoning, and serve hot.'
    ]
  },
  // Diabetes & Blood Sugar Control Meal 2
  {
    id: 'rec-hl-db-2',
    name: 'Boiled Unripe Plantain with Garden Egg & Smoked Fish Stew',
    category: 'Breakfast',
    servings: 2,
    preparationTime: 10,
    cookingTime: 14,
    estimatedCostPerServing: 800,
    costCurrency: 'NGN',
    calories: 280,
    protein: '14g',
    carbs: '34g',
    fat: '7g',
    fiber: '4g',
    studentFriendly: true,
    studentCategories: ['Quick Meals Between Lectures', 'Student Budget Meals', 'Hostel Kitchen'],
    weightFriendly: true,
    weightGoal: 'Diabetes & Blood Sugar Control',
    equipmentRequired: ['Single hot plate', 'Electric kettle'],
    storageRequirements: 'Store in covered bowl; reheats easily on hostel hot plate.',
    image: '/meals/boiled-yam-garden-egg.jpg',
    description: 'Boiled Unripe Plantain with Garden Egg & Smoked Fish Stew. Low glycemic index meals designed to avoid insulin spikes, improve insulin sensitivity, and sustain blood sugar balance.',
    whyThisMeal: 'Unripe plantain is packed with resistant starch that behaves like soluble fiber, significantly flattening blood sugar curves.',
    dietaryTags: ['Nigerian Classic', 'Diabetes & Blood Sugar Control'],
    allergens: [],
    nutritionalInfo: {
      calories: 280,
      protein: '14g',
      carbs: '34g',
      fat: '7g',
      fiber: '4g',
      keyNutrients: 'Essential vitamins, bioactive plant nutrients, and balanced macronutrients'
    },
    ingredients: [
      { name: 'Core Nigerian Ingredients', amount: 1, unit: 'portion' },
      { name: 'Fresh Aromatics & Herbs', amount: 1, unit: 'bunch' },
      { name: 'Seasoning & Sea Salt', amount: 1, unit: 'to taste' }
    ],
    instructions: [
      'Prepare fresh local ingredients and simmer on medium heat.',
      'Allow flavors to develop gracefully, check seasoning, and serve hot.'
    ]
  },
  // Diabetes & Blood Sugar Control Meal 3
  {
    id: 'rec-hl-db-3',
    name: 'Pure Steamed Moi Moi with Titus Fish (No Bouillon Sugar)',
    category: 'Breakfast',
    servings: 2,
    preparationTime: 15,
    cookingTime: 19,
    estimatedCostPerServing: 750,
    costCurrency: 'NGN',
    calories: 290,
    protein: '15g',
    carbs: '35g',
    fat: '7g',
    fiber: '4g',
    studentFriendly: true,
    studentCategories: ['Quick Meals Between Lectures', 'Student Budget Meals', 'Hostel Kitchen'],
    weightFriendly: true,
    weightGoal: 'Diabetes & Blood Sugar Control',
    equipmentRequired: ['Single hot plate', 'Electric kettle'],
    storageRequirements: 'Store in covered bowl; reheats easily on hostel hot plate.',
    image: '/meals/moimoi.jpg',
    description: 'Pure Steamed Moi Moi with Titus Fish (No Bouillon Sugar). Low glycemic index meals designed to avoid insulin spikes, improve insulin sensitivity, and sustain blood sugar balance.',
    whyThisMeal: 'Low glycemic pulse loaded with complex legumes and lean fish that keeps HbA1c in optimal range.',
    dietaryTags: ['Nigerian Classic', 'Diabetes & Blood Sugar Control'],
    allergens: [],
    nutritionalInfo: {
      calories: 290,
      protein: '15g',
      carbs: '35g',
      fat: '7g',
      fiber: '4g',
      keyNutrients: 'Essential vitamins, bioactive plant nutrients, and balanced macronutrients'
    },
    ingredients: [
      { name: 'Core Nigerian Ingredients', amount: 1, unit: 'portion' },
      { name: 'Fresh Aromatics & Herbs', amount: 1, unit: 'bunch' },
      { name: 'Seasoning & Sea Salt', amount: 1, unit: 'to taste' }
    ],
    instructions: [
      'Prepare fresh local ingredients and simmer on medium heat.',
      'Allow flavors to develop gracefully, check seasoning, and serve hot.'
    ]
  },
  // Diabetes & Blood Sugar Control Meal 4
  {
    id: 'rec-hl-db-4',
    name: 'Boiled Egg with Steamed Ugwu Greens & Garlic Dressing',
    category: 'Breakfast',
    servings: 2,
    preparationTime: 6,
    cookingTime: 10,
    estimatedCostPerServing: 450,
    costCurrency: 'NGN',
    calories: 210,
    protein: '11g',
    carbs: '25g',
    fat: '5g',
    fiber: '3g',
    studentFriendly: true,
    studentCategories: ['Quick Meals Between Lectures', 'Student Budget Meals', 'Hostel Kitchen'],
    weightFriendly: true,
    weightGoal: 'Diabetes & Blood Sugar Control',
    equipmentRequired: ['Single hot plate', 'Electric kettle'],
    storageRequirements: 'Store in covered bowl; reheats easily on hostel hot plate.',
    image: '/meals/cabbage-eggs.jpg',
    description: 'Boiled Egg with Steamed Ugwu Greens & Garlic Dressing. Low glycemic index meals designed to avoid insulin spikes, improve insulin sensitivity, and sustain blood sugar balance.',
    whyThisMeal: 'Zero refined sugars, providing lutein, choline, and bioactive allicin that improves insulin receptor sensitivity.',
    dietaryTags: ['Nigerian Classic', 'Diabetes & Blood Sugar Control'],
    allergens: [],
    nutritionalInfo: {
      calories: 210,
      protein: '11g',
      carbs: '25g',
      fat: '5g',
      fiber: '3g',
      keyNutrients: 'Essential vitamins, bioactive plant nutrients, and balanced macronutrients'
    },
    ingredients: [
      { name: 'Core Nigerian Ingredients', amount: 1, unit: 'portion' },
      { name: 'Fresh Aromatics & Herbs', amount: 1, unit: 'bunch' },
      { name: 'Seasoning & Sea Salt', amount: 1, unit: 'to taste' }
    ],
    instructions: [
      'Prepare fresh local ingredients and simmer on medium heat.',
      'Allow flavors to develop gracefully, check seasoning, and serve hot.'
    ]
  },
  // Diabetes & Blood Sugar Control Meal 5
  {
    id: 'rec-hl-db-5',
    name: 'Rolled Oats Porridge with Cinnamon Bark & Chia Seeds',
    category: 'Breakfast',
    servings: 2,
    preparationTime: 5,
    cookingTime: 9,
    estimatedCostPerServing: 500,
    costCurrency: 'NGN',
    calories: 260,
    protein: '13g',
    carbs: '31g',
    fat: '7g',
    fiber: '4g',
    studentFriendly: true,
    studentCategories: ['Quick Meals Between Lectures', 'Student Budget Meals', 'Hostel Kitchen'],
    weightFriendly: true,
    weightGoal: 'Diabetes & Blood Sugar Control',
    equipmentRequired: ['Single hot plate', 'Electric kettle'],
    storageRequirements: 'Store in covered bowl; reheats easily on hostel hot plate.',
    image: '/meals/custard.jpg',
    description: 'Rolled Oats Porridge with Cinnamon Bark & Chia Seeds. Low glycemic index meals designed to avoid insulin spikes, improve insulin sensitivity, and sustain blood sugar balance.',
    whyThisMeal: 'Cinnamaldehyde in ceylon cinnamon mimics insulin action and assists cellular glucose uptake.',
    dietaryTags: ['Nigerian Classic', 'Diabetes & Blood Sugar Control'],
    allergens: [],
    nutritionalInfo: {
      calories: 260,
      protein: '13g',
      carbs: '31g',
      fat: '7g',
      fiber: '4g',
      keyNutrients: 'Essential vitamins, bioactive plant nutrients, and balanced macronutrients'
    },
    ingredients: [
      { name: 'Core Nigerian Ingredients', amount: 1, unit: 'portion' },
      { name: 'Fresh Aromatics & Herbs', amount: 1, unit: 'bunch' },
      { name: 'Seasoning & Sea Salt', amount: 1, unit: 'to taste' }
    ],
    instructions: [
      'Prepare fresh local ingredients and simmer on medium heat.',
      'Allow flavors to develop gracefully, check seasoning, and serve hot.'
    ]
  },
  // Diabetes & Blood Sugar Control Meal 6
  {
    id: 'rec-hl-db-6',
    name: 'Efo Riro (Spinach & Locust Bean Stew) with Broiled Fish',
    category: 'Lunch',
    servings: 2,
    preparationTime: 14,
    cookingTime: 18,
    estimatedCostPerServing: 1200,
    costCurrency: 'NGN',
    calories: 340,
    protein: '17g',
    carbs: '41g',
    fat: '9g',
    fiber: '5g',
    studentFriendly: true,
    studentCategories: ['Quick Meals Between Lectures', 'Student Budget Meals', 'Hostel Kitchen'],
    weightFriendly: true,
    weightGoal: 'Diabetes & Blood Sugar Control',
    equipmentRequired: ['Single hot plate', 'Electric kettle'],
    storageRequirements: 'Store in covered bowl; reheats easily on hostel hot plate.',
    image: '/meals/efo-riro.jpg',
    description: 'Efo Riro (Spinach & Locust Bean Stew) with Broiled Fish. Low glycemic index meals designed to avoid insulin spikes, improve insulin sensitivity, and sustain blood sugar balance.',
    whyThisMeal: 'Fermented locust beans (iru) and spinach greens provide magnesium, a vital co-factor for insulin enzymes.',
    dietaryTags: ['Nigerian Classic', 'Diabetes & Blood Sugar Control'],
    allergens: [],
    nutritionalInfo: {
      calories: 340,
      protein: '17g',
      carbs: '41g',
      fat: '9g',
      fiber: '5g',
      keyNutrients: 'Essential vitamins, bioactive plant nutrients, and balanced macronutrients'
    },
    ingredients: [
      { name: 'Core Nigerian Ingredients', amount: 1, unit: 'portion' },
      { name: 'Fresh Aromatics & Herbs', amount: 1, unit: 'bunch' },
      { name: 'Seasoning & Sea Salt', amount: 1, unit: 'to taste' }
    ],
    instructions: [
      'Prepare fresh local ingredients and simmer on medium heat.',
      'Allow flavors to develop gracefully, check seasoning, and serve hot.'
    ]
  },
  // Diabetes & Blood Sugar Control Meal 7
  {
    id: 'rec-hl-db-7',
    name: 'Brown Honey Beans Pottage with Pure Crayfish & Scent Leaves',
    category: 'Lunch',
    servings: 2,
    preparationTime: 20,
    cookingTime: 24,
    estimatedCostPerServing: 850,
    costCurrency: 'NGN',
    calories: 350,
    protein: '18g',
    carbs: '42g',
    fat: '9g',
    fiber: '5g',
    studentFriendly: true,
    studentCategories: ['Quick Meals Between Lectures', 'Student Budget Meals', 'Hostel Kitchen'],
    weightFriendly: true,
    weightGoal: 'Diabetes & Blood Sugar Control',
    equipmentRequired: ['Single hot plate', 'Electric kettle'],
    storageRequirements: 'Store in covered bowl; reheats easily on hostel hot plate.',
    image: '/meals/stewed-beans-plantains.jpg',
    description: 'Brown Honey Beans Pottage with Pure Crayfish & Scent Leaves. Low glycemic index meals designed to avoid insulin spikes, improve insulin sensitivity, and sustain blood sugar balance.',
    whyThisMeal: 'High amylose pulses offer slow digestive breakdown, preventing rapid glucose spikes.',
    dietaryTags: ['Nigerian Classic', 'Diabetes & Blood Sugar Control'],
    allergens: [],
    nutritionalInfo: {
      calories: 350,
      protein: '18g',
      carbs: '42g',
      fat: '9g',
      fiber: '5g',
      keyNutrients: 'Essential vitamins, bioactive plant nutrients, and balanced macronutrients'
    },
    ingredients: [
      { name: 'Core Nigerian Ingredients', amount: 1, unit: 'portion' },
      { name: 'Fresh Aromatics & Herbs', amount: 1, unit: 'bunch' },
      { name: 'Seasoning & Sea Salt', amount: 1, unit: 'to taste' }
    ],
    instructions: [
      'Prepare fresh local ingredients and simmer on medium heat.',
      'Allow flavors to develop gracefully, check seasoning, and serve hot.'
    ]
  },
  // Diabetes & Blood Sugar Control Meal 8
  {
    id: 'rec-hl-db-8',
    name: 'Fresh Catfish Pepper Soup with Unripe Plantain Batons',
    category: 'Lunch',
    servings: 2,
    preparationTime: 16,
    cookingTime: 20,
    estimatedCostPerServing: 1350,
    costCurrency: 'NGN',
    calories: 310,
    protein: '16g',
    carbs: '37g',
    fat: '8g',
    fiber: '5g',
    studentFriendly: true,
    studentCategories: ['Quick Meals Between Lectures', 'Student Budget Meals', 'Hostel Kitchen'],
    weightFriendly: true,
    weightGoal: 'Diabetes & Blood Sugar Control',
    equipmentRequired: ['Single hot plate', 'Electric kettle'],
    storageRequirements: 'Store in covered bowl; reheats easily on hostel hot plate.',
    image: '/meals/catfish-peppersoup.jpg',
    description: 'Fresh Catfish Pepper Soup with Unripe Plantain Batons. Low glycemic index meals designed to avoid insulin spikes, improve insulin sensitivity, and sustain blood sugar balance.',
    whyThisMeal: 'Low carb, broth-rich meal seasoned with calabash nutmeg and piperine for metabolic regulation.',
    dietaryTags: ['Nigerian Classic', 'Diabetes & Blood Sugar Control'],
    allergens: [],
    nutritionalInfo: {
      calories: 310,
      protein: '16g',
      carbs: '37g',
      fat: '8g',
      fiber: '5g',
      keyNutrients: 'Essential vitamins, bioactive plant nutrients, and balanced macronutrients'
    },
    ingredients: [
      { name: 'Core Nigerian Ingredients', amount: 1, unit: 'portion' },
      { name: 'Fresh Aromatics & Herbs', amount: 1, unit: 'bunch' },
      { name: 'Seasoning & Sea Salt', amount: 1, unit: 'to taste' }
    ],
    instructions: [
      'Prepare fresh local ingredients and simmer on medium heat.',
      'Allow flavors to develop gracefully, check seasoning, and serve hot.'
    ]
  },
  // Diabetes & Blood Sugar Control Meal 9
  {
    id: 'rec-hl-db-9',
    name: 'Ofada Local Brown Rice with Light Vegetable Stew & Titus',
    category: 'Lunch',
    servings: 2,
    preparationTime: 18,
    cookingTime: 22,
    estimatedCostPerServing: 1250,
    costCurrency: 'NGN',
    calories: 380,
    protein: '19g',
    carbs: '46g',
    fat: '10g',
    fiber: '6g',
    studentFriendly: true,
    studentCategories: ['Quick Meals Between Lectures', 'Student Budget Meals', 'Hostel Kitchen'],
    weightFriendly: true,
    weightGoal: 'Diabetes & Blood Sugar Control',
    equipmentRequired: ['Single hot plate', 'Electric kettle'],
    storageRequirements: 'Store in covered bowl; reheats easily on hostel hot plate.',
    image: '/meals/ofada-rice.jpg',
    description: 'Ofada Local Brown Rice with Light Vegetable Stew & Titus. Low glycemic index meals designed to avoid insulin spikes, improve insulin sensitivity, and sustain blood sugar balance.',
    whyThisMeal: 'Unpolished Ofada rice maintains intact bran layer and germ, slowing enzymatic carbohydrate breakdown.',
    dietaryTags: ['Nigerian Classic', 'Diabetes & Blood Sugar Control'],
    allergens: [],
    nutritionalInfo: {
      calories: 380,
      protein: '19g',
      carbs: '46g',
      fat: '10g',
      fiber: '6g',
      keyNutrients: 'Essential vitamins, bioactive plant nutrients, and balanced macronutrients'
    },
    ingredients: [
      { name: 'Core Nigerian Ingredients', amount: 1, unit: 'portion' },
      { name: 'Fresh Aromatics & Herbs', amount: 1, unit: 'bunch' },
      { name: 'Seasoning & Sea Salt', amount: 1, unit: 'to taste' }
    ],
    instructions: [
      'Prepare fresh local ingredients and simmer on medium heat.',
      'Allow flavors to develop gracefully, check seasoning, and serve hot.'
    ]
  },
  // Diabetes & Blood Sugar Control Meal 10
  {
    id: 'rec-hl-db-10',
    name: 'Steamed Cabbage & Carrot Stir-Fry with Sliced Boiled Eggs',
    category: 'Lunch',
    servings: 2,
    preparationTime: 8,
    cookingTime: 12,
    estimatedCostPerServing: 500,
    costCurrency: 'NGN',
    calories: 240,
    protein: '12g',
    carbs: '29g',
    fat: '6g',
    fiber: '4g',
    studentFriendly: true,
    studentCategories: ['Quick Meals Between Lectures', 'Student Budget Meals', 'Hostel Kitchen'],
    weightFriendly: true,
    weightGoal: 'Diabetes & Blood Sugar Control',
    equipmentRequired: ['Single hot plate', 'Electric kettle'],
    storageRequirements: 'Store in covered bowl; reheats easily on hostel hot plate.',
    image: '/meals/cabbage-eggs.jpg',
    description: 'Steamed Cabbage & Carrot Stir-Fry with Sliced Boiled Eggs. Low glycemic index meals designed to avoid insulin spikes, improve insulin sensitivity, and sustain blood sugar balance.',
    whyThisMeal: 'Very low glycemic load meal providing essential antioxidants without sugar elevation.',
    dietaryTags: ['Nigerian Classic', 'Diabetes & Blood Sugar Control'],
    allergens: [],
    nutritionalInfo: {
      calories: 240,
      protein: '12g',
      carbs: '29g',
      fat: '6g',
      fiber: '4g',
      keyNutrients: 'Essential vitamins, bioactive plant nutrients, and balanced macronutrients'
    },
    ingredients: [
      { name: 'Core Nigerian Ingredients', amount: 1, unit: 'portion' },
      { name: 'Fresh Aromatics & Herbs', amount: 1, unit: 'bunch' },
      { name: 'Seasoning & Sea Salt', amount: 1, unit: 'to taste' }
    ],
    instructions: [
      'Prepare fresh local ingredients and simmer on medium heat.',
      'Allow flavors to develop gracefully, check seasoning, and serve hot.'
    ]
  },
  // Diabetes & Blood Sugar Control Meal 11
  {
    id: 'rec-hl-db-11',
    name: 'Grilled Herb Titus Steak with Steamed Ugwu Greens',
    category: 'Dinner',
    servings: 2,
    preparationTime: 12,
    cookingTime: 16,
    estimatedCostPerServing: 1100,
    costCurrency: 'NGN',
    calories: 320,
    protein: '16g',
    carbs: '38g',
    fat: '8g',
    fiber: '5g',
    studentFriendly: true,
    studentCategories: ['Quick Meals Between Lectures', 'Student Budget Meals', 'Hostel Kitchen'],
    weightFriendly: true,
    weightGoal: 'Diabetes & Blood Sugar Control',
    equipmentRequired: ['Single hot plate', 'Electric kettle'],
    storageRequirements: 'Store in covered bowl; reheats easily on hostel hot plate.',
    image: '/meals/white-rice-fish-stew.jpg',
    description: 'Grilled Herb Titus Steak with Steamed Ugwu Greens. Low glycemic index meals designed to avoid insulin spikes, improve insulin sensitivity, and sustain blood sugar balance.',
    whyThisMeal: 'Omega-3 fatty acids lower systemic inflammation associated with insulin resistance.',
    dietaryTags: ['Nigerian Classic', 'Diabetes & Blood Sugar Control'],
    allergens: [],
    nutritionalInfo: {
      calories: 320,
      protein: '16g',
      carbs: '38g',
      fat: '8g',
      fiber: '5g',
      keyNutrients: 'Essential vitamins, bioactive plant nutrients, and balanced macronutrients'
    },
    ingredients: [
      { name: 'Core Nigerian Ingredients', amount: 1, unit: 'portion' },
      { name: 'Fresh Aromatics & Herbs', amount: 1, unit: 'bunch' },
      { name: 'Seasoning & Sea Salt', amount: 1, unit: 'to taste' }
    ],
    instructions: [
      'Prepare fresh local ingredients and simmer on medium heat.',
      'Allow flavors to develop gracefully, check seasoning, and serve hot.'
    ]
  },
  // Diabetes & Blood Sugar Control Meal 12
  {
    id: 'rec-hl-db-12',
    name: 'Okro & Seafood Soup with Light Cabbage Swallow',
    category: 'Dinner',
    servings: 2,
    preparationTime: 14,
    cookingTime: 18,
    estimatedCostPerServing: 1050,
    costCurrency: 'NGN',
    calories: 250,
    protein: '13g',
    carbs: '30g',
    fat: '6g',
    fiber: '4g',
    studentFriendly: true,
    studentCategories: ['Quick Meals Between Lectures', 'Student Budget Meals', 'Hostel Kitchen'],
    weightFriendly: true,
    weightGoal: 'Diabetes & Blood Sugar Control',
    equipmentRequired: ['Single hot plate', 'Electric kettle'],
    storageRequirements: 'Store in covered bowl; reheats easily on hostel hot plate.',
    image: '/meals/okro-soup.jpg',
    description: 'Okro & Seafood Soup with Light Cabbage Swallow. Low glycemic index meals designed to avoid insulin spikes, improve insulin sensitivity, and sustain blood sugar balance.',
    whyThisMeal: 'Virtually starch-free dinner that keeps blood glucose stable and flat throughout sleep.',
    dietaryTags: ['Nigerian Classic', 'Diabetes & Blood Sugar Control'],
    allergens: [],
    nutritionalInfo: {
      calories: 250,
      protein: '13g',
      carbs: '30g',
      fat: '6g',
      fiber: '4g',
      keyNutrients: 'Essential vitamins, bioactive plant nutrients, and balanced macronutrients'
    },
    ingredients: [
      { name: 'Core Nigerian Ingredients', amount: 1, unit: 'portion' },
      { name: 'Fresh Aromatics & Herbs', amount: 1, unit: 'bunch' },
      { name: 'Seasoning & Sea Salt', amount: 1, unit: 'to taste' }
    ],
    instructions: [
      'Prepare fresh local ingredients and simmer on medium heat.',
      'Allow flavors to develop gracefully, check seasoning, and serve hot.'
    ]
  },
  // Diabetes & Blood Sugar Control Meal 13
  {
    id: 'rec-hl-db-13',
    name: 'Tilapia Fish Pepper Soup with Fresh Uziza Leaves',
    category: 'Dinner',
    servings: 2,
    preparationTime: 15,
    cookingTime: 19,
    estimatedCostPerServing: 1200,
    costCurrency: 'NGN',
    calories: 260,
    protein: '13g',
    carbs: '31g',
    fat: '7g',
    fiber: '4g',
    studentFriendly: true,
    studentCategories: ['Quick Meals Between Lectures', 'Student Budget Meals', 'Hostel Kitchen'],
    weightFriendly: true,
    weightGoal: 'Diabetes & Blood Sugar Control',
    equipmentRequired: ['Single hot plate', 'Electric kettle'],
    storageRequirements: 'Store in covered bowl; reheats easily on hostel hot plate.',
    image: '/meals/efo-riro.jpg',
    description: 'Tilapia Fish Pepper Soup with Fresh Uziza Leaves. Low glycemic index meals designed to avoid insulin spikes, improve insulin sensitivity, and sustain blood sugar balance.',
    whyThisMeal: 'Uziza leaves are traditionally documented for their mild anti-hyperglycemic properties.',
    dietaryTags: ['Nigerian Classic', 'Diabetes & Blood Sugar Control'],
    allergens: [],
    nutritionalInfo: {
      calories: 260,
      protein: '13g',
      carbs: '31g',
      fat: '7g',
      fiber: '4g',
      keyNutrients: 'Essential vitamins, bioactive plant nutrients, and balanced macronutrients'
    },
    ingredients: [
      { name: 'Core Nigerian Ingredients', amount: 1, unit: 'portion' },
      { name: 'Fresh Aromatics & Herbs', amount: 1, unit: 'bunch' },
      { name: 'Seasoning & Sea Salt', amount: 1, unit: 'to taste' }
    ],
    instructions: [
      'Prepare fresh local ingredients and simmer on medium heat.',
      'Allow flavors to develop gracefully, check seasoning, and serve hot.'
    ]
  },
  // Diabetes & Blood Sugar Control Meal 14
  {
    id: 'rec-hl-db-14',
    name: 'Boiled Sweet Potato (Small Portion) with Spicy Egg Sauce',
    category: 'Dinner',
    servings: 2,
    preparationTime: 10,
    cookingTime: 14,
    estimatedCostPerServing: 650,
    costCurrency: 'NGN',
    calories: 290,
    protein: '15g',
    carbs: '35g',
    fat: '7g',
    fiber: '4g',
    studentFriendly: true,
    studentCategories: ['Quick Meals Between Lectures', 'Student Budget Meals', 'Hostel Kitchen'],
    weightFriendly: true,
    weightGoal: 'Diabetes & Blood Sugar Control',
    equipmentRequired: ['Single hot plate', 'Electric kettle'],
    storageRequirements: 'Store in covered bowl; reheats easily on hostel hot plate.',
    image: '/meals/sweet-potato-egg-sauce.jpg',
    description: 'Boiled Sweet Potato (Small Portion) with Spicy Egg Sauce. Low glycemic index meals designed to avoid insulin spikes, improve insulin sensitivity, and sustain blood sugar balance.',
    whyThisMeal: 'Controlled portion of low-GI sweet potato paired with protein slows carbohydrate digestion.',
    dietaryTags: ['Nigerian Classic', 'Diabetes & Blood Sugar Control'],
    allergens: [],
    nutritionalInfo: {
      calories: 290,
      protein: '15g',
      carbs: '35g',
      fat: '7g',
      fiber: '4g',
      keyNutrients: 'Essential vitamins, bioactive plant nutrients, and balanced macronutrients'
    },
    ingredients: [
      { name: 'Core Nigerian Ingredients', amount: 1, unit: 'portion' },
      { name: 'Fresh Aromatics & Herbs', amount: 1, unit: 'bunch' },
      { name: 'Seasoning & Sea Salt', amount: 1, unit: 'to taste' }
    ],
    instructions: [
      'Prepare fresh local ingredients and simmer on medium heat.',
      'Allow flavors to develop gracefully, check seasoning, and serve hot.'
    ]
  },
  // Diabetes & Blood Sugar Control Meal 15
  {
    id: 'rec-hl-db-15',
    name: 'Vegetable Smoked Panla Stew with Boiled Unripe Plantain',
    category: 'Dinner',
    servings: 2,
    preparationTime: 14,
    cookingTime: 18,
    estimatedCostPerServing: 850,
    costCurrency: 'NGN',
    calories: 295,
    protein: '15g',
    carbs: '35g',
    fat: '7g',
    fiber: '4g',
    studentFriendly: true,
    studentCategories: ['Quick Meals Between Lectures', 'Student Budget Meals', 'Hostel Kitchen'],
    weightFriendly: true,
    weightGoal: 'Diabetes & Blood Sugar Control',
    equipmentRequired: ['Single hot plate', 'Electric kettle'],
    storageRequirements: 'Store in covered bowl; reheats easily on hostel hot plate.',
    image: '/meals/white-rice-fish-stew.jpg',
    description: 'Vegetable Smoked Panla Stew with Boiled Unripe Plantain. Low glycemic index meals designed to avoid insulin spikes, improve insulin sensitivity, and sustain blood sugar balance.',
    whyThisMeal: 'Resistant starch dinner that improves insulin sensitivity by supporting butyrate-producing gut microbes.',
    dietaryTags: ['Nigerian Classic', 'Diabetes & Blood Sugar Control'],
    allergens: [],
    nutritionalInfo: {
      calories: 295,
      protein: '15g',
      carbs: '35g',
      fat: '7g',
      fiber: '4g',
      keyNutrients: 'Essential vitamins, bioactive plant nutrients, and balanced macronutrients'
    },
    ingredients: [
      { name: 'Core Nigerian Ingredients', amount: 1, unit: 'portion' },
      { name: 'Fresh Aromatics & Herbs', amount: 1, unit: 'bunch' },
      { name: 'Seasoning & Sea Salt', amount: 1, unit: 'to taste' }
    ],
    instructions: [
      'Prepare fresh local ingredients and simmer on medium heat.',
      'Allow flavors to develop gracefully, check seasoning, and serve hot.'
    ]
  },
  // Diabetes & Blood Sugar Control Meal 16
  {
    id: 'rec-hl-db-16',
    name: 'Raw Garden Eggs with Cameroon Pepper Peanut Dip',
    category: 'Snacks',
    servings: 2,
    preparationTime: 3,
    cookingTime: 7,
    estimatedCostPerServing: 300,
    costCurrency: 'NGN',
    calories: 130,
    protein: '7g',
    carbs: '16g',
    fat: '3g',
    fiber: '2g',
    studentFriendly: true,
    studentCategories: ['Quick Meals Between Lectures', 'Student Budget Meals', 'Hostel Kitchen'],
    weightFriendly: true,
    weightGoal: 'Diabetes & Blood Sugar Control',
    equipmentRequired: ['Single hot plate', 'Electric kettle'],
    storageRequirements: 'Store in covered bowl; reheats easily on hostel hot plate.',
    image: '/meals/garden-egg-peanut.jpg',
    description: 'Raw Garden Eggs with Cameroon Pepper Peanut Dip. Low glycemic index meals designed to avoid insulin spikes, improve insulin sensitivity, and sustain blood sugar balance.',
    whyThisMeal: 'Extremely low glycemic index snack that offers crunch and polyphenols without glucose spikes.',
    dietaryTags: ['Nigerian Classic', 'Diabetes & Blood Sugar Control'],
    allergens: [],
    nutritionalInfo: {
      calories: 130,
      protein: '7g',
      carbs: '16g',
      fat: '3g',
      fiber: '2g',
      keyNutrients: 'Essential vitamins, bioactive plant nutrients, and balanced macronutrients'
    },
    ingredients: [
      { name: 'Core Nigerian Ingredients', amount: 1, unit: 'portion' },
      { name: 'Fresh Aromatics & Herbs', amount: 1, unit: 'bunch' },
      { name: 'Seasoning & Sea Salt', amount: 1, unit: 'to taste' }
    ],
    instructions: [
      'Prepare fresh local ingredients and simmer on medium heat.',
      'Allow flavors to develop gracefully, check seasoning, and serve hot.'
    ]
  },
  // Diabetes & Blood Sugar Control Meal 17
  {
    id: 'rec-hl-db-17',
    name: 'Roasted Bambara Groundnuts (Okpa Beans Crunch)',
    category: 'Snacks',
    servings: 2,
    preparationTime: 4,
    cookingTime: 8,
    estimatedCostPerServing: 350,
    costCurrency: 'NGN',
    calories: 160,
    protein: '8g',
    carbs: '19g',
    fat: '4g',
    fiber: '2g',
    studentFriendly: true,
    studentCategories: ['Quick Meals Between Lectures', 'Student Budget Meals', 'Hostel Kitchen'],
    weightFriendly: true,
    weightGoal: 'Diabetes & Blood Sugar Control',
    equipmentRequired: ['Single hot plate', 'Electric kettle'],
    storageRequirements: 'Store in covered bowl; reheats easily on hostel hot plate.',
    image: '/meals/stewed-beans-plantains.jpg',
    description: 'Roasted Bambara Groundnuts (Okpa Beans Crunch). Low glycemic index meals designed to avoid insulin spikes, improve insulin sensitivity, and sustain blood sugar balance.',
    whyThisMeal: 'Bambara groundnuts are high in soluble fiber and resistant starch, stabilizing blood sugar.',
    dietaryTags: ['Nigerian Classic', 'Diabetes & Blood Sugar Control'],
    allergens: [],
    nutritionalInfo: {
      calories: 160,
      protein: '8g',
      carbs: '19g',
      fat: '4g',
      fiber: '2g',
      keyNutrients: 'Essential vitamins, bioactive plant nutrients, and balanced macronutrients'
    },
    ingredients: [
      { name: 'Core Nigerian Ingredients', amount: 1, unit: 'portion' },
      { name: 'Fresh Aromatics & Herbs', amount: 1, unit: 'bunch' },
      { name: 'Seasoning & Sea Salt', amount: 1, unit: 'to taste' }
    ],
    instructions: [
      'Prepare fresh local ingredients and simmer on medium heat.',
      'Allow flavors to develop gracefully, check seasoning, and serve hot.'
    ]
  },
  // Diabetes & Blood Sugar Control Meal 18
  {
    id: 'rec-hl-db-18',
    name: 'Chilled Hibiscus Zobo (Zero Sugar, Spiced with Ginger)',
    category: 'Juices & Smoothies',
    servings: 2,
    preparationTime: 5,
    cookingTime: 9,
    estimatedCostPerServing: 200,
    costCurrency: 'NGN',
    calories: 30,
    protein: '2g',
    carbs: '4g',
    fat: '1g',
    fiber: '0g',
    studentFriendly: true,
    studentCategories: ['Quick Meals Between Lectures', 'Student Budget Meals', 'Hostel Kitchen'],
    weightFriendly: true,
    weightGoal: 'Diabetes & Blood Sugar Control',
    equipmentRequired: ['Single hot plate', 'Electric kettle'],
    storageRequirements: 'Store in covered bowl; reheats easily on hostel hot plate.',
    image: '/meals/zobo-drink.jpg',
    description: 'Chilled Hibiscus Zobo (Zero Sugar, Spiced with Ginger). Low glycemic index meals designed to avoid insulin spikes, improve insulin sensitivity, and sustain blood sugar balance.',
    whyThisMeal: 'Zero added sugar infusion; gingerols enhance insulin action and curb inflammation.',
    dietaryTags: ['Nigerian Classic', 'Diabetes & Blood Sugar Control'],
    allergens: [],
    nutritionalInfo: {
      calories: 30,
      protein: '2g',
      carbs: '4g',
      fat: '1g',
      fiber: '0g',
      keyNutrients: 'Essential vitamins, bioactive plant nutrients, and balanced macronutrients'
    },
    ingredients: [
      { name: 'Core Nigerian Ingredients', amount: 1, unit: 'portion' },
      { name: 'Fresh Aromatics & Herbs', amount: 1, unit: 'bunch' },
      { name: 'Seasoning & Sea Salt', amount: 1, unit: 'to taste' }
    ],
    instructions: [
      'Prepare fresh local ingredients and simmer on medium heat.',
      'Allow flavors to develop gracefully, check seasoning, and serve hot.'
    ]
  },
  // Diabetes & Blood Sugar Control Meal 19
  {
    id: 'rec-hl-db-19',
    name: 'Cucumber, Bitter Leaf & Ginger Green Detox Juice',
    category: 'Juices & Smoothies',
    servings: 2,
    preparationTime: 4,
    cookingTime: 8,
    estimatedCostPerServing: 250,
    costCurrency: 'NGN',
    calories: 25,
    protein: '1g',
    carbs: '3g',
    fat: '1g',
    fiber: '0g',
    studentFriendly: true,
    studentCategories: ['Quick Meals Between Lectures', 'Student Budget Meals', 'Hostel Kitchen'],
    weightFriendly: true,
    weightGoal: 'Diabetes & Blood Sugar Control',
    equipmentRequired: ['Single hot plate', 'Electric kettle'],
    storageRequirements: 'Store in covered bowl; reheats easily on hostel hot plate.',
    image: '/meals/efo-riro.jpg',
    description: 'Cucumber, Bitter Leaf & Ginger Green Detox Juice. Low glycemic index meals designed to avoid insulin spikes, improve insulin sensitivity, and sustain blood sugar balance.',
    whyThisMeal: 'Vernonia amygdalina (bitter leaf) extracts possess documented glucose-regulating peptides.',
    dietaryTags: ['Nigerian Classic', 'Diabetes & Blood Sugar Control'],
    allergens: [],
    nutritionalInfo: {
      calories: 25,
      protein: '1g',
      carbs: '3g',
      fat: '1g',
      fiber: '0g',
      keyNutrients: 'Essential vitamins, bioactive plant nutrients, and balanced macronutrients'
    },
    ingredients: [
      { name: 'Core Nigerian Ingredients', amount: 1, unit: 'portion' },
      { name: 'Fresh Aromatics & Herbs', amount: 1, unit: 'bunch' },
      { name: 'Seasoning & Sea Salt', amount: 1, unit: 'to taste' }
    ],
    instructions: [
      'Prepare fresh local ingredients and simmer on medium heat.',
      'Allow flavors to develop gracefully, check seasoning, and serve hot.'
    ]
  },
  // Diabetes & Blood Sugar Control Meal 20
  {
    id: 'rec-hl-db-20',
    name: 'Fresh Green Apple Wedges with Roasted Groundnuts',
    category: 'Fruits & Light Bites',
    servings: 2,
    preparationTime: 2,
    cookingTime: 6,
    estimatedCostPerServing: 400,
    costCurrency: 'NGN',
    calories: 140,
    protein: '7g',
    carbs: '17g',
    fat: '4g',
    fiber: '2g',
    studentFriendly: true,
    studentCategories: ['Quick Meals Between Lectures', 'Student Budget Meals', 'Hostel Kitchen'],
    weightFriendly: true,
    weightGoal: 'Diabetes & Blood Sugar Control',
    equipmentRequired: ['Single hot plate', 'Electric kettle'],
    storageRequirements: 'Store in covered bowl; reheats easily on hostel hot plate.',
    image: '/meals/boli-groundnuts.jpg',
    description: 'Fresh Green Apple Wedges with Roasted Groundnuts. Low glycemic index meals designed to avoid insulin spikes, improve insulin sensitivity, and sustain blood sugar balance.',
    whyThisMeal: 'Pectin fiber in green apples and healthy fats in groundnuts slow fructose absorption.',
    dietaryTags: ['Nigerian Classic', 'Diabetes & Blood Sugar Control'],
    allergens: [],
    nutritionalInfo: {
      calories: 140,
      protein: '7g',
      carbs: '17g',
      fat: '4g',
      fiber: '2g',
      keyNutrients: 'Essential vitamins, bioactive plant nutrients, and balanced macronutrients'
    },
    ingredients: [
      { name: 'Core Nigerian Ingredients', amount: 1, unit: 'portion' },
      { name: 'Fresh Aromatics & Herbs', amount: 1, unit: 'bunch' },
      { name: 'Seasoning & Sea Salt', amount: 1, unit: 'to taste' }
    ],
    instructions: [
      'Prepare fresh local ingredients and simmer on medium heat.',
      'Allow flavors to develop gracefully, check seasoning, and serve hot.'
    ]
  },
  // Diabetes & Blood Sugar Control Meal 21
  {
    id: 'rec-hl-db-21',
    name: 'Crisp Pawpaw Cubes with Lime Juice & Chia Sprinkles',
    category: 'Fruits & Light Bites',
    servings: 2,
    preparationTime: 3,
    cookingTime: 7,
    estimatedCostPerServing: 350,
    costCurrency: 'NGN',
    calories: 110,
    protein: '6g',
    carbs: '13g',
    fat: '3g',
    fiber: '2g',
    studentFriendly: true,
    studentCategories: ['Quick Meals Between Lectures', 'Student Budget Meals', 'Hostel Kitchen'],
    weightFriendly: true,
    weightGoal: 'Diabetes & Blood Sugar Control',
    equipmentRequired: ['Single hot plate', 'Electric kettle'],
    storageRequirements: 'Store in covered bowl; reheats easily on hostel hot plate.',
    image: '/meals/zobo-drink.jpg',
    description: 'Crisp Pawpaw Cubes with Lime Juice & Chia Sprinkles. Low glycemic index meals designed to avoid insulin spikes, improve insulin sensitivity, and sustain blood sugar balance.',
    whyThisMeal: 'Low sugar tropical treat that supports digestion without glycemic surges.',
    dietaryTags: ['Nigerian Classic', 'Diabetes & Blood Sugar Control'],
    allergens: [],
    nutritionalInfo: {
      calories: 110,
      protein: '6g',
      carbs: '13g',
      fat: '3g',
      fiber: '2g',
      keyNutrients: 'Essential vitamins, bioactive plant nutrients, and balanced macronutrients'
    },
    ingredients: [
      { name: 'Core Nigerian Ingredients', amount: 1, unit: 'portion' },
      { name: 'Fresh Aromatics & Herbs', amount: 1, unit: 'bunch' },
      { name: 'Seasoning & Sea Salt', amount: 1, unit: 'to taste' }
    ],
    instructions: [
      'Prepare fresh local ingredients and simmer on medium heat.',
      'Allow flavors to develop gracefully, check seasoning, and serve hot.'
    ]
  },
  // Diabetes & Blood Sugar Control Meal 22
  {
    id: 'rec-hl-db-22',
    name: 'Coconut Tapioca Chia Pudding (Unsweetened with Cinnamon)',
    category: 'Desserts',
    servings: 2,
    preparationTime: 6,
    cookingTime: 10,
    estimatedCostPerServing: 450,
    costCurrency: 'NGN',
    calories: 150,
    protein: '8g',
    carbs: '18g',
    fat: '4g',
    fiber: '2g',
    studentFriendly: true,
    studentCategories: ['Quick Meals Between Lectures', 'Student Budget Meals', 'Hostel Kitchen'],
    weightFriendly: true,
    weightGoal: 'Diabetes & Blood Sugar Control',
    equipmentRequired: ['Single hot plate', 'Electric kettle'],
    storageRequirements: 'Store in covered bowl; reheats easily on hostel hot plate.',
    image: '/meals/tapioca-mango.jpg',
    description: 'Coconut Tapioca Chia Pudding (Unsweetened with Cinnamon). Low glycemic index meals designed to avoid insulin spikes, improve insulin sensitivity, and sustain blood sugar balance.',
    whyThisMeal: 'Comforting guilt-free dessert that keeps blood sugar flat and steady.',
    dietaryTags: ['Nigerian Classic', 'Diabetes & Blood Sugar Control'],
    allergens: [],
    nutritionalInfo: {
      calories: 150,
      protein: '8g',
      carbs: '18g',
      fat: '4g',
      fiber: '2g',
      keyNutrients: 'Essential vitamins, bioactive plant nutrients, and balanced macronutrients'
    },
    ingredients: [
      { name: 'Core Nigerian Ingredients', amount: 1, unit: 'portion' },
      { name: 'Fresh Aromatics & Herbs', amount: 1, unit: 'bunch' },
      { name: 'Seasoning & Sea Salt', amount: 1, unit: 'to taste' }
    ],
    instructions: [
      'Prepare fresh local ingredients and simmer on medium heat.',
      'Allow flavors to develop gracefully, check seasoning, and serve hot.'
    ]
  },
  // Liver Health & Detox Care Meal 1
  {
    id: 'rec-hl-lp-1',
    name: 'Bitter Leaf Soup (Ofe Onugbu) with Lean Catfish & Oat Swallow',
    category: 'Lunch',
    servings: 2,
    preparationTime: 16,
    cookingTime: 20,
    estimatedCostPerServing: 1250,
    costCurrency: 'NGN',
    calories: 340,
    protein: '17g',
    carbs: '41g',
    fat: '9g',
    fiber: '5g',
    studentFriendly: true,
    studentCategories: ['Quick Meals Between Lectures', 'Student Budget Meals', 'Hostel Kitchen'],
    weightFriendly: true,
    weightGoal: 'Liver Health & Detox Care',
    equipmentRequired: ['Single hot plate', 'Electric kettle'],
    storageRequirements: 'Store in covered bowl; reheats easily on hostel hot plate.',
    image: '/meals/custard.jpg',
    description: 'Bitter Leaf Soup (Ofe Onugbu) with Lean Catfish & Oat Swallow. Hepatoprotective meals rich in glutathione precursors, milk thistle/antioxidants, turmeric, and light clean cooking.',
    whyThisMeal: 'Bitter leaf (Vernonia amygdalina) stimulates bile flow and protects hepatic cells from oxidative injury.',
    dietaryTags: ['Nigerian Classic', 'Liver Health & Detox Care'],
    allergens: [],
    nutritionalInfo: {
      calories: 340,
      protein: '17g',
      carbs: '41g',
      fat: '9g',
      fiber: '5g',
      keyNutrients: 'Essential vitamins, bioactive plant nutrients, and balanced macronutrients'
    },
    ingredients: [
      { name: 'Core Nigerian Ingredients', amount: 1, unit: 'portion' },
      { name: 'Fresh Aromatics & Herbs', amount: 1, unit: 'bunch' },
      { name: 'Seasoning & Sea Salt', amount: 1, unit: 'to taste' }
    ],
    instructions: [
      'Prepare fresh local ingredients and simmer on medium heat.',
      'Allow flavors to develop gracefully, check seasoning, and serve hot.'
    ]
  },
  // Liver Health & Detox Care Meal 2
  {
    id: 'rec-hl-lp-2',
    name: 'Turmeric Spiced Steamed Fish Stew with White Rice',
    category: 'Lunch',
    servings: 2,
    preparationTime: 14,
    cookingTime: 18,
    estimatedCostPerServing: 1100,
    costCurrency: 'NGN',
    calories: 360,
    protein: '18g',
    carbs: '43g',
    fat: '9g',
    fiber: '5g',
    studentFriendly: true,
    studentCategories: ['Quick Meals Between Lectures', 'Student Budget Meals', 'Hostel Kitchen'],
    weightFriendly: true,
    weightGoal: 'Liver Health & Detox Care',
    equipmentRequired: ['Single hot plate', 'Electric kettle'],
    storageRequirements: 'Store in covered bowl; reheats easily on hostel hot plate.',
    image: '/meals/white-rice-fish-stew.jpg',
    description: 'Turmeric Spiced Steamed Fish Stew with White Rice. Hepatoprotective meals rich in glutathione precursors, milk thistle/antioxidants, turmeric, and light clean cooking.',
    whyThisMeal: 'Curcumin in turmeric downregulates pro-inflammatory cytokines in liver parenchyma.',
    dietaryTags: ['Nigerian Classic', 'Liver Health & Detox Care'],
    allergens: [],
    nutritionalInfo: {
      calories: 360,
      protein: '18g',
      carbs: '43g',
      fat: '9g',
      fiber: '5g',
      keyNutrients: 'Essential vitamins, bioactive plant nutrients, and balanced macronutrients'
    },
    ingredients: [
      { name: 'Core Nigerian Ingredients', amount: 1, unit: 'portion' },
      { name: 'Fresh Aromatics & Herbs', amount: 1, unit: 'bunch' },
      { name: 'Seasoning & Sea Salt', amount: 1, unit: 'to taste' }
    ],
    instructions: [
      'Prepare fresh local ingredients and simmer on medium heat.',
      'Allow flavors to develop gracefully, check seasoning, and serve hot.'
    ]
  },
  // Liver Health & Detox Care Meal 3
  {
    id: 'rec-hl-lp-3',
    name: 'Fresh Ugwu & Scent Leaf (Efirin) Broth with Poached Titus',
    category: 'Lunch',
    servings: 2,
    preparationTime: 12,
    cookingTime: 16,
    estimatedCostPerServing: 1150,
    costCurrency: 'NGN',
    calories: 310,
    protein: '16g',
    carbs: '37g',
    fat: '8g',
    fiber: '5g',
    studentFriendly: true,
    studentCategories: ['Quick Meals Between Lectures', 'Student Budget Meals', 'Hostel Kitchen'],
    weightFriendly: true,
    weightGoal: 'Liver Health & Detox Care',
    equipmentRequired: ['Single hot plate', 'Electric kettle'],
    storageRequirements: 'Store in covered bowl; reheats easily on hostel hot plate.',
    image: '/meals/efo-riro.jpg',
    description: 'Fresh Ugwu & Scent Leaf (Efirin) Broth with Poached Titus. Hepatoprotective meals rich in glutathione precursors, milk thistle/antioxidants, turmeric, and light clean cooking.',
    whyThisMeal: 'High chlorophyll and polyphenols assist cytochrome P450 enzymatic detoxification phases.',
    dietaryTags: ['Nigerian Classic', 'Liver Health & Detox Care'],
    allergens: [],
    nutritionalInfo: {
      calories: 310,
      protein: '16g',
      carbs: '37g',
      fat: '8g',
      fiber: '5g',
      keyNutrients: 'Essential vitamins, bioactive plant nutrients, and balanced macronutrients'
    },
    ingredients: [
      { name: 'Core Nigerian Ingredients', amount: 1, unit: 'portion' },
      { name: 'Fresh Aromatics & Herbs', amount: 1, unit: 'bunch' },
      { name: 'Seasoning & Sea Salt', amount: 1, unit: 'to taste' }
    ],
    instructions: [
      'Prepare fresh local ingredients and simmer on medium heat.',
      'Allow flavors to develop gracefully, check seasoning, and serve hot.'
    ]
  },
  // Liver Health & Detox Care Meal 4
  {
    id: 'rec-hl-lp-4',
    name: 'Okro Soup Prepared with Crayfish & Flaked Fish (No Palm Oil)',
    category: 'Lunch',
    servings: 2,
    preparationTime: 10,
    cookingTime: 14,
    estimatedCostPerServing: 950,
    costCurrency: 'NGN',
    calories: 270,
    protein: '14g',
    carbs: '32g',
    fat: '7g',
    fiber: '4g',
    studentFriendly: true,
    studentCategories: ['Quick Meals Between Lectures', 'Student Budget Meals', 'Hostel Kitchen'],
    weightFriendly: true,
    weightGoal: 'Liver Health & Detox Care',
    equipmentRequired: ['Single hot plate', 'Electric kettle'],
    storageRequirements: 'Store in covered bowl; reheats easily on hostel hot plate.',
    image: '/meals/okro-soup.jpg',
    description: 'Okro Soup Prepared with Crayfish & Flaked Fish (No Palm Oil). Hepatoprotective meals rich in glutathione precursors, milk thistle/antioxidants, turmeric, and light clean cooking.',
    whyThisMeal: 'Light fat-free cooking reduces metabolic burden on hepatic lipid processing.',
    dietaryTags: ['Nigerian Classic', 'Liver Health & Detox Care'],
    allergens: [],
    nutritionalInfo: {
      calories: 270,
      protein: '14g',
      carbs: '32g',
      fat: '7g',
      fiber: '4g',
      keyNutrients: 'Essential vitamins, bioactive plant nutrients, and balanced macronutrients'
    },
    ingredients: [
      { name: 'Core Nigerian Ingredients', amount: 1, unit: 'portion' },
      { name: 'Fresh Aromatics & Herbs', amount: 1, unit: 'bunch' },
      { name: 'Seasoning & Sea Salt', amount: 1, unit: 'to taste' }
    ],
    instructions: [
      'Prepare fresh local ingredients and simmer on medium heat.',
      'Allow flavors to develop gracefully, check seasoning, and serve hot.'
    ]
  },
  // Liver Health & Detox Care Meal 5
  {
    id: 'rec-hl-lp-5',
    name: 'Boiled White Yam with Garlic, Ginger & Scent Leaf Stew',
    category: 'Lunch',
    servings: 2,
    preparationTime: 15,
    cookingTime: 19,
    estimatedCostPerServing: 850,
    costCurrency: 'NGN',
    calories: 350,
    protein: '18g',
    carbs: '42g',
    fat: '9g',
    fiber: '5g',
    studentFriendly: true,
    studentCategories: ['Quick Meals Between Lectures', 'Student Budget Meals', 'Hostel Kitchen'],
    weightFriendly: true,
    weightGoal: 'Liver Health & Detox Care',
    equipmentRequired: ['Single hot plate', 'Electric kettle'],
    storageRequirements: 'Store in covered bowl; reheats easily on hostel hot plate.',
    image: '/meals/sweet-potato-egg-sauce.jpg',
    description: 'Boiled White Yam with Garlic, Ginger & Scent Leaf Stew. Hepatoprotective meals rich in glutathione precursors, milk thistle/antioxidants, turmeric, and light clean cooking.',
    whyThisMeal: 'Garlic activates liver enzymes that assist the body in clearing heavy metals and toxins.',
    dietaryTags: ['Nigerian Classic', 'Liver Health & Detox Care'],
    allergens: [],
    nutritionalInfo: {
      calories: 350,
      protein: '18g',
      carbs: '42g',
      fat: '9g',
      fiber: '5g',
      keyNutrients: 'Essential vitamins, bioactive plant nutrients, and balanced macronutrients'
    },
    ingredients: [
      { name: 'Core Nigerian Ingredients', amount: 1, unit: 'portion' },
      { name: 'Fresh Aromatics & Herbs', amount: 1, unit: 'bunch' },
      { name: 'Seasoning & Sea Salt', amount: 1, unit: 'to taste' }
    ],
    instructions: [
      'Prepare fresh local ingredients and simmer on medium heat.',
      'Allow flavors to develop gracefully, check seasoning, and serve hot.'
    ]
  },
  // Liver Health & Detox Care Meal 6
  {
    id: 'rec-hl-lp-6',
    name: 'Steamed Moi Moi with Sliced Boiled Eggs & Flaked Fish',
    category: 'Breakfast',
    servings: 2,
    preparationTime: 12,
    cookingTime: 16,
    estimatedCostPerServing: 700,
    costCurrency: 'NGN',
    calories: 290,
    protein: '15g',
    carbs: '35g',
    fat: '7g',
    fiber: '4g',
    studentFriendly: true,
    studentCategories: ['Quick Meals Between Lectures', 'Student Budget Meals', 'Hostel Kitchen'],
    weightFriendly: true,
    weightGoal: 'Liver Health & Detox Care',
    equipmentRequired: ['Single hot plate', 'Electric kettle'],
    storageRequirements: 'Store in covered bowl; reheats easily on hostel hot plate.',
    image: '/meals/moimoi.jpg',
    description: 'Steamed Moi Moi with Sliced Boiled Eggs & Flaked Fish. Hepatoprotective meals rich in glutathione precursors, milk thistle/antioxidants, turmeric, and light clean cooking.',
    whyThisMeal: 'Clean steamed legume protein supplies methionine and cysteine, precursors to master antioxidant glutathione.',
    dietaryTags: ['Nigerian Classic', 'Liver Health & Detox Care'],
    allergens: [],
    nutritionalInfo: {
      calories: 290,
      protein: '15g',
      carbs: '35g',
      fat: '7g',
      fiber: '4g',
      keyNutrients: 'Essential vitamins, bioactive plant nutrients, and balanced macronutrients'
    },
    ingredients: [
      { name: 'Core Nigerian Ingredients', amount: 1, unit: 'portion' },
      { name: 'Fresh Aromatics & Herbs', amount: 1, unit: 'bunch' },
      { name: 'Seasoning & Sea Salt', amount: 1, unit: 'to taste' }
    ],
    instructions: [
      'Prepare fresh local ingredients and simmer on medium heat.',
      'Allow flavors to develop gracefully, check seasoning, and serve hot.'
    ]
  },
  // Liver Health & Detox Care Meal 7
  {
    id: 'rec-hl-lp-7',
    name: 'Golden Pap (Ogi) with Milk & Soft Boiled Egg',
    category: 'Breakfast',
    servings: 2,
    preparationTime: 5,
    cookingTime: 9,
    estimatedCostPerServing: 450,
    costCurrency: 'NGN',
    calories: 250,
    protein: '13g',
    carbs: '30g',
    fat: '6g',
    fiber: '4g',
    studentFriendly: true,
    studentCategories: ['Quick Meals Between Lectures', 'Student Budget Meals', 'Hostel Kitchen'],
    weightFriendly: true,
    weightGoal: 'Liver Health & Detox Care',
    equipmentRequired: ['Single hot plate', 'Electric kettle'],
    storageRequirements: 'Store in covered bowl; reheats easily on hostel hot plate.',
    image: '/meals/custard.jpg',
    description: 'Golden Pap (Ogi) with Milk & Soft Boiled Egg. Hepatoprotective meals rich in glutathione precursors, milk thistle/antioxidants, turmeric, and light clean cooking.',
    whyThisMeal: 'Fermented maize/millet pap is gentle on the stomach and minimizes hepatic workload.',
    dietaryTags: ['Nigerian Classic', 'Liver Health & Detox Care'],
    allergens: [],
    nutritionalInfo: {
      calories: 250,
      protein: '13g',
      carbs: '30g',
      fat: '6g',
      fiber: '4g',
      keyNutrients: 'Essential vitamins, bioactive plant nutrients, and balanced macronutrients'
    },
    ingredients: [
      { name: 'Core Nigerian Ingredients', amount: 1, unit: 'portion' },
      { name: 'Fresh Aromatics & Herbs', amount: 1, unit: 'bunch' },
      { name: 'Seasoning & Sea Salt', amount: 1, unit: 'to taste' }
    ],
    instructions: [
      'Prepare fresh local ingredients and simmer on medium heat.',
      'Allow flavors to develop gracefully, check seasoning, and serve hot.'
    ]
  },
  // Liver Health & Detox Care Meal 8
  {
    id: 'rec-hl-lp-8',
    name: 'Rolled Oats Porridge Infused with Turmeric & Fresh Ginger',
    category: 'Breakfast',
    servings: 2,
    preparationTime: 6,
    cookingTime: 10,
    estimatedCostPerServing: 500,
    costCurrency: 'NGN',
    calories: 270,
    protein: '14g',
    carbs: '32g',
    fat: '7g',
    fiber: '4g',
    studentFriendly: true,
    studentCategories: ['Quick Meals Between Lectures', 'Student Budget Meals', 'Hostel Kitchen'],
    weightFriendly: true,
    weightGoal: 'Liver Health & Detox Care',
    equipmentRequired: ['Single hot plate', 'Electric kettle'],
    storageRequirements: 'Store in covered bowl; reheats easily on hostel hot plate.',
    image: '/meals/custard.jpg',
    description: 'Rolled Oats Porridge Infused with Turmeric & Fresh Ginger. Hepatoprotective meals rich in glutathione precursors, milk thistle/antioxidants, turmeric, and light clean cooking.',
    whyThisMeal: 'Anti-inflammatory spices support hepatic cellular membrane integrity.',
    dietaryTags: ['Nigerian Classic', 'Liver Health & Detox Care'],
    allergens: [],
    nutritionalInfo: {
      calories: 270,
      protein: '14g',
      carbs: '32g',
      fat: '7g',
      fiber: '4g',
      keyNutrients: 'Essential vitamins, bioactive plant nutrients, and balanced macronutrients'
    },
    ingredients: [
      { name: 'Core Nigerian Ingredients', amount: 1, unit: 'portion' },
      { name: 'Fresh Aromatics & Herbs', amount: 1, unit: 'bunch' },
      { name: 'Seasoning & Sea Salt', amount: 1, unit: 'to taste' }
    ],
    instructions: [
      'Prepare fresh local ingredients and simmer on medium heat.',
      'Allow flavors to develop gracefully, check seasoning, and serve hot.'
    ]
  },
  // Liver Health & Detox Care Meal 9
  {
    id: 'rec-hl-lp-9',
    name: 'Boiled Sweet Potatoes with Crushed Garlic Egg Scramble',
    category: 'Breakfast',
    servings: 2,
    preparationTime: 10,
    cookingTime: 14,
    estimatedCostPerServing: 600,
    costCurrency: 'NGN',
    calories: 320,
    protein: '16g',
    carbs: '38g',
    fat: '8g',
    fiber: '5g',
    studentFriendly: true,
    studentCategories: ['Quick Meals Between Lectures', 'Student Budget Meals', 'Hostel Kitchen'],
    weightFriendly: true,
    weightGoal: 'Liver Health & Detox Care',
    equipmentRequired: ['Single hot plate', 'Electric kettle'],
    storageRequirements: 'Store in covered bowl; reheats easily on hostel hot plate.',
    image: '/meals/sweet-potato-egg-sauce.jpg',
    description: 'Boiled Sweet Potatoes with Crushed Garlic Egg Scramble. Hepatoprotective meals rich in glutathione precursors, milk thistle/antioxidants, turmeric, and light clean cooking.',
    whyThisMeal: 'Allicin in fresh garlic stimulates sulfur-containing detoxification pathways.',
    dietaryTags: ['Nigerian Classic', 'Liver Health & Detox Care'],
    allergens: [],
    nutritionalInfo: {
      calories: 320,
      protein: '16g',
      carbs: '38g',
      fat: '8g',
      fiber: '5g',
      keyNutrients: 'Essential vitamins, bioactive plant nutrients, and balanced macronutrients'
    },
    ingredients: [
      { name: 'Core Nigerian Ingredients', amount: 1, unit: 'portion' },
      { name: 'Fresh Aromatics & Herbs', amount: 1, unit: 'bunch' },
      { name: 'Seasoning & Sea Salt', amount: 1, unit: 'to taste' }
    ],
    instructions: [
      'Prepare fresh local ingredients and simmer on medium heat.',
      'Allow flavors to develop gracefully, check seasoning, and serve hot.'
    ]
  },
  // Liver Health & Detox Care Meal 10
  {
    id: 'rec-hl-lp-10',
    name: 'Steamed Cabbage, Broccoli & Carrot Medley with Boiled Egg',
    category: 'Breakfast',
    servings: 2,
    preparationTime: 8,
    cookingTime: 12,
    estimatedCostPerServing: 550,
    costCurrency: 'NGN',
    calories: 230,
    protein: '12g',
    carbs: '28g',
    fat: '6g',
    fiber: '3g',
    studentFriendly: true,
    studentCategories: ['Quick Meals Between Lectures', 'Student Budget Meals', 'Hostel Kitchen'],
    weightFriendly: true,
    weightGoal: 'Liver Health & Detox Care',
    equipmentRequired: ['Single hot plate', 'Electric kettle'],
    storageRequirements: 'Store in covered bowl; reheats easily on hostel hot plate.',
    image: '/meals/cabbage-eggs.jpg',
    description: 'Steamed Cabbage, Broccoli & Carrot Medley with Boiled Egg. Hepatoprotective meals rich in glutathione precursors, milk thistle/antioxidants, turmeric, and light clean cooking.',
    whyThisMeal: 'Cruciferous vegetables provide diindolylmethane (DIM) which optimizes liver detoxification pathways.',
    dietaryTags: ['Nigerian Classic', 'Liver Health & Detox Care'],
    allergens: [],
    nutritionalInfo: {
      calories: 230,
      protein: '12g',
      carbs: '28g',
      fat: '6g',
      fiber: '3g',
      keyNutrients: 'Essential vitamins, bioactive plant nutrients, and balanced macronutrients'
    },
    ingredients: [
      { name: 'Core Nigerian Ingredients', amount: 1, unit: 'portion' },
      { name: 'Fresh Aromatics & Herbs', amount: 1, unit: 'bunch' },
      { name: 'Seasoning & Sea Salt', amount: 1, unit: 'to taste' }
    ],
    instructions: [
      'Prepare fresh local ingredients and simmer on medium heat.',
      'Allow flavors to develop gracefully, check seasoning, and serve hot.'
    ]
  },
  // Liver Health & Detox Care Meal 11
  {
    id: 'rec-hl-lp-11',
    name: 'Fresh Catfish Pepper Soup with Crushed Ehuru & Scent Leaf',
    category: 'Dinner',
    servings: 2,
    preparationTime: 14,
    cookingTime: 18,
    estimatedCostPerServing: 1300,
    costCurrency: 'NGN',
    calories: 290,
    protein: '15g',
    carbs: '35g',
    fat: '7g',
    fiber: '4g',
    studentFriendly: true,
    studentCategories: ['Quick Meals Between Lectures', 'Student Budget Meals', 'Hostel Kitchen'],
    weightFriendly: true,
    weightGoal: 'Liver Health & Detox Care',
    equipmentRequired: ['Single hot plate', 'Electric kettle'],
    storageRequirements: 'Store in covered bowl; reheats easily on hostel hot plate.',
    image: '/meals/catfish-peppersoup.jpg',
    description: 'Fresh Catfish Pepper Soup with Crushed Ehuru & Scent Leaf. Hepatoprotective meals rich in glutathione precursors, milk thistle/antioxidants, turmeric, and light clean cooking.',
    whyThisMeal: 'Calabash nutmeg and clean fish broth deliver bioavailable proteins without heavy saturated fats.',
    dietaryTags: ['Nigerian Classic', 'Liver Health & Detox Care'],
    allergens: [],
    nutritionalInfo: {
      calories: 290,
      protein: '15g',
      carbs: '35g',
      fat: '7g',
      fiber: '4g',
      keyNutrients: 'Essential vitamins, bioactive plant nutrients, and balanced macronutrients'
    },
    ingredients: [
      { name: 'Core Nigerian Ingredients', amount: 1, unit: 'portion' },
      { name: 'Fresh Aromatics & Herbs', amount: 1, unit: 'bunch' },
      { name: 'Seasoning & Sea Salt', amount: 1, unit: 'to taste' }
    ],
    instructions: [
      'Prepare fresh local ingredients and simmer on medium heat.',
      'Allow flavors to develop gracefully, check seasoning, and serve hot.'
    ]
  },
  // Liver Health & Detox Care Meal 12
  {
    id: 'rec-hl-lp-12',
    name: 'Grilled Herb Titus Fillet with Steamed Greens & Lemon Juice',
    category: 'Dinner',
    servings: 2,
    preparationTime: 12,
    cookingTime: 16,
    estimatedCostPerServing: 1100,
    costCurrency: 'NGN',
    calories: 330,
    protein: '17g',
    carbs: '40g',
    fat: '8g',
    fiber: '5g',
    studentFriendly: true,
    studentCategories: ['Quick Meals Between Lectures', 'Student Budget Meals', 'Hostel Kitchen'],
    weightFriendly: true,
    weightGoal: 'Liver Health & Detox Care',
    equipmentRequired: ['Single hot plate', 'Electric kettle'],
    storageRequirements: 'Store in covered bowl; reheats easily on hostel hot plate.',
    image: '/meals/white-rice-fish-stew.jpg',
    description: 'Grilled Herb Titus Fillet with Steamed Greens & Lemon Juice. Hepatoprotective meals rich in glutathione precursors, milk thistle/antioxidants, turmeric, and light clean cooking.',
    whyThisMeal: 'Omega-3 fatty acids attenuate non-alcoholic fatty liver disease (NAFLD) progression.',
    dietaryTags: ['Nigerian Classic', 'Liver Health & Detox Care'],
    allergens: [],
    nutritionalInfo: {
      calories: 330,
      protein: '17g',
      carbs: '40g',
      fat: '8g',
      fiber: '5g',
      keyNutrients: 'Essential vitamins, bioactive plant nutrients, and balanced macronutrients'
    },
    ingredients: [
      { name: 'Core Nigerian Ingredients', amount: 1, unit: 'portion' },
      { name: 'Fresh Aromatics & Herbs', amount: 1, unit: 'bunch' },
      { name: 'Seasoning & Sea Salt', amount: 1, unit: 'to taste' }
    ],
    instructions: [
      'Prepare fresh local ingredients and simmer on medium heat.',
      'Allow flavors to develop gracefully, check seasoning, and serve hot.'
    ]
  },
  // Liver Health & Detox Care Meal 13
  {
    id: 'rec-hl-lp-13',
    name: 'Steamed Spinach & Shoko Stew with Boiled Chicken Breast',
    category: 'Dinner',
    servings: 2,
    preparationTime: 12,
    cookingTime: 16,
    estimatedCostPerServing: 950,
    costCurrency: 'NGN',
    calories: 280,
    protein: '14g',
    carbs: '34g',
    fat: '7g',
    fiber: '4g',
    studentFriendly: true,
    studentCategories: ['Quick Meals Between Lectures', 'Student Budget Meals', 'Hostel Kitchen'],
    weightFriendly: true,
    weightGoal: 'Liver Health & Detox Care',
    equipmentRequired: ['Single hot plate', 'Electric kettle'],
    storageRequirements: 'Store in covered bowl; reheats easily on hostel hot plate.',
    image: '/meals/efo-riro.jpg',
    description: 'Steamed Spinach & Shoko Stew with Boiled Chicken Breast. Hepatoprotective meals rich in glutathione precursors, milk thistle/antioxidants, turmeric, and light clean cooking.',
    whyThisMeal: 'Lean poultry and dark leafy greens prevent excess fat storage in hepatic tissue.',
    dietaryTags: ['Nigerian Classic', 'Liver Health & Detox Care'],
    allergens: [],
    nutritionalInfo: {
      calories: 280,
      protein: '14g',
      carbs: '34g',
      fat: '7g',
      fiber: '4g',
      keyNutrients: 'Essential vitamins, bioactive plant nutrients, and balanced macronutrients'
    },
    ingredients: [
      { name: 'Core Nigerian Ingredients', amount: 1, unit: 'portion' },
      { name: 'Fresh Aromatics & Herbs', amount: 1, unit: 'bunch' },
      { name: 'Seasoning & Sea Salt', amount: 1, unit: 'to taste' }
    ],
    instructions: [
      'Prepare fresh local ingredients and simmer on medium heat.',
      'Allow flavors to develop gracefully, check seasoning, and serve hot.'
    ]
  },
  // Liver Health & Detox Care Meal 14
  {
    id: 'rec-hl-lp-14',
    name: 'Clear Vegetable Soup with Smoked Dry Fish & Oat Swallow',
    category: 'Dinner',
    servings: 2,
    preparationTime: 15,
    cookingTime: 19,
    estimatedCostPerServing: 900,
    costCurrency: 'NGN',
    calories: 310,
    protein: '16g',
    carbs: '37g',
    fat: '8g',
    fiber: '5g',
    studentFriendly: true,
    studentCategories: ['Quick Meals Between Lectures', 'Student Budget Meals', 'Hostel Kitchen'],
    weightFriendly: true,
    weightGoal: 'Liver Health & Detox Care',
    equipmentRequired: ['Single hot plate', 'Electric kettle'],
    storageRequirements: 'Store in covered bowl; reheats easily on hostel hot plate.',
    image: '/meals/custard.jpg',
    description: 'Clear Vegetable Soup with Smoked Dry Fish & Oat Swallow. Hepatoprotective meals rich in glutathione precursors, milk thistle/antioxidants, turmeric, and light clean cooking.',
    whyThisMeal: 'High-fiber soluble meal that binds intestinal toxins before they recirculate to the portal vein.',
    dietaryTags: ['Nigerian Classic', 'Liver Health & Detox Care'],
    allergens: [],
    nutritionalInfo: {
      calories: 310,
      protein: '16g',
      carbs: '37g',
      fat: '8g',
      fiber: '5g',
      keyNutrients: 'Essential vitamins, bioactive plant nutrients, and balanced macronutrients'
    },
    ingredients: [
      { name: 'Core Nigerian Ingredients', amount: 1, unit: 'portion' },
      { name: 'Fresh Aromatics & Herbs', amount: 1, unit: 'bunch' },
      { name: 'Seasoning & Sea Salt', amount: 1, unit: 'to taste' }
    ],
    instructions: [
      'Prepare fresh local ingredients and simmer on medium heat.',
      'Allow flavors to develop gracefully, check seasoning, and serve hot.'
    ]
  },
  // Liver Health & Detox Care Meal 15
  {
    id: 'rec-hl-lp-15',
    name: 'Boiled Unripe Plantain with Light Tomato Fish Sauce',
    category: 'Dinner',
    servings: 2,
    preparationTime: 12,
    cookingTime: 16,
    estimatedCostPerServing: 800,
    costCurrency: 'NGN',
    calories: 290,
    protein: '15g',
    carbs: '35g',
    fat: '7g',
    fiber: '4g',
    studentFriendly: true,
    studentCategories: ['Quick Meals Between Lectures', 'Student Budget Meals', 'Hostel Kitchen'],
    weightFriendly: true,
    weightGoal: 'Liver Health & Detox Care',
    equipmentRequired: ['Single hot plate', 'Electric kettle'],
    storageRequirements: 'Store in covered bowl; reheats easily on hostel hot plate.',
    image: '/meals/sweet-potato-egg-sauce.jpg',
    description: 'Boiled Unripe Plantain with Light Tomato Fish Sauce. Hepatoprotective meals rich in glutathione precursors, milk thistle/antioxidants, turmeric, and light clean cooking.',
    whyThisMeal: 'Easily digestible starch that preserves liver glycogen stores without causing insulin surges.',
    dietaryTags: ['Nigerian Classic', 'Liver Health & Detox Care'],
    allergens: [],
    nutritionalInfo: {
      calories: 290,
      protein: '15g',
      carbs: '35g',
      fat: '7g',
      fiber: '4g',
      keyNutrients: 'Essential vitamins, bioactive plant nutrients, and balanced macronutrients'
    },
    ingredients: [
      { name: 'Core Nigerian Ingredients', amount: 1, unit: 'portion' },
      { name: 'Fresh Aromatics & Herbs', amount: 1, unit: 'bunch' },
      { name: 'Seasoning & Sea Salt', amount: 1, unit: 'to taste' }
    ],
    instructions: [
      'Prepare fresh local ingredients and simmer on medium heat.',
      'Allow flavors to develop gracefully, check seasoning, and serve hot.'
    ]
  },
  // Liver Health & Detox Care Meal 16
  {
    id: 'rec-hl-lp-16',
    name: 'Fresh Garden Eggs with Crushed Walnut & Peanut Butter',
    category: 'Snacks',
    servings: 2,
    preparationTime: 3,
    cookingTime: 7,
    estimatedCostPerServing: 350,
    costCurrency: 'NGN',
    calories: 140,
    protein: '7g',
    carbs: '17g',
    fat: '4g',
    fiber: '2g',
    studentFriendly: true,
    studentCategories: ['Quick Meals Between Lectures', 'Student Budget Meals', 'Hostel Kitchen'],
    weightFriendly: true,
    weightGoal: 'Liver Health & Detox Care',
    equipmentRequired: ['Single hot plate', 'Electric kettle'],
    storageRequirements: 'Store in covered bowl; reheats easily on hostel hot plate.',
    image: '/meals/garden-egg-peanut.jpg',
    description: 'Fresh Garden Eggs with Crushed Walnut & Peanut Butter. Hepatoprotective meals rich in glutathione precursors, milk thistle/antioxidants, turmeric, and light clean cooking.',
    whyThisMeal: 'Arginine in nuts helps the liver detoxify ammonia, while garden egg flavonoids protect liver cells.',
    dietaryTags: ['Nigerian Classic', 'Liver Health & Detox Care'],
    allergens: [],
    nutritionalInfo: {
      calories: 140,
      protein: '7g',
      carbs: '17g',
      fat: '4g',
      fiber: '2g',
      keyNutrients: 'Essential vitamins, bioactive plant nutrients, and balanced macronutrients'
    },
    ingredients: [
      { name: 'Core Nigerian Ingredients', amount: 1, unit: 'portion' },
      { name: 'Fresh Aromatics & Herbs', amount: 1, unit: 'bunch' },
      { name: 'Seasoning & Sea Salt', amount: 1, unit: 'to taste' }
    ],
    instructions: [
      'Prepare fresh local ingredients and simmer on medium heat.',
      'Allow flavors to develop gracefully, check seasoning, and serve hot.'
    ]
  },
  // Liver Health & Detox Care Meal 17
  {
    id: 'rec-hl-lp-17',
    name: 'Boiled Corn with Lightly Salted Groundnuts',
    category: 'Snacks',
    servings: 2,
    preparationTime: 10,
    cookingTime: 14,
    estimatedCostPerServing: 350,
    costCurrency: 'NGN',
    calories: 210,
    protein: '11g',
    carbs: '25g',
    fat: '5g',
    fiber: '3g',
    studentFriendly: true,
    studentCategories: ['Quick Meals Between Lectures', 'Student Budget Meals', 'Hostel Kitchen'],
    weightFriendly: true,
    weightGoal: 'Liver Health & Detox Care',
    equipmentRequired: ['Single hot plate', 'Electric kettle'],
    storageRequirements: 'Store in covered bowl; reheats easily on hostel hot plate.',
    image: '/meals/boli-groundnuts.jpg',
    description: 'Boiled Corn with Lightly Salted Groundnuts. Hepatoprotective meals rich in glutathione precursors, milk thistle/antioxidants, turmeric, and light clean cooking.',
    whyThisMeal: 'Whole grain snack avoiding hydrogenated trans fats and processed food chemicals.',
    dietaryTags: ['Nigerian Classic', 'Liver Health & Detox Care'],
    allergens: [],
    nutritionalInfo: {
      calories: 210,
      protein: '11g',
      carbs: '25g',
      fat: '5g',
      fiber: '3g',
      keyNutrients: 'Essential vitamins, bioactive plant nutrients, and balanced macronutrients'
    },
    ingredients: [
      { name: 'Core Nigerian Ingredients', amount: 1, unit: 'portion' },
      { name: 'Fresh Aromatics & Herbs', amount: 1, unit: 'bunch' },
      { name: 'Seasoning & Sea Salt', amount: 1, unit: 'to taste' }
    ],
    instructions: [
      'Prepare fresh local ingredients and simmer on medium heat.',
      'Allow flavors to develop gracefully, check seasoning, and serve hot.'
    ]
  },
  // Liver Health & Detox Care Meal 18
  {
    id: 'rec-hl-lp-18',
    name: 'Artisan Zobo Hibiscus Brew with Ginger & Lemon (Sugar-Free)',
    category: 'Juices & Smoothies',
    servings: 2,
    preparationTime: 6,
    cookingTime: 10,
    estimatedCostPerServing: 250,
    costCurrency: 'NGN',
    calories: 30,
    protein: '2g',
    carbs: '4g',
    fat: '1g',
    fiber: '0g',
    studentFriendly: true,
    studentCategories: ['Quick Meals Between Lectures', 'Student Budget Meals', 'Hostel Kitchen'],
    weightFriendly: true,
    weightGoal: 'Liver Health & Detox Care',
    equipmentRequired: ['Single hot plate', 'Electric kettle'],
    storageRequirements: 'Store in covered bowl; reheats easily on hostel hot plate.',
    image: '/meals/zobo-drink.jpg',
    description: 'Artisan Zobo Hibiscus Brew with Ginger & Lemon (Sugar-Free). Hepatoprotective meals rich in glutathione precursors, milk thistle/antioxidants, turmeric, and light clean cooking.',
    whyThisMeal: 'Hibiscus polyphenols protect against hepatic steatosis and support healthy transaminase levels.',
    dietaryTags: ['Nigerian Classic', 'Liver Health & Detox Care'],
    allergens: [],
    nutritionalInfo: {
      calories: 30,
      protein: '2g',
      carbs: '4g',
      fat: '1g',
      fiber: '0g',
      keyNutrients: 'Essential vitamins, bioactive plant nutrients, and balanced macronutrients'
    },
    ingredients: [
      { name: 'Core Nigerian Ingredients', amount: 1, unit: 'portion' },
      { name: 'Fresh Aromatics & Herbs', amount: 1, unit: 'bunch' },
      { name: 'Seasoning & Sea Salt', amount: 1, unit: 'to taste' }
    ],
    instructions: [
      'Prepare fresh local ingredients and simmer on medium heat.',
      'Allow flavors to develop gracefully, check seasoning, and serve hot.'
    ]
  },
  // Liver Health & Detox Care Meal 19
  {
    id: 'rec-hl-lp-19',
    name: 'Fresh Beetroot, Carrot & Ginger Cold Juice',
    category: 'Juices & Smoothies',
    servings: 2,
    preparationTime: 5,
    cookingTime: 9,
    estimatedCostPerServing: 400,
    costCurrency: 'NGN',
    calories: 65,
    protein: '3g',
    carbs: '8g',
    fat: '2g',
    fiber: '1g',
    studentFriendly: true,
    studentCategories: ['Quick Meals Between Lectures', 'Student Budget Meals', 'Hostel Kitchen'],
    weightFriendly: true,
    weightGoal: 'Liver Health & Detox Care',
    equipmentRequired: ['Single hot plate', 'Electric kettle'],
    storageRequirements: 'Store in covered bowl; reheats easily on hostel hot plate.',
    image: '/meals/zobo-drink.jpg',
    description: 'Fresh Beetroot, Carrot & Ginger Cold Juice. Hepatoprotective meals rich in glutathione precursors, milk thistle/antioxidants, turmeric, and light clean cooking.',
    whyThisMeal: 'Betaine in beetroot supports methylation and defends liver cells from toxic metabolite buildup.',
    dietaryTags: ['Nigerian Classic', 'Liver Health & Detox Care'],
    allergens: [],
    nutritionalInfo: {
      calories: 65,
      protein: '3g',
      carbs: '8g',
      fat: '2g',
      fiber: '1g',
      keyNutrients: 'Essential vitamins, bioactive plant nutrients, and balanced macronutrients'
    },
    ingredients: [
      { name: 'Core Nigerian Ingredients', amount: 1, unit: 'portion' },
      { name: 'Fresh Aromatics & Herbs', amount: 1, unit: 'bunch' },
      { name: 'Seasoning & Sea Salt', amount: 1, unit: 'to taste' }
    ],
    instructions: [
      'Prepare fresh local ingredients and simmer on medium heat.',
      'Allow flavors to develop gracefully, check seasoning, and serve hot.'
    ]
  },
  // Liver Health & Detox Care Meal 20
  {
    id: 'rec-hl-lp-20',
    name: 'Warm Lemon, Ginger & Honey Morning Elixir',
    category: 'Juices & Smoothies',
    servings: 2,
    preparationTime: 3,
    cookingTime: 7,
    estimatedCostPerServing: 200,
    costCurrency: 'NGN',
    calories: 25,
    protein: '1g',
    carbs: '3g',
    fat: '1g',
    fiber: '0g',
    studentFriendly: true,
    studentCategories: ['Quick Meals Between Lectures', 'Student Budget Meals', 'Hostel Kitchen'],
    weightFriendly: true,
    weightGoal: 'Liver Health & Detox Care',
    equipmentRequired: ['Single hot plate', 'Electric kettle'],
    storageRequirements: 'Store in covered bowl; reheats easily on hostel hot plate.',
    image: '/meals/zobo-drink.jpg',
    description: 'Warm Lemon, Ginger & Honey Morning Elixir. Hepatoprotective meals rich in glutathione precursors, milk thistle/antioxidants, turmeric, and light clean cooking.',
    whyThisMeal: 'Stimulates morning bile secretion and promotes systemic hydration.',
    dietaryTags: ['Nigerian Classic', 'Liver Health & Detox Care'],
    allergens: [],
    nutritionalInfo: {
      calories: 25,
      protein: '1g',
      carbs: '3g',
      fat: '1g',
      fiber: '0g',
      keyNutrients: 'Essential vitamins, bioactive plant nutrients, and balanced macronutrients'
    },
    ingredients: [
      { name: 'Core Nigerian Ingredients', amount: 1, unit: 'portion' },
      { name: 'Fresh Aromatics & Herbs', amount: 1, unit: 'bunch' },
      { name: 'Seasoning & Sea Salt', amount: 1, unit: 'to taste' }
    ],
    instructions: [
      'Prepare fresh local ingredients and simmer on medium heat.',
      'Allow flavors to develop gracefully, check seasoning, and serve hot.'
    ]
  },
  // Liver Health & Detox Care Meal 21
  {
    id: 'rec-hl-lp-21',
    name: 'Fresh Papaya (Pawpaw) Wedges with Lime Spritz',
    category: 'Fruits & Light Bites',
    servings: 2,
    preparationTime: 3,
    cookingTime: 7,
    estimatedCostPerServing: 300,
    costCurrency: 'NGN',
    calories: 95,
    protein: '5g',
    carbs: '11g',
    fat: '2g',
    fiber: '1g',
    studentFriendly: true,
    studentCategories: ['Quick Meals Between Lectures', 'Student Budget Meals', 'Hostel Kitchen'],
    weightFriendly: true,
    weightGoal: 'Liver Health & Detox Care',
    equipmentRequired: ['Single hot plate', 'Electric kettle'],
    storageRequirements: 'Store in covered bowl; reheats easily on hostel hot plate.',
    image: '/meals/papaya-watermelon-combo.jpg',
    description: 'Fresh Papaya (Pawpaw) Wedges with Lime Spritz. Hepatoprotective meals rich in glutathione precursors, milk thistle/antioxidants, turmeric, and light clean cooking.',
    whyThisMeal: 'Papain enzymes assist digestive protein hydrolysis, lightening the metabolic burden on the liver.',
    dietaryTags: ['Nigerian Classic', 'Liver Health & Detox Care'],
    allergens: [],
    nutritionalInfo: {
      calories: 95,
      protein: '5g',
      carbs: '11g',
      fat: '2g',
      fiber: '1g',
      keyNutrients: 'Essential vitamins, bioactive plant nutrients, and balanced macronutrients'
    },
    ingredients: [
      { name: 'Core Nigerian Ingredients', amount: 1, unit: 'portion' },
      { name: 'Fresh Aromatics & Herbs', amount: 1, unit: 'bunch' },
      { name: 'Seasoning & Sea Salt', amount: 1, unit: 'to taste' }
    ],
    instructions: [
      'Prepare fresh local ingredients and simmer on medium heat.',
      'Allow flavors to develop gracefully, check seasoning, and serve hot.'
    ]
  },
  // Liver Health & Detox Care Meal 22
  {
    id: 'rec-hl-lp-22',
    name: 'Chilled Coconut Tapioca Pearls with Fresh Papaya Coulis',
    category: 'Desserts',
    servings: 2,
    preparationTime: 7,
    cookingTime: 11,
    estimatedCostPerServing: 450,
    costCurrency: 'NGN',
    calories: 155,
    protein: '8g',
    carbs: '19g',
    fat: '4g',
    fiber: '2g',
    studentFriendly: true,
    studentCategories: ['Quick Meals Between Lectures', 'Student Budget Meals', 'Hostel Kitchen'],
    weightFriendly: true,
    weightGoal: 'Liver Health & Detox Care',
    equipmentRequired: ['Single hot plate', 'Electric kettle'],
    storageRequirements: 'Store in covered bowl; reheats easily on hostel hot plate.',
    image: '/meals/tapioca-mango.jpg',
    description: 'Chilled Coconut Tapioca Pearls with Fresh Papaya Coulis. Hepatoprotective meals rich in glutathione precursors, milk thistle/antioxidants, turmeric, and light clean cooking.',
    whyThisMeal: 'Natural light dessert crafted without industrial chemicals or high-fructose corn syrups.',
    dietaryTags: ['Nigerian Classic', 'Liver Health & Detox Care'],
    allergens: [],
    nutritionalInfo: {
      calories: 155,
      protein: '8g',
      carbs: '19g',
      fat: '4g',
      fiber: '2g',
      keyNutrients: 'Essential vitamins, bioactive plant nutrients, and balanced macronutrients'
    },
    ingredients: [
      { name: 'Core Nigerian Ingredients', amount: 1, unit: 'portion' },
      { name: 'Fresh Aromatics & Herbs', amount: 1, unit: 'bunch' },
      { name: 'Seasoning & Sea Salt', amount: 1, unit: 'to taste' }
    ],
    instructions: [
      'Prepare fresh local ingredients and simmer on medium heat.',
      'Allow flavors to develop gracefully, check seasoning, and serve hot.'
    ]
  },
  // Heart Health & Blood Pressure (DASH/Hypertension) Meal 1
  {
    id: 'rec-hl-ht-1',
    name: 'Steamed Mackerel (Titus) Fillet with Ugwu Greens & Brown Rice',
    category: 'Lunch',
    servings: 2,
    preparationTime: 14,
    cookingTime: 18,
    estimatedCostPerServing: 1200,
    costCurrency: 'NGN',
    calories: 390,
    protein: '20g',
    carbs: '47g',
    fat: '10g',
    fiber: '6g',
    studentFriendly: true,
    studentCategories: ['Quick Meals Between Lectures', 'Student Budget Meals', 'Hostel Kitchen'],
    weightFriendly: true,
    weightGoal: 'Heart Health & Blood Pressure Care',
    equipmentRequired: ['Single hot plate', 'Electric kettle'],
    storageRequirements: 'Store in covered bowl; reheats easily on hostel hot plate.',
    image: '/meals/white-rice-fish-stew.jpg',
    description: 'Steamed Mackerel (Titus) Fillet with Ugwu Greens & Brown Rice. Low-sodium, high-potassium, rich in magnesium and omega-3 fatty acids for arterial relaxation and cardiovascular health.',
    whyThisMeal: 'Potassium and omega-3 EPA/DHA relax arterial walls and lower systolic blood pressure.',
    dietaryTags: ['Nigerian Classic', 'Heart Health & Blood Pressure (DASH/Hypertension)'],
    allergens: [],
    nutritionalInfo: {
      calories: 390,
      protein: '20g',
      carbs: '47g',
      fat: '10g',
      fiber: '6g',
      keyNutrients: 'Essential vitamins, bioactive plant nutrients, and balanced macronutrients'
    },
    ingredients: [
      { name: 'Core Nigerian Ingredients', amount: 1, unit: 'portion' },
      { name: 'Fresh Aromatics & Herbs', amount: 1, unit: 'bunch' },
      { name: 'Seasoning & Sea Salt', amount: 1, unit: 'to taste' }
    ],
    instructions: [
      'Prepare fresh local ingredients and simmer on medium heat.',
      'Allow flavors to develop gracefully, check seasoning, and serve hot.'
    ]
  },
  // Heart Health & Blood Pressure (DASH/Hypertension) Meal 2
  {
    id: 'rec-hl-ht-2',
    name: 'Okro & Spinach Seafood Stew with Oat Swallow (Low Salt)',
    category: 'Lunch',
    servings: 2,
    preparationTime: 12,
    cookingTime: 16,
    estimatedCostPerServing: 1050,
    costCurrency: 'NGN',
    calories: 310,
    protein: '16g',
    carbs: '37g',
    fat: '8g',
    fiber: '5g',
    studentFriendly: true,
    studentCategories: ['Quick Meals Between Lectures', 'Student Budget Meals', 'Hostel Kitchen'],
    weightFriendly: true,
    weightGoal: 'Heart Health & Blood Pressure Care',
    equipmentRequired: ['Single hot plate', 'Electric kettle'],
    storageRequirements: 'Store in covered bowl; reheats easily on hostel hot plate.',
    image: '/meals/okro-soup.jpg',
    description: 'Okro & Spinach Seafood Stew with Oat Swallow (Low Salt). Low-sodium, high-potassium, rich in magnesium and omega-3 fatty acids for arterial relaxation and cardiovascular health.',
    whyThisMeal: 'Cooked with aromatic herbs instead of excess salt cubes, preserving endothelial flexibility.',
    dietaryTags: ['Nigerian Classic', 'Heart Health & Blood Pressure (DASH/Hypertension)'],
    allergens: [],
    nutritionalInfo: {
      calories: 310,
      protein: '16g',
      carbs: '37g',
      fat: '8g',
      fiber: '5g',
      keyNutrients: 'Essential vitamins, bioactive plant nutrients, and balanced macronutrients'
    },
    ingredients: [
      { name: 'Core Nigerian Ingredients', amount: 1, unit: 'portion' },
      { name: 'Fresh Aromatics & Herbs', amount: 1, unit: 'bunch' },
      { name: 'Seasoning & Sea Salt', amount: 1, unit: 'to taste' }
    ],
    instructions: [
      'Prepare fresh local ingredients and simmer on medium heat.',
      'Allow flavors to develop gracefully, check seasoning, and serve hot.'
    ]
  },
  // Heart Health & Blood Pressure (DASH/Hypertension) Meal 3
  {
    id: 'rec-hl-ht-3',
    name: 'Beans Porridge Cooked with Scent Leaves & Boiled Plantain',
    category: 'Lunch',
    servings: 2,
    preparationTime: 20,
    cookingTime: 24,
    estimatedCostPerServing: 850,
    costCurrency: 'NGN',
    calories: 420,
    protein: '21g',
    carbs: '50g',
    fat: '11g',
    fiber: '6g',
    studentFriendly: true,
    studentCategories: ['Quick Meals Between Lectures', 'Student Budget Meals', 'Hostel Kitchen'],
    weightFriendly: true,
    weightGoal: 'Heart Health & Blood Pressure Care',
    equipmentRequired: ['Single hot plate', 'Electric kettle'],
    storageRequirements: 'Store in covered bowl; reheats easily on hostel hot plate.',
    image: '/meals/stewed-beans-plantains.jpg',
    description: 'Beans Porridge Cooked with Scent Leaves & Boiled Plantain. Low-sodium, high-potassium, rich in magnesium and omega-3 fatty acids for arterial relaxation and cardiovascular health.',
    whyThisMeal: 'Tremendous potassium levels in beans and plantains counteract sodium-induced hypertension.',
    dietaryTags: ['Nigerian Classic', 'Heart Health & Blood Pressure (DASH/Hypertension)'],
    allergens: [],
    nutritionalInfo: {
      calories: 420,
      protein: '21g',
      carbs: '50g',
      fat: '11g',
      fiber: '6g',
      keyNutrients: 'Essential vitamins, bioactive plant nutrients, and balanced macronutrients'
    },
    ingredients: [
      { name: 'Core Nigerian Ingredients', amount: 1, unit: 'portion' },
      { name: 'Fresh Aromatics & Herbs', amount: 1, unit: 'bunch' },
      { name: 'Seasoning & Sea Salt', amount: 1, unit: 'to taste' }
    ],
    instructions: [
      'Prepare fresh local ingredients and simmer on medium heat.',
      'Allow flavors to develop gracefully, check seasoning, and serve hot.'
    ]
  },
  // Heart Health & Blood Pressure (DASH/Hypertension) Meal 4
  {
    id: 'rec-hl-ht-4',
    name: 'Efo Riro with Locust Beans (Iru) & Grilled Chicken Breast',
    category: 'Lunch',
    servings: 2,
    preparationTime: 16,
    cookingTime: 20,
    estimatedCostPerServing: 1250,
    costCurrency: 'NGN',
    calories: 360,
    protein: '18g',
    carbs: '43g',
    fat: '9g',
    fiber: '5g',
    studentFriendly: true,
    studentCategories: ['Quick Meals Between Lectures', 'Student Budget Meals', 'Hostel Kitchen'],
    weightFriendly: true,
    weightGoal: 'Heart Health & Blood Pressure Care',
    equipmentRequired: ['Single hot plate', 'Electric kettle'],
    storageRequirements: 'Store in covered bowl; reheats easily on hostel hot plate.',
    image: '/meals/efo-riro.jpg',
    description: 'Efo Riro with Locust Beans (Iru) & Grilled Chicken Breast. Low-sodium, high-potassium, rich in magnesium and omega-3 fatty acids for arterial relaxation and cardiovascular health.',
    whyThisMeal: 'Magnesium in greens promotes cardiac muscle relaxation and regular rhythm.',
    dietaryTags: ['Nigerian Classic', 'Heart Health & Blood Pressure (DASH/Hypertension)'],
    allergens: [],
    nutritionalInfo: {
      calories: 360,
      protein: '18g',
      carbs: '43g',
      fat: '9g',
      fiber: '5g',
      keyNutrients: 'Essential vitamins, bioactive plant nutrients, and balanced macronutrients'
    },
    ingredients: [
      { name: 'Core Nigerian Ingredients', amount: 1, unit: 'portion' },
      { name: 'Fresh Aromatics & Herbs', amount: 1, unit: 'bunch' },
      { name: 'Seasoning & Sea Salt', amount: 1, unit: 'to taste' }
    ],
    instructions: [
      'Prepare fresh local ingredients and simmer on medium heat.',
      'Allow flavors to develop gracefully, check seasoning, and serve hot.'
    ]
  },
  // Heart Health & Blood Pressure (DASH/Hypertension) Meal 5
  {
    id: 'rec-hl-ht-5',
    name: 'Boiled Sweet Potato Batons with Mackerel Fish Stew',
    category: 'Lunch',
    servings: 2,
    preparationTime: 15,
    cookingTime: 19,
    estimatedCostPerServing: 950,
    costCurrency: 'NGN',
    calories: 370,
    protein: '19g',
    carbs: '44g',
    fat: '9g',
    fiber: '6g',
    studentFriendly: true,
    studentCategories: ['Quick Meals Between Lectures', 'Student Budget Meals', 'Hostel Kitchen'],
    weightFriendly: true,
    weightGoal: 'Heart Health & Blood Pressure Care',
    equipmentRequired: ['Single hot plate', 'Electric kettle'],
    storageRequirements: 'Store in covered bowl; reheats easily on hostel hot plate.',
    image: '/meals/sweet-potato-egg-sauce.jpg',
    description: 'Boiled Sweet Potato Batons with Mackerel Fish Stew. Low-sodium, high-potassium, rich in magnesium and omega-3 fatty acids for arterial relaxation and cardiovascular health.',
    whyThisMeal: 'High-potassium complex carbs that prevent fluid retention and support cardiovascular health.',
    dietaryTags: ['Nigerian Classic', 'Heart Health & Blood Pressure (DASH/Hypertension)'],
    allergens: [],
    nutritionalInfo: {
      calories: 370,
      protein: '19g',
      carbs: '44g',
      fat: '9g',
      fiber: '6g',
      keyNutrients: 'Essential vitamins, bioactive plant nutrients, and balanced macronutrients'
    },
    ingredients: [
      { name: 'Core Nigerian Ingredients', amount: 1, unit: 'portion' },
      { name: 'Fresh Aromatics & Herbs', amount: 1, unit: 'bunch' },
      { name: 'Seasoning & Sea Salt', amount: 1, unit: 'to taste' }
    ],
    instructions: [
      'Prepare fresh local ingredients and simmer on medium heat.',
      'Allow flavors to develop gracefully, check seasoning, and serve hot.'
    ]
  },
  // Heart Health & Blood Pressure (DASH/Hypertension) Meal 6
  {
    id: 'rec-hl-ht-6',
    name: 'Rolled Oats Porridge with Flaxseed & Sliced Sweet Banana',
    category: 'Breakfast',
    servings: 2,
    preparationTime: 5,
    cookingTime: 9,
    estimatedCostPerServing: 500,
    costCurrency: 'NGN',
    calories: 290,
    protein: '15g',
    carbs: '35g',
    fat: '7g',
    fiber: '4g',
    studentFriendly: true,
    studentCategories: ['Quick Meals Between Lectures', 'Student Budget Meals', 'Hostel Kitchen'],
    weightFriendly: true,
    weightGoal: 'Heart Health & Blood Pressure Care',
    equipmentRequired: ['Single hot plate', 'Electric kettle'],
    storageRequirements: 'Store in covered bowl; reheats easily on hostel hot plate.',
    image: '/meals/boli-groundnuts.jpg',
    description: 'Rolled Oats Porridge with Flaxseed & Sliced Sweet Banana. Low-sodium, high-potassium, rich in magnesium and omega-3 fatty acids for arterial relaxation and cardiovascular health.',
    whyThisMeal: 'Soluble oat fibers bind LDL cholesterol in digestive tract, aiding cardiovascular clearance.',
    dietaryTags: ['Nigerian Classic', 'Heart Health & Blood Pressure (DASH/Hypertension)'],
    allergens: [],
    nutritionalInfo: {
      calories: 290,
      protein: '15g',
      carbs: '35g',
      fat: '7g',
      fiber: '4g',
      keyNutrients: 'Essential vitamins, bioactive plant nutrients, and balanced macronutrients'
    },
    ingredients: [
      { name: 'Core Nigerian Ingredients', amount: 1, unit: 'portion' },
      { name: 'Fresh Aromatics & Herbs', amount: 1, unit: 'bunch' },
      { name: 'Seasoning & Sea Salt', amount: 1, unit: 'to taste' }
    ],
    instructions: [
      'Prepare fresh local ingredients and simmer on medium heat.',
      'Allow flavors to develop gracefully, check seasoning, and serve hot.'
    ]
  },
  // Heart Health & Blood Pressure (DASH/Hypertension) Meal 7
  {
    id: 'rec-hl-ht-7',
    name: 'Steamed Moi Moi with Scent Leaves & Flaked Fish',
    category: 'Breakfast',
    servings: 2,
    preparationTime: 12,
    cookingTime: 16,
    estimatedCostPerServing: 700,
    costCurrency: 'NGN',
    calories: 280,
    protein: '14g',
    carbs: '34g',
    fat: '7g',
    fiber: '4g',
    studentFriendly: true,
    studentCategories: ['Quick Meals Between Lectures', 'Student Budget Meals', 'Hostel Kitchen'],
    weightFriendly: true,
    weightGoal: 'Heart Health & Blood Pressure Care',
    equipmentRequired: ['Single hot plate', 'Electric kettle'],
    storageRequirements: 'Store in covered bowl; reheats easily on hostel hot plate.',
    image: '/meals/moimoi.jpg',
    description: 'Steamed Moi Moi with Scent Leaves & Flaked Fish. Low-sodium, high-potassium, rich in magnesium and omega-3 fatty acids for arterial relaxation and cardiovascular health.',
    whyThisMeal: 'Heart-healthy plant protein without saturated animal lard or hydrogenated fats.',
    dietaryTags: ['Nigerian Classic', 'Heart Health & Blood Pressure (DASH/Hypertension)'],
    allergens: [],
    nutritionalInfo: {
      calories: 280,
      protein: '14g',
      carbs: '34g',
      fat: '7g',
      fiber: '4g',
      keyNutrients: 'Essential vitamins, bioactive plant nutrients, and balanced macronutrients'
    },
    ingredients: [
      { name: 'Core Nigerian Ingredients', amount: 1, unit: 'portion' },
      { name: 'Fresh Aromatics & Herbs', amount: 1, unit: 'bunch' },
      { name: 'Seasoning & Sea Salt', amount: 1, unit: 'to taste' }
    ],
    instructions: [
      'Prepare fresh local ingredients and simmer on medium heat.',
      'Allow flavors to develop gracefully, check seasoning, and serve hot.'
    ]
  },
  // Heart Health & Blood Pressure (DASH/Hypertension) Meal 8
  {
    id: 'rec-hl-ht-8',
    name: 'Boiled Egg Whites with Garlic Sautéed Spinach',
    category: 'Breakfast',
    servings: 2,
    preparationTime: 6,
    cookingTime: 10,
    estimatedCostPerServing: 450,
    costCurrency: 'NGN',
    calories: 200,
    protein: '10g',
    carbs: '24g',
    fat: '5g',
    fiber: '3g',
    studentFriendly: true,
    studentCategories: ['Quick Meals Between Lectures', 'Student Budget Meals', 'Hostel Kitchen'],
    weightFriendly: true,
    weightGoal: 'Heart Health & Blood Pressure Care',
    equipmentRequired: ['Single hot plate', 'Electric kettle'],
    storageRequirements: 'Store in covered bowl; reheats easily on hostel hot plate.',
    image: '/meals/efo-riro.jpg',
    description: 'Boiled Egg Whites with Garlic Sautéed Spinach. Low-sodium, high-potassium, rich in magnesium and omega-3 fatty acids for arterial relaxation and cardiovascular health.',
    whyThisMeal: 'Allicin compounds enhance nitric oxide bioavailability, leading to vasodilation.',
    dietaryTags: ['Nigerian Classic', 'Heart Health & Blood Pressure (DASH/Hypertension)'],
    allergens: [],
    nutritionalInfo: {
      calories: 200,
      protein: '10g',
      carbs: '24g',
      fat: '5g',
      fiber: '3g',
      keyNutrients: 'Essential vitamins, bioactive plant nutrients, and balanced macronutrients'
    },
    ingredients: [
      { name: 'Core Nigerian Ingredients', amount: 1, unit: 'portion' },
      { name: 'Fresh Aromatics & Herbs', amount: 1, unit: 'bunch' },
      { name: 'Seasoning & Sea Salt', amount: 1, unit: 'to taste' }
    ],
    instructions: [
      'Prepare fresh local ingredients and simmer on medium heat.',
      'Allow flavors to develop gracefully, check seasoning, and serve hot.'
    ]
  },
  // Heart Health & Blood Pressure (DASH/Hypertension) Meal 9
  {
    id: 'rec-hl-ht-9',
    name: 'Millet Pap (Ogi Baba) with Skimmed Milk & Boiled Egg',
    category: 'Breakfast',
    servings: 2,
    preparationTime: 5,
    cookingTime: 9,
    estimatedCostPerServing: 400,
    costCurrency: 'NGN',
    calories: 240,
    protein: '12g',
    carbs: '29g',
    fat: '6g',
    fiber: '4g',
    studentFriendly: true,
    studentCategories: ['Quick Meals Between Lectures', 'Student Budget Meals', 'Hostel Kitchen'],
    weightFriendly: true,
    weightGoal: 'Heart Health & Blood Pressure Care',
    equipmentRequired: ['Single hot plate', 'Electric kettle'],
    storageRequirements: 'Store in covered bowl; reheats easily on hostel hot plate.',
    image: '/meals/custard.jpg',
    description: 'Millet Pap (Ogi Baba) with Skimmed Milk & Boiled Egg. Low-sodium, high-potassium, rich in magnesium and omega-3 fatty acids for arterial relaxation and cardiovascular health.',
    whyThisMeal: 'Naturally sodium-free fermented whole grain breakfast gentle on circulation.',
    dietaryTags: ['Nigerian Classic', 'Heart Health & Blood Pressure (DASH/Hypertension)'],
    allergens: [],
    nutritionalInfo: {
      calories: 240,
      protein: '12g',
      carbs: '29g',
      fat: '6g',
      fiber: '4g',
      keyNutrients: 'Essential vitamins, bioactive plant nutrients, and balanced macronutrients'
    },
    ingredients: [
      { name: 'Core Nigerian Ingredients', amount: 1, unit: 'portion' },
      { name: 'Fresh Aromatics & Herbs', amount: 1, unit: 'bunch' },
      { name: 'Seasoning & Sea Salt', amount: 1, unit: 'to taste' }
    ],
    instructions: [
      'Prepare fresh local ingredients and simmer on medium heat.',
      'Allow flavors to develop gracefully, check seasoning, and serve hot.'
    ]
  },
  // Heart Health & Blood Pressure (DASH/Hypertension) Meal 10
  {
    id: 'rec-hl-ht-10',
    name: 'Boiled Semi-Ripe Plantain with Peppered Scrambled Eggs',
    category: 'Breakfast',
    servings: 2,
    preparationTime: 10,
    cookingTime: 14,
    estimatedCostPerServing: 650,
    costCurrency: 'NGN',
    calories: 330,
    protein: '17g',
    carbs: '40g',
    fat: '8g',
    fiber: '5g',
    studentFriendly: true,
    studentCategories: ['Quick Meals Between Lectures', 'Student Budget Meals', 'Hostel Kitchen'],
    weightFriendly: true,
    weightGoal: 'Heart Health & Blood Pressure Care',
    equipmentRequired: ['Single hot plate', 'Electric kettle'],
    storageRequirements: 'Store in covered bowl; reheats easily on hostel hot plate.',
    image: '/meals/sweet-potato-egg-sauce.jpg',
    description: 'Boiled Semi-Ripe Plantain with Peppered Scrambled Eggs. Low-sodium, high-potassium, rich in magnesium and omega-3 fatty acids for arterial relaxation and cardiovascular health.',
    whyThisMeal: 'Rich in dietary potassium and choline for healthy homocysteine balance.',
    dietaryTags: ['Nigerian Classic', 'Heart Health & Blood Pressure (DASH/Hypertension)'],
    allergens: [],
    nutritionalInfo: {
      calories: 330,
      protein: '17g',
      carbs: '40g',
      fat: '8g',
      fiber: '5g',
      keyNutrients: 'Essential vitamins, bioactive plant nutrients, and balanced macronutrients'
    },
    ingredients: [
      { name: 'Core Nigerian Ingredients', amount: 1, unit: 'portion' },
      { name: 'Fresh Aromatics & Herbs', amount: 1, unit: 'bunch' },
      { name: 'Seasoning & Sea Salt', amount: 1, unit: 'to taste' }
    ],
    instructions: [
      'Prepare fresh local ingredients and simmer on medium heat.',
      'Allow flavors to develop gracefully, check seasoning, and serve hot.'
    ]
  },
  // Heart Health & Blood Pressure (DASH/Hypertension) Meal 11
  {
    id: 'rec-hl-ht-11',
    name: 'Catfish Pepper Soup with Fresh Basil & Scent Leaves',
    category: 'Dinner',
    servings: 2,
    preparationTime: 15,
    cookingTime: 19,
    estimatedCostPerServing: 1300,
    costCurrency: 'NGN',
    calories: 290,
    protein: '15g',
    carbs: '35g',
    fat: '7g',
    fiber: '4g',
    studentFriendly: true,
    studentCategories: ['Quick Meals Between Lectures', 'Student Budget Meals', 'Hostel Kitchen'],
    weightFriendly: true,
    weightGoal: 'Heart Health & Blood Pressure Care',
    equipmentRequired: ['Single hot plate', 'Electric kettle'],
    storageRequirements: 'Store in covered bowl; reheats easily on hostel hot plate.',
    image: '/meals/catfish-peppersoup.jpg',
    description: 'Catfish Pepper Soup with Fresh Basil & Scent Leaves. Low-sodium, high-potassium, rich in magnesium and omega-3 fatty acids for arterial relaxation and cardiovascular health.',
    whyThisMeal: 'Warm herbal broth enriched with eugenol from scent leaves that assists vascular tone.',
    dietaryTags: ['Nigerian Classic', 'Heart Health & Blood Pressure (DASH/Hypertension)'],
    allergens: [],
    nutritionalInfo: {
      calories: 290,
      protein: '15g',
      carbs: '35g',
      fat: '7g',
      fiber: '4g',
      keyNutrients: 'Essential vitamins, bioactive plant nutrients, and balanced macronutrients'
    },
    ingredients: [
      { name: 'Core Nigerian Ingredients', amount: 1, unit: 'portion' },
      { name: 'Fresh Aromatics & Herbs', amount: 1, unit: 'bunch' },
      { name: 'Seasoning & Sea Salt', amount: 1, unit: 'to taste' }
    ],
    instructions: [
      'Prepare fresh local ingredients and simmer on medium heat.',
      'Allow flavors to develop gracefully, check seasoning, and serve hot.'
    ]
  },
  // Heart Health & Blood Pressure (DASH/Hypertension) Meal 12
  {
    id: 'rec-hl-ht-12',
    name: 'Grilled Tilapia with Tossed Garden Greens & Olive Drizzle',
    category: 'Dinner',
    servings: 2,
    preparationTime: 12,
    cookingTime: 16,
    estimatedCostPerServing: 1100,
    costCurrency: 'NGN',
    calories: 280,
    protein: '14g',
    carbs: '34g',
    fat: '7g',
    fiber: '4g',
    studentFriendly: true,
    studentCategories: ['Quick Meals Between Lectures', 'Student Budget Meals', 'Hostel Kitchen'],
    weightFriendly: true,
    weightGoal: 'Heart Health & Blood Pressure Care',
    equipmentRequired: ['Single hot plate', 'Electric kettle'],
    storageRequirements: 'Store in covered bowl; reheats easily on hostel hot plate.',
    image: '/meals/catfish-peppersoup.jpg',
    description: 'Grilled Tilapia with Tossed Garden Greens & Olive Drizzle. Low-sodium, high-potassium, rich in magnesium and omega-3 fatty acids for arterial relaxation and cardiovascular health.',
    whyThisMeal: 'Very low sodium dinner loaded with heart-protective antioxidants.',
    dietaryTags: ['Nigerian Classic', 'Heart Health & Blood Pressure (DASH/Hypertension)'],
    allergens: [],
    nutritionalInfo: {
      calories: 280,
      protein: '14g',
      carbs: '34g',
      fat: '7g',
      fiber: '4g',
      keyNutrients: 'Essential vitamins, bioactive plant nutrients, and balanced macronutrients'
    },
    ingredients: [
      { name: 'Core Nigerian Ingredients', amount: 1, unit: 'portion' },
      { name: 'Fresh Aromatics & Herbs', amount: 1, unit: 'bunch' },
      { name: 'Seasoning & Sea Salt', amount: 1, unit: 'to taste' }
    ],
    instructions: [
      'Prepare fresh local ingredients and simmer on medium heat.',
      'Allow flavors to develop gracefully, check seasoning, and serve hot.'
    ]
  },
  // Heart Health & Blood Pressure (DASH/Hypertension) Meal 13
  {
    id: 'rec-hl-ht-13',
    name: 'Steamed Cabbage & Carrot Stir-Fry with Poached Salmon/Titus',
    category: 'Dinner',
    servings: 2,
    preparationTime: 10,
    cookingTime: 14,
    estimatedCostPerServing: 1150,
    costCurrency: 'NGN',
    calories: 320,
    protein: '16g',
    carbs: '38g',
    fat: '8g',
    fiber: '5g',
    studentFriendly: true,
    studentCategories: ['Quick Meals Between Lectures', 'Student Budget Meals', 'Hostel Kitchen'],
    weightFriendly: true,
    weightGoal: 'Heart Health & Blood Pressure Care',
    equipmentRequired: ['Single hot plate', 'Electric kettle'],
    storageRequirements: 'Store in covered bowl; reheats easily on hostel hot plate.',
    image: '/meals/cabbage-eggs.jpg',
    description: 'Steamed Cabbage & Carrot Stir-Fry with Poached Salmon/Titus. Low-sodium, high-potassium, rich in magnesium and omega-3 fatty acids for arterial relaxation and cardiovascular health.',
    whyThisMeal: 'Flavonoids and marine lipids synergize to reduce endothelial inflammation.',
    dietaryTags: ['Nigerian Classic', 'Heart Health & Blood Pressure (DASH/Hypertension)'],
    allergens: [],
    nutritionalInfo: {
      calories: 320,
      protein: '16g',
      carbs: '38g',
      fat: '8g',
      fiber: '5g',
      keyNutrients: 'Essential vitamins, bioactive plant nutrients, and balanced macronutrients'
    },
    ingredients: [
      { name: 'Core Nigerian Ingredients', amount: 1, unit: 'portion' },
      { name: 'Fresh Aromatics & Herbs', amount: 1, unit: 'bunch' },
      { name: 'Seasoning & Sea Salt', amount: 1, unit: 'to taste' }
    ],
    instructions: [
      'Prepare fresh local ingredients and simmer on medium heat.',
      'Allow flavors to develop gracefully, check seasoning, and serve hot.'
    ]
  },
  // Heart Health & Blood Pressure (DASH/Hypertension) Meal 14
  {
    id: 'rec-hl-ht-14',
    name: 'Vegetable Okro Stew with Smoked Panla & Cauliflower Mash',
    category: 'Dinner',
    servings: 2,
    preparationTime: 12,
    cookingTime: 16,
    estimatedCostPerServing: 950,
    costCurrency: 'NGN',
    calories: 260,
    protein: '13g',
    carbs: '31g',
    fat: '7g',
    fiber: '4g',
    studentFriendly: true,
    studentCategories: ['Quick Meals Between Lectures', 'Student Budget Meals', 'Hostel Kitchen'],
    weightFriendly: true,
    weightGoal: 'Heart Health & Blood Pressure Care',
    equipmentRequired: ['Single hot plate', 'Electric kettle'],
    storageRequirements: 'Store in covered bowl; reheats easily on hostel hot plate.',
    image: '/meals/okro-soup.jpg',
    description: 'Vegetable Okro Stew with Smoked Panla & Cauliflower Mash. Low-sodium, high-potassium, rich in magnesium and omega-3 fatty acids for arterial relaxation and cardiovascular health.',
    whyThisMeal: 'Light evening meal that aids blood pressure regulation through the night.',
    dietaryTags: ['Nigerian Classic', 'Heart Health & Blood Pressure (DASH/Hypertension)'],
    allergens: [],
    nutritionalInfo: {
      calories: 260,
      protein: '13g',
      carbs: '31g',
      fat: '7g',
      fiber: '4g',
      keyNutrients: 'Essential vitamins, bioactive plant nutrients, and balanced macronutrients'
    },
    ingredients: [
      { name: 'Core Nigerian Ingredients', amount: 1, unit: 'portion' },
      { name: 'Fresh Aromatics & Herbs', amount: 1, unit: 'bunch' },
      { name: 'Seasoning & Sea Salt', amount: 1, unit: 'to taste' }
    ],
    instructions: [
      'Prepare fresh local ingredients and simmer on medium heat.',
      'Allow flavors to develop gracefully, check seasoning, and serve hot.'
    ]
  },
  // Heart Health & Blood Pressure (DASH/Hypertension) Meal 15
  {
    id: 'rec-hl-ht-15',
    name: 'Clear Fish Pepper Soup with Boiled Yam Baton',
    category: 'Dinner',
    servings: 2,
    preparationTime: 14,
    cookingTime: 18,
    estimatedCostPerServing: 1100,
    costCurrency: 'NGN',
    calories: 300,
    protein: '15g',
    carbs: '36g',
    fat: '8g',
    fiber: '5g',
    studentFriendly: true,
    studentCategories: ['Quick Meals Between Lectures', 'Student Budget Meals', 'Hostel Kitchen'],
    weightFriendly: true,
    weightGoal: 'Heart Health & Blood Pressure Care',
    equipmentRequired: ['Single hot plate', 'Electric kettle'],
    storageRequirements: 'Store in covered bowl; reheats easily on hostel hot plate.',
    image: '/meals/efo-riro.jpg',
    description: 'Clear Fish Pepper Soup with Boiled Yam Baton. Low-sodium, high-potassium, rich in magnesium and omega-3 fatty acids for arterial relaxation and cardiovascular health.',
    whyThisMeal: 'Hydrating, comforting dinner seasoned naturally without high-sodium monosodium glutamate.',
    dietaryTags: ['Nigerian Classic', 'Heart Health & Blood Pressure (DASH/Hypertension)'],
    allergens: [],
    nutritionalInfo: {
      calories: 300,
      protein: '15g',
      carbs: '36g',
      fat: '8g',
      fiber: '5g',
      keyNutrients: 'Essential vitamins, bioactive plant nutrients, and balanced macronutrients'
    },
    ingredients: [
      { name: 'Core Nigerian Ingredients', amount: 1, unit: 'portion' },
      { name: 'Fresh Aromatics & Herbs', amount: 1, unit: 'bunch' },
      { name: 'Seasoning & Sea Salt', amount: 1, unit: 'to taste' }
    ],
    instructions: [
      'Prepare fresh local ingredients and simmer on medium heat.',
      'Allow flavors to develop gracefully, check seasoning, and serve hot.'
    ]
  },
  // Heart Health & Blood Pressure (DASH/Hypertension) Meal 16
  {
    id: 'rec-hl-ht-16',
    name: 'Crisp Garden Eggs with Spicy Ose Oji Peanut Dip',
    category: 'Snacks',
    servings: 2,
    preparationTime: 3,
    cookingTime: 7,
    estimatedCostPerServing: 300,
    costCurrency: 'NGN',
    calories: 125,
    protein: '6g',
    carbs: '15g',
    fat: '3g',
    fiber: '2g',
    studentFriendly: true,
    studentCategories: ['Quick Meals Between Lectures', 'Student Budget Meals', 'Hostel Kitchen'],
    weightFriendly: true,
    weightGoal: 'Heart Health & Blood Pressure Care',
    equipmentRequired: ['Single hot plate', 'Electric kettle'],
    storageRequirements: 'Store in covered bowl; reheats easily on hostel hot plate.',
    image: '/meals/garden-egg-peanut.jpg',
    description: 'Crisp Garden Eggs with Spicy Ose Oji Peanut Dip. Low-sodium, high-potassium, rich in magnesium and omega-3 fatty acids for arterial relaxation and cardiovascular health.',
    whyThisMeal: 'High-potassium Indigenous eggplant promotes normal blood pressure.',
    dietaryTags: ['Nigerian Classic', 'Heart Health & Blood Pressure (DASH/Hypertension)'],
    allergens: [],
    nutritionalInfo: {
      calories: 125,
      protein: '6g',
      carbs: '15g',
      fat: '3g',
      fiber: '2g',
      keyNutrients: 'Essential vitamins, bioactive plant nutrients, and balanced macronutrients'
    },
    ingredients: [
      { name: 'Core Nigerian Ingredients', amount: 1, unit: 'portion' },
      { name: 'Fresh Aromatics & Herbs', amount: 1, unit: 'bunch' },
      { name: 'Seasoning & Sea Salt', amount: 1, unit: 'to taste' }
    ],
    instructions: [
      'Prepare fresh local ingredients and simmer on medium heat.',
      'Allow flavors to develop gracefully, check seasoning, and serve hot.'
    ]
  },
  // Heart Health & Blood Pressure (DASH/Hypertension) Meal 17
  {
    id: 'rec-hl-ht-17',
    name: 'Steamed Sweet Corn Cob with Roasted Groundnuts',
    category: 'Snacks',
    servings: 2,
    preparationTime: 8,
    cookingTime: 12,
    estimatedCostPerServing: 350,
    costCurrency: 'NGN',
    calories: 210,
    protein: '11g',
    carbs: '25g',
    fat: '5g',
    fiber: '3g',
    studentFriendly: true,
    studentCategories: ['Quick Meals Between Lectures', 'Student Budget Meals', 'Hostel Kitchen'],
    weightFriendly: true,
    weightGoal: 'Heart Health & Blood Pressure Care',
    equipmentRequired: ['Single hot plate', 'Electric kettle'],
    storageRequirements: 'Store in covered bowl; reheats easily on hostel hot plate.',
    image: '/meals/boli-groundnuts.jpg',
    description: 'Steamed Sweet Corn Cob with Roasted Groundnuts. Low-sodium, high-potassium, rich in magnesium and omega-3 fatty acids for arterial relaxation and cardiovascular health.',
    whyThisMeal: 'Resveratrol in peanut skins contributes to healthy arterial lining.',
    dietaryTags: ['Nigerian Classic', 'Heart Health & Blood Pressure (DASH/Hypertension)'],
    allergens: [],
    nutritionalInfo: {
      calories: 210,
      protein: '11g',
      carbs: '25g',
      fat: '5g',
      fiber: '3g',
      keyNutrients: 'Essential vitamins, bioactive plant nutrients, and balanced macronutrients'
    },
    ingredients: [
      { name: 'Core Nigerian Ingredients', amount: 1, unit: 'portion' },
      { name: 'Fresh Aromatics & Herbs', amount: 1, unit: 'bunch' },
      { name: 'Seasoning & Sea Salt', amount: 1, unit: 'to taste' }
    ],
    instructions: [
      'Prepare fresh local ingredients and simmer on medium heat.',
      'Allow flavors to develop gracefully, check seasoning, and serve hot.'
    ]
  },
  // Heart Health & Blood Pressure (DASH/Hypertension) Meal 18
  {
    id: 'rec-hl-ht-18',
    name: 'Pure Hibiscus Zobo Elixir with Pineapple & Ginger (Unsweetened)',
    category: 'Juices & Smoothies',
    servings: 2,
    preparationTime: 6,
    cookingTime: 10,
    estimatedCostPerServing: 250,
    costCurrency: 'NGN',
    calories: 35,
    protein: '2g',
    carbs: '4g',
    fat: '1g',
    fiber: '1g',
    studentFriendly: true,
    studentCategories: ['Quick Meals Between Lectures', 'Student Budget Meals', 'Hostel Kitchen'],
    weightFriendly: true,
    weightGoal: 'Heart Health & Blood Pressure Care',
    equipmentRequired: ['Single hot plate', 'Electric kettle'],
    storageRequirements: 'Store in covered bowl; reheats easily on hostel hot plate.',
    image: '/meals/zobo-drink.jpg',
    description: 'Pure Hibiscus Zobo Elixir with Pineapple & Ginger (Unsweetened). Low-sodium, high-potassium, rich in magnesium and omega-3 fatty acids for arterial relaxation and cardiovascular health.',
    whyThisMeal: 'Clinical studies confirm hibiscus tea exhibits natural ACE-inhibitory and diuretic effects.',
    dietaryTags: ['Nigerian Classic', 'Heart Health & Blood Pressure (DASH/Hypertension)'],
    allergens: [],
    nutritionalInfo: {
      calories: 35,
      protein: '2g',
      carbs: '4g',
      fat: '1g',
      fiber: '1g',
      keyNutrients: 'Essential vitamins, bioactive plant nutrients, and balanced macronutrients'
    },
    ingredients: [
      { name: 'Core Nigerian Ingredients', amount: 1, unit: 'portion' },
      { name: 'Fresh Aromatics & Herbs', amount: 1, unit: 'bunch' },
      { name: 'Seasoning & Sea Salt', amount: 1, unit: 'to taste' }
    ],
    instructions: [
      'Prepare fresh local ingredients and simmer on medium heat.',
      'Allow flavors to develop gracefully, check seasoning, and serve hot.'
    ]
  },
  // Heart Health & Blood Pressure (DASH/Hypertension) Meal 19
  {
    id: 'rec-hl-ht-19',
    name: 'Cucumber, Lime & Garden Mint Infusion Water',
    category: 'Juices & Smoothies',
    servings: 2,
    preparationTime: 2,
    cookingTime: 6,
    estimatedCostPerServing: 200,
    costCurrency: 'NGN',
    calories: 15,
    protein: '1g',
    carbs: '2g',
    fat: '0g',
    fiber: '0g',
    studentFriendly: true,
    studentCategories: ['Quick Meals Between Lectures', 'Student Budget Meals', 'Hostel Kitchen'],
    weightFriendly: true,
    weightGoal: 'Heart Health & Blood Pressure Care',
    equipmentRequired: ['Single hot plate', 'Electric kettle'],
    storageRequirements: 'Store in covered bowl; reheats easily on hostel hot plate.',
    image: '/meals/asaro-elepo.jpg',
    description: 'Cucumber, Lime & Garden Mint Infusion Water. Low-sodium, high-potassium, rich in magnesium and omega-3 fatty acids for arterial relaxation and cardiovascular health.',
    whyThisMeal: 'Maintains optimal blood volume and hydration without sodium spikes.',
    dietaryTags: ['Nigerian Classic', 'Heart Health & Blood Pressure (DASH/Hypertension)'],
    allergens: [],
    nutritionalInfo: {
      calories: 15,
      protein: '1g',
      carbs: '2g',
      fat: '0g',
      fiber: '0g',
      keyNutrients: 'Essential vitamins, bioactive plant nutrients, and balanced macronutrients'
    },
    ingredients: [
      { name: 'Core Nigerian Ingredients', amount: 1, unit: 'portion' },
      { name: 'Fresh Aromatics & Herbs', amount: 1, unit: 'bunch' },
      { name: 'Seasoning & Sea Salt', amount: 1, unit: 'to taste' }
    ],
    instructions: [
      'Prepare fresh local ingredients and simmer on medium heat.',
      'Allow flavors to develop gracefully, check seasoning, and serve hot.'
    ]
  },
  // Heart Health & Blood Pressure (DASH/Hypertension) Meal 20
  {
    id: 'rec-hl-ht-20',
    name: 'Crimson Watermelon Cubes & Sweet Pawpaw Bowl',
    category: 'Fruits & Light Bites',
    servings: 2,
    preparationTime: 3,
    cookingTime: 7,
    estimatedCostPerServing: 350,
    costCurrency: 'NGN',
    calories: 110,
    protein: '6g',
    carbs: '13g',
    fat: '3g',
    fiber: '2g',
    studentFriendly: true,
    studentCategories: ['Quick Meals Between Lectures', 'Student Budget Meals', 'Hostel Kitchen'],
    weightFriendly: true,
    weightGoal: 'Heart Health & Blood Pressure Care',
    equipmentRequired: ['Single hot plate', 'Electric kettle'],
    storageRequirements: 'Store in covered bowl; reheats easily on hostel hot plate.',
    image: '/meals/papaya-watermelon-combo.jpg',
    description: 'Crimson Watermelon Cubes & Sweet Pawpaw Bowl. Low-sodium, high-potassium, rich in magnesium and omega-3 fatty acids for arterial relaxation and cardiovascular health.',
    whyThisMeal: 'L-citrulline in watermelon converts to nitric oxide in the body, promoting blood flow.',
    dietaryTags: ['Nigerian Classic', 'Heart Health & Blood Pressure (DASH/Hypertension)'],
    allergens: [],
    nutritionalInfo: {
      calories: 110,
      protein: '6g',
      carbs: '13g',
      fat: '3g',
      fiber: '2g',
      keyNutrients: 'Essential vitamins, bioactive plant nutrients, and balanced macronutrients'
    },
    ingredients: [
      { name: 'Core Nigerian Ingredients', amount: 1, unit: 'portion' },
      { name: 'Fresh Aromatics & Herbs', amount: 1, unit: 'bunch' },
      { name: 'Seasoning & Sea Salt', amount: 1, unit: 'to taste' }
    ],
    instructions: [
      'Prepare fresh local ingredients and simmer on medium heat.',
      'Allow flavors to develop gracefully, check seasoning, and serve hot.'
    ]
  },
  // Heart Health & Blood Pressure (DASH/Hypertension) Meal 21
  {
    id: 'rec-hl-ht-21',
    name: 'Fresh Seasonal Orange Slices with Dark Raisins',
    category: 'Fruits & Light Bites',
    servings: 2,
    preparationTime: 2,
    cookingTime: 6,
    estimatedCostPerServing: 300,
    costCurrency: 'NGN',
    calories: 130,
    protein: '7g',
    carbs: '16g',
    fat: '3g',
    fiber: '2g',
    studentFriendly: true,
    studentCategories: ['Quick Meals Between Lectures', 'Student Budget Meals', 'Hostel Kitchen'],
    weightFriendly: true,
    weightGoal: 'Heart Health & Blood Pressure Care',
    equipmentRequired: ['Single hot plate', 'Electric kettle'],
    storageRequirements: 'Store in covered bowl; reheats easily on hostel hot plate.',
    image: '/meals/papaya-watermelon-combo.jpg',
    description: 'Fresh Seasonal Orange Slices with Dark Raisins. Low-sodium, high-potassium, rich in magnesium and omega-3 fatty acids for arterial relaxation and cardiovascular health.',
    whyThisMeal: 'Hesperidin flavonoid in citrus supports capillary elasticity and strength.',
    dietaryTags: ['Nigerian Classic', 'Heart Health & Blood Pressure (DASH/Hypertension)'],
    allergens: [],
    nutritionalInfo: {
      calories: 130,
      protein: '7g',
      carbs: '16g',
      fat: '3g',
      fiber: '2g',
      keyNutrients: 'Essential vitamins, bioactive plant nutrients, and balanced macronutrients'
    },
    ingredients: [
      { name: 'Core Nigerian Ingredients', amount: 1, unit: 'portion' },
      { name: 'Fresh Aromatics & Herbs', amount: 1, unit: 'bunch' },
      { name: 'Seasoning & Sea Salt', amount: 1, unit: 'to taste' }
    ],
    instructions: [
      'Prepare fresh local ingredients and simmer on medium heat.',
      'Allow flavors to develop gracefully, check seasoning, and serve hot.'
    ]
  },
  // Heart Health & Blood Pressure (DASH/Hypertension) Meal 22
  {
    id: 'rec-hl-ht-22',
    name: 'Chilled Coconut Tapioca Pearls with Fresh Mango Coulis',
    category: 'Desserts',
    servings: 2,
    preparationTime: 7,
    cookingTime: 11,
    estimatedCostPerServing: 450,
    costCurrency: 'NGN',
    calories: 160,
    protein: '8g',
    carbs: '19g',
    fat: '4g',
    fiber: '2g',
    studentFriendly: true,
    studentCategories: ['Quick Meals Between Lectures', 'Student Budget Meals', 'Hostel Kitchen'],
    weightFriendly: true,
    weightGoal: 'Heart Health & Blood Pressure Care',
    equipmentRequired: ['Single hot plate', 'Electric kettle'],
    storageRequirements: 'Store in covered bowl; reheats easily on hostel hot plate.',
    image: '/meals/tapioca-mango.jpg',
    description: 'Chilled Coconut Tapioca Pearls with Fresh Mango Coulis. Low-sodium, high-potassium, rich in magnesium and omega-3 fatty acids for arterial relaxation and cardiovascular health.',
    whyThisMeal: 'Naturally sodium-free dessert with clean coconut lipids.',
    dietaryTags: ['Nigerian Classic', 'Heart Health & Blood Pressure (DASH/Hypertension)'],
    allergens: [],
    nutritionalInfo: {
      calories: 160,
      protein: '8g',
      carbs: '19g',
      fat: '4g',
      fiber: '2g',
      keyNutrients: 'Essential vitamins, bioactive plant nutrients, and balanced macronutrients'
    },
    ingredients: [
      { name: 'Core Nigerian Ingredients', amount: 1, unit: 'portion' },
      { name: 'Fresh Aromatics & Herbs', amount: 1, unit: 'bunch' },
      { name: 'Seasoning & Sea Salt', amount: 1, unit: 'to taste' }
    ],
    instructions: [
      'Prepare fresh local ingredients and simmer on medium heat.',
      'Allow flavors to develop gracefully, check seasoning, and serve hot.'
    ]
  },
  // Ulcer & Sensitive Stomach Care Meal 1
  {
    id: 'rec-hl-gt-1',
    name: 'Steamed Sweet Potato Mash with Boiled Egg',
    category: 'Breakfast',
    servings: 2,
    preparationTime: 10,
    cookingTime: 14,
    estimatedCostPerServing: 600,
    costCurrency: 'NGN',
    calories: 290,
    protein: '15g',
    carbs: '35g',
    fat: '7g',
    fiber: '4g',
    studentFriendly: true,
    studentCategories: ['Quick Meals Between Lectures', 'Student Budget Meals', 'Hostel Kitchen'],
    weightFriendly: true,
    weightGoal: 'Ulcer, Gastritis & Gut Healing',
    equipmentRequired: ['Single hot plate', 'Electric kettle'],
    storageRequirements: 'Store in covered bowl; reheats easily on hostel hot plate.',
    image: '/meals/sweet-potato-egg-sauce.jpg',
    description: 'Steamed Sweet Potato Mash with Boiled Egg. Non-irritating, mild, fiber-protective Nigerian meals that coat the stomach lining, promote healing, and avoid severe acid triggers.',
    whyThisMeal: 'Gentle, alkaline sweet potato mash soothes gastric mucosal lining without triggering acid.',
    dietaryTags: ['Nigerian Classic', 'Ulcer & Sensitive Stomach Care'],
    allergens: [],
    nutritionalInfo: {
      calories: 290,
      protein: '15g',
      carbs: '35g',
      fat: '7g',
      fiber: '4g',
      keyNutrients: 'Essential vitamins, bioactive plant nutrients, and balanced macronutrients'
    },
    ingredients: [
      { name: 'Core Nigerian Ingredients', amount: 1, unit: 'portion' },
      { name: 'Fresh Aromatics & Herbs', amount: 1, unit: 'bunch' },
      { name: 'Seasoning & Sea Salt', amount: 1, unit: 'to taste' }
    ],
    instructions: [
      'Prepare fresh local ingredients and simmer on medium heat.',
      'Allow flavors to develop gracefully, check seasoning, and serve hot.'
    ]
  },
  // Ulcer & Sensitive Stomach Care Meal 2
  {
    id: 'rec-hl-gt-2',
    name: 'Creamy Golden Vanilla Custard with Whole Milk',
    category: 'Breakfast',
    servings: 2,
    preparationTime: 4,
    cookingTime: 8,
    estimatedCostPerServing: 450,
    costCurrency: 'NGN',
    calories: 280,
    protein: '14g',
    carbs: '34g',
    fat: '7g',
    fiber: '4g',
    studentFriendly: true,
    studentCategories: ['Quick Meals Between Lectures', 'Student Budget Meals', 'Hostel Kitchen'],
    weightFriendly: true,
    weightGoal: 'Ulcer, Gastritis & Gut Healing',
    equipmentRequired: ['Single hot plate', 'Electric kettle'],
    storageRequirements: 'Store in covered bowl; reheats easily on hostel hot plate.',
    image: '/meals/custard.jpg',
    description: 'Creamy Golden Vanilla Custard with Whole Milk. Non-irritating, mild, fiber-protective Nigerian meals that coat the stomach lining, promote healing, and avoid severe acid triggers.',
    whyThisMeal: 'Bland, smooth, and easily digestible texture that avoids irritating stomach ulcers.',
    dietaryTags: ['Nigerian Classic', 'Ulcer & Sensitive Stomach Care'],
    allergens: [],
    nutritionalInfo: {
      calories: 280,
      protein: '14g',
      carbs: '34g',
      fat: '7g',
      fiber: '4g',
      keyNutrients: 'Essential vitamins, bioactive plant nutrients, and balanced macronutrients'
    },
    ingredients: [
      { name: 'Core Nigerian Ingredients', amount: 1, unit: 'portion' },
      { name: 'Fresh Aromatics & Herbs', amount: 1, unit: 'bunch' },
      { name: 'Seasoning & Sea Salt', amount: 1, unit: 'to taste' }
    ],
    instructions: [
      'Prepare fresh local ingredients and simmer on medium heat.',
      'Allow flavors to develop gracefully, check seasoning, and serve hot.'
    ]
  },
  // Ulcer & Sensitive Stomach Care Meal 3
  {
    id: 'rec-hl-gt-3',
    name: 'Soft Rolled Oats Cooked with Evaporated Milk & Banana',
    category: 'Breakfast',
    servings: 2,
    preparationTime: 5,
    cookingTime: 9,
    estimatedCostPerServing: 500,
    costCurrency: 'NGN',
    calories: 320,
    protein: '16g',
    carbs: '38g',
    fat: '8g',
    fiber: '5g',
    studentFriendly: true,
    studentCategories: ['Quick Meals Between Lectures', 'Student Budget Meals', 'Hostel Kitchen'],
    weightFriendly: true,
    weightGoal: 'Ulcer, Gastritis & Gut Healing',
    equipmentRequired: ['Single hot plate', 'Electric kettle'],
    storageRequirements: 'Store in covered bowl; reheats easily on hostel hot plate.',
    image: '/meals/boli-groundnuts.jpg',
    description: 'Soft Rolled Oats Cooked with Evaporated Milk & Banana. Non-irritating, mild, fiber-protective Nigerian meals that coat the stomach lining, promote healing, and avoid severe acid triggers.',
    whyThisMeal: 'Soluble mucilage coats gastric walls and protects against hyperacidity.',
    dietaryTags: ['Nigerian Classic', 'Ulcer & Sensitive Stomach Care'],
    allergens: [],
    nutritionalInfo: {
      calories: 320,
      protein: '16g',
      carbs: '38g',
      fat: '8g',
      fiber: '5g',
      keyNutrients: 'Essential vitamins, bioactive plant nutrients, and balanced macronutrients'
    },
    ingredients: [
      { name: 'Core Nigerian Ingredients', amount: 1, unit: 'portion' },
      { name: 'Fresh Aromatics & Herbs', amount: 1, unit: 'bunch' },
      { name: 'Seasoning & Sea Salt', amount: 1, unit: 'to taste' }
    ],
    instructions: [
      'Prepare fresh local ingredients and simmer on medium heat.',
      'Allow flavors to develop gracefully, check seasoning, and serve hot.'
    ]
  },
  // Ulcer & Sensitive Stomach Care Meal 4
  {
    id: 'rec-hl-gt-4',
    name: 'Silky Millet Pap (Ogi) with Milk & Scrambled Eggs (No Pepper)',
    category: 'Breakfast',
    servings: 2,
    preparationTime: 6,
    cookingTime: 10,
    estimatedCostPerServing: 450,
    costCurrency: 'NGN',
    calories: 270,
    protein: '14g',
    carbs: '32g',
    fat: '7g',
    fiber: '4g',
    studentFriendly: true,
    studentCategories: ['Quick Meals Between Lectures', 'Student Budget Meals', 'Hostel Kitchen'],
    weightFriendly: true,
    weightGoal: 'Ulcer, Gastritis & Gut Healing',
    equipmentRequired: ['Single hot plate', 'Electric kettle'],
    storageRequirements: 'Store in covered bowl; reheats easily on hostel hot plate.',
    image: '/meals/custard.jpg',
    description: 'Silky Millet Pap (Ogi) with Milk & Scrambled Eggs (No Pepper). Non-irritating, mild, fiber-protective Nigerian meals that coat the stomach lining, promote healing, and avoid severe acid triggers.',
    whyThisMeal: 'Fermented pap is probiotic and restorative for delicate digestive tracts.',
    dietaryTags: ['Nigerian Classic', 'Ulcer & Sensitive Stomach Care'],
    allergens: [],
    nutritionalInfo: {
      calories: 270,
      protein: '14g',
      carbs: '32g',
      fat: '7g',
      fiber: '4g',
      keyNutrients: 'Essential vitamins, bioactive plant nutrients, and balanced macronutrients'
    },
    ingredients: [
      { name: 'Core Nigerian Ingredients', amount: 1, unit: 'portion' },
      { name: 'Fresh Aromatics & Herbs', amount: 1, unit: 'bunch' },
      { name: 'Seasoning & Sea Salt', amount: 1, unit: 'to taste' }
    ],
    instructions: [
      'Prepare fresh local ingredients and simmer on medium heat.',
      'Allow flavors to develop gracefully, check seasoning, and serve hot.'
    ]
  },
  // Ulcer & Sensitive Stomach Care Meal 5
  {
    id: 'rec-hl-gt-5',
    name: 'Steamed Soft Moi Moi Elewe (Mild, No Hot Pepper)',
    category: 'Breakfast',
    servings: 2,
    preparationTime: 12,
    cookingTime: 16,
    estimatedCostPerServing: 700,
    costCurrency: 'NGN',
    calories: 280,
    protein: '14g',
    carbs: '34g',
    fat: '7g',
    fiber: '4g',
    studentFriendly: true,
    studentCategories: ['Quick Meals Between Lectures', 'Student Budget Meals', 'Hostel Kitchen'],
    weightFriendly: true,
    weightGoal: 'Ulcer, Gastritis & Gut Healing',
    equipmentRequired: ['Single hot plate', 'Electric kettle'],
    storageRequirements: 'Store in covered bowl; reheats easily on hostel hot plate.',
    image: '/meals/moimoi.jpg',
    description: 'Steamed Soft Moi Moi Elewe (Mild, No Hot Pepper). Non-irritating, mild, fiber-protective Nigerian meals that coat the stomach lining, promote healing, and avoid severe acid triggers.',
    whyThisMeal: 'Steamed bean pudding cooked with only mild tatashe bell pepper for safe digestion.',
    dietaryTags: ['Nigerian Classic', 'Ulcer & Sensitive Stomach Care'],
    allergens: [],
    nutritionalInfo: {
      calories: 280,
      protein: '14g',
      carbs: '34g',
      fat: '7g',
      fiber: '4g',
      keyNutrients: 'Essential vitamins, bioactive plant nutrients, and balanced macronutrients'
    },
    ingredients: [
      { name: 'Core Nigerian Ingredients', amount: 1, unit: 'portion' },
      { name: 'Fresh Aromatics & Herbs', amount: 1, unit: 'bunch' },
      { name: 'Seasoning & Sea Salt', amount: 1, unit: 'to taste' }
    ],
    instructions: [
      'Prepare fresh local ingredients and simmer on medium heat.',
      'Allow flavors to develop gracefully, check seasoning, and serve hot.'
    ]
  },
  // Ulcer & Sensitive Stomach Care Meal 6
  {
    id: 'rec-hl-gt-6',
    name: 'Fresh Okro Soup with Boiled White Fish & Soft Oat Swallow',
    category: 'Lunch',
    servings: 2,
    preparationTime: 12,
    cookingTime: 16,
    estimatedCostPerServing: 1000,
    costCurrency: 'NGN',
    calories: 320,
    protein: '16g',
    carbs: '38g',
    fat: '8g',
    fiber: '5g',
    studentFriendly: true,
    studentCategories: ['Quick Meals Between Lectures', 'Student Budget Meals', 'Hostel Kitchen'],
    weightFriendly: true,
    weightGoal: 'Ulcer, Gastritis & Gut Healing',
    equipmentRequired: ['Single hot plate', 'Electric kettle'],
    storageRequirements: 'Store in covered bowl; reheats easily on hostel hot plate.',
    image: '/meals/okro-soup.jpg',
    description: 'Fresh Okro Soup with Boiled White Fish & Soft Oat Swallow. Non-irritating, mild, fiber-protective Nigerian meals that coat the stomach lining, promote healing, and avoid severe acid triggers.',
    whyThisMeal: 'Okra mucilage forms a protective barrier over ulcerated stomach tissue.',
    dietaryTags: ['Nigerian Classic', 'Ulcer & Sensitive Stomach Care'],
    allergens: [],
    nutritionalInfo: {
      calories: 320,
      protein: '16g',
      carbs: '38g',
      fat: '8g',
      fiber: '5g',
      keyNutrients: 'Essential vitamins, bioactive plant nutrients, and balanced macronutrients'
    },
    ingredients: [
      { name: 'Core Nigerian Ingredients', amount: 1, unit: 'portion' },
      { name: 'Fresh Aromatics & Herbs', amount: 1, unit: 'bunch' },
      { name: 'Seasoning & Sea Salt', amount: 1, unit: 'to taste' }
    ],
    instructions: [
      'Prepare fresh local ingredients and simmer on medium heat.',
      'Allow flavors to develop gracefully, check seasoning, and serve hot.'
    ]
  },
  // Ulcer & Sensitive Stomach Care Meal 7
  {
    id: 'rec-hl-gt-7',
    name: 'Soft Boiled White Yam with Non-Spicy Tomato Egg Sauce',
    category: 'Lunch',
    servings: 2,
    preparationTime: 14,
    cookingTime: 18,
    estimatedCostPerServing: 850,
    costCurrency: 'NGN',
    calories: 350,
    protein: '18g',
    carbs: '42g',
    fat: '9g',
    fiber: '5g',
    studentFriendly: true,
    studentCategories: ['Quick Meals Between Lectures', 'Student Budget Meals', 'Hostel Kitchen'],
    weightFriendly: true,
    weightGoal: 'Ulcer, Gastritis & Gut Healing',
    equipmentRequired: ['Single hot plate', 'Electric kettle'],
    storageRequirements: 'Store in covered bowl; reheats easily on hostel hot plate.',
    image: '/meals/sweet-potato-egg-sauce.jpg',
    description: 'Soft Boiled White Yam with Non-Spicy Tomato Egg Sauce. Non-irritating, mild, fiber-protective Nigerian meals that coat the stomach lining, promote healing, and avoid severe acid triggers.',
    whyThisMeal: 'Easily digestible starch paired with mild scrambled eggs that will not inflame stomach walls.',
    dietaryTags: ['Nigerian Classic', 'Ulcer & Sensitive Stomach Care'],
    allergens: [],
    nutritionalInfo: {
      calories: 350,
      protein: '18g',
      carbs: '42g',
      fat: '9g',
      fiber: '5g',
      keyNutrients: 'Essential vitamins, bioactive plant nutrients, and balanced macronutrients'
    },
    ingredients: [
      { name: 'Core Nigerian Ingredients', amount: 1, unit: 'portion' },
      { name: 'Fresh Aromatics & Herbs', amount: 1, unit: 'bunch' },
      { name: 'Seasoning & Sea Salt', amount: 1, unit: 'to taste' }
    ],
    instructions: [
      'Prepare fresh local ingredients and simmer on medium heat.',
      'Allow flavors to develop gracefully, check seasoning, and serve hot.'
    ]
  },
  // Ulcer & Sensitive Stomach Care Meal 8
  {
    id: 'rec-hl-gt-8',
    name: 'Mild Spinach (Efo) Stew with Steamed Titus & Rice',
    category: 'Lunch',
    servings: 2,
    preparationTime: 15,
    cookingTime: 19,
    estimatedCostPerServing: 1100,
    costCurrency: 'NGN',
    calories: 380,
    protein: '19g',
    carbs: '46g',
    fat: '10g',
    fiber: '6g',
    studentFriendly: true,
    studentCategories: ['Quick Meals Between Lectures', 'Student Budget Meals', 'Hostel Kitchen'],
    weightFriendly: true,
    weightGoal: 'Ulcer, Gastritis & Gut Healing',
    equipmentRequired: ['Single hot plate', 'Electric kettle'],
    storageRequirements: 'Store in covered bowl; reheats easily on hostel hot plate.',
    image: '/meals/efo-riro.jpg',
    description: 'Mild Spinach (Efo) Stew with Steamed Titus & Rice. Non-irritating, mild, fiber-protective Nigerian meals that coat the stomach lining, promote healing, and avoid severe acid triggers.',
    whyThisMeal: 'Glutamine in spinach assists mucosal repair while avoiding stinging hot spices.',
    dietaryTags: ['Nigerian Classic', 'Ulcer & Sensitive Stomach Care'],
    allergens: [],
    nutritionalInfo: {
      calories: 380,
      protein: '19g',
      carbs: '46g',
      fat: '10g',
      fiber: '6g',
      keyNutrients: 'Essential vitamins, bioactive plant nutrients, and balanced macronutrients'
    },
    ingredients: [
      { name: 'Core Nigerian Ingredients', amount: 1, unit: 'portion' },
      { name: 'Fresh Aromatics & Herbs', amount: 1, unit: 'bunch' },
      { name: 'Seasoning & Sea Salt', amount: 1, unit: 'to taste' }
    ],
    instructions: [
      'Prepare fresh local ingredients and simmer on medium heat.',
      'Allow flavors to develop gracefully, check seasoning, and serve hot.'
    ]
  },
  // Ulcer & Sensitive Stomach Care Meal 9
  {
    id: 'rec-hl-gt-9',
    name: 'Soft Simmered Beans Porridge (Mild, No Scotch Bonnet)',
    category: 'Lunch',
    servings: 2,
    preparationTime: 22,
    cookingTime: 26,
    estimatedCostPerServing: 800,
    costCurrency: 'NGN',
    calories: 370,
    protein: '19g',
    carbs: '44g',
    fat: '9g',
    fiber: '6g',
    studentFriendly: true,
    studentCategories: ['Quick Meals Between Lectures', 'Student Budget Meals', 'Hostel Kitchen'],
    weightFriendly: true,
    weightGoal: 'Ulcer, Gastritis & Gut Healing',
    equipmentRequired: ['Single hot plate', 'Electric kettle'],
    storageRequirements: 'Store in covered bowl; reheats easily on hostel hot plate.',
    image: '/meals/stewed-beans-plantains.jpg',
    description: 'Soft Simmered Beans Porridge (Mild, No Scotch Bonnet). Non-irritating, mild, fiber-protective Nigerian meals that coat the stomach lining, promote healing, and avoid severe acid triggers.',
    whyThisMeal: 'Well-cooked soft honey beans provide gentle dietary fiber for healthy digestive transit.',
    dietaryTags: ['Nigerian Classic', 'Ulcer & Sensitive Stomach Care'],
    allergens: [],
    nutritionalInfo: {
      calories: 370,
      protein: '19g',
      carbs: '44g',
      fat: '9g',
      fiber: '6g',
      keyNutrients: 'Essential vitamins, bioactive plant nutrients, and balanced macronutrients'
    },
    ingredients: [
      { name: 'Core Nigerian Ingredients', amount: 1, unit: 'portion' },
      { name: 'Fresh Aromatics & Herbs', amount: 1, unit: 'bunch' },
      { name: 'Seasoning & Sea Salt', amount: 1, unit: 'to taste' }
    ],
    instructions: [
      'Prepare fresh local ingredients and simmer on medium heat.',
      'Allow flavors to develop gracefully, check seasoning, and serve hot.'
    ]
  },
  // Ulcer & Sensitive Stomach Care Meal 10
  {
    id: 'rec-hl-gt-10',
    name: 'Clear Chicken Broth Soup with Boiled Sweet Potato Chunks',
    category: 'Lunch',
    servings: 2,
    preparationTime: 15,
    cookingTime: 19,
    estimatedCostPerServing: 950,
    costCurrency: 'NGN',
    calories: 320,
    protein: '16g',
    carbs: '38g',
    fat: '8g',
    fiber: '5g',
    studentFriendly: true,
    studentCategories: ['Quick Meals Between Lectures', 'Student Budget Meals', 'Hostel Kitchen'],
    weightFriendly: true,
    weightGoal: 'Ulcer, Gastritis & Gut Healing',
    equipmentRequired: ['Single hot plate', 'Electric kettle'],
    storageRequirements: 'Store in covered bowl; reheats easily on hostel hot plate.',
    image: '/meals/efo-riro.jpg',
    description: 'Clear Chicken Broth Soup with Boiled Sweet Potato Chunks. Non-irritating, mild, fiber-protective Nigerian meals that coat the stomach lining, promote healing, and avoid severe acid triggers.',
    whyThisMeal: 'Bone broth amino acids (glycine and proline) support intestinal barrier integrity.',
    dietaryTags: ['Nigerian Classic', 'Ulcer & Sensitive Stomach Care'],
    allergens: [],
    nutritionalInfo: {
      calories: 320,
      protein: '16g',
      carbs: '38g',
      fat: '8g',
      fiber: '5g',
      keyNutrients: 'Essential vitamins, bioactive plant nutrients, and balanced macronutrients'
    },
    ingredients: [
      { name: 'Core Nigerian Ingredients', amount: 1, unit: 'portion' },
      { name: 'Fresh Aromatics & Herbs', amount: 1, unit: 'bunch' },
      { name: 'Seasoning & Sea Salt', amount: 1, unit: 'to taste' }
    ],
    instructions: [
      'Prepare fresh local ingredients and simmer on medium heat.',
      'Allow flavors to develop gracefully, check seasoning, and serve hot.'
    ]
  },
  // Ulcer & Sensitive Stomach Care Meal 11
  {
    id: 'rec-hl-gt-11',
    name: 'Steamed Croaker Fish with Mashed Potatoes & Carrot Puree',
    category: 'Dinner',
    servings: 2,
    preparationTime: 12,
    cookingTime: 16,
    estimatedCostPerServing: 1100,
    costCurrency: 'NGN',
    calories: 310,
    protein: '16g',
    carbs: '37g',
    fat: '8g',
    fiber: '5g',
    studentFriendly: true,
    studentCategories: ['Quick Meals Between Lectures', 'Student Budget Meals', 'Hostel Kitchen'],
    weightFriendly: true,
    weightGoal: 'Ulcer, Gastritis & Gut Healing',
    equipmentRequired: ['Single hot plate', 'Electric kettle'],
    storageRequirements: 'Store in covered bowl; reheats easily on hostel hot plate.',
    image: '/meals/okro-croaker-fish.jpg',
    description: 'Steamed Croaker Fish with Mashed Potatoes & Carrot Puree. Non-irritating, mild, fiber-protective Nigerian meals that coat the stomach lining, promote healing, and avoid severe acid triggers.',
    whyThisMeal: 'Light, non-greasy evening meal that allows the stomach to heal during sleep.',
    dietaryTags: ['Nigerian Classic', 'Ulcer & Sensitive Stomach Care'],
    allergens: [],
    nutritionalInfo: {
      calories: 310,
      protein: '16g',
      carbs: '37g',
      fat: '8g',
      fiber: '5g',
      keyNutrients: 'Essential vitamins, bioactive plant nutrients, and balanced macronutrients'
    },
    ingredients: [
      { name: 'Core Nigerian Ingredients', amount: 1, unit: 'portion' },
      { name: 'Fresh Aromatics & Herbs', amount: 1, unit: 'bunch' },
      { name: 'Seasoning & Sea Salt', amount: 1, unit: 'to taste' }
    ],
    instructions: [
      'Prepare fresh local ingredients and simmer on medium heat.',
      'Allow flavors to develop gracefully, check seasoning, and serve hot.'
    ]
  },
  // Ulcer & Sensitive Stomach Care Meal 12
  {
    id: 'rec-hl-gt-12',
    name: 'Creamy Asaro Yam Pottage (Mild, Cooked with Palm Oil & Fish)',
    category: 'Dinner',
    servings: 2,
    preparationTime: 16,
    cookingTime: 20,
    estimatedCostPerServing: 900,
    costCurrency: 'NGN',
    calories: 360,
    protein: '18g',
    carbs: '43g',
    fat: '9g',
    fiber: '5g',
    studentFriendly: true,
    studentCategories: ['Quick Meals Between Lectures', 'Student Budget Meals', 'Hostel Kitchen'],
    weightFriendly: true,
    weightGoal: 'Ulcer, Gastritis & Gut Healing',
    equipmentRequired: ['Single hot plate', 'Electric kettle'],
    storageRequirements: 'Store in covered bowl; reheats easily on hostel hot plate.',
    image: '/meals/asaro-elepo.jpg',
    description: 'Creamy Asaro Yam Pottage (Mild, Cooked with Palm Oil & Fish). Non-irritating, mild, fiber-protective Nigerian meals that coat the stomach lining, promote healing, and avoid severe acid triggers.',
    whyThisMeal: 'Gentle, comforting texture that does not demand heavy stomach acid production.',
    dietaryTags: ['Nigerian Classic', 'Ulcer & Sensitive Stomach Care'],
    allergens: [],
    nutritionalInfo: {
      calories: 360,
      protein: '18g',
      carbs: '43g',
      fat: '9g',
      fiber: '5g',
      keyNutrients: 'Essential vitamins, bioactive plant nutrients, and balanced macronutrients'
    },
    ingredients: [
      { name: 'Core Nigerian Ingredients', amount: 1, unit: 'portion' },
      { name: 'Fresh Aromatics & Herbs', amount: 1, unit: 'bunch' },
      { name: 'Seasoning & Sea Salt', amount: 1, unit: 'to taste' }
    ],
    instructions: [
      'Prepare fresh local ingredients and simmer on medium heat.',
      'Allow flavors to develop gracefully, check seasoning, and serve hot.'
    ]
  },
  // Ulcer & Sensitive Stomach Care Meal 13
  {
    id: 'rec-hl-gt-13',
    name: 'Boiled Ripe Plantain with Mild Scrambled Eggs',
    category: 'Dinner',
    servings: 2,
    preparationTime: 10,
    cookingTime: 14,
    estimatedCostPerServing: 700,
    costCurrency: 'NGN',
    calories: 340,
    protein: '17g',
    carbs: '41g',
    fat: '9g',
    fiber: '5g',
    studentFriendly: true,
    studentCategories: ['Quick Meals Between Lectures', 'Student Budget Meals', 'Hostel Kitchen'],
    weightFriendly: true,
    weightGoal: 'Ulcer, Gastritis & Gut Healing',
    equipmentRequired: ['Single hot plate', 'Electric kettle'],
    storageRequirements: 'Store in covered bowl; reheats easily on hostel hot plate.',
    image: '/meals/sweet-potato-egg-sauce.jpg',
    description: 'Boiled Ripe Plantain with Mild Scrambled Eggs. Non-irritating, mild, fiber-protective Nigerian meals that coat the stomach lining, promote healing, and avoid severe acid triggers.',
    whyThisMeal: 'Ripe plantains contain leucocyanidin, a flavonoid known to increase mucous thickness in the stomach.',
    dietaryTags: ['Nigerian Classic', 'Ulcer & Sensitive Stomach Care'],
    allergens: [],
    nutritionalInfo: {
      calories: 340,
      protein: '17g',
      carbs: '41g',
      fat: '9g',
      fiber: '5g',
      keyNutrients: 'Essential vitamins, bioactive plant nutrients, and balanced macronutrients'
    },
    ingredients: [
      { name: 'Core Nigerian Ingredients', amount: 1, unit: 'portion' },
      { name: 'Fresh Aromatics & Herbs', amount: 1, unit: 'bunch' },
      { name: 'Seasoning & Sea Salt', amount: 1, unit: 'to taste' }
    ],
    instructions: [
      'Prepare fresh local ingredients and simmer on medium heat.',
      'Allow flavors to develop gracefully, check seasoning, and serve hot.'
    ]
  },
  // Ulcer & Sensitive Stomach Care Meal 14
  {
    id: 'rec-hl-gt-14',
    name: 'Mild Okro Stew with Boiled Chicken Breast & Soft Swallow',
    category: 'Dinner',
    servings: 2,
    preparationTime: 14,
    cookingTime: 18,
    estimatedCostPerServing: 1050,
    costCurrency: 'NGN',
    calories: 300,
    protein: '15g',
    carbs: '36g',
    fat: '8g',
    fiber: '5g',
    studentFriendly: true,
    studentCategories: ['Quick Meals Between Lectures', 'Student Budget Meals', 'Hostel Kitchen'],
    weightFriendly: true,
    weightGoal: 'Ulcer, Gastritis & Gut Healing',
    equipmentRequired: ['Single hot plate', 'Electric kettle'],
    storageRequirements: 'Store in covered bowl; reheats easily on hostel hot plate.',
    image: '/meals/okro-soup.jpg',
    description: 'Mild Okro Stew with Boiled Chicken Breast & Soft Swallow. Non-irritating, mild, fiber-protective Nigerian meals that coat the stomach lining, promote healing, and avoid severe acid triggers.',
    whyThisMeal: 'Mucilaginous fiber coats and soothes stomach lining for uninterrupted rest.',
    dietaryTags: ['Nigerian Classic', 'Ulcer & Sensitive Stomach Care'],
    allergens: [],
    nutritionalInfo: {
      calories: 300,
      protein: '15g',
      carbs: '36g',
      fat: '8g',
      fiber: '5g',
      keyNutrients: 'Essential vitamins, bioactive plant nutrients, and balanced macronutrients'
    },
    ingredients: [
      { name: 'Core Nigerian Ingredients', amount: 1, unit: 'portion' },
      { name: 'Fresh Aromatics & Herbs', amount: 1, unit: 'bunch' },
      { name: 'Seasoning & Sea Salt', amount: 1, unit: 'to taste' }
    ],
    instructions: [
      'Prepare fresh local ingredients and simmer on medium heat.',
      'Allow flavors to develop gracefully, check seasoning, and serve hot.'
    ]
  },
  // Ulcer & Sensitive Stomach Care Meal 15
  {
    id: 'rec-hl-gt-15',
    name: 'Steamed White Rice with Non-Acidic Pumpkin Vegetable Stew',
    category: 'Dinner',
    servings: 2,
    preparationTime: 14,
    cookingTime: 18,
    estimatedCostPerServing: 850,
    costCurrency: 'NGN',
    calories: 350,
    protein: '18g',
    carbs: '42g',
    fat: '9g',
    fiber: '5g',
    studentFriendly: true,
    studentCategories: ['Quick Meals Between Lectures', 'Student Budget Meals', 'Hostel Kitchen'],
    weightFriendly: true,
    weightGoal: 'Ulcer, Gastritis & Gut Healing',
    equipmentRequired: ['Single hot plate', 'Electric kettle'],
    storageRequirements: 'Store in covered bowl; reheats easily on hostel hot plate.',
    image: '/meals/white-rice-fish-stew.jpg',
    description: 'Steamed White Rice with Non-Acidic Pumpkin Vegetable Stew. Non-irritating, mild, fiber-protective Nigerian meals that coat the stomach lining, promote healing, and avoid severe acid triggers.',
    whyThisMeal: 'Bland, nutritious combination that maintains energy without triggering reflux.',
    dietaryTags: ['Nigerian Classic', 'Ulcer & Sensitive Stomach Care'],
    allergens: [],
    nutritionalInfo: {
      calories: 350,
      protein: '18g',
      carbs: '42g',
      fat: '9g',
      fiber: '5g',
      keyNutrients: 'Essential vitamins, bioactive plant nutrients, and balanced macronutrients'
    },
    ingredients: [
      { name: 'Core Nigerian Ingredients', amount: 1, unit: 'portion' },
      { name: 'Fresh Aromatics & Herbs', amount: 1, unit: 'bunch' },
      { name: 'Seasoning & Sea Salt', amount: 1, unit: 'to taste' }
    ],
    instructions: [
      'Prepare fresh local ingredients and simmer on medium heat.',
      'Allow flavors to develop gracefully, check seasoning, and serve hot.'
    ]
  },
  // Ulcer & Sensitive Stomach Care Meal 16
  {
    id: 'rec-hl-gt-16',
    name: 'Ripe Banana Slices with Mild Roasted Groundnuts',
    category: 'Snacks',
    servings: 2,
    preparationTime: 2,
    cookingTime: 6,
    estimatedCostPerServing: 300,
    costCurrency: 'NGN',
    calories: 170,
    protein: '9g',
    carbs: '20g',
    fat: '4g',
    fiber: '3g',
    studentFriendly: true,
    studentCategories: ['Quick Meals Between Lectures', 'Student Budget Meals', 'Hostel Kitchen'],
    weightFriendly: true,
    weightGoal: 'Ulcer, Gastritis & Gut Healing',
    equipmentRequired: ['Single hot plate', 'Electric kettle'],
    storageRequirements: 'Store in covered bowl; reheats easily on hostel hot plate.',
    image: '/meals/boli-groundnuts.jpg',
    description: 'Ripe Banana Slices with Mild Roasted Groundnuts. Non-irritating, mild, fiber-protective Nigerian meals that coat the stomach lining, promote healing, and avoid severe acid triggers.',
    whyThisMeal: 'Bananas act as a natural antacid, providing quick relief from epigastric discomfort.',
    dietaryTags: ['Nigerian Classic', 'Ulcer & Sensitive Stomach Care'],
    allergens: [],
    nutritionalInfo: {
      calories: 170,
      protein: '9g',
      carbs: '20g',
      fat: '4g',
      fiber: '3g',
      keyNutrients: 'Essential vitamins, bioactive plant nutrients, and balanced macronutrients'
    },
    ingredients: [
      { name: 'Core Nigerian Ingredients', amount: 1, unit: 'portion' },
      { name: 'Fresh Aromatics & Herbs', amount: 1, unit: 'bunch' },
      { name: 'Seasoning & Sea Salt', amount: 1, unit: 'to taste' }
    ],
    instructions: [
      'Prepare fresh local ingredients and simmer on medium heat.',
      'Allow flavors to develop gracefully, check seasoning, and serve hot.'
    ]
  },
  // Ulcer & Sensitive Stomach Care Meal 17
  {
    id: 'rec-hl-gt-17',
    name: 'Steamed Sweet Corn Cob (Tender Kernels)',
    category: 'Snacks',
    servings: 2,
    preparationTime: 8,
    cookingTime: 12,
    estimatedCostPerServing: 350,
    costCurrency: 'NGN',
    calories: 180,
    protein: '9g',
    carbs: '22g',
    fat: '5g',
    fiber: '3g',
    studentFriendly: true,
    studentCategories: ['Quick Meals Between Lectures', 'Student Budget Meals', 'Hostel Kitchen'],
    weightFriendly: true,
    weightGoal: 'Ulcer, Gastritis & Gut Healing',
    equipmentRequired: ['Single hot plate', 'Electric kettle'],
    storageRequirements: 'Store in covered bowl; reheats easily on hostel hot plate.',
    image: '/meals/boli-groundnuts.jpg',
    description: 'Steamed Sweet Corn Cob (Tender Kernels). Non-irritating, mild, fiber-protective Nigerian meals that coat the stomach lining, promote healing, and avoid severe acid triggers.',
    whyThisMeal: 'Naturally sweet and non-acidic snack that sustains energy between classes.',
    dietaryTags: ['Nigerian Classic', 'Ulcer & Sensitive Stomach Care'],
    allergens: [],
    nutritionalInfo: {
      calories: 180,
      protein: '9g',
      carbs: '22g',
      fat: '5g',
      fiber: '3g',
      keyNutrients: 'Essential vitamins, bioactive plant nutrients, and balanced macronutrients'
    },
    ingredients: [
      { name: 'Core Nigerian Ingredients', amount: 1, unit: 'portion' },
      { name: 'Fresh Aromatics & Herbs', amount: 1, unit: 'bunch' },
      { name: 'Seasoning & Sea Salt', amount: 1, unit: 'to taste' }
    ],
    instructions: [
      'Prepare fresh local ingredients and simmer on medium heat.',
      'Allow flavors to develop gracefully, check seasoning, and serve hot.'
    ]
  },
  // Ulcer & Sensitive Stomach Care Meal 18
  {
    id: 'rec-hl-gt-18',
    name: 'Chilled Fresh Kunu Aya (Tiger Nut & Coconut Milk)',
    category: 'Juices & Smoothies',
    servings: 2,
    preparationTime: 6,
    cookingTime: 10,
    estimatedCostPerServing: 450,
    costCurrency: 'NGN',
    calories: 160,
    protein: '8g',
    carbs: '19g',
    fat: '4g',
    fiber: '2g',
    studentFriendly: true,
    studentCategories: ['Quick Meals Between Lectures', 'Student Budget Meals', 'Hostel Kitchen'],
    weightFriendly: true,
    weightGoal: 'Ulcer, Gastritis & Gut Healing',
    equipmentRequired: ['Single hot plate', 'Electric kettle'],
    storageRequirements: 'Store in covered bowl; reheats easily on hostel hot plate.',
    image: '/meals/kunu-aya.jpg',
    description: 'Chilled Fresh Kunu Aya (Tiger Nut & Coconut Milk). Non-irritating, mild, fiber-protective Nigerian meals that coat the stomach lining, promote healing, and avoid severe acid triggers.',
    whyThisMeal: 'Soothing alkaline plant milk that neutralizes stomach hyperacidity.',
    dietaryTags: ['Nigerian Classic', 'Ulcer & Sensitive Stomach Care'],
    allergens: [],
    nutritionalInfo: {
      calories: 160,
      protein: '8g',
      carbs: '19g',
      fat: '4g',
      fiber: '2g',
      keyNutrients: 'Essential vitamins, bioactive plant nutrients, and balanced macronutrients'
    },
    ingredients: [
      { name: 'Core Nigerian Ingredients', amount: 1, unit: 'portion' },
      { name: 'Fresh Aromatics & Herbs', amount: 1, unit: 'bunch' },
      { name: 'Seasoning & Sea Salt', amount: 1, unit: 'to taste' }
    ],
    instructions: [
      'Prepare fresh local ingredients and simmer on medium heat.',
      'Allow flavors to develop gracefully, check seasoning, and serve hot.'
    ]
  },
  // Ulcer & Sensitive Stomach Care Meal 19
  {
    id: 'rec-hl-gt-19',
    name: 'Chilled Coconut Water with Cucumber Ribbons',
    category: 'Juices & Smoothies',
    servings: 2,
    preparationTime: 2,
    cookingTime: 6,
    estimatedCostPerServing: 300,
    costCurrency: 'NGN',
    calories: 45,
    protein: '2g',
    carbs: '5g',
    fat: '1g',
    fiber: '1g',
    studentFriendly: true,
    studentCategories: ['Quick Meals Between Lectures', 'Student Budget Meals', 'Hostel Kitchen'],
    weightFriendly: true,
    weightGoal: 'Ulcer, Gastritis & Gut Healing',
    equipmentRequired: ['Single hot plate', 'Electric kettle'],
    storageRequirements: 'Store in covered bowl; reheats easily on hostel hot plate.',
    image: '/meals/kunu-aya.jpg',
    description: 'Chilled Coconut Water with Cucumber Ribbons. Non-irritating, mild, fiber-protective Nigerian meals that coat the stomach lining, promote healing, and avoid severe acid triggers.',
    whyThisMeal: 'Replenishes electrolytes with a soothing, non-acidic pH.',
    dietaryTags: ['Nigerian Classic', 'Ulcer & Sensitive Stomach Care'],
    allergens: [],
    nutritionalInfo: {
      calories: 45,
      protein: '2g',
      carbs: '5g',
      fat: '1g',
      fiber: '1g',
      keyNutrients: 'Essential vitamins, bioactive plant nutrients, and balanced macronutrients'
    },
    ingredients: [
      { name: 'Core Nigerian Ingredients', amount: 1, unit: 'portion' },
      { name: 'Fresh Aromatics & Herbs', amount: 1, unit: 'bunch' },
      { name: 'Seasoning & Sea Salt', amount: 1, unit: 'to taste' }
    ],
    instructions: [
      'Prepare fresh local ingredients and simmer on medium heat.',
      'Allow flavors to develop gracefully, check seasoning, and serve hot.'
    ]
  },
  // Ulcer & Sensitive Stomach Care Meal 20
  {
    id: 'rec-hl-gt-20',
    name: 'Fresh Pawpaw (Papaya) Bowl with Sweet Honey',
    category: 'Fruits & Light Bites',
    servings: 2,
    preparationTime: 3,
    cookingTime: 7,
    estimatedCostPerServing: 350,
    costCurrency: 'NGN',
    calories: 110,
    protein: '6g',
    carbs: '13g',
    fat: '3g',
    fiber: '2g',
    studentFriendly: true,
    studentCategories: ['Quick Meals Between Lectures', 'Student Budget Meals', 'Hostel Kitchen'],
    weightFriendly: true,
    weightGoal: 'Ulcer, Gastritis & Gut Healing',
    equipmentRequired: ['Single hot plate', 'Electric kettle'],
    storageRequirements: 'Store in covered bowl; reheats easily on hostel hot plate.',
    image: '/meals/papaya-watermelon-combo.jpg',
    description: 'Fresh Pawpaw (Papaya) Bowl with Sweet Honey. Non-irritating, mild, fiber-protective Nigerian meals that coat the stomach lining, promote healing, and avoid severe acid triggers.',
    whyThisMeal: 'Papain proteolytic enzymes gently assist digestion, relieving digestive fullness.',
    dietaryTags: ['Nigerian Classic', 'Ulcer & Sensitive Stomach Care'],
    allergens: [],
    nutritionalInfo: {
      calories: 110,
      protein: '6g',
      carbs: '13g',
      fat: '3g',
      fiber: '2g',
      keyNutrients: 'Essential vitamins, bioactive plant nutrients, and balanced macronutrients'
    },
    ingredients: [
      { name: 'Core Nigerian Ingredients', amount: 1, unit: 'portion' },
      { name: 'Fresh Aromatics & Herbs', amount: 1, unit: 'bunch' },
      { name: 'Seasoning & Sea Salt', amount: 1, unit: 'to taste' }
    ],
    instructions: [
      'Prepare fresh local ingredients and simmer on medium heat.',
      'Allow flavors to develop gracefully, check seasoning, and serve hot.'
    ]
  },
  // Ulcer & Sensitive Stomach Care Meal 21
  {
    id: 'rec-hl-gt-21',
    name: 'Crisp Sweet Watermelon Cubes',
    category: 'Fruits & Light Bites',
    servings: 2,
    preparationTime: 2,
    cookingTime: 6,
    estimatedCostPerServing: 300,
    costCurrency: 'NGN',
    calories: 85,
    protein: '4g',
    carbs: '10g',
    fat: '2g',
    fiber: '1g',
    studentFriendly: true,
    studentCategories: ['Quick Meals Between Lectures', 'Student Budget Meals', 'Hostel Kitchen'],
    weightFriendly: true,
    weightGoal: 'Ulcer, Gastritis & Gut Healing',
    equipmentRequired: ['Single hot plate', 'Electric kettle'],
    storageRequirements: 'Store in covered bowl; reheats easily on hostel hot plate.',
    image: '/meals/papaya-watermelon-combo.jpg',
    description: 'Crisp Sweet Watermelon Cubes. Non-irritating, mild, fiber-protective Nigerian meals that coat the stomach lining, promote healing, and avoid severe acid triggers.',
    whyThisMeal: 'Over 90% water content; non-acidic fruit that cools and rehydrates the stomach.',
    dietaryTags: ['Nigerian Classic', 'Ulcer & Sensitive Stomach Care'],
    allergens: [],
    nutritionalInfo: {
      calories: 85,
      protein: '4g',
      carbs: '10g',
      fat: '2g',
      fiber: '1g',
      keyNutrients: 'Essential vitamins, bioactive plant nutrients, and balanced macronutrients'
    },
    ingredients: [
      { name: 'Core Nigerian Ingredients', amount: 1, unit: 'portion' },
      { name: 'Fresh Aromatics & Herbs', amount: 1, unit: 'bunch' },
      { name: 'Seasoning & Sea Salt', amount: 1, unit: 'to taste' }
    ],
    instructions: [
      'Prepare fresh local ingredients and simmer on medium heat.',
      'Allow flavors to develop gracefully, check seasoning, and serve hot.'
    ]
  },
  // Ulcer & Sensitive Stomach Care Meal 22
  {
    id: 'rec-hl-gt-22',
    name: 'Chilled Coconut Tapioca Pudding with Mashed Banana',
    category: 'Desserts',
    servings: 2,
    preparationTime: 7,
    cookingTime: 11,
    estimatedCostPerServing: 450,
    costCurrency: 'NGN',
    calories: 170,
    protein: '9g',
    carbs: '20g',
    fat: '4g',
    fiber: '3g',
    studentFriendly: true,
    studentCategories: ['Quick Meals Between Lectures', 'Student Budget Meals', 'Hostel Kitchen'],
    weightFriendly: true,
    weightGoal: 'Ulcer, Gastritis & Gut Healing',
    equipmentRequired: ['Single hot plate', 'Electric kettle'],
    storageRequirements: 'Store in covered bowl; reheats easily on hostel hot plate.',
    image: '/meals/tapioca-mango.jpg',
    description: 'Chilled Coconut Tapioca Pudding with Mashed Banana. Non-irritating, mild, fiber-protective Nigerian meals that coat the stomach lining, promote healing, and avoid severe acid triggers.',
    whyThisMeal: 'Creamy, gentle dessert that provides satisfaction without processed spices or irritants.',
    dietaryTags: ['Nigerian Classic', 'Ulcer & Sensitive Stomach Care'],
    allergens: [],
    nutritionalInfo: {
      calories: 170,
      protein: '9g',
      carbs: '20g',
      fat: '4g',
      fiber: '3g',
      keyNutrients: 'Essential vitamins, bioactive plant nutrients, and balanced macronutrients'
    },
    ingredients: [
      { name: 'Core Nigerian Ingredients', amount: 1, unit: 'portion' },
      { name: 'Fresh Aromatics & Herbs', amount: 1, unit: 'bunch' },
      { name: 'Seasoning & Sea Salt', amount: 1, unit: 'to taste' }
    ],
    instructions: [
      'Prepare fresh local ingredients and simmer on medium heat.',
      'Allow flavors to develop gracefully, check seasoning, and serve hot.'
    ]
  },
];

export const MEAL_SLOT_TYPES = [
  'Breakfast',
  'Lunch',
  'Dinner',
  'Snacks',
  'Juices & Smoothies',
  'Fruits & Light Bites',
  'Appetizers & Sides',
  'Desserts'
];

export const STUDENT_FEATURE_CARDS = [
  {
    id: 'brain-focus',
    title: 'Brain & Focus',
    tagline: 'Nutrients for cognitive stamina',
    description: 'Balanced meals featuring choline, omega-3, iron, and slow-burn carbs to support mental clarity during intense study.',
    icon: 'Brain',
    color: '#C66B4E',
    badge: 'Study Fuel'
  },
  {
    id: 'energy-alertness',
    title: 'Energy & Alertness',
    tagline: 'Avoid lecture crashes',
    description: 'Quick breakfasts, between-lecture lunches, and hydration routines that sustain energy without sugar crashes.',
    icon: 'Zap',
    color: '#D97706',
    badge: 'Sustained Energy'
  },
  {
    id: 'budget-meals',
    title: 'Student Budget Meals',
    tagline: 'Affordable, real-price cooking',
    description: 'Budget-conscious recipes priced in Naira (₦), one-pot cooking, batch-prep staples, and smart leftover management.',
    icon: 'PiggyBank',
    color: '#49352D',
    badge: 'Under ₦1,200/meal'
  },
  {
    id: 'quick-meals',
    title: 'Quick Meals Between Lectures',
    tagline: 'Ready in 5 to 15 minutes',
    description: 'Swift recipes requiring minimal cleanup so you never have to skip lunch when lecture breaks are short.',
    icon: 'Clock',
    color: '#C66B4E',
    badge: 'Fast & Easy'
  },
  {
    id: 'hostel-kitchen',
    title: 'Hostel Kitchen',
    tagline: 'Cook with what you actually have',
    description: 'Filter recipes by your real dorm setup: electric kettle, single hot plate, shared hall, or fridge-free food storage.',
    icon: 'Home',
    color: '#786C65',
    badge: 'Equipment-Smart'
  },
  {
    id: 'exam-week',
    title: 'Exam Week',
    tagline: 'Exam Week Survival Mode',
    description: 'Simplified, high-efficiency meal plans, low-stress grocery lists, and quick reminders to keep you fed when tests loom.',
    icon: 'GraduationCap',
    color: '#B83B26',
    badge: 'High Focus'
  }
];

export const HOSTEL_EQUIPMENT_OPTIONS = [
  { id: 'all', label: 'All Equipment' },
  { id: 'No cooking equipment', label: 'No Cooking Equipment (No-Cook)' },
  { id: 'Electric kettle', label: 'Electric Kettle' },
  { id: 'Single hot plate', label: 'Single Hot Plate' },
  { id: 'Shared kitchen', label: 'Shared Kitchen' },
  { id: 'Fully equipped kitchen', label: 'Fully Equipped Kitchen' }
];

export const PREPARATION_TIME_RANGES = [
  { id: 'all', label: 'Any Prep Time' },
  { id: 'under-15', label: 'Under 15 minutes', max: 15 },
  { id: '15-30', label: '15–30 minutes', min: 15, max: 30 },
  { id: '30-60', label: '30–60 minutes', min: 30, max: 60 },
  { id: 'over-60', label: 'More than 60 minutes', min: 60 }
];

export const NIGERIAN_BUDGET_TIERS = [
  { id: 'all', label: 'All Budgets' },
  { id: 'under-800', label: 'Under ₦800 / serving', max: 800 },
  { id: 'under-1200', label: 'Under ₦1,200 / serving', max: 1200 },
  { id: 'under-1800', label: 'Under ₦1,800 / serving', max: 1800 }
];
