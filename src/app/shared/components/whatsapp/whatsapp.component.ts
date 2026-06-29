import { Component } from '@angular/core';
import { CONTACT_CONFIG } from '../../../core/constants/contact.config';

@Component({
  selector: 'app-whatsapp',
  imports: [],
  templateUrl: './whatsapp.component.html',
  styleUrl: './whatsapp.component.scss',
})
export class WhatsappComponent {
  readonly whatsAppUrl = CONTACT_CONFIG.whatsAppUrl;
}
