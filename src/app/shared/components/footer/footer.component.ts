import { Component } from '@angular/core';
import { CONTACT_CONFIG } from '../../../core/constants/contact.config';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  readonly year = new Date().getFullYear();
  readonly whatsAppUrl = CONTACT_CONFIG.whatsAppUrl;
  readonly reassurance = 'Te respondemos por WhatsApp para cerrar fecha y presupuesto.';
  readonly whatsAppLabel = 'Escribinos';
}
