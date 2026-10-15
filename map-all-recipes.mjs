import fs from 'fs';

let code = fs.readFileSync('src/data/defaultRecipes.js', 'utf8');

const mapping = [
  // Macaroni / Spaghetti
  { namePart: 'Geisha Mackerel Jollof Macaroni', img: '/meals/jollof-rice.jpg' },
  { namePart: 'Jollof Spaghetti with Sausage Slices & Boiled Eggs', img: '/meals/jollof-rice.jpg' },

  // Plantain & Eggs
  { namePart: 'Boiled Semi-Ripe Plantain with Peppered Veggie Scrambled Eggs', img: '/meals/sweet-potato-egg-sauce.jpg' },
  { namePart: 'Fried Sweet Plantain (Dodo) with 3 Cheesy Scrambled Eggs', img: '/meals/stewed-beans-plantains.jpg' },
  { namePart: 'Boiled Plantain with Steamed Ugwu Greens & Smoked Panla', img: '/meals/stewed-beans-plantains.jpg' },
  { namePart: 'Boiled Semi-Ripe Plantain with Peppered Scrambled Eggs', img: '/meals/sweet-potato-egg-sauce.jpg' },
  { namePart: 'Boiled Ripe Plantain with Mild Scrambled Eggs', img: '/meals/sweet-potato-egg-sauce.jpg' },
  { namePart: 'Boiled Unripe Plantain with Light Tomato Fish Sauce', img: '/meals/white-rice-fish-stew.jpg' },

  // Detox water / drinks
  { namePart: 'Chilled Detox Cucumber, Lemon & Mint Flask Water', img: '/meals/chapman.jpg' },
  { namePart: 'Cucumber, Bitter Leaf & Ginger Green Detox Juice', img: '/meals/chapman.jpg' },
  { namePart: 'Cucumber, Lime & Garden Mint Infusion Water', img: '/meals/chapman.jpg' },
  { namePart: 'Fresh Beetroot, Carrot & Ginger Cold Juice', img: '/meals/zobo-drink.jpg' },
  { namePart: 'Warm Lemon, Ginger & Honey Morning Elixir', img: '/meals/zobo-drink.jpg' },
  { namePart: 'Chilled Coconut Water with Cucumber Ribbons', img: '/meals/kunu-aya.jpg' },
  { namePart: 'Avocado Banana Smoothie with Honey & Whole Milk', img: '/meals/kunu-aya.jpg' },

  // Corn & Groundnuts
  { namePart: 'Steamed Sweet Corn on the Cob with Boiled Groundnuts (Agbado & Epa)', img: '/meals/boli-groundnuts.jpg' },
  { namePart: 'Boiled Corn Cob with Minimal Boiled Groundnuts', img: '/meals/boli-groundnuts.jpg' },
  { namePart: 'Steamed Sweet Corn Cob with Roasted Groundnuts', img: '/meals/boli-groundnuts.jpg' },
  { namePart: 'Steamed Sweet Corn Cob (Tender Kernels)', img: '/meals/boli-groundnuts.jpg' },
  { namePart: 'Boiled Corn with Lightly Salted Groundnuts', img: '/meals/boli-groundnuts.jpg' },
  { namePart: 'Roasted Bambara Groundnuts (Okpa Beans Crunch)', img: '/meals/boli-groundnuts.jpg' },

  // Pap / Ogi
  { namePart: 'Millet Pap (Ogi Baba) with Sugar-Free Milk & Boiled Egg', img: '/meals/akara-pap.jpg' },
  { namePart: 'Golden Pap (Ogi) with Milk & Soft Boiled Egg', img: '/meals/custard.jpg' },
  { namePart: 'Millet Pap (Ogi Baba) with Skimmed Milk & Boiled Egg', img: '/meals/akara-pap.jpg' },
  { namePart: 'Silky Millet Pap (Ogi) with Milk & Scrambled Eggs (No Pepper)', img: '/meals/custard.jpg' },

  // Oats
  { namePart: 'Oatmeal Porridge with Skimmed Milk & Apple Slices', img: '/meals/custard.jpg' },
  { namePart: 'Oatmeal Porridge Cooked in Whole Milk with Bananas & Cashews', img: '/meals/custard.jpg' },
  { namePart: 'Rolled Oats Porridge with Cinnamon Bark & Chia Seeds', img: '/meals/custard.jpg' },
  { namePart: 'Rolled Oats Porridge Infused with Turmeric & Fresh Ginger', img: '/meals/custard.jpg' },
  { namePart: 'Rolled Oats Porridge with Flaxseed & Sliced Sweet Banana', img: '/meals/custard.jpg' },
  { namePart: 'Soft Rolled Oats Cooked with Evaporated Milk & Banana', img: '/meals/custard.jpg' },

  // Fish & Seafood
  { namePart: 'Grilled Tilapia Fillet with Lemon & Tossed Garden Salad', img: '/meals/catfish-peppersoup.jpg' },
  { namePart: 'Grilled Herb Titus Steak with Steamed Ugwu Greens', img: '/meals/white-rice-fish-stew.jpg' },
  { namePart: 'Grilled Herb Titus Fillet with Steamed Greens & Lemon Juice', img: '/meals/white-rice-fish-stew.jpg' },
  { namePart: 'Steamed Mackerel (Titus) Fillet with Ugwu Greens & Brown Rice', img: '/meals/white-rice-fish-stew.jpg' },
  { namePart: 'Grilled Tilapia with Tossed Garden Greens & Olive Drizzle', img: '/meals/catfish-peppersoup.jpg' },
  { namePart: 'Clear Fish Pepper Soup with Boiled Yam Baton', img: '/meals/catfish-peppersoup.jpg' },
  { namePart: 'Tilapia Fish Pepper Soup with Fresh Uziza Leaves', img: '/meals/catfish-peppersoup.jpg' },
  { namePart: 'Spicy Goat Meat Pepper Soup with Scent Leaves', img: '/meals/catfish-peppersoup.jpg' },
  { namePart: 'Clear Chicken Broth Soup with Boiled Sweet Potato Chunks', img: '/meals/catfish-peppersoup.jpg' },
  { namePart: 'Turmeric Spiced Steamed Fish Stew with White Rice', img: '/meals/white-rice-fish-stew.jpg' },

  // Okro
  { namePart: 'Vegetable Okro Stew with Boiled Chicken & Cauliflower Mash', img: '/meals/okro-soup.jpg' },
  { namePart: 'Mild Okro Stew with Boiled Chicken Breast & Soft Swallow', img: '/meals/okro-soup.jpg' },
  { namePart: 'Okro & Seafood Soup with Light Cabbage Swallow', img: '/meals/okro-soup.jpg' },

  // Yam & Potato
  { namePart: 'Boiled White Yam with Corned Beef & Egg Sauce', img: '/meals/sweet-potato-egg-sauce.jpg' },
  { namePart: 'Boiled White Yam with Garlic, Ginger & Scent Leaf Stew', img: '/meals/boiled-yam-garden-egg.jpg' },
  { namePart: 'Soft Boiled White Yam with Non-Spicy Tomato Egg Sauce', img: '/meals/sweet-potato-egg-sauce.jpg' },

  // Rice
  { namePart: 'Nigerian Fried Rice with Liver Bites & Grilled Chicken Leg', img: 'https://images.unsplash.com/photo-1665332111329-dd9d7fa46c74?w=900&auto=format&fit=crop&q=85' },
  { namePart: 'Steamed White Rice with Non-Acidic Pumpkin Vegetable Stew', img: '/meals/white-rice-fish-stew.jpg' },

  // Bread / Snacks
  { namePart: 'Agege Bread Sandwich with Canned Sardine & Peanut Butter', img: '/meals/bread-sardine-toast.jpg' },
  { namePart: 'Crunchy Spiced Chin Chin Snack Bowl', img: '/meals/puffpuff.jpg' },

  // Vegetables / Soups
  { namePart: 'Boiled Egg with Steamed Ugwu Greens & Garlic Dressing', img: '/meals/cabbage-eggs.jpg' },
  { namePart: 'Boiled Egg Whites with Garlic Sautéed Spinach', img: '/meals/cabbage-eggs.jpg' },
  { namePart: 'Bitter Leaf Soup (Ofe Onugbu) with Lean Catfish & Oat Swallow', img: '/meals/efo-riro.jpg' },
  { namePart: 'Fresh Ugwu & Scent Leaf (Efirin) Broth with Poached Titus', img: '/meals/efo-riro.jpg' },
  { namePart: 'Steamed Spinach & Shoko Stew with Boiled Chicken Breast', img: '/meals/efo-riro.jpg' },
  { namePart: 'Clear Vegetable Soup with Smoked Dry Fish & Oat Swallow', img: '/meals/efo-riro.jpg' },
  { namePart: 'Vegetable Smoked Panla Stew with Boiled Unripe Plantain', img: '/meals/efo-riro.jpg' },

  // Fruits
  { namePart: 'Fresh Green Apple Wedges with Roasted Groundnuts', img: '/meals/papaya-watermelon-combo.jpg' },
  { namePart: 'Crisp Pawpaw Cubes with Lime Juice & Chia Sprinkles', img: '/meals/papaya-watermelon-combo.jpg' },
  { namePart: 'Fresh Seasonal Orange Slices with Dark Raisins', img: '/meals/papaya-watermelon-combo.jpg' },
  { namePart: 'Ripe Banana Slices with Mild Roasted Groundnuts', img: '/meals/boli-groundnuts.jpg' },
  { namePart: 'Fresh Cucumber Slices & Roasted Groundnuts', img: '/meals/garden-egg-peanut.jpg' }
];

let replaced = 0;
for (const item of mapping) {
  const needle = `name: '${item.namePart}',`;
  const idx = code.indexOf(needle);
  if (idx !== -1) {
    const after = code.slice(idx);
    const imgMatch = after.match(/image:\s*'([^']+)'/);
    if (imgMatch) {
      const oldImg = imgMatch[0];
      const newImg = `image: '${item.img}'`;
      const chunk = after.slice(0, 500).replace(oldImg, newImg);
      code = code.slice(0, idx) + chunk + after.slice(500);
      replaced++;
    }
  } else {
    console.log('Not found:', item.namePart);
  }
}

fs.writeFileSync('src/data/defaultRecipes.js', code, 'utf8');
console.log('Successfully updated images for', replaced, 'recipes');
