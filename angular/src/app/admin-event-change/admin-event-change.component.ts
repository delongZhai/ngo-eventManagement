import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl } from '@angular/forms';
import { Router} from '@angular/router';
import { IAdminEvent } from '../iadmin-event';
import { AdminEventService } from '../admin-event.service';
import { Observable } from 'rxjs';
import { FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-admin-event-change',
  templateUrl: './admin-event-change.component.html',
  styleUrls: ['./admin-event-change.component.css']
})
export class AdminEventChangeComponent implements OnInit {
  public event:any;
  private selectedEvent: any;
  public id:string;

  constructor(private fb:FormBuilder, private adminEventService: AdminEventService, private router:Router) { }

  onSubmit() {
    console.log("Submit is clicked");
    if(this.id == null){
      this.createEvent();
    }
    else{
      this.updateEvent();
    }
    this.adminEventService.dialog.close();
    this.router.navigate(['/admin/event']);
  }

  createEvent() {
    const result = this.event.value;

    console.log(result);
    this.adminEventService.postEvent(result).subscribe(          
      (data) => {
        this.adminEventService.getEvents().subscribe(
          (data) => this.adminEventService.events = data,
          (err) => console.log(err)    
        )
      },
      (err) => console.log(err)
    );
  }

  updateEvent(){
    let result = this.event.value;

    console.log(result);
    result._id = this.id;

    this.adminEventService.putEventByID(this.id, result).subscribe(
      (data) => {
        this.adminEventService.getEvents().subscribe(
          (data) => this.adminEventService.events = data,
          (err) => console.log(err)    
        )
      },
      (err) => console.log(err)
    );
  }

  ngOnInit() {
    this.id = this.adminEventService.currentEvent_id;
 
    if(this.id == null){  
      this.event = new FormGroup({
        name: new FormControl(""),
        category: new FormControl(""),
        startdate: new FormControl(""),
        starttime: new FormControl(""),
        enddate: new FormControl(""),
        endtime: new FormControl(""),
        location: new FormControl(""),
        allowRegister: new FormControl(true),
        imageUrl: new FormControl(""),
        adultPrice: new FormControl(0),
        childPrice: new FormControl(0),
      });
    }
    else{
      this.adminEventService.getEventByID(this.id).subscribe(
        (data) => {
          this.selectedEvent = data;
          this.event = new FormGroup({
            name: new FormControl(this.selectedEvent.name),
            category: new FormControl(this.selectedEvent.category),
            startdate: new FormControl(this.selectedEvent.startdate),
            starttime: new FormControl(this.selectedEvent.starttime),
            enddate: new FormControl(this.selectedEvent.enddate),
            endtime: new FormControl(this.selectedEvent.endtime),
            location: new FormControl(this.selectedEvent.location),
            allowRegister: new FormControl(this.selectedEvent.allowRegister),
            imageUrl: new FormControl(this.selectedEvent.imageUrl),
            adultPrice: new FormControl(this.selectedEvent.adultPrice),
            childPrice: new FormControl(this.selectedEvent.childPrice)
          })
          console.log(this.event.value);
        },
        (err) => console.log(err)
      );
      console.log(this.event);
    }
    this.adminEventService.setCurrent(null);
  }
}
