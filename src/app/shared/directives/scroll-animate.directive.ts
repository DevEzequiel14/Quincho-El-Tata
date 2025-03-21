import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Directive, ElementRef, Inject, PLATFORM_ID, Renderer2 } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[appScrollAnimate]'
})
export class ScrollAnimateDirective implements AfterViewInit {

  constructor(
    private readonly el: ElementRef,
    private readonly renderer: Renderer2,
    @Inject(PLATFORM_ID) private readonly platformId: Object
  ) {
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
