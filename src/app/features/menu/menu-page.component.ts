// =============================================================
// MENU PAGE — La Esquina de la 24
// Página dedicada con el menú completo
// =============================================================

import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { LanguageService } from '../../core/services/language.service';
import { SITE_CONFIG } from '../../core/config/site.config';
import { MENU_CATEGORIES } from '../../shared/data/menu.data';
import { UsdPricePipe } from '../../shared/pipes/usd-price.pipe';

@Component({
  selector: 'app-menu-page',
  standalone: true,
  imports: [RouterLink, UsdPricePipe],
  templateUrl: './menu-page.component.html',
  styleUrl: './menu-page.component.scss',
})
export class MenuPageComponent {
  private readonly langService = inject(LanguageService);

  protected readonly config = SITE_CONFIG;
  protected readonly lang = this.langService.currentLang;
  protected readonly categories = MENU_CATEGORIES;

  protected jumpTo(event: Event, id: string): void {
    event.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
  }
}
