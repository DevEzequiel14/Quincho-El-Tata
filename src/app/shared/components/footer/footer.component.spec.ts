import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CONTACT_CONFIG } from '../../../core/constants/contact.config';
import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should end with host reassurance and WhatsApp before the credit', () => {
    const reassurance: HTMLElement = fixture.nativeElement.querySelector('.footer__reassurance');
    const wa: HTMLAnchorElement = fixture.nativeElement.querySelector('.footer__wa');
    const credit: HTMLAnchorElement = fixture.nativeElement.querySelector('.footer__credit');

    expect(reassurance.textContent?.trim()).toContain('WhatsApp');
    expect(wa.getAttribute('href')).toBe(CONTACT_CONFIG.whatsAppUrl);
    expect(credit.textContent?.trim()).toContain('Ezequiel Chorolque');
  });
});
