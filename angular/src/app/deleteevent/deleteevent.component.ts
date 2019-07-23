import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {EventsserService} from '../eventsser.service';
import {HttpClient,HttpErrorResponse} from '@angular/common/http';
@Component({
  selector: 'app-deleteevent',
  templateUrl: './deleteevent.component.html',
  styleUrls: ['./deleteevent.component.css']
})
export class DeleteeventComponent implements OnInit {
  private id:string;
  constructor(private _EventsserService: EventsserService,private router: Router, private route: ActivatedRoute ) {}
  ngOnInit() {
  }
  Confirm(deleteForm){
   
    if(deleteForm.value.decision ==="true"){
      this.route.paramMap.subscribe(params => {
        this.id = params.get('id');
  
  
        console.log(this.id);
        this._EventsserService.deleteevent(this.id).subscribe(
          (data) => {console.log(data);
            console.log(this.id);
            this._EventsserService.getEventin().subscribe(
              (data) => this._EventsserService.events = data,
              
              (err) => console.log(err)    
            )
          },

          (err) => console.log(err)
        )
      })
      }
        this.router.navigate(['/home']);
      
}
}


