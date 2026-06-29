import { Component } from '@angular/core';
import { SocialComponent } from '../../../../shared/components/social/social.component';
import { CONTACT_CONFIG } from '../../../../core/constants/contact.config';

@Component({
  selector: 'app-contact',
  imports: [SocialComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  directionTitle = 'Dirección';
  direction = 'C. Puerto Argentino 1789, Palpalá, Jujuy';
  phone = 'Teléfonos';
  phone1 = CONTACT_CONFIG.phones[0];
  phone2 = CONTACT_CONFIG.phones[1];
}
