import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CONTACT_CONFIG } from '../../../../core/constants/contact.config';
import { GALLERY_IMAGES } from '../../../../core/constants/gallery.config';
import { GalleryComponent } from './gallery.component';

describe('GalleryComponent', () => {
  let fixture: ComponentFixture<GalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GalleryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GalleryComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render gallery images with lazy loading', () => {
    const images = fixture.nativeElement.querySelectorAll('.gallery-item__image');
    expect(images.length).toBe(GALLERY_IMAGES.length);
    images.forEach((img: HTMLImageElement) => {
      expect(img.getAttribute('loading')).toBe('lazy');
      expect(img.getAttribute('alt')).toBeTruthy();
    });
  });

  it('should mark the gallery as provisional reference photos', () => {
    const note: HTMLElement | null = fixture.nativeElement.querySelector('.gallery-note');
    expect(note?.textContent).toContain('Fotos de referencia');
  });

  it('should offer WhatsApp and Instagram as text links, not solid brand CTAs', () => {
    const primary: HTMLAnchorElement | null = fixture.nativeElement.querySelector(
      '.gallery-proof__primary'
    );
    const secondary: HTMLAnchorElement | null = fixture.nativeElement.querySelector(
      '.gallery-proof__secondary'
    );

    expect(primary?.textContent?.trim()).toBe('Pedí fotos por WhatsApp');
    expect(primary?.classList.contains('btn-brand')).toBeFalse();
    expect(primary?.href).toContain('wa.me');
    expect(secondary?.textContent?.trim()).toBe('Ver Instagram');
    expect(secondary?.getAttribute('href')).toBe(CONTACT_CONFIG.instagramUrl);
    expect(secondary?.classList.contains('btn-brand')).toBeFalse();
  });
});
