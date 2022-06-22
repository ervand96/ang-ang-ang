import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-delete-button',
  templateUrl: './delete-button.component.html',
  styleUrls: ['./delete-button.component.css']
})
export class DeleteButtonComponent {
  @Input() item: any = []
  @Output() deleteFunc = new EventEmitter()
  deleteButton: string = 'X'

  deleteCard(): void {
    this.deleteFunc.emit();
  }
}
