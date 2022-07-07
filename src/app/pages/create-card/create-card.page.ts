import { Component } from '@angular/core';

@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.page.html',
  styleUrls: ['./create-card.page.css']
})
export class CreateCardComponent {
  title = 'angular-new-project';
  createCard = 'Create New Card';
  titleButtonPlus = "Plus";
  titleButtonMinus = "Minus";
  sortButton = "Sort Button";

  count = 0;
  list: any = [];
  max: number = 50;

  click = () => {
    this.count++
  }

  minus() {
    if (this.count > 0)
      this.count--
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
