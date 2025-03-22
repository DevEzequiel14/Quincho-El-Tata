import { Component } from '@angular/core';
import { SocialComponent } from '../../../../shared/components/social/social.component';

@Component({
  selector: 'app-contact',
  imports: [SocialComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  directionTitle = 'Dirección'
  direction = 'C. Puerto Argentino 1789, Palpalá, Jujuy'
  phone = 'Teléfonos'
  phone1 = '+54 9 388 5054451'
  phone2 = '+54 9 388 4773005'

}
