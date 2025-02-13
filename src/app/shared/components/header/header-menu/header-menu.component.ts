import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header-menu',
  imports: [],
  templateUrl: './header-menu.component.html',
  styleUrl: './header-menu.component.scss',
})
export class HeaderMenuComponent {
  @Input() isMenuOpen: boolean = false;
}
