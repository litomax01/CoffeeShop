// =============================================================
// MENU PREVIEW SECTION — La Esquina de la 24
// Muestra categorías del menú en la home
// =============================================================

import { Component, inject, computed } from '@angular/core';
import { RouterLink } from '@angular/router';

import { LanguageService } from '../../../../core/services/language.service';
import { MENU_CATEGORIES } from '../../../../shared/data/menu.data';
import { UsdPricePipe } from '../../../../shared/pipes/usd-price.pipe';
import { MenuCategory } from '../../../../shared/models/menu.model';

// Categorías destacadas que se muestran en el preview de la home
const FEATURED_IDS = ['secos', 'bebidas-calientes', 'tigrillo', 'bolon', 'envueltos', 'jugos'];

import { RevealDirective } from '../../../../shared/directives/reveal.directive';

@Component({
  selector: 'app-menu-preview-section',
  standalone: true,
  imports: [RouterLink, UsdPricePipe, RevealDirective],
  templateUrl: './menu-preview-section.component.html',
  styleUrl: './menu-preview-section.component.scss',
})
export class MenuPreviewSectionComponent {
  private readonly langService = inject(LanguageService);

  protected readonly lang = this.langService.currentLang;

  protected readonly featuredCategories: MenuCategory[] = MENU_CATEGORIES.filter(
    cat => FEATURED_IDS.includes(cat.id),
  );
}
