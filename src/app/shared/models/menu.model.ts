// =============================================================
// MENU MODELS — La Esquina de la 24
// =============================================================

import { LocalizedText } from './site.model';

export interface MenuItemVariant {
  label: LocalizedText;
  amount: number;
}

export interface MenuItem {
  id: string;
  name: LocalizedText;
  description?: LocalizedText;
  /** Un solo precio o múltiples variantes (tamaños) */
  price?: number;
  variants?: MenuItemVariant[];
  /** Ruta de imagen del plato (relativa a /assets/) */
  image?: string;
}

export interface MenuCategory {
  id: string;
  name: LocalizedText;
  items: MenuItem[];
  /** Imagen representativa de la categoría */
  image?: string;
}

export interface MenuSection {
  id: string;
  title: LocalizedText;
  categories: MenuCategory[];
}
