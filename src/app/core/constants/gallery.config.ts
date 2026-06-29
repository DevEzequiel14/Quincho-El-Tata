export interface GalleryImage {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
  placeholder?: boolean;
}

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    src: '/icons/gallery/pileta-area.webp',
    alt: 'Pileta y área principal del quincho para eventos al aire libre',
    caption: 'Pileta y área principal',
    width: 1600,
    height: 1201,
    placeholder: true,
  },
  {
    src: '/icons/gallery/salon-interior.webp',
    alt: 'Salón interior del quincho preparado para festejos y reuniones',
    caption: 'Salón interior',
    width: 1387,
    height: 785,
    placeholder: true,
  },
  {
    src: '/icons/gallery/espacio-verde.webp',
    alt: 'Espacio verde del quincho ideal para eventos de día',
    caption: 'Espacio verde',
    width: 1041,
    height: 586,
    placeholder: true,
  },
  {
    src: '/icons/gallery/parrilla-techada.webp',
    alt: 'Parrilla techada y zona de cocina del quincho',
    caption: 'Parrilla techada',
    width: 1041,
    height: 586,
    placeholder: true,
  },
  {
    src: '/icons/gallery/zona-exterior.webp',
    alt: 'Zona exterior del quincho con espacio para invitados',
    caption: 'Zona exterior',
    width: 1028,
    height: 578,
    placeholder: true,
  },
];
