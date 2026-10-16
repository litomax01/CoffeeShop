// =============================================================
// LANGUAGE TOGGLE COMPONENT — La Esquina de la 24
// =============================================================

import { Component, inject } from '@angular/core';
import { LanguageService } from '../../../core/services/language.service';

@Component({
  selector: 'app-language-toggle',
  standalone: true,
  templateUrl: './language-toggle.component.html',
  styleUrl: './language-toggle.component.scss',
})
export class LanguageToggleComponent {
  private readonly langService = inject(LanguageService);

  protected readonly lang = this.langService.currentLang;

  toggle(): void {
    this.langService.toggle();
  }
}
