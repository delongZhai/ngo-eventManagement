import { Component, OnInit } from '@angular/core';
import { AdminUserService } from '../admin-user.service';
import { MatDialog } from '@angular/material/dialog';
import {AdminUserDeleteComponent} from '../admin-user-delete/admin-user-delete.component';
import { AdminUserChangeComponent } from '../admin-user-change/admin-user-change.component';

@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.css']
})
export class AdminUserComponent implements OnInit {
  // public users = [];

  constructor(private adminUserService: AdminUserService, private dialog: MatDialog) { }

  openCreateDialog():void {
    const dialogRef = this.dialog.open(AdminUserChangeComponent, {
      width: '450px',
      height: '500px'
    });

    this.adminUserService.setCurrent(null);
    this.adminUserService.setWindows(dialogRef);
  }

  openUpdateDialog(id:string):void{
    const dialogRef = this.dialog.open(AdminUserChangeComponent, {
      width: '450px',
      height: '500px'
    });

    this.adminUserService.setCurrent(id);
    this.adminUserService.setWindows(dialogRef);
  }

  openDeleteDialog(id:string):void{
    const dialogRef = this.dialog.open(AdminUserDeleteComponent, {
      width: '400px',
      height: '400px'
    });

    if(id != null){
      this.adminUserService.setCurrent(id);
    }
    this.adminUserService.setWindows(dialogRef);
  }

  ngOnInit() {
    this.adminUserService.getUsers().subscribe(
      (data) => this.adminUserService.users = data,
    )
  }
}
