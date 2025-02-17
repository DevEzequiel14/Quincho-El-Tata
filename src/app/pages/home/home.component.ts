import { Component } from '@angular/core';
import { HeaderComponent } from "../../shared/components/header/header.component";
import { LinkComponent } from "../../shared/components/link/link.component";

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, LinkComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  buttonText: string = 'Mas información';
  ref: string = '#info'
}
