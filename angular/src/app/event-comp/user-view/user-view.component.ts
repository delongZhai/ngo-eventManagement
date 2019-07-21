import { Component, OnInit } from '@angular/core';
import {UserViewServService} from '../user-view-serv.service';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {
  public EventsArray = [];
  constructor(private _userviewserv:UserViewServService) { }

  ngOnInit() {
    this._userviewserv.getEvents().subscribe(data => this.EventsArray = data);
  }

}
