import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

  title = 'Quicho con Pileta'
  description = `Disfruta de un espacio exclusivo para eventos, con todas las
  comodidades y una hermosa pileta. Nuestro salón está totalmente habilitado
  para celebraciones de todo tipo, ofreciendo una experiencia única en un
  entorno acogedor.`

  details = [
    { icon: 'bi-people-fill', texto: 'Capacidad para <strong>60 personas</strong>.' },
    { icon: 'bi-brightness-high-fill', texto: '<strong>Eventos de día: </strong>11:00 a 20:00 hs.' },
    { icon: 'bi-moon-fill', texto: '<strong>Eventos de noche: </strong>20:00 a 05:00 hs.' }
  ];

  note = 'Los precios varían según el tipo de evento y el mes en curso.';
  urlWhatsApp = 'https://wa.me/+5493885054451?text=Hola, quisiera información sobre el alquiler del quincho. ¡Gracias!';
  btnText = 'Consultar disponibilidad';
  imgSrc = 'icons/about.webp';
  imgAlt = 'Quincho con pileta';
}
