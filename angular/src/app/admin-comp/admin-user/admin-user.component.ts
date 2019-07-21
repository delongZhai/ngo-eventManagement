import { Component, OnInit } from '@angular/core';
import { AdminUserService } from './admin-user.service';

@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.css']
})
export class AdminUserComponent implements OnInit {
  public users = [];

  constructor(private adminUserService: AdminUserService) { }

  ngOnInit() {
    this.adminUserService.getUsers().subscribe(
      (data) => this.users = data,
    )
  }

}
