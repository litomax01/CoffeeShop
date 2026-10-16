// =============================================================
// LANGUAGE SERVICE — La Esquina de la 24
// Toggle ES/EN con Angular Signals
// =============================================================

import { Injectable, signal, computed } from '@angular/core';
import { Language } from '../../shared/models/site.model';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly _currentLang = signal<Language>('es');

  /** Señal de solo lectura con el idioma activo */
  readonly currentLang = this._currentLang.asReadonly();

  /** `true` cuando el idioma activo es español */
  readonly isSpanish = computed(() => this._currentLang() === 'es');

  /** Alterna entre español e inglés */
  toggle(): void {
    this._currentLang.update(lang => (lang === 'es' ? 'en' : 'es'));
  }

  /** Establece un idioma explícito */
  setLanguage(lang: Language): void {
    this._currentLang.set(lang);
  }
}
