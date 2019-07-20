import { Component, OnInit } from '@angular/core';
import {EventsserService} from '../eventsser.service';
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
   // public saeventin=[];
  
  constructor(private _EventsserService: EventsserService) {}

  ngOnInit(){
    this._EventsserService.getEventin().subscribe(
      (data)=>this._EventsserService.events=data,
      
    );
  

}
}
