import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, inject } from '@angular/core';
import { ScrollChangeDirective } from '../../../directives/scroll-change.directive';

@Component({
  selector: 'app-header-toggle',
  imports: [ScrollChangeDirective],
  templateUrl: './header-toggle.component.html',
  styleUrl: './header-toggle.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderToggleComponent {
  private readonly elementRef = inject(ElementRef<HTMLElement>);

  @Input() expanded = false;
  @Output() clickEvent = new EventEmitter<void>();

  onClick(): void {
    this.clickEvent.emit();
  }

  focus(): void {
    const button = this.elementRef.nativeElement.querySelector('.menu-button') as HTMLButtonElement | null;
    button?.focus();
  }
}
