import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router} from '@angular/router';
import { Eventin } from '../eventin';
import { Observable } from 'rxjs';
import { EventsserService } from '../eventsser.service'

@Component({
  selector: 'app-eventchange',
  templateUrl: './eventchange.component.html',
  styleUrls: ['./eventchange.component.css']
})
export class EventchangeComponent implements OnInit {
  public user:any;
  private selectedUser: any;
  public id:string;

  constructor(private _EventsserService: EventsserService, private route: ActivatedRoute, private router:Router ) { }

  onSubmit() {
    if(this.id == null){
      this.createUser();
    }
    else{
      this.updateUser(this.id);
    }
  }

  createUser() {
    const result = this.user.value as Eventin;
    this._EventsserService.postevent(result).subscribe(          
      (data) => {
        this._EventsserService.getEventin().subscribe(
          (data) => this._EventsserService.events = data,
          (err) => console.log(err)    
        )
      },
      (err) => console.log(err)
    );

    this.router.navigate(['/home']);
  }

  updateUser(_id:string){
    let result = this.user.value as Eventin;
    result._id = _id;

    this._EventsserService.putUserByID(_id, result).subscribe(
      (data) => {
        this._EventsserService.getEventin().subscribe(
          (data) => this._EventsserService.events = data,
          (err) => console.log(err)    
        )
      },
      (err) => console.log(err)
    );

    this.router.navigate(['/home']);
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
    })

    if(this.id == null){
      this.user = new FormGroup({
        name: new FormControl(""),
        category: new FormControl(""),
        startdate: new FormControl(""),
        enddate: new FormControl(""),
        location: new FormControl(""),
        adultprice: new FormControl(""),
        childprice: new FormControl("")
      });
    }
    else{
      this._EventsserService.geteventByID(this.id).subscribe(
        (data) => {
          this.selectedUser = data;
          this.user = new FormGroup({
              name: new FormControl(this.selectedUser.name),
              category: new FormControl(this.selectedUser.category),
              startdate: new FormControl(this.selectedUser.startdate),
              enddate: new FormControl(this.selectedUser.enddate),
              location: new FormControl(this.selectedUser.location),
              adultprice: new FormControl(this.selectedUser.adultprice),
              childprice: new FormControl(this.selectedUser.childprice),

          })
        },
        (err) => console.log(err)
      );
    }
    // console.log(this.user.value);
  }
}