import { Component } from '@angular/core';
import { CONTACT_CONFIG } from '../../../../core/constants/contact.config';
import { GALLERY_IMAGES } from '../../../../core/constants/gallery.config';

const MORE_PHOTOS_MESSAGE = 'Hola, me gustaría ver más fotos actuales del quincho. ¡Gracias!';

@Component({
  selector: 'app-gallery',
  imports: [],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
})
export class GalleryComponent {
  title = 'El espacio';
  description = 'Pileta y parrilla techada para tu festejo.';
  images = GALLERY_IMAGES;
  readonly morePhotosUrl = `https://wa.me/${CONTACT_CONFIG.phones[0].replace(/\D/g, '')}?text=${encodeURIComponent(MORE_PHOTOS_MESSAGE)}`;
  morePhotosCta = 'Pedí más fotos por WhatsApp';
}
