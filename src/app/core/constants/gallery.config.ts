export interface GalleryImage {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
}

/** Espacios clave para la decisión de alquiler. Ampliar cuando haya fotos definitivas. */
export const GALLERY_IMAGES: GalleryImage[] = [
  {
    src: '/icons/gallery/pileta-area.webp',
    alt: 'Pileta y área principal del quincho para eventos al aire libre',
    caption: 'Pileta',
    width: 1600,
    height: 1201,
  },
  {
    src: '/icons/gallery/parrilla-techada.webp',
    alt: 'Asadores y parrilla techada del quincho',
    caption: 'Parrilla techada',
    width: 1041,
    height: 586,
  },
];
