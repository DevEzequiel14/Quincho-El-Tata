import { CONTACT_CONFIG } from './contact.config';

export const SEO_CONFIG = {
  siteUrl: 'https://quinchoeltata.netlify.app',
  siteName: 'Quincho El Tata',
  title: 'Quincho El Tata | Alquiler con pileta para eventos en Palpalá, Jujuy',
  description:
    'Alquilá un quincho con pileta, parrilla techada y salón para hasta 60 personas en Palpalá, Jujuy. Eventos de día y de noche. Consultá precios orientativos y disponibilidad por WhatsApp.',
  keywords:
    'quincho el tata, alquiler quincho, pileta, eventos, cumpleaños, festejos, palpalá, jujuy, parrilla, salón de fiestas',
  ogImage: {
    path: '/icons/og-image.jpg',
    width: 1200,
    height: 630,
    alt: 'Quincho El Tata: espacio con pileta y área verde para eventos en Palpalá, Jujuy',
  },
  localBusiness: {
    name: 'Quincho El Tata',
    description:
      'Quincho con pileta y espacio verde para eventos familiares y festejos en Palpalá, Jujuy. Capacidad para 60 personas, asadores techados, cocina equipada y servicios adicionales.',
    telephone: CONTACT_CONFIG.phones[0],
    priceRange: '$$',
    address: {
      streetAddress: 'C. Puerto Argentino 1789',
      addressLocality: 'Palpalá',
      addressRegion: 'Jujuy',
      postalCode: '4612',
      addressCountry: 'AR',
    },
    geo: {
      latitude: -24.274166,
      longitude: -65.223097,
    },
  },
} as const;

export function getAbsoluteUrl(path: string): string {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${SEO_CONFIG.siteUrl}${normalizedPath}`;
}

export function buildLocalBusinessJsonLd(): Record<string, unknown> {
  const { localBusiness, siteUrl, ogImage } = SEO_CONFIG;

  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: localBusiness.name,
    description: localBusiness.description,
    url: siteUrl,
    image: getAbsoluteUrl(ogImage.path),
    telephone: localBusiness.telephone,
    priceRange: localBusiness.priceRange,
    address: {
      '@type': 'PostalAddress',
      streetAddress: localBusiness.address.streetAddress,
      addressLocality: localBusiness.address.addressLocality,
      addressRegion: localBusiness.address.addressRegion,
      postalCode: localBusiness.address.postalCode,
      addressCountry: localBusiness.address.addressCountry,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: localBusiness.geo.latitude,
      longitude: localBusiness.geo.longitude,
    },
    sameAs: [CONTACT_CONFIG.instagramUrl, CONTACT_CONFIG.facebookUrl],
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'Palpalá, Jujuy, Argentina',
    },
  };
}
