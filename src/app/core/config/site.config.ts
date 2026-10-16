// =============================================================
// SITE CONFIG — La Esquina de la 24
// Configuración central del negocio
// =============================================================

import { SiteConfig } from '../../shared/models/site.model';

export const SITE_CONFIG: SiteConfig = {
  businessName: 'La Esquina de la 24',

  tagline: {
    es: 'Café artesanal y flores frescas en un mismo rincón',
    en: 'Artisanal coffee and fresh flowers in one corner',
  },

  description: {
    es: 'Somos un emprendimiento familiar que reúne una cafetería artesanal y una florería en un mismo lugar. Preparamos comida típica ecuatoriana, café de chuspa y bebidas naturales, todo con el cuidado de lo casero.',
    en: 'We are a family business that brings together an artisanal coffee shop and a flower shop in one place. We serve traditional Ecuadorian food, brewed coffee, and natural drinks, all with homemade care.',
  },

  contact: {
    phone1: '0998779446',
    phone2: '0962927577',
  },

  hours: {
    days: {
      es: 'Todos los días',
      en: 'Every day',
    },
    schedule: {
      es: '17:00 — 23:00',
      en: '5:00 PM — 11:00 PM',
    },
  },

  social: {
    whatsapp:  'https://wa.me/593998779446',
    instagram: 'https://www.instagram.com/laesquinadela24',
    facebook:  'https://www.facebook.com/CafeyFloresPillaro',
    tiktok:    'https://www.tiktok.com/@laesquinadela24',
  },
};
