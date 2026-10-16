// =============================================================
// NAV COMPONENT — La Esquina de la 24
// =============================================================

import {
  Component,
  HostListener,
  inject,
  signal,
} from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

import { LanguageService } from '../../../core/services/language.service';
import { SITE_CONFIG } from '../../../core/config/site.config';
import { LanguageToggleComponent } from '../language-toggle/language-toggle.component';

interface NavLink {
  label: { es: string; en: string };
  fragment?: string;
  route?: string;
}

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, LanguageToggleComponent],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent {
  private readonly langService = inject(LanguageService);
  private readonly router = inject(Router);

  protected readonly config = SITE_CONFIG;
  protected readonly lang = this.langService.currentLang;
  protected readonly isMenuOpen = signal(false);
  protected readonly isScrolled = signal(false);

  protected readonly navLinks: NavLink[] = [
    { label: { es: 'Inicio',    en: 'Home'    }, fragment: 'inicio' },
    { label: { es: 'Nosotros',  en: 'About'   }, fragment: 'nosotros' },
    { label: { es: 'Menú',      en: 'Menu'    }, route: '/menu' },
    { label: { es: 'Contacto',  en: 'Contact' }, fragment: 'contacto' },
  ];

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.isScrolled.set(window.scrollY > 24);
  }

  toggleMenu(): void {
    this.isMenuOpen.update(open => !open);
  }

  closeMenu(): void {
    this.isMenuOpen.set(false);
  }

  scrollTo(fragmentId: string): void {
    const isHome = this.router.url.split('#')[0] === '/';
    if (!isHome) {
      this.router.navigate(['/'], { fragment: fragmentId });
    } else {
      const el = document.getElementById(fragmentId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
    this.closeMenu();
  }
}
