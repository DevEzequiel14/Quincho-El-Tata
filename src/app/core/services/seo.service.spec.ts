import { TestBed } from '@angular/core/testing';
import { Meta, Title } from '@angular/platform-browser';

import { buildLocalBusinessJsonLd, SEO_CONFIG } from '../constants/seo.config';
import { SeoService } from './seo.service';

describe('SeoService', () => {
  let service: SeoService;
  let title: Title;
  let meta: Meta;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeoService);
    title = TestBed.inject(Title);
    meta = TestBed.inject(Meta);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should apply home SEO tags and JSON-LD script', () => {
    service.applyHomeSeo();

    expect(title.getTitle()).toBe(SEO_CONFIG.title);
    expect(meta.getTag('name="description"')?.content).toBe(SEO_CONFIG.description);
    expect(meta.getTag('property="og:image:width"')?.content).toBe('1200');
    expect(meta.getTag('property="og:image:height"')?.content).toBe('630');

    const script = document.getElementById('local-business-jsonld');
    expect(script?.textContent).toBe(JSON.stringify(buildLocalBusinessJsonLd()));
  });
});
