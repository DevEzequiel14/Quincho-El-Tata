import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  imports: [RouterLink],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss',
})
export class NotFoundComponent {
  readonly title = 'Página no encontrada';
  readonly message =
    'La ruta que buscás no existe o fue movida. Volvé al inicio para seguir navegando el sitio.';
}
