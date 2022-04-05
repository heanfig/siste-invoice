import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'siste-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  @Output() public buttonPressed!: EventEmitter<unknown>;

  constructor() { 
    this.buttonPressed = new EventEmitter<unknown>();
  }

  onButtonPressed($event: Event) {
    this.buttonPressed.emit($event);
  }

}
