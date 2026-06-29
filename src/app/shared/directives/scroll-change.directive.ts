import { isPlatformBrowser } from '@angular/common';
import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  PLATFORM_ID,
  Renderer2,
  inject,
} from '@angular/core';

@Directive({
  selector: '[appScrollChange]',
})
export class ScrollChangeDirective implements OnInit {
  @Input() scrollClass = '';
  @Input() scrollThreshold = 0;

  private readonly elem = inject(ElementRef);
  private readonly renderer = inject(Renderer2);
  private readonly platformId = inject(PLATFORM_ID);

  ngOnInit(): void {
    this.onWindowScroll();
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    if (isPlatformBrowser(this.platformId)) {
      if (window.scrollY > this.scrollThreshold) {
        this.renderer.addClass(this.elem.nativeElement, this.scrollClass);
      } else {
        this.renderer.removeClass(this.elem.nativeElement, this.scrollClass);
      }
    }
  }
}
