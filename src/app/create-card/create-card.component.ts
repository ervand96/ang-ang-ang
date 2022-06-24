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
  sortButton = "Sort Button";

  count = 1;
  list: any = [];
  max: number = 50;

  click = () => {
    this.count++
  }

  randomNum() {
    const randomNumber = Math.floor(Math.random() * this.max + 1);
    return randomNumber
  }

  uniqId() {
    const randomId = Math.floor(Math.random() * this.max + 1)
    return randomId
  }

  newCard() {
    if (this.list.length < this.max) {
      this.list.push({ num: this.randomNum(), id: this.uniqId() })
    }
  }

  sortCard() {
    this.list = this.list.sort((a: any, b: any) => a.num - b.num);
  }

  buttonDelete(id: any) {
    this.list = this.list.filter((element: any) => element.id !== id)
  }
}
