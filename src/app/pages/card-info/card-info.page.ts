import { DataService } from '../../service/post.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, } from '@angular/router';

@Component({
  selector: 'app-card-info',
  templateUrl: './card-info.page.html',
  styleUrls: ['./card-info.page.css']
})
export class CardInfoComponent implements OnInit {
  id: any;

  constructor(private dataService: DataService, private route: ActivatedRoute) { }

  getCard() {
    this.dataService.getData(this.id);
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id')
    })
  }
}


