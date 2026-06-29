import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ScrollChangeDirective } from '../../../directives/scroll-change.directive';

@Component({
  selector: 'app-header-menu',
  imports: [ScrollChangeDirective],
  templateUrl: './header-menu.component.html',
  styleUrl: './header-menu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderMenuComponent {
  @Input() isMenuOpen = false;
  @Output() menuClose = new EventEmitter<void>();

  menu = [
    { text: 'Nosotros', href: 'about' },
    { text: 'Servicios', href: 'benefits' },
    { text: 'Galería', href: 'galeria' },
    { text: 'Contacto', href: 'contact' },
  ];

  closeMenu(): void {
    this.menuClose.emit();
  }
}
