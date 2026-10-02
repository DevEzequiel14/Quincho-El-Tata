import { Component } from '@angular/core';
import { IMAGE_ASSETS } from '../../../../core/constants/image-assets.config';

@Component({
  selector: 'app-benefits',
  imports: [],
  templateUrl: './benefits.component.html',
  styleUrl: './benefits.component.scss',
})
export class BenefitsComponent {
  title = 'Qué incluye';
  lede = 'Lo esencial del alquiler. Los extras se arman según tu evento.';

  essentials = [
    'Asadores techados, cocina equipada y vajilla.',
    'Pileta 8×4 m + pileta chica 2×2 m.',
    'Mesas, sillas, bancas y manteles.',
    'Baños completos y WiFi.',
  ];

  extrasTitle = 'Extras a convenir';
  extras = [
    'Catering y asesoramiento del evento.',
    'Contratos y presupuestos personalizados.',
    'Parrillero, barra móvil y bartender.',
  ];

  readonly image = IMAGE_ASSETS.benefitsMain;
}
