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
  booksByStoreID: any; //remove

  ngOnInit(): void { //if you don't need please remove

  }

  newCard() {
    if (this.list.length < this.max) {
      this.randomNumber = Math.floor(Math.random() * this.max + 1); //please create function 
      this.randomId = this.id++                                     //please generate unique id 
      this.list.push({ num: this.randomNumber, id: this.randomId })

    }
  }

  deleteCard(id: any) {
    this.list = this.list.filter((element: { id: any }) => {  //why type like this?
      return element.id !== id; // you can write without return
    })
  }

  sortCard() {
    this.list = this.list.sort((a: { num: number; }, b: { num: number; }) => { //why type like this?
      return a.num - b.num;  // you can write without return
    });
  }

}
