import { Component } from '@angular/core';
import { HeaderLogoComponent } from './header-logo/header-logo.component';
import { HeaderMenuComponent } from "./header-menu/header-menu.component";
import { HeaderToggleComponent } from "./header-toggle/header-toggle.component";

@Component({
  selector: 'app-header',
  imports: [HeaderLogoComponent, HeaderMenuComponent, HeaderToggleComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  isMenuOpen = false;
  
  toggleMenu(){
    this.isMenuOpen = !this.isMenuOpen
  }
}
