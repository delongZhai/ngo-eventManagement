import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AdminEventService } from '../admin-event.service';
import { AdminEventChangeComponent } from '../admin-event-change/admin-event-change.component';
import { AdminEventDeleteComponent } from '../admin-event-delete/admin-event-delete.component';

@Component({
  selector: 'app-admin-event',
  templateUrl: './admin-event.component.html',
  styleUrls: ['./admin-event.component.css']
})
export class AdminEventComponent implements OnInit {
  constructor(private adminEventService: AdminEventService, private dialog: MatDialog) { }

  openCreateDialog():void {
    const dialogRef = this.dialog.open(AdminEventChangeComponent, {
      width: '750px',
      height: '600px'
    });

    this.adminEventService.setCurrent(null);
    this.adminEventService.setWindows(dialogRef);
  }

  openUpdateDialog(id:string):void{
    const dialogRef = this.dialog.open(AdminEventChangeComponent, {
      width: '750px',
      height: '600px'
    });

    this.adminEventService.setCurrent(id);
    this.adminEventService.setWindows(dialogRef);
  }

  // If need delete feature create AdminEventDeleteComponent FIRST.
  openDeleteDialog(id:string):void{
    const dialogRef = this.dialog.open(AdminEventDeleteComponent, {
      width: '400px',
      height: '400px'
    });

    if(id != null){
      this.adminEventService.setCurrent(id);
    }
    this.adminEventService.setWindows(dialogRef);
  }

  ngOnInit() {
    this.adminEventService.getEvents().subscribe(
      (data) => this.adminEventService.events = data,
    )
  }
}
