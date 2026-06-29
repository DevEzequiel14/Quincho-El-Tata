import { Component, inject, OnInit } from '@angular/core';
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
  title = 'Quincho El Tata';
  subTitle = 'Un lugar para disfrutar';
  btnText = 'Mas información';

  ngOnInit(): void {
    this.seo.applyHomeSeo();
  }
}
