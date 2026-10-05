import { isPlatformBrowser } from '@angular/common';
import {
  Component,
  DestroyRef,
  HostListener,
  PLATFORM_ID,
  signal,
  inject,
} from '@angular/core';
import { CONTACT_CONFIG } from '../../../core/constants/contact.config';

@Component({
  selector: 'app-whatsapp',
  imports: [],
  templateUrl: './whatsapp.component.html',
  styleUrl: './whatsapp.component.scss',
})
export class WhatsappComponent {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly destroyRef = inject(DestroyRef);

  readonly whatsAppUrl = CONTACT_CONFIG.whatsAppUrl;
  readonly visible = signal(false);

  constructor() {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const onScroll = () => this.updateVisibility();
    window.addEventListener('scroll', onScroll, { passive: true });
    this.destroyRef.onDestroy(() => window.removeEventListener('scroll', onScroll));
    this.updateVisibility();
  }

  @HostListener('window:resize')
  onResize(): void {
    this.updateVisibility();
  }

  private updateVisibility(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    // After leaving the first viewport, keep the float in thumb reach
    this.visible.set(window.scrollY > window.innerHeight * 0.55);
  }
}
