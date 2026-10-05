import { Component } from '@angular/core';
import { IMAGE_ASSETS } from '../../../../core/constants/image-assets.config';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  title = 'Quincho con pileta';
  description = `Patio listo en Palpalá: pileta, parrilla techada y salón para
  festejos familiares y reuniones con amigos.`;

  midLink = 'Ver qué incluye';
  readonly image = IMAGE_ASSETS.about;
}
