import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-eventdetail',
  templateUrl: './eventdetail.component.html',
  styleUrls: ['./eventdetail.component.css']
})
export class EventdetailComponent implements OnInit {
  private _url:string ="http://localhost:7000/events";
  constructor() { }

  ngOnInit() {
  }

}
