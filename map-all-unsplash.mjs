import fs from 'fs';

const file = 'src/data/defaultRecipes.js';
let code = fs.readFileSync(file, 'utf8');

// Parse recipe objects by splitting on `{\n    id:`
const parts = code.split(/(?=\{\s*id:\s*['"]rec-)/g);
console.log('Total sections found:', parts.length);

let replacedCount = 0;

for (let i = 0; i < parts.length; i++) {
  let section = parts[i];
  if (!section.includes("image: 'https://images.unsplash.com")) continue;

  const nameMatch = section.match(/name:\s*'([^']+)'/);
  if (!nameMatch) continue;
  const name = nameMatch[1].toLowerCase();

  let newImg = null;

  if (name.includes('fried rice')) {
    newImg = 'https://images.unsplash.com/photo-1665332111329-dd9d7fa46c74?w=900&auto=format&fit=crop&q=85';
  } else if (name.includes('macaroni') || name.includes('spaghetti') || name.includes('jollof')) {
    newImg = '/meals/jollof-rice.jpg';
  } else if (name.includes('beans') || name.includes('dodo') || name.includes('plantain pottage')) {
    newImg = '/meals/stewed-beans-plantains.jpg';
  } else if (name.includes('plantain') && (name.includes('egg') || name.includes('sauce'))) {
    newImg = '/meals/sweet-potato-egg-sauce.jpg';
  } else if (name.includes('plantain') && (name.includes('fish') || name.includes('stew'))) {
    newImg = '/meals/white-rice-fish-stew.jpg';
  } else if (name.includes('corn') || name.includes('groundnut') || name.includes('boli') || name.includes('banana')) {
    newImg = '/meals/boli-groundnuts.jpg';
  } else if (name.includes('oat') || name.includes('porridge') || name.includes('pap') || name.includes('ogi')) {
    newImg = '/meals/custard.jpg';
  } else if (name.includes('bread') || name.includes('toast') || name.includes('sandwich')) {
    newImg = '/meals/bread-sardine-toast.jpg';
  } else if (name.includes('chin chin') || name.includes('puff')) {
    newImg = '/meals/puffpuff.jpg';
  } else if (name.includes('okro') || name.includes('okra')) {
    newImg = '/meals/okro-soup.jpg';
  } else if (name.includes('egusi')) {
    newImg = '/meals/egusi-soup.jpg';
  } else if (name.includes('efo') || name.includes('spinach') || name.includes('bitter leaf') || name.includes('soup') || name.includes('shoko') || name.includes('broth')) {
    newImg = '/meals/efo-riro.jpg';
  } else if (name.includes('pepper soup') || name.includes('tilapia') || name.includes('catfish') || name.includes('goat meat') || name.includes('point & kill')) {
    newImg = '/meals/catfish-peppersoup.jpg';
  } else if (name.includes('titus') || name.includes('mackerel') || name.includes('fish') || name.includes('rice')) {
    newImg = '/meals/white-rice-fish-stew.jpg';
  } else if (name.includes('yam') || name.includes('potato') || name.includes('asaro')) {
    newImg = '/meals/sweet-potato-egg-sauce.jpg';
  } else if (name.includes('garden egg')) {
    newImg = '/meals/garden-egg-peanut.jpg';
  } else if (name.includes('cabbage') || name.includes('egg') || name.includes('scramble')) {
    newImg = '/meals/cabbage-eggs.jpg';
  } else if (name.includes('zobo') || name.includes('juice') || name.includes('elixir') || name.includes('tea')) {
    newImg = '/meals/zobo-drink.jpg';
  } else if (name.includes('kunu') || name.includes('tiger nut') || name.includes('smoothie') || name.includes('coconut water')) {
    newImg = '/meals/kunu-aya.jpg';
  } else if (name.includes('chapman') || name.includes('flask water') || name.includes('detox')) {
    newImg = '/meals/chapman.jpg';
  } else if (name.includes('watermelon') || name.includes('pawpaw') || name.includes('papaya') || name.includes('orange') || name.includes('fruit') || name.includes('apple')) {
    newImg = '/meals/papaya-watermelon-combo.jpg';
  } else if (name.includes('tapioca') || name.includes('pudding')) {
    newImg = '/meals/tapioca-mango.jpg';
  } else if (name.includes('gizdodo') || name.includes('gizzard')) {
    newImg = '/meals/gizdodo.jpg';
  } else {
    newImg = '/meals/asaro-elepo.jpg';
  }

  if (newImg) {
    parts[i] = section.replace(/image:\s*'https:\/\/images\.unsplash\.com[^']+'/, `image: '${newImg}'`);
    replacedCount++;
  }
}

code = parts.join('');
fs.writeFileSync(file, code, 'utf8');
console.log('Successfully updated', replacedCount, 'recipes with real food images!');
