import { Component, Input } from '@angular/core';
import { ScrollChangeDirective } from '../../../directives/scroll-change.directive';

@Component({
  selector: 'app-header-menu',
  imports: [ScrollChangeDirective],
  templateUrl: './header-menu.component.html',
  styleUrl: './header-menu.component.scss',
})
export class HeaderMenuComponent {
  @Input() isMenuOpen: boolean = false;

  menu = [
    { text: 'Nosotros', href: 'about' },
    { text: 'Servicios', href: 'benefits' },
    { text: 'Contacto', href: 'contact' },
  ]

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    document.body.style.overflow = '';
  }
}
