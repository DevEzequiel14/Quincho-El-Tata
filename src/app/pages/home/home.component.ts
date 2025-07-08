import { Component } from '@angular/core';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { AboutComponent } from "./components/about/about.component";
import { ContactComponent } from './components/contact/contact.component';
import { BenefitsComponent } from "./components/benefits/benefits.component";
import { LocationComponent } from "./components/location/location.component";
import { ScrollAnimateDirective } from '../../shared/directives/scroll-animate.directive';
import { WhatsappComponent } from '../../shared/components/whatsapp/whatsapp.component';

@Component({
  selector: 'app-home',
  imports: [
    FooterComponent,
    AboutComponent,
    ContactComponent,
    BenefitsComponent,
    LocationComponent,
    ScrollAnimateDirective,
    WhatsappComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  title = 'Quincho El Tata';
  subTitle = 'Un lugar para disfrutar';
  btnText = 'Mas información'
}
