import { isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  Directive,
  ElementRef,
  PLATFORM_ID,
  Renderer2,
  inject,
} from '@angular/core';

@Directive({
  standalone: true,
  selector: '[appScrollAnimate]',
})
export class ScrollAnimateDirective implements AfterViewInit {
  private readonly el = inject(ElementRef);
  private readonly renderer = inject(Renderer2);
  private readonly platformId = inject(PLATFORM_ID);

  constructor() {
    this.renderer.addClass(this.el.nativeElement, 'animate-fade-in');
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            this.renderer.addClass(this.el.nativeElement, 'appear');
            observer.unobserve(this.el.nativeElement);
          }
        },
        { threshold: 0.2 }
      );
      observer.observe(this.el.nativeElement);
    }
  }
}
