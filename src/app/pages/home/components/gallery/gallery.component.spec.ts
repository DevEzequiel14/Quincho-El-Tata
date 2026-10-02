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

  it('should lead proof to Instagram and keep WhatsApp as secondary', () => {
    const primary: HTMLAnchorElement | null = fixture.nativeElement.querySelector(
      '.gallery-proof__primary'
    );
    const secondary: HTMLAnchorElement | null = fixture.nativeElement.querySelector(
      '.gallery-proof__secondary'
    );

    expect(primary?.textContent?.trim()).toBe('Ver más fotos en Instagram');
    expect(primary?.getAttribute('href')).toBe(CONTACT_CONFIG.instagramUrl);
    expect(secondary?.textContent?.trim()).toBe('Pedí fotos por WhatsApp');
    expect(secondary?.href).toContain('wa.me');
  });
});
