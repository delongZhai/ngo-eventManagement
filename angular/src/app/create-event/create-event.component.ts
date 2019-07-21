import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,FormBuilder} from '@angular/forms';
import {EventsserService} from '../event/eventsser.service';
import { Eventin } from '../event/eventin';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {
public newevent:any;
  constructor(private _EventsserService: EventsserService,private fb: FormBuilder) {
    this.newevent=new FormGroup({
      name:new FormControl(""),
      category: new FormControl(""),
      startDate : new FormControl(""),
      endDate: new FormControl(""),
      location: new FormControl(""),
      adultPrice: new FormControl(""),
      childPrice: new FormControl("")

    });
   }

  ngOnInit() {
  }

  onSubmit(){
    const result = this.newevent.value as Eventin;
    this._EventsserService.postevent(result).subscribe(res =>{
      // response from REST API call
      console.log(res);
    });
  }
}
