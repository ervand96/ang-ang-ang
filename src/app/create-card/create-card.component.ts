import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.css']
})
export class CreateCardComponent implements OnInit {
  title = 'angular-new-project';
  deleteButton = 'X';
  createCard = 'Create New Card';
  titleButtonClick = "Click";
  sortButton = "Sort Button";

  count = 1;
  list: any = [];
  max: number = 50;
  id = 1;
  randomNumber: any;
  randomId: any;

  click = () => {
    this.count++
  }
  booksByStoreID: any;

  ngOnInit(): void {

  }

  newCard() {
    if (this.list.length < this.max) {
      this.randomNumber = Math.floor(Math.random() * this.max + 1);
      this.randomId = this.id++
      this.list.push({ num: this.randomNumber, id: this.randomId })

    }
  }

  deleteCard(id: any) {
    this.list = this.list.filter((element: { id: any }) => {
      return element.id !== id;
    })
  }

  sortCard() {
    this.list = this.list.sort((a: { num: number; }, b: { num: number; }) => {
      return a.num - b.num;
    });
  }

}
