import { Product } from './types';

export const products: Product[] = [
  {
    id: 'cinnamon-c5',
    name: 'Ceylon Cinnamon',
    subtitle: 'Grade C5 - Premium',
    description: 'Ultra-thin quills peeled from the inner bark of the Cinnamomum verum tree. Features a light golden-brown hue and a delicate sweet aroma. Naturally low in coumarin, it delivers unmatched purity.',
    price: 589,
    weight: '100g',
    category: 'spice',
    grade: 'C5',
    features: ['Ultra-thin quills', 'Low coumarin', 'Sweet aroma', 'Hand-picked'],
    tags: ['Best Seller', 'Premium'],
    image: 'https://picsum.photos/seed/cinnamon1/800/800',
    nutrition: {
        'Calories': '6.4 kcal',
        'Dietary Fiber': '1.4g',
        'Calcium': '2.6% DV',
        'Manganese': '22.7% DV'
    }
  },
  {
    id: 'cinnamon-h2',
    name: 'Ceylon Cinnamon',
    subtitle: 'Grade H2 - Everyday Use',
    description: 'Slightly thicker quills with a robust flavor profile. Perfect for daily cooking—curries, stews, baked goods, and spiced teas. Offers excellent value without compromising on authentic Ceylon quality.',
    price: 389,
    weight: '100g',
    category: 'spice',
    grade: 'H2',
    features: ['Versatile', 'Robust flavor', 'Everyday cooking', 'Value'],
    tags: ['Everyday'],
    image: 'https://picsum.photos/seed/cinnamon2/800/800'
  },
  {
    id: 'cinnamon-powder',
    name: 'Ceylon Cinnamon Powder',
    subtitle: 'Finely Milled C5',
    description: 'Finely milled from the finest hand-selected C5 quills. Rich in antioxidants with a warm, gentle flavor. Ideal for wellness rituals, smoothies, and baking.',
    price: 589,
    weight: '100g',
    category: 'spice',
    grade: 'C5 Powder',
    features: ['High Antioxidants', 'Finely Milled', 'True Cinnamon', 'Wellness'],
    tags: ['Wellness'],
    image: 'https://picsum.photos/seed/powder/800/800'
  },
  {
    id: 'cloves-g1',
    name: 'True Ceylon Cloves',
    subtitle: 'Grade 1 - Premium Hand Picked',
    description: 'Hand-selected at peak maturity and delicately cured. These cloves offer a bold aroma, refined flavor, and natural richness. Known as the "true jewel of the Spice Island".',
    price: 239,
    weight: '50g',
    category: 'spice',
    grade: 'Grade 1',
    features: ['Hand-picked', 'Bold aroma', 'High oil content', 'Premium'],
    tags: ['Premium'],
    image: 'https://picsum.photos/seed/cloves1/800/800',
    nutrition: {
        'Calories': 214,
        'Vitamin C': '45% DV',
        'Dietary Fiber': '17% DV'
    }
  },
  {
    id: 'cloves-cg2',
    name: 'True Ceylon Cloves',
    subtitle: 'Grade CG2 - Excellent Value',
    description: 'Harvested at peak maturity and traditionally cured. Offers a warm aroma and balanced flavor at an excellent value point.',
    price: 189,
    weight: '50g',
    category: 'spice',
    grade: 'CG2',
    features: ['Warm aroma', 'Balanced flavor', 'Value'],
    tags: ['Value'],
    image: 'https://picsum.photos/seed/cloves2/800/800'
  },
  {
    id: 'honey-vault',
    name: 'The Honey Vault',
    subtitle: '6 Rare Indian Honeys',
    description: 'A curated journey through nature\'s sweetest origins. Includes Tulsi, Lychee, Moringa, Red Forest, Black Forest, and Sundarban Wild Flora honeys. Unheated, unblended, and unfiltered.',
    price: 999,
    weight: '300g',
    category: 'set',
    features: ['6 Varieties', 'Single Origin', 'Raw & Unfiltered', 'Gift Box'],
    tags: ['Gift Set', 'Exclusive'],
    image: 'https://picsum.photos/seed/honey/800/800',
    nutrition: {
        'Calories': '64',
        'Sugars': '16g',
        'Protein': '0g'
    }
  }
];

export const honeyVarieties = [
    { name: 'Tulsi Honey', desc: 'Calming, herbal nectar from sacred basil blooms.' },
    { name: 'Lychee Honey', desc: 'Fruity and floral sweetness from lush orchards.' },
    { name: 'Moringa Honey', desc: 'Nutty and smooth, drawn from the miracle tree.' },
    { name: 'Red Forest Honey', desc: 'Bold, smoky tones from tropical forests.' },
    { name: 'Black Forest Honey', desc: 'Deep, malty notes from highland evergreens.' },
    { name: 'Sundarban Wild', desc: 'Exotic, saline-sweet nectar from mangroves.' },
];
