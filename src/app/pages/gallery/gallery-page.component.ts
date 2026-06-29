import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { GalleryComponent } from '../home/components/gallery/gallery.component';

@Component({
  selector: 'app-gallery-page',
  imports: [GalleryComponent, RouterLink],
  template: `
    <main class="bg-dark text-white min-vh-100">
      <div class="container px-4 px-lg-5 pt-4">
        <a routerLink="/" class="link-light link-underline-opacity-0 link-underline-opacity-75-hover">
          ← Volver al inicio
        </a>
      </div>
      <app-gallery />
    </main>
  `,
})
export class GalleryPageComponent {}
