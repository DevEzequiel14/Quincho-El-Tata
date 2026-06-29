import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'galeria',
    loadComponent: () =>
      import('./pages/gallery/gallery-page.component').then((m) => m.GalleryPageComponent),
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
