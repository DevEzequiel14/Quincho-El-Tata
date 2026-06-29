import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-header-logo',
  imports: [],
  templateUrl: './header-logo.component.html',
  styleUrl: './header-logo.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderLogoComponent {
  imgSrc = '/icons/logo-mini.webp';
}
