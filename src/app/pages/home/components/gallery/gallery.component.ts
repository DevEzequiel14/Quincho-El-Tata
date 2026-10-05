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
  description = 'Pileta, parrilla y salón: una vista de referencia del lugar.';
  provisionalNote =
    'Fotos de referencia. Pedí el álbum actual por WhatsApp antes de decidir.';
  images = GALLERY_IMAGES;

  readonly instagramUrl = CONTACT_CONFIG.instagramUrl;
  readonly instagramHandle = '@quinchoeltata_';
  instagramCta = 'Ver Instagram';

  readonly whatsAppUrl = `https://wa.me/${CONTACT_CONFIG.phones[0].replace(/\D/g, '')}?text=${encodeURIComponent(MORE_PHOTOS_MESSAGE)}`;
  whatsAppCta = 'Pedí fotos por WhatsApp';
}
