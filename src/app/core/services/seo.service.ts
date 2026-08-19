import { DOCUMENT, inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

import { buildLocalBusinessJsonLd, getAbsoluteUrl, SEO_CONFIG } from '../constants/seo.config';

const JSON_LD_SCRIPT_ID = 'local-business-jsonld';

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly document = inject(DOCUMENT);
  private readonly meta = inject(Meta);
  private readonly title = inject(Title);

  applyHomeSeo(): void {
    const ogImageUrl = getAbsoluteUrl(SEO_CONFIG.ogImage.path);

    this.title.setTitle(SEO_CONFIG.title);

    this.meta.updateTag({ name: 'description', content: SEO_CONFIG.description });
    this.meta.updateTag({ name: 'keywords', content: SEO_CONFIG.keywords });
    this.meta.updateTag({ property: 'og:title', content: SEO_CONFIG.title });
    this.meta.updateTag({ property: 'og:description', content: SEO_CONFIG.description });
    this.meta.updateTag({ property: 'og:url', content: SEO_CONFIG.siteUrl });
    this.meta.updateTag({ property: 'og:site_name', content: SEO_CONFIG.siteName });
    this.meta.updateTag({ property: 'og:image', content: ogImageUrl });
    this.meta.updateTag({ property: 'og:image:width', content: String(SEO_CONFIG.ogImage.width) });
    this.meta.updateTag({ property: 'og:image:height', content: String(SEO_CONFIG.ogImage.height) });
    this.meta.updateTag({ property: 'og:image:alt', content: SEO_CONFIG.ogImage.alt });
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: SEO_CONFIG.title });
    this.meta.updateTag({ name: 'twitter:description', content: SEO_CONFIG.description });
    this.meta.updateTag({ name: 'twitter:image', content: ogImageUrl });

    this.injectJsonLd(buildLocalBusinessJsonLd());
  }

  private injectJsonLd(data: Record<string, unknown>): void {
    const json = JSON.stringify(data);
    let script = this.document.getElementById(JSON_LD_SCRIPT_ID) as HTMLScriptElement | null;

    if (!script) {
      script = this.document.createElement('script');
      script.id = JSON_LD_SCRIPT_ID;
      script.type = 'application/ld+json';
      this.document.head.appendChild(script);
    }

    script.textContent = json;
  }
}
