import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { Observable } from 'rxjs';
import { AdminEventService } from '../admin-event.service';

@Component({
  selector: 'app-admin-event-delete',
  templateUrl: './admin-event-delete.component.html',
  styleUrls: ['./admin-event-delete.component.css']
})
export class AdminEventDeleteComponent implements OnInit {
  private id:string;

  constructor( private adminEventService: AdminEventService, private router: Router) { }

  ngOnInit() {
  }

  Confirm(deleteForm){
    let dialogRef = this.adminEventService.dialog;
    
    if(deleteForm.value.decision ==="true"){
      this.id = this.adminEventService.getCurrent();
      console.log(this.id);

      this.adminEventService.deleteEvent(this.id).subscribe(
        (data) => {console.log(data)
          this.adminEventService.getEvents().subscribe(
            (data) => this.adminEventService.events = data,
            (err) => console.log(err)    
          )
        },
        (err) => console.log(err)
      )

      this.router.navigate(['/admin/event']);
      dialogRef.close();
    }
    else{
      dialogRef.close();
    }
  }

}
