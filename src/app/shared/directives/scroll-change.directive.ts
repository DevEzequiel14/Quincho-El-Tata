import { isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  Directive,
  ElementRef,
  HostListener,
  Input,
  PLATFORM_ID,
  Renderer2,
  inject,
} from '@angular/core';

@Directive({
  selector: '[appScrollChange]',
})
export class ScrollChangeDirective implements AfterViewInit {
  @Input() scrollClass = '';
  @Input() scrollThreshold = 0;

  private readonly elem = inject(ElementRef);
  private readonly renderer = inject(Renderer2);
  private readonly platformId = inject(PLATFORM_ID);

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      // Evaluar tras el layout para no heredar estado de scroll restaurado incorrectamente.
      requestAnimationFrame(() => this.updateScrollState());
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.updateScrollState();
  }

  private updateScrollState(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    if (window.scrollY > this.scrollThreshold) {
      this.renderer.addClass(this.elem.nativeElement, this.scrollClass);
    } else {
      this.renderer.removeClass(this.elem.nativeElement, this.scrollClass);
    }
  }
}
