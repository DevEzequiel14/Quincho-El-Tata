export interface ImageAsset {
  src: string;
  width: number;
  height: number;
  alt: string;
}

export interface HeroImageAsset {
  src: string;
  width: number;
  height: number;
}

export const IMAGE_ASSETS = {
  hero: {
    src: '/icons/main.webp',
    width: 1600,
    height: 1201,
  } satisfies HeroImageAsset,
  about: {
    src: '/icons/about.webp',
    width: 1387,
    height: 785,
    alt: 'Quincho con pileta',
  },
  benefitsMain: {
    src: '/icons/benefits.webp',
    width: 1041,
    height: 586,
    alt: 'Quincho con pileta y espacio verde para eventos familiares',
  },
  benefitsAdditional: {
    src: '/icons/benefits-1.webp',
    width: 1041,
    height: 586,
    alt: 'Salón del quincho con servicios de catering y asesoramiento',
  },
  benefitsOptional: {
    src: '/icons/benefits-2.webp',
    width: 1028,
    height: 578,
    alt: 'Espacio exterior del quincho con zona de parrilla y barra móvil',
  },
  logoMini: {
    src: '/icons/logo-mini.webp',
    width: 130,
    height: 165,
    alt: 'Logo de Quincho El Tata',
  },
} as const satisfies Record<string, ImageAsset | HeroImageAsset>;
