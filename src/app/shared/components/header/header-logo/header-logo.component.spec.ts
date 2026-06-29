import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { HeaderLogoComponent } from './header-logo.component';

describe('HeaderLogoComponent', () => {
  let component: HeaderLogoComponent;
  let fixture: ComponentFixture<HeaderLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderLogoComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
