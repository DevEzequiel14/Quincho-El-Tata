import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    document.body.style.overflow = '';
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    document.body.style.overflow = '';
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle menu and lock body scroll when open', () => {
    expect(component.isMenuOpen).toBeFalse();

    component.toggleMenu();
    expect(component.isMenuOpen).toBeTrue();
    expect(document.body.style.overflow).toBe('hidden');

    component.toggleMenu();
    expect(component.isMenuOpen).toBeFalse();
    expect(document.body.style.overflow).toBe('');
  });
});
