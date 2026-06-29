import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryComponent } from './gallery.component';
import { GALLERY_IMAGES } from '../../../../core/constants/gallery.config';

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
    const images = fixture.nativeElement.querySelectorAll('img');
    expect(images.length).toBe(GALLERY_IMAGES.length);
    images.forEach((img: HTMLImageElement) => {
      expect(img.getAttribute('loading')).toBe('lazy');
      expect(img.getAttribute('alt')).toBeTruthy();
    });
  });
});
