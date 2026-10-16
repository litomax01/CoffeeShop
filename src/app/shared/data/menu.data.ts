// =============================================================
// MENU DATA — La Esquina de la 24
// Fuente: menú físico del negocio (todos los precios en USD)
// =============================================================

import { MenuCategory } from '../models/menu.model';

export const MENU_CATEGORIES: MenuCategory[] = [
  // ─── SECOS ─────────────────────────────────────────────────
  {
    id: 'secos',
    name: { es: 'Secos', en: 'Main Dishes' },
    image: 'menu/seco-de-pollo.jpg',
    items: [
      {
        id: 'seco-pollo',
        name: { es: 'Seco de Pollo', en: 'Chicken Stew' },
        price: 3.50,
        image: 'menu/seco-de-pollo.jpg',
      },
      {
        id: 'caucara',
        name: { es: 'Caucara', en: 'Caucara' },
        description: {
          es: 'Tortilla de papa, porción de arroz, carne de res frita, huevo frito, encurtido, lechuga y aguacate.',
          en: 'Potato tortilla, rice, fried beef, fried egg, pickled vegetables, lettuce and avocado.',
        },
        price: 3.50,
        image: 'menu/caucara.jpg',
      },
      {
        id: 'mixto-pollo-caucara',
        name: { es: 'Mixto: Seco de Pollo y Caucara', en: 'Mixed: Chicken Stew & Caucara' },
        price: 6.00,
      },
      {
        id: 'mixto-pollo-tigrillo',
        name: { es: 'Mixto: Seco de Pollo y Tigrillo', en: 'Mixed: Chicken Stew & Tigrillo' },
        price: 6.00,
      },
    ],
  },

  // ─── BEBIDAS CALIENTES ──────────────────────────────────────
  {
    id: 'bebidas-calientes',
    name: { es: 'Bebidas Calientes', en: 'Hot Drinks' },
    items: [
      {
        id: 'cafe-chuspa',
        name: { es: 'Café de Chuspa', en: 'Brewed Coffee' },
        price: 0.80,
      },
      {
        id: 'agua-aromatica',
        name: { es: 'Agua Aromática', en: 'Herbal Tea' },
        price: 0.80,
      },
      {
        id: 'chocolate-casa',
        name: { es: 'Chocolate de Casa', en: 'House Hot Chocolate' },
        price: 1.50,
      },
      {
        id: 'leche',
        name: { es: 'Leche', en: 'Milk' },
        price: 1.00,
      },
    ],
  },

  // ─── JUGOS DE TEMPORADA ─────────────────────────────────────
  {
    id: 'jugos',
    name: { es: 'Jugos de Temporada', en: 'Seasonal Juices' },
    items: [
      {
        id: 'jugo-temporada',
        name: { es: 'Jugo Natural', en: 'Natural Juice' },
        variants: [
          { label: { es: 'Vaso',    en: 'Glass'   }, amount: 1.50 },
          { label: { es: 'Jarra 1lt', en: '1L Jug' }, amount: 3.00 },
          { label: { es: 'Jarra 2lt', en: '2L Jug' }, amount: 5.00 },
        ],
      },
    ],
  },

  // ─── BATIDOS DE TEMPORADA ───────────────────────────────────
  {
    id: 'batidos',
    name: { es: 'Batidos de Temporada', en: 'Seasonal Smoothies' },
    items: [
      {
        id: 'batido-temporada',
        name: { es: 'Batido Natural', en: 'Natural Smoothie' },
        variants: [
          { label: { es: 'Vaso',    en: 'Glass'   }, amount: 2.00 },
          { label: { es: 'Jarra 1lt', en: '1L Jug' }, amount: 4.00 },
          { label: { es: 'Jarra 2lt', en: '2L Jug' }, amount: 6.00 },
        ],
      },
    ],
  },

  // ─── LIMONADA ───────────────────────────────────────────────
  {
    id: 'limonada',
    name: { es: 'Limonada', en: 'Lemonade' },
    items: [
      {
        id: 'limonada',
        name: { es: 'Limonada', en: 'Lemonade' },
        variants: [
          { label: { es: 'Vaso',    en: 'Glass'   }, amount: 1.50 },
          { label: { es: 'Jarra 1lt', en: '1L Jug' }, amount: 2.50 },
          { label: { es: 'Jarra 2lt', en: '2L Jug' }, amount: 4.50 },
        ],
      },
    ],
  },

  // ─── ENVUELTOS ──────────────────────────────────────────────
  {
    id: 'envueltos',
    name: { es: 'Envueltos', en: 'Wrapped Delights' },
    image: 'menu/envueltos.jpg',
    items: [
      {
        id: 'quimbolito',
        name: { es: 'Quimbolito', en: 'Quimbolito' },
        price: 0.80,
        image: 'menu/envueltos.jpg',
      },
      {
        id: 'humita',
        name: { es: 'Humita', en: 'Humita' },
        price: 0.80,
        image: 'menu/envueltos.jpg',
      },
      {
        id: 'tamal-navideno',
        name: { es: 'Tamal Navideño', en: 'Christmas Tamal' },
        price: 2.50,
      },
    ],
  },

  // ─── TIGRILLO ───────────────────────────────────────────────
  {
    id: 'tigrillo',
    name: { es: 'Tigrillo', en: 'Tigrillo' },
    image: 'menu/caucara.jpg',
    items: [
      {
        id: 'tigrillo',
        name: { es: 'Tigrillo', en: 'Tigrillo' },
        description: {
          es: 'Mezcla de plátano verde, chicharrón, queso mozzarella, huevo frito, encurtido, acompañado de jugo de pollo.',
          en: 'Green plantain mix with pork crackling, mozzarella, fried egg, pickled vegetables, served with chicken broth.',
        },
        price: 3.50,
      },
    ],
  },

  // ─── BOLÓN ──────────────────────────────────────────────────
  {
    id: 'bolon',
    name: { es: 'Bolón', en: 'Bolón' },
    image: 'menu/bolon.jpg',
    items: [
      {
        id: 'bolon',
        name: { es: 'Bolón de Verde', en: 'Plantain Ball' },
        image: 'menu/bolon.jpg',
        variants: [
          { label: { es: 'Queso',      en: 'Cheese'        }, amount: 1.50 },
          { label: { es: 'Chicharrón', en: 'Pork Crackling' }, amount: 1.50 },
          { label: { es: 'Mixto + huevo frito', en: 'Mixed + fried egg' }, amount: 2.00 },
        ],
      },
    ],
  },

  // ─── TORTILLAS DE VERDE ─────────────────────────────────────
  {
    id: 'tortillas-verde',
    name: { es: 'Tortillas de Verde', en: 'Plantain Tortillas' },
    items: [
      {
        id: 'tortilla-verde',
        name: { es: 'Tortilla de Verde', en: 'Green Plantain Tortilla' },
        variants: [
          { label: { es: 'Queso',      en: 'Cheese'        }, amount: 0.80 },
          { label: { es: 'Chicharrón', en: 'Pork Crackling' }, amount: 0.80 },
          { label: { es: 'Mixto',      en: 'Mixed'          }, amount: 1.00 },
        ],
      },
    ],
  },

  // ─── PORCIONES ──────────────────────────────────────────────
  {
    id: 'porciones',
    name: { es: 'Porciones', en: 'Sides' },
    items: [
      { id: 'porcion-arroz',  name: { es: 'Porción de Arroz',       en: 'Rice' },            price: 0.50 },
      { id: 'porcion-guiso',  name: { es: 'Porción Guiso de Pollo', en: 'Chicken Stew' },    price: 0.50 },
      { id: 'huevo-frito',    name: { es: 'Huevo Frito',            en: 'Fried Egg' },       price: 0.30 },
      { id: 'porcion-caucara',name: { es: 'Porción de Caucara',     en: 'Caucara' },         price: 2.00 },
      { id: 'porcion-queso',  name: { es: 'Porción de Queso',       en: 'Cheese' },          price: 0.50 },
    ],
  },
];
