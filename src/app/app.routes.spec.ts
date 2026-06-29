import { TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';

import { routes } from './app.routes';
import { HomeComponent } from './pages/home/home.component';

describe('App routes', () => {
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideRouter(routes)],
    });
    router = TestBed.inject(Router);
  });

  it('should keep home at the root path without lazy loading', () => {
    const home = routes.find((route) => route.path === '');
    expect(home?.component).toBe(HomeComponent);
    expect(home?.loadComponent).toBeUndefined();
  });

  it('should lazy load the not found wildcard route', () => {
    const wildcard = routes.find((route) => route.path === '**');
    expect(wildcard?.loadComponent).toBeDefined();
    expect(wildcard?.component).toBeUndefined();
  });

  it('should match lazy not found for unknown URLs', async () => {
    await router.navigateByUrl('/ruta-inexistente');

    let route = router.routerState.snapshot.root;
    while (route.firstChild) {
      route = route.firstChild;
    }

    expect(route.routeConfig?.loadComponent).toBeDefined();
  });
});
