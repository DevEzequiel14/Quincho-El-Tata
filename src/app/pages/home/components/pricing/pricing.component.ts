import { Component } from '@angular/core';
import {
  getPricingWhatsAppUrl,
  PRICING_CONFIG,
} from '../../../../core/constants/pricing.config';

@Component({
  selector: 'app-pricing',
  imports: [],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.scss',
})
export class PricingComponent {
  readonly config = PRICING_CONFIG;
  readonly whatsAppUrl = getPricingWhatsAppUrl();
}
