import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';

import { HeaderMenuComponent } from './header-menu.component';

describe('HeaderMenuComponent', () => {
  let component: HeaderMenuComponent;
  let fixture: ComponentFixture<HeaderMenuComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderMenuComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    router = TestBed.inject(Router);
    spyOn(router, 'navigate').and.resolveTo(true);

    fixture = TestBed.createComponent(HeaderMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render section links with hash hrefs', () => {
    const links = fixture.nativeElement.querySelectorAll('a[href^="#"]');
    expect(links.length).toBe(component.menu.length);
    expect(links[2].getAttribute('href')).toBe('#galeria');
    expect(links[2].textContent?.trim()).toBe('Galería');
  });

  it('should navigate to home with the section fragment on click', () => {
    const link: HTMLAnchorElement = fixture.nativeElement.querySelector('a[href="#contact"]');
    link.click();

    expect(router.navigate).toHaveBeenCalledWith(['/'], { fragment: 'contact' });
  });

  it('should mark the mobile menu as inert when closed', () => {
    fixture.componentRef.setInput('isMobileView', true);
    fixture.componentRef.setInput('isMenuOpen', false);
    fixture.detectChanges();

    const nav: HTMLElement = fixture.nativeElement.querySelector('#primary-navigation');
    expect(nav.getAttribute('aria-hidden')).toBe('true');
    expect(nav.hasAttribute('inert')).toBeTrue();
  });

  it('should close the menu on Escape', () => {
    fixture.componentRef.setInput('isMobileView', true);
    fixture.componentRef.setInput('isMenuOpen', true);
    fixture.detectChanges();

    spyOn(component, 'closeMenu');
    fixture.nativeElement.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));

    expect(component.closeMenu).toHaveBeenCalled();
  });
});
