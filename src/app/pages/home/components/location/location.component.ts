import { Component } from '@angular/core';
import { GoogleMapComponent } from "../../../../shared/components/google-map/google-map.component";

@Component({
  selector: 'app-location',
  imports: [GoogleMapComponent],
  templateUrl: './location.component.html',
  styleUrl: './location.component.scss'
})
export class LocationComponent {
  title = 'Palpalá, Jujuy, Argentina 🇦🇷'
  description = `Ubicada en nuestra querida cuidad con el objetivo de estar
  cerca de nuestros seres queridos, amigos y conocidos.`
}
