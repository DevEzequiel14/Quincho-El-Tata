import { Component } from '@angular/core';
import { HeaderComponent } from "../../shared/components/header/header.component";
import { LinkComponent } from "../../shared/components/link/link.component";
import { GoogleMapComponent } from "../../shared/components/google-map/google-map.component";

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, LinkComponent, GoogleMapComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  buttonText: string = 'Mas información';
  ref: string = '#info'
}
