import { Component } from '@angular/core';

@Component({
  selector: 'app-google-map',
  imports: [],
  templateUrl: './google-map.component.html',
  styleUrl: './google-map.component.scss'
})
export class GoogleMapComponent {

  locationUrl: string = "https://maps.app.goo.gl/FHNPYCBB4FX87PkUA";

  copyLocation() {
    navigator.clipboard.writeText(this.locationUrl).then(() => {
      alert('Ubicación copiada al portapapeles 📍');
    });
  }
}
