import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-delete-button',
  templateUrl: './delete-button.component.html',
  styleUrls: ['./delete-button.component.css']
})
export class DeleteButtonComponent {
  @Input() item: any = []
  @Input() deleteButton: string = 'X'
  @Output() deleteFunc = new EventEmitter()

  deleteCard(): void {
    this.deleteFunc.emit();
  }
}
