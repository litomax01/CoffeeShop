// =============================================================
// FOOTER COMPONENT — La Esquina de la 24
// =============================================================

import { Component, inject } from '@angular/core';

import { LanguageService } from '../../../core/services/language.service';
import { SITE_CONFIG } from '../../../core/config/site.config';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  private readonly langService = inject(LanguageService);

  protected readonly config = SITE_CONFIG;
  protected readonly lang = this.langService.currentLang;
  protected readonly currentYear = new Date().getFullYear();
}
