// =============================================================
// REVEAL — aparece con una animación suave al entrar en pantalla
// Uso: <li appReveal [revealDelay]="120">
// =============================================================

import { Directive, ElementRef, OnDestroy, OnInit, inject, input } from '@angular/core';

@Directive({
  selector: '[appReveal]',
  standalone: true,
})
export class RevealDirective implements OnInit, OnDestroy {
  private readonly el = inject<ElementRef<HTMLElement>>(ElementRef);
  private observer?: IntersectionObserver;

  /** Retraso en ms, para escalonar elementos hermanos */
  readonly revealDelay = input(0);

  ngOnInit(): void {
    const node = this.el.nativeElement;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduce || typeof IntersectionObserver === 'undefined') {
      return;
    }

    node.classList.add('reveal');
    node.style.setProperty('--reveal-delay', `${this.revealDelay()}ms`);

    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            node.classList.add('is-visible');
            this.observer?.disconnect();
          }
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' },
    );
    this.observer.observe(node);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
