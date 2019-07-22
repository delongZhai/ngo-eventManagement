import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,FormBuilder} from '@angular/forms';
import {EventsserService} from '../eventsser.service';
import { Eventin } from '../eventin';
import { ActivatedRoute, Router} from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {
public newevent:any;
ngOnInit() {
    
}
  constructor(private _EventsserService: EventsserService,private location :Location,private fb: FormBuilder) {
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

  

  onSubmit(){
    const result = this.newevent.value as Eventin;
    this._EventsserService.postevent(result).subscribe(res =>{
      // response from REST API call
      console.log(res);
      this.location.back();
    });
  }
  
}
