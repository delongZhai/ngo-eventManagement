import { Component, OnInit } from '@angular/core';
import {UserViewServService} from '../user-view-serv.service';

@Component({
  selector: 'app-eventregistrationdetail',
  templateUrl: './eventregistrationdetail.component.html',
  styleUrls: ['./eventregistrationdetail.component.css']
})
export class EventregistrationdetailComponent implements OnInit {
  public EventsArray = []
  constructor(private _userviewserv:UserViewServService) { }

  ngOnInit() {
    this._userviewserv.getEvents().subscribe(data => this.EventsArray = data);
  }

}
