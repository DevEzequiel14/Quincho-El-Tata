import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WhatsappComponent } from './shared/components/whatsapp/whatsapp.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, WhatsappComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'quincho';
}
