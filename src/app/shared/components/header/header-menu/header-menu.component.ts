import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  inject,
  Input,
  Output,
} from '@angular/core';
import { Router } from '@angular/router';
import { ScrollChangeDirective } from '../../../directives/scroll-change.directive';

interface MenuItem {
  text: string;
  id: string;
}

@Component({
  selector: 'app-header-menu',
  imports: [ScrollChangeDirective],
  templateUrl: './header-menu.component.html',
  styleUrl: './header-menu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderMenuComponent {
  private readonly router = inject(Router);

  @Input() isMenuOpen = false;
  @Output() menuClose = new EventEmitter<void>();

  menu: MenuItem[] = [
    { text: 'Nosotros', id: 'about' },
    { text: 'Servicios', id: 'benefits' },
    { text: 'Galería', id: 'galeria' },
    { text: 'Precios', id: 'precios' },
    { text: 'Contacto', id: 'contact' },
  ];

  navigateToSection(sectionId: string, event: Event): void {
    event.preventDefault();
    this.closeMenu();
    void this.router.navigate(['/'], { fragment: sectionId });
  }

  closeMenu(): void {
    this.menuClose.emit();
  }
}
