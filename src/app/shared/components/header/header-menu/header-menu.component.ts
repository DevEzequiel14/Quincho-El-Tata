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

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
