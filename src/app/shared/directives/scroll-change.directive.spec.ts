import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ScrollChangeDirective } from './scroll-change.directive';

@Component({
  standalone: true,
  imports: [ScrollChangeDirective],
  template: '<div appScrollChange scrollClass="scrolled" [scrollThreshold]="50">Test</div>',
})
class TestHostComponent {}

describe('ScrollChangeDirective', () => {
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.nativeElement.querySelector('div')).toBeTruthy();
  });
});
