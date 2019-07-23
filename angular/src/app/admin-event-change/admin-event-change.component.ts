import { Component, OnInit, ɵConsole } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router} from '@angular/router';
import { IAdminEvent } from '../iadmin-event';
import { AdminEventService } from '../admin-event.service';
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
    if(this.id == null){
      this.createEvent();
    }
    else{
      this.updateEvent();
    }

    this.router.navigate(['/admin/event']);
  }

  createEvent() {
    const result = this.event.value as IAdminEvent;
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
    let result = this.event.value as IAdminEvent;
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

    this.event = this.fb.group({
      name:[''],
      category:[''],
      startdate:[''],
      starttime:[''],
      enddate:[''],
      endtime:[''],
      location:[''],
      allowRegister:[''],
      imageUrl:[''],
      adultPrice:[''],
      childPrice:[''],
    })
 
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
        },
        (err) => console.log(err)
      );
    }
    this.adminEventService.setCurrent(null);
  }

}
