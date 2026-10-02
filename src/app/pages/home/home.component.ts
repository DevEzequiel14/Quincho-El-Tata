import { Component, inject, OnInit } from '@angular/core';
import { CONTACT_CONFIG } from '../../core/constants/contact.config';
import { IMAGE_ASSETS } from '../../core/constants/image-assets.config';
import { SeoService } from '../../core/services/seo.service';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { WhatsappComponent } from '../../shared/components/whatsapp/whatsapp.component';
import { ScrollAnimateDirective } from '../../shared/directives/scroll-animate.directive';
import { AboutComponent } from './components/about/about.component';
import { BenefitsComponent } from './components/benefits/benefits.component';
import { ContactComponent } from './components/contact/contact.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { LocationComponent } from './components/location/location.component';
import { PricingComponent } from './components/pricing/pricing.component';

@Component({
  selector: 'app-home',
  imports: [
    FooterComponent,
    AboutComponent,
    ContactComponent,
    BenefitsComponent,
    LocationComponent,
    GalleryComponent,
    PricingComponent,
    ScrollAnimateDirective,
    WhatsappComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  private readonly seo = inject(SeoService);

  readonly heroImage = IMAGE_ASSETS.hero;
  readonly whatsAppUrl = CONTACT_CONFIG.whatsAppUrl;
  title = 'Quincho El Tata';
  subTitle = 'Quincho con pileta para hasta 60 personas en Palpalá. Consultá disponibilidad por WhatsApp.';
  primaryCta = 'Consultar por WhatsApp';
  secondaryCta = 'Ver precios';

  ngOnInit(): void {
    this.seo.applyHomeSeo();
  }
}
