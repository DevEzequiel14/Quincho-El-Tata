import { Component } from '@angular/core';
import { GoogleMapComponent } from '../../../../shared/components/google-map/google-map.component';

@Component({
  selector: 'app-location',
  imports: [GoogleMapComponent],
  templateUrl: './location.component.html',
  styleUrl: './location.component.scss',
})
export class LocationComponent {
  title = 'Ubicación';
  description =
    'C. Puerto Argentino 1789, Palpalá, Jujuy. Dirección clara para que lleguen tus invitados sin vueltas.';
}
