import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenefitsComponent } from './benefits.component';

describe('BenefitsComponent', () => {
  let component: BenefitsComponent;
  let fixture: ComponentFixture<BenefitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BenefitsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BenefitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show essentials and keep extras collapsed by default', () => {
    const items = fixture.nativeElement.querySelectorAll('.benefits-feature .benefits-list__item');
    const extras: HTMLDetailsElement = fixture.nativeElement.querySelector('.benefits-extras');

    expect(items.length).toBe(4);
    expect(extras.open).toBeFalse();
    expect(extras.querySelectorAll('.benefits-list__item').length).toBe(3);
  });
});
