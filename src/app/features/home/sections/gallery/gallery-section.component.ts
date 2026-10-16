// =============================================================
// GALLERY SECTION — La Esquina de la 24
// Sección "Nuestros Platos" con fotos reales de los platos
// =============================================================

import { Component, inject } from '@angular/core';
import { LanguageService } from '../../../../core/services/language.service';

interface DishPhoto {
  src: string;
  alt: { es: string; en: string };
  name: { es: string; en: string };
  price: string;
}

const DISH_PHOTOS: DishPhoto[] = [
  {
    src: '/assets/menu/seco-de-pollo.jpg',
    alt: {
      es: 'Seco de Pollo con arroz, plátano maduro, aguacate y encurtido',
      en: 'Chicken Stew with rice, ripe plantain, avocado and pickled vegetables',
    },
    name: { es: 'Seco de Pollo', en: 'Chicken Stew' },
    price: '$3.50',
  },
  {
    src: '/assets/menu/caucara.jpg',
    alt: {
      es: 'Caucara con arroz, carne, huevo frito, aguacate y encurtido',
      en: 'Caucara with rice, beef, fried egg, avocado and pickled vegetables',
    },
    name: { es: 'Caucara', en: 'Caucara' },
    price: '$3.50',
  },
  {
    src: '/assets/menu/bolon.jpg',
    alt: {
      es: 'Bolón de verde con queso rallado acompañado de café',
      en: 'Plantain ball with shredded cheese served with coffee',
    },
    name: { es: 'Bolón de Verde', en: 'Plantain Ball' },
    price: 'desde $1.50',
  },
  {
    src: '/assets/menu/envueltos.jpg',
    alt: {
      es: 'Humita y envuelto servidos en hoja de choclo',
      en: 'Humita and wrapped corn cake served in corn leaves',
    },
    name: { es: 'Envueltos', en: 'Wrapped Delights' },
    price: 'desde $0.80',
  },
];

import { RevealDirective } from '../../../../shared/directives/reveal.directive';

@Component({
  selector: 'app-gallery-section',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './gallery-section.component.html',
  styleUrl: './gallery-section.component.scss',
})
export class GallerySectionComponent {
  private readonly langService = inject(LanguageService);

  protected readonly lang = this.langService.currentLang;
  protected readonly dishes = DISH_PHOTOS;
}
