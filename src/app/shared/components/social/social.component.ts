import { Component } from '@angular/core';
import { CONTACT_CONFIG } from '../../../core/constants/contact.config';

@Component({
  selector: 'app-social',
  imports: [],
  templateUrl: './social.component.html',
  styleUrl: './social.component.scss'
})
export class SocialComponent {
  readonly instagramUrl = CONTACT_CONFIG.instagramUrl;
  readonly facebookUrl = CONTACT_CONFIG.facebookUrl;
}
