import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header-toggle',
  imports: [],
  templateUrl: './header-toggle.component.html',
  styleUrl: './header-toggle.component.scss'
})
export class HeaderToggleComponent {

  @Output() clickEvent = new EventEmitter<void>();

  onClick(){
    this.clickEvent.emit();
  }
}
