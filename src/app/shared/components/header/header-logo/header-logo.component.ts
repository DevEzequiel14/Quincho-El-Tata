import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IMAGE_ASSETS } from '../../../../core/constants/image-assets.config';

@Component({
  selector: 'app-header-logo',
  imports: [RouterLink],
  templateUrl: './header-logo.component.html',
  styleUrl: './header-logo.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderLogoComponent {
  readonly image = IMAGE_ASSETS.logoMini;
}
