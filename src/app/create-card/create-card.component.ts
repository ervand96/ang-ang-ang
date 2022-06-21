import { Component } from '@angular/core';

@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.css']
})

export class CreateCardComponent {
  title = 'angular-new-project';
  createCard = 'Create New Card';
  titleButtonClick = "Click";
  deleteButton = 'X';
  sortButton = "Sort Button";

  count = 1;
  list: any = [];
  max: number = 50;
  id: any;
  randomNumber: any;
  randomId: any;

  click = () => {
    this.count++
  }

  randomNum() {
    this.randomNumber = Math.floor(Math.random() * this.max + 1);
  }

  uniqId() {
    this.randomId = Math.floor(Math.random() * this.max + 1)
  }

  newCard() {
    if (this.list.length < this.max) {
      this.randomNum()
      this.uniqId()
      this.list.push({ num: this.randomNumber, id: this.randomId })
    }
  }

  sortCard() {
    this.list = this.list.sort((a: any, b: any) => a.num - b.num);
  }

  buttonDelete(id: any) {
    this.list = this.list.filter((element: any) => element.id !== id)
  }
}
