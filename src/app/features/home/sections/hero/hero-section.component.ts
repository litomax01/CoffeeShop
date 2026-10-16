// =============================================================
// HERO SECTION — La Esquina de la 24
// =============================================================

import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { LanguageService } from '../../../../core/services/language.service';
import { SITE_CONFIG } from '../../../../core/config/site.config';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss',
})
export class HeroSectionComponent {
  private readonly langService = inject(LanguageService);

  protected readonly config = SITE_CONFIG;
  protected readonly lang = this.langService.currentLang;

  scrollToMenu(): void {
    const el = document.getElementById('menu');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
