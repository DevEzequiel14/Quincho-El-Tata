import { Component, EventEmitter, Output } from '@angular/core';
import { ScrollChangeDirective } from '../../../directives/scroll-change.directive';

@Component({
  selector: 'app-header-toggle',
  imports: [ScrollChangeDirective],
  templateUrl: './header-toggle.component.html',
  styleUrl: './header-toggle.component.scss'
})
export class HeaderToggleComponent {

  @Output() clickEvent = new EventEmitter<void>();

  onClick(){
    this.clickEvent.emit();
  }
}
