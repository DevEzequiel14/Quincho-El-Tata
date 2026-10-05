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

  it('should show operational facts, essentials, and keep extras collapsed', () => {
    const facts = fixture.nativeElement.querySelectorAll('.benefits-facts__item');
    const items = fixture.nativeElement.querySelectorAll('.benefits-feature .benefits-list__item');
    const extras: HTMLDetailsElement = fixture.nativeElement.querySelector('.benefits-extras');

    expect(facts.length).toBe(3);
    expect(items.length).toBe(4);
    expect(extras.open).toBeFalse();
    expect(extras.querySelectorAll('.benefits-list__item').length).toBe(3);
  });
});
