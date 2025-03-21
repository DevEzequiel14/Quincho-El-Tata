import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderToggleComponent } from './header-toggle.component';

describe('HeaderToggleComponent', () => {
  let component: HeaderToggleComponent;
  let fixture: ComponentFixture<HeaderToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderToggleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
