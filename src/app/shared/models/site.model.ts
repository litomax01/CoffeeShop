// =============================================================
// SITE MODELS — La Esquina de la 24
// =============================================================

export type Language = 'es' | 'en';

export interface LocalizedText {
  es: string;
  en: string;
}

export interface SocialLinks {
  whatsapp?: string;
  instagram?: string;
  facebook?: string;
  tiktok?: string;
}

export interface ContactInfo {
  phone1: string;
  phone2?: string;
  email?: string;
  address?: string;
}

export interface BusinessHours {
  schedule: LocalizedText;
  days: LocalizedText;
}

export interface SiteConfig {
  businessName: string;
  tagline: LocalizedText;
  description: LocalizedText;
  contact: ContactInfo;
  hours: BusinessHours;
  social: SocialLinks;
}
