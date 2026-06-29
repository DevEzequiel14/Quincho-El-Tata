import { ChangeDetectionStrategy, Component, HostListener, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { HeaderLogoComponent } from './header-logo/header-logo.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { HeaderToggleComponent } from './header-toggle/header-toggle.component';
import { ScrollChangeDirective } from '../../directives/scroll-change.directive';
import { ResponsiveService } from '../../../core/services/responsive.service';

@Component({
  selector: 'app-header',
  imports: [
    HeaderLogoComponent,
    HeaderMenuComponent,
    HeaderToggleComponent,
    ScrollChangeDirective,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {

  isMenuOpen = false;
  private readonly responsiveService = inject(ResponsiveService);
  readonly isMobile = toSignal(this.responsiveService.isMobile(), { initialValue: false });

  toggleMenu(): void {
    this.setMenuOpen(!this.isMenuOpen);
  }

  closeMenu(): void {
    this.setMenuOpen(false);
  }

  private setMenuOpen(open: boolean): void {
    this.isMenuOpen = open;
    document.body.style.overflow = open ? 'hidden' : '';
  }

  @HostListener('document:click', ['$event'])
  closeMenuOnOutsideClick(event: Event) {
    const target = event.target as HTMLElement;
    if (!target.closest('.navbar') && !target.closest('.menu-button')) {
      this.closeMenu();
    }
  }
}
