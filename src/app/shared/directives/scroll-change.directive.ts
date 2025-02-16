import { isPlatformBrowser } from '@angular/common';
import { Directive, ElementRef, HostListener, Inject, Input, PLATFORM_ID, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appScrollChange]'
})
export class ScrollChangeDirective {

  @Input() scrollClass: string = '';
  @Input() scrollThreshold: number = 0;

  constructor(
    private readonly elem: ElementRef,
    private readonly renderer: Renderer2,
    @Inject(PLATFORM_ID) private readonly platformId: object
  ) { }

  @HostListener('window:scroll', [])

  ngOnInit(): void {
    this.onWindowScroll();
  }

  onWindowScroll() {
    if (isPlatformBrowser(this.platformId)) {
      if (window.scrollY > this.scrollThreshold) this.renderer.addClass(this.elem.nativeElement, this.scrollClass)
      else this.renderer.removeClass(this.elem.nativeElement, this.scrollClass)
    }

  }
}
