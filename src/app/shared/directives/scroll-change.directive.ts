import { isPlatformBrowser } from '@angular/common';
import { Directive, ElementRef, HostListener, Inject, Input, OnInit, PLATFORM_ID, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appScrollChange]'
})
export class ScrollChangeDirective implements OnInit {

  @Input() scrollClass: string = '';
  @Input() scrollThreshold: number = 0;

  constructor(
    private readonly elem: ElementRef,
    private readonly renderer: Renderer2,
    @Inject(PLATFORM_ID) private readonly platformId: object
  ) { }

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
