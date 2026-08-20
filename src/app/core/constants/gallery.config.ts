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
    caption: 'Pileta',
    width: 1600,
    height: 1201,
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
    alt: 'Servicios de catering del quincho',
    caption: 'Servicios de catering',
    width: 1041,
    height: 586,
    placeholder: true,
  },
  {
    src: '/icons/gallery/zona-exterior.webp',
    alt: 'Servicios al aire libre del quincho',
    caption: 'Servicios al aire libre',
    width: 1028,
    height: 578,
    placeholder: true,
  },
];
