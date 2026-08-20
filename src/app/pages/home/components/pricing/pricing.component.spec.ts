import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CONTACT_CONFIG } from '../../../../core/constants/contact.config';
import { getPricingWhatsAppUrl, PRICING_CONFIG } from '../../../../core/constants/pricing.config';
import { PricingComponent } from './pricing.component';

describe('PricingComponent', () => {
  let component: PricingComponent;
  let fixture: ComponentFixture<PricingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PricingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render all pricing plans from config', () => {
    const cards = fixture.nativeElement.querySelectorAll('.pricing-card');
    expect(cards.length).toBe(PRICING_CONFIG.plans.length);
    expect(cards.length).toBe(2);
  });

  it('should show price reference note only on plans with a reference price', () => {
    const notes = fixture.nativeElement.querySelectorAll('.pricing-card__price-note');
    const bullets = fixture.nativeElement.querySelectorAll('.pricing-card__bullet');

    expect(fixture.nativeElement.querySelector('.pricing-card__badge')).toBeNull();
    expect(notes.length).toBe(1);
    expect(notes[0].textContent?.trim()).toBe(PRICING_CONFIG.priceReferenceNote);
    expect(bullets.length).toBeGreaterThan(0);
    expect(bullets[0].textContent?.trim()).toBe('•');
  });

  it('should expose a WhatsApp CTA built from contact config', () => {
    const link: HTMLAnchorElement = fixture.nativeElement.querySelector('a.btn-success');
    const expectedNumber = CONTACT_CONFIG.phones[0].replace(/\D/g, '');

    expect(link.textContent?.trim()).toBe(PRICING_CONFIG.cta.label);
    expect(link.getAttribute('href')).toBe(getPricingWhatsAppUrl());
    expect(link.getAttribute('href')).toContain(`https://wa.me/${expectedNumber}`);
    expect(link.getAttribute('rel')).toBe('noopener noreferrer');
    expect(link.getAttribute('target')).toBe('_blank');
  });
});
