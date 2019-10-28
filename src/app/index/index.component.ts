import { Component, OnInit } from '@angular/core';
import { DataService } from '../sevices/data.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  message: string;
  ParentSearchString: string;
  constructor(private service: DataService) { }

  ngOnInit() {
    this.service.currentMessage.subscribe(arg => this.message = arg);

  }
  onChangeData(event) {
    this.ParentSearchString=event;
  }
}
