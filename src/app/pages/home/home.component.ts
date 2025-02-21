import { Component } from '@angular/core';
import { HeaderComponent } from "../../shared/components/header/header.component";
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { AboutComponent } from "./components/about/about.component";
import { ContactComponent } from './components/contact/contact.component';
import { BenefitsComponent } from "./components/benefits/benefits.component";
import { LocationComponent } from "./components/location/location.component";

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, FooterComponent, AboutComponent, ContactComponent, BenefitsComponent, LocationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
}
