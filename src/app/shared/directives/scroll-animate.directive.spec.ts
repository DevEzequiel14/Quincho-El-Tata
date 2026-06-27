import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ScrollAnimateDirective } from './scroll-animate.directive';

@Component({
  standalone: true,
  imports: [ScrollAnimateDirective],
  template: '<div appScrollAnimate>Test</div>',
})
class TestHostComponent {}

describe('ScrollAnimateDirective', () => {
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

  it('should add animate-fade-in class on init', () => {
    const div = fixture.nativeElement.querySelector('div');
    expect(div.classList.contains('animate-fade-in')).toBeTrue();
  });
});
