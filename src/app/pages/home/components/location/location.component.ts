import { Component } from '@angular/core';
import { GoogleMapComponent } from '../../../../shared/components/google-map/google-map.component';

@Component({
  selector: 'app-location',
  imports: [GoogleMapComponent],
  templateUrl: './location.component.html',
  styleUrl: './location.component.scss',
})
export class LocationComponent {
  title = 'Palpalá, Jujuy';
  description = `En nuestra querida ciudad, cerca de quienes más importan: familia, amigos y conocidos.`;
}
