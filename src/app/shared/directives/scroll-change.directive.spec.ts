import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PLATFORM_ID } from '@angular/core';
import { ScrollChangeDirective } from './scroll-change.directive';

@Component({
  standalone: true,
  imports: [ScrollChangeDirective],
  template: '<div appScrollChange scrollClass="scrolled" [scrollThreshold]="50">Test</div>',
})
class TestHostComponent {}

describe('ScrollChangeDirective', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let div: HTMLElement;

  function setScrollY(value: number): void {
    Object.defineProperty(window, 'scrollY', { value, configurable: true });
  }

  function dispatchScroll(): void {
    window.dispatchEvent(new Event('scroll'));
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestHostComponent],
      providers: [{ provide: PLATFORM_ID, useValue: 'browser' }],
    }).compileComponents();

    setScrollY(0);
    fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();
    div = fixture.nativeElement.querySelector('div');
  });

  it('should create', () => {
    expect(div).toBeTruthy();
  });

  it('should not add scrolled class when below threshold on init', () => {
    expect(div.classList.contains('scrolled')).toBeFalse();
  });

  it('should add scrolled class when scroll exceeds threshold', () => {
    setScrollY(100);
    dispatchScroll();

    expect(div.classList.contains('scrolled')).toBeTrue();
  });

  it('should remove scrolled class when scroll returns below threshold', () => {
    setScrollY(100);
    dispatchScroll();
    expect(div.classList.contains('scrolled')).toBeTrue();

    setScrollY(0);
    dispatchScroll();
    expect(div.classList.contains('scrolled')).toBeFalse();
  });

  it('should not modify classes on server platform', async () => {
    await TestBed.resetTestingModule();
    await TestBed.configureTestingModule({
      imports: [TestHostComponent],
      providers: [{ provide: PLATFORM_ID, useValue: 'server' }],
    }).compileComponents();

    setScrollY(100);
    const serverFixture = TestBed.createComponent(TestHostComponent);
    serverFixture.detectChanges();
    const serverDiv = serverFixture.nativeElement.querySelector('div');

    dispatchScroll();
    expect(serverDiv.classList.contains('scrolled')).toBeFalse();
  });
});
