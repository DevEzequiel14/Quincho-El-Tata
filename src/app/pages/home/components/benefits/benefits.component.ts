import { Component } from '@angular/core';

@Component({
  selector: 'app-benefits',
  imports: [],
  templateUrl: './benefits.component.html',
  styleUrl: './benefits.component.scss'
})
export class BenefitsComponent {

  mainTitle = 'Servicio principal'
  mainDescription = 'Quincho con pileta y espacio verde para poder disfrutar un lindo día junto a tus seres queridos.'
  main = [
    'Asadores techados, cocina con horno, heladera, freezer y vajilla de vidrio.',
    'Pileta de 8x4m + pileta pequeña de 2x2m.',
    'Mesas, sillas, bancas',
    'Manteles',
    'Baños completos',
    'Wifi',
  ]

  additionalTitle = 'Servicios adicionales'
  additional = [
    'Catering: Disfrutá de tu evento con tranquilidad, nosotros nos encargamos del resto.',
    'Contratos, presupuestos y asesoramientos personalizados.',
  ]

  optionalTitle = 'Servicios opcionales'
  optional = [
    'Parrilleros',
    'Barra móvil: tragos y bebidas con y sin alcohol.',
    'Bartender',
  ]
}
