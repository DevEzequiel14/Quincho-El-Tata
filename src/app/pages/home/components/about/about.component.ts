import { Component } from '@angular/core';
import { CONTACT_CONFIG } from '../../../../core/constants/contact.config';
import { IMAGE_ASSETS } from '../../../../core/constants/image-assets.config';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  title = 'Quincho con pileta';
  description = `Espacio con pileta, parrilla techada y salón habilitado para festejos
  familiares y reuniones en Palpalá. Capacidad para hasta 60 personas.`;

  details = [
    { icon: 'bi-people-fill', texto: 'Capacidad para <strong>60 personas</strong>.' },
    {
      icon: 'bi-brightness-high-fill',
      texto: '<strong>Eventos de día: </strong>11:00 a 20:00 hs.',
    },
    { icon: 'bi-moon-fill', texto: '<strong>Eventos de noche: </strong>20:00 a 05:00 hs.' },
  ];

  note = 'Los precios varían según el tipo de evento y el mes en curso.';
  urlWhatsApp = CONTACT_CONFIG.whatsAppUrl;
  btnText = 'Consultar por WhatsApp';
  readonly image = IMAGE_ASSETS.about;
}
