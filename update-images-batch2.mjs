import fs from 'fs';

let code = fs.readFileSync('src/data/defaultRecipes.js', 'utf8');

const newReplacements = {
  // Egusi
  'rec-lu-ng-1': '/meals/egusi-soup.jpg',
  'rec-hl-wg-6': '/meals/egusi-soup.jpg',

  // Efo Riro
  'rec-lu-ng-2': '/meals/efo-riro.jpg',
  'rec-hl-wl-3': '/meals/efo-riro.jpg',
  'rec-hl-wl-8': '/meals/efo-riro.jpg',
  'rec-hl-db-6': '/meals/efo-riro.jpg',
  'rec-hl-ht-4': '/meals/efo-riro.jpg',
  'rec-hl-gt-8': '/meals/efo-riro.jpg',

  // Ofada Rice
  'rec-lu-ng-3': '/meals/ofada-rice.jpg',
  'rec-hl-wg-8': '/meals/ofada-rice.jpg',
  'rec-hl-db-9': '/meals/ofada-rice.jpg',

  // Kunu Aya (Tiger nut drink)
  'rec-jc-ng-2': '/meals/kunu-aya.jpg',
  'rec-hl-wg-20': '/meals/kunu-aya.jpg',
  'rec-hl-gt-18': '/meals/kunu-aya.jpg',

  // Chapman
  'rec-jc-ng-3': '/meals/chapman.jpg',

  // Garden Egg with Ose Oji / Peanut Dip
  'rec-fr-ng-2': '/meals/garden-egg-peanut.jpg',
  'rec-hl-wl-14': '/meals/garden-egg-peanut.jpg',
  'rec-hl-wl-16': '/meals/garden-egg-peanut.jpg',
  'rec-hl-db-16': '/meals/garden-egg-peanut.jpg',
  'rec-hl-lp-16': '/meals/garden-egg-peanut.jpg',
  'rec-hl-ht-16': '/meals/garden-egg-peanut.jpg',

  // Boli and Groundnuts
  'rec-sn-ng-1': '/meals/boli-groundnuts.jpg',
  'rec-hl-wg-16': '/meals/boli-groundnuts.jpg',

  // Gizdodo
  'rec-ap-ng-1': '/meals/gizdodo.jpg',
  'rec-hl-wg-19': '/meals/gizdodo.jpg',

  // Tapioca with Mango
  'rec-ds-ng-1': '/meals/tapioca-mango.jpg',
  'rec-hl-wl-22': '/meals/tapioca-mango.jpg',
  'rec-hl-db-22': '/meals/tapioca-mango.jpg',
  'rec-hl-lp-22': '/meals/tapioca-mango.jpg',
  'rec-hl-ht-22': '/meals/tapioca-mango.jpg',
  'rec-hl-gt-22': '/meals/tapioca-mango.jpg',

  // Cabbage with Fried / Boiled Eggs & Veggies
  'rec-wl-ng-1': '/meals/cabbage-eggs.jpg',
  'rec-hl-wl-9': '/meals/cabbage-eggs.jpg',
  'rec-hl-db-10': '/meals/cabbage-eggs.jpg',
  'rec-hl-lp-10': '/meals/cabbage-eggs.jpg',
  'rec-hl-ht-13': '/meals/cabbage-eggs.jpg',

  // Okro soup with Croaker fish
  'rec-wl-ng-2': '/meals/okro-croaker-fish.jpg',
  'rec-hl-gt-11': '/meals/okro-croaker-fish.jpg'
};

let count = 0;
for (const [id, imgPath] of Object.entries(newReplacements)) {
  const targetRegex = new RegExp(`(id:\\s*'${id}'[\\s\\S]*?image:\\s*')[^']+(')`);
  if (targetRegex.test(code)) {
    code = code.replace(targetRegex, `$1${imgPath}$2`);
    count++;
  } else {
    console.log('Missed:', id);
  }
}

fs.writeFileSync('src/data/defaultRecipes.js', code, 'utf8');
console.log('Successfully updated new batch of images in defaultRecipes.js for', count, 'recipes');
