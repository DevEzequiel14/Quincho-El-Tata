import { Component } from '@angular/core';
import { GALLERY_IMAGES } from '../../../../core/constants/gallery.config';

@Component({
  selector: 'app-gallery',
  imports: [],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
})
export class GalleryComponent {
  title = 'Galería';
  description = 'Conocé los espacios del quincho: pileta, salón, parrilla y áreas verdes.';
  images = GALLERY_IMAGES;
  readonly hasPlaceholders = GALLERY_IMAGES.some((image) => image.placeholder);
}
