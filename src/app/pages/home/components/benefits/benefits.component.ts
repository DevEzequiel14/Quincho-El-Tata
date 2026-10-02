import { Component } from '@angular/core';
import { IMAGE_ASSETS } from '../../../../core/constants/image-assets.config';

@Component({
  selector: 'app-benefits',
  imports: [],
  templateUrl: './benefits.component.html',
  styleUrl: './benefits.component.scss',
})
export class BenefitsComponent {
  mainTitle = 'Servicio principal';
  mainDescription =
    'Quincho con pileta y espacio verde para un día o una noche con los tuyos.';
  main = [
    'Asadores techados, cocina equipada (horno, heladera, freezer) y vajilla.',
    'Pileta 8×4 m + pileta chica 2×2 m.',
    'Mesas, sillas, bancas y manteles.',
    'Baños completos y WiFi.',
  ];

  additionalTitle = 'Servicios adicionales';
  additional = [
    'Catering: Disfrutá de tu evento con tranquilidad, nosotros nos encargamos del resto.',
    'Contratos, presupuestos y asesoramientos personalizados.',
  ];

  optionalTitle = 'Servicios opcionales';
  optional = ['Parrilleros', 'Barra móvil: tragos y bebidas con y sin alcohol.', 'Bartender'];

  readonly imgMain = IMAGE_ASSETS.benefitsMain;
  readonly imgAdditional = IMAGE_ASSETS.benefitsAdditional;
  readonly imgOptional = IMAGE_ASSETS.benefitsOptional;
}
