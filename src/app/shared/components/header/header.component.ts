import { Component, HostListener, inject } from '@angular/core';
import { HeaderLogoComponent } from './header-logo/header-logo.component';
import { HeaderMenuComponent } from "./header-menu/header-menu.component";
import { HeaderToggleComponent } from "./header-toggle/header-toggle.component";
import { ScrollChangeDirective } from '../../directives/scroll-change.directive';
import { ResponsiveService } from '../../../core/services/responsive.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [
    NgIf,
    HeaderLogoComponent,
    HeaderMenuComponent,
    HeaderToggleComponent,
    ScrollChangeDirective,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  isMenuOpen: boolean = false;
  isMobile: boolean = false;
  responsiveService = inject(ResponsiveService);

  constructor() { }

  ngOnInit(): void {
    this.responsiveService.isMobile().subscribe((mobile) => {
      this.isMobile = mobile;
    });
  }

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
