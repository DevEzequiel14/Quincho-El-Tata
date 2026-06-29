export interface GalleryImage {
  src: string;
  alt: string;
  caption: string;
  placeholder?: boolean;
}

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    src: '/icons/gallery/pileta-area.webp',
    alt: 'Pileta y área principal del quincho para eventos al aire libre',
    caption: 'Pileta y área principal',
    placeholder: true,
  },
  {
    src: '/icons/gallery/salon-interior.webp',
    alt: 'Salón interior del quincho preparado para festejos y reuniones',
    caption: 'Salón interior',
    placeholder: true,
  },
  {
    src: '/icons/gallery/espacio-verde.webp',
    alt: 'Espacio verde del quincho ideal para eventos de día',
    caption: 'Espacio verde',
    placeholder: true,
  },
  {
    src: '/icons/gallery/parrilla-techada.webp',
    alt: 'Parrilla techada y zona de cocina del quincho',
    caption: 'Parrilla techada',
    placeholder: true,
  },
  {
    src: '/icons/gallery/zona-exterior.webp',
    alt: 'Zona exterior del quincho con espacio para invitados',
    caption: 'Zona exterior',
    placeholder: true,
  },
];
