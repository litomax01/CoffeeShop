// =============================================================
// PUBLIC LAYOUT COMPONENT — La Esquina de la 24
// Shell público: nav + contenido + footer
// =============================================================

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { NavComponent } from '../../shared/components/nav/nav.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';

@Component({
  selector: 'app-public-layout',
  standalone: true,
  imports: [RouterOutlet, NavComponent, FooterComponent],
  templateUrl: './public-layout.component.html',
  styleUrl: './public-layout.component.scss',
})
export class PublicLayoutComponent {}
