import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { Observable } from 'rxjs'
import {EventsserService} from '../eventsser.service'
@Component({
  selector: 'app-deleteevent',
  templateUrl: './deleteevent.component.html',
  styleUrls: ['./deleteevent.component.css']
})
export class DeleteeventComponent implements OnInit {
  private id:string;
  constructor(private deleteserver: EventsserService,private router: Router, private route: ActivatedRoute ) {}
  Confirm(deleteForm){
    console.log("Here")
    if(deleteForm.value.decision ==="true"){
      this.route.paramMap.subscribe(params => {
        this.id = params.get('id');
  
        // console.log(this.id);
        this.deleteserver.deleteevent(this.id).subscribe(
          (data) => {console.log(data)
            this.deleteserver.getEventin().subscribe(
              (data) => {this.deleteserver.events = data,this.router.navigate(['/home'])}
              ,
              (err) => console.log(err)    
            )
          },
          (err) => console.log(err)
        )
      })


    }
  this.router.navigate(['/home']);
  }
  ngOnInit() {
}

}
