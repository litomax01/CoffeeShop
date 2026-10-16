// =============================================================
// CONTACT SECTION — La Esquina de la 24
// =============================================================

import { Component, inject } from '@angular/core';

import { LanguageService } from '../../../../core/services/language.service';
import { SITE_CONFIG } from '../../../../core/config/site.config';

import { RevealDirective } from '../../../../shared/directives/reveal.directive';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './contact-section.component.html',
  styleUrl: './contact-section.component.scss',
})
export class ContactSectionComponent {
  private readonly langService = inject(LanguageService);

  protected readonly config = SITE_CONFIG;
  protected readonly lang = this.langService.currentLang;
}
