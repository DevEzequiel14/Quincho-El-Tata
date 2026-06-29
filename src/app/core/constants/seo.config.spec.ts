import { CONTACT_CONFIG } from './contact.config';
import { buildLocalBusinessJsonLd, getAbsoluteUrl, SEO_CONFIG } from './seo.config';

describe('seo.config', () => {
  it('should build absolute URLs from site path', () => {
    expect(getAbsoluteUrl('/icons/og-image.jpg')).toBe(
      'https://quinchoeltata.netlify.app/icons/og-image.jpg',
    );
  });

  it('should build LocalBusiness JSON-LD with real business data', () => {
    const jsonLd = buildLocalBusinessJsonLd();

    expect(jsonLd['@type']).toBe('LocalBusiness');
    expect(jsonLd['name']).toBe(SEO_CONFIG.localBusiness.name);
    expect(jsonLd['telephone']).toBe(CONTACT_CONFIG.phones[0]);
    expect(jsonLd['image']).toBe(getAbsoluteUrl(SEO_CONFIG.ogImage.path));
    expect(jsonLd['sameAs']).toEqual([
      CONTACT_CONFIG.instagramUrl,
      CONTACT_CONFIG.facebookUrl,
    ]);

    const address = jsonLd['address'] as Record<string, string>;
    expect(address['streetAddress']).toBe('C. Puerto Argentino 1789');
    expect(address['addressLocality']).toBe('Palpalá');

    const geo = jsonLd['geo'] as Record<string, number>;
    expect(geo['latitude']).toBeCloseTo(-24.274166, 5);
    expect(geo['longitude']).toBeCloseTo(-65.223097, 5);
  });

  it('should define og image with recommended social dimensions', () => {
    expect(SEO_CONFIG.ogImage.width).toBe(1200);
    expect(SEO_CONFIG.ogImage.height).toBe(630);
    expect(SEO_CONFIG.ogImage.path).toBe('/icons/og-image.jpg');
  });
});
