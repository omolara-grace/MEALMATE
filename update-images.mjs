import fs from 'fs';

let code = fs.readFileSync('src/data/defaultRecipes.js', 'utf8');

const replacements = {
  'rec-bf-1': '/meals/indomie.jpg',
  'rec-bf-2': '/meals/custard.jpg',
  'rec-bf-3': '/meals/akara-pap.jpg',
  'rec-bf-4': '/meals/bread-sardine-toast.jpg',
  'rec-lu-1': '/meals/jollof-rice.jpg',
  'rec-lu-2': '/meals/stewed-beans-plantains.jpg',
  'rec-lu-3': '/meals/white-rice-fish-stew.jpg',
  'rec-dn-1': '/meals/sweet-potato-egg-sauce.jpg',
  'rec-dn-2': '/meals/asaro-elepo.jpg',
  'rec-sn-1': '/meals/garri.jpg',
  'rec-jc-1': '/meals/zobo-drink.jpg',
  'rec-fr-1': '/meals/papaya-watermelon-combo.jpg',
  'rec-ds-1': '/meals/puffpuff.jpg',
  'rec-bf-ng-1': '/meals/moimoi.jpg',
  'rec-bf-ng-2': '/meals/boiled-yam-garden-egg.jpg',
  'rec-lu-ng-4': '/meals/okro-soup.jpg',
  'rec-dn-ng-1': '/meals/catfish-peppersoup.jpg',
  'rec-dn-ng-2': '/meals/potato-porridge.jpg',
  'rec-jc-ng-1': '/meals/zobo-drink.jpg',
  'rec-fr-ng-1': '/meals/papaya-watermelon-combo.jpg',

  // Health and clinical meals matching
  'rec-hl-wl-1': '/meals/moimoi.jpg',
  'rec-hl-wl-4': '/meals/sweet-potato-egg-sauce.jpg',
  'rec-hl-wl-6': '/meals/okro-soup.jpg',
  'rec-hl-wl-7': '/meals/catfish-peppersoup.jpg',
  'rec-hl-wl-10': '/meals/stewed-beans-plantains.jpg',
  'rec-hl-wl-19': '/meals/zobo-drink.jpg',
  'rec-hl-wl-21': '/meals/papaya-watermelon-combo.jpg',

  'rec-hl-wg-3': '/meals/akara.jpg',
  'rec-hl-wg-7': '/meals/jollof-rice.jpg',
  'rec-hl-wg-10': '/meals/stewed-beans-plantains.jpg',
  'rec-hl-wg-11': '/meals/asaro-elepo.jpg',
  'rec-hl-wg-13': '/meals/okro-soup.jpg',
  'rec-hl-wg-15': '/meals/catfish-peppersoup.jpg',
  'rec-hl-wg-17': '/meals/garri.jpg',
  'rec-hl-wg-22': '/meals/puffpuff.jpg',

  'rec-hl-db-1': '/meals/okro-soup.jpg',
  'rec-hl-db-2': '/meals/boiled-yam-garden-egg.jpg',
  'rec-hl-db-3': '/meals/moimoi.jpg',
  'rec-hl-db-7': '/meals/stewed-beans-plantains.jpg',
  'rec-hl-db-8': '/meals/catfish-peppersoup.jpg',
  'rec-hl-db-14': '/meals/sweet-potato-egg-sauce.jpg',
  'rec-hl-db-18': '/meals/zobo-drink.jpg',

  'rec-hl-lp-4': '/meals/okro-soup.jpg',
  'rec-hl-lp-6': '/meals/moimoi.jpg',
  'rec-hl-lp-9': '/meals/sweet-potato-egg-sauce.jpg',
  'rec-hl-lp-11': '/meals/catfish-peppersoup.jpg',
  'rec-hl-lp-18': '/meals/zobo-drink.jpg',
  'rec-hl-lp-21': '/meals/papaya-watermelon-combo.jpg',

  'rec-hl-ht-2': '/meals/okro-soup.jpg',
  'rec-hl-ht-3': '/meals/stewed-beans-plantains.jpg',
  'rec-hl-ht-5': '/meals/sweet-potato-egg-sauce.jpg',
  'rec-hl-ht-7': '/meals/moimoi.jpg',
  'rec-hl-ht-11': '/meals/catfish-peppersoup.jpg',
  'rec-hl-ht-18': '/meals/zobo-drink.jpg',
  'rec-hl-ht-20': '/meals/papaya-watermelon-combo.jpg',

  'rec-hl-gt-1': '/meals/sweet-potato-egg-sauce.jpg',
  'rec-hl-gt-2': '/meals/custard.jpg',
  'rec-hl-gt-5': '/meals/moimoi.jpg',
  'rec-hl-gt-6': '/meals/okro-soup.jpg',
  'rec-hl-gt-9': '/meals/stewed-beans-plantains.jpg',
  'rec-hl-gt-12': '/meals/asaro-elepo.jpg',
  'rec-hl-gt-20': '/meals/papaya-watermelon-combo.jpg'
};

let count = 0;
for (const [id, imgPath] of Object.entries(replacements)) {
  const targetRegex = new RegExp(`(id:\\s*'${id}'[\\s\\S]*?image:\\s*')[^']+(')`);
  if (targetRegex.test(code)) {
    code = code.replace(targetRegex, `$1${imgPath}$2`);
    count++;
  } else {
    console.log('Missed:', id);
  }
}

fs.writeFileSync('src/data/defaultRecipes.js', code, 'utf8');
console.log('Successfully updated images in defaultRecipes.js for', count, 'recipes');
