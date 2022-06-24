import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class DataService {
  item: any;
  id: any
  createCardList: any = [];

  addData(item: any) {
    return this.createCardList.push(item);
  }

  getData(id: any) {
    return this.createCardList.find((element: any) => element.id === id)
  }
}
