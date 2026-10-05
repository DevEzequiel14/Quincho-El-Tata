import { isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  Directive,
  ElementRef,
  OnDestroy,
  PLATFORM_ID,
  Renderer2,
  inject,
} from '@angular/core';

@Directive({
  standalone: true,
  selector: '[appScrollAnimate]',
})
export class ScrollAnimateDirective implements AfterViewInit, OnDestroy {
  private readonly el = inject(ElementRef);
  private readonly renderer = inject(Renderer2);
  private readonly platformId = inject(PLATFORM_ID);
  private observer: IntersectionObserver | null = null;

  constructor() {
    this.renderer.addClass(this.el.nativeElement, 'animate-fade-in');
  }

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      this.renderer.addClass(this.el.nativeElement, 'appear');
      return;
    }

    this.renderer.addClass(this.el.nativeElement, 'is-pending');

    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.renderer.removeClass(this.el.nativeElement, 'is-pending');
          this.renderer.addClass(this.el.nativeElement, 'appear');
          this.observer?.unobserve(this.el.nativeElement);
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );
    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
