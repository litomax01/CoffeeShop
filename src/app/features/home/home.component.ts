// =============================================================
// HOME COMPONENT — La Esquina de la 24
// Ensambla todas las secciones de la landing page
// =============================================================

import { Component } from '@angular/core';

import { HeroSectionComponent }        from './sections/hero/hero-section.component';
import { AboutSectionComponent }       from './sections/about/about-section.component';
import { GallerySectionComponent }     from './sections/gallery/gallery-section.component';
import { MenuPreviewSectionComponent } from './sections/menu-preview/menu-preview-section.component';
import { ContactSectionComponent }     from './sections/contact/contact-section.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroSectionComponent,
    AboutSectionComponent,
    GallerySectionComponent,
    MenuPreviewSectionComponent,
    ContactSectionComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  protected readonly ribbonWords = [
    'Café de chuspa',
    'Bolón de verde',
    'Caucara',
    'Quimbolitos',
    'Jugos naturales',
    'Flores frescas',
    'Tigrillo',
    'Humitas',
  ];
}
