import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header-logo',
  imports: [RouterLink],
  templateUrl: './header-logo.component.html',
  styleUrl: './header-logo.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderLogoComponent {
  imgSrc = '/icons/logo-mini.webp';
}
