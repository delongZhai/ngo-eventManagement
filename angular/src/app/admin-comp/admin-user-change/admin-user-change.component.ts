import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router} from '@angular/router';
import { IAdminUser } from '../admin-user/iadmin-user';
import { Observable } from 'rxjs';
import { AdminUserService } from '../admin-user/admin-user.service';


@Component({
  selector: 'app-admin-user-change',
  templateUrl: './admin-user-change.component.html',
  styleUrls: ['./admin-user-change.component.css']
})
export class AdminUserChangeComponent implements OnInit {
  public user:any;
  private selectedUser: any;
  public id:string;

  constructor(private adminUserService: AdminUserService, private route: ActivatedRoute, private router:Router) { }

  onSubmit() {
    if(this.id == null){
      this.createUser();
    }
    else{
      this.updateUser();
    }
  }

  createUser() {
    const result = this.user.value as IAdminUser;
    this.adminUserService.postUser(result).subscribe(          
      (data) => {
        this.adminUserService.getUsers().subscribe(
          (data) => this.adminUserService.users = data,
          (err) => console.log(err)    
        )
      },
      (err) => console.log(err)
    );
    this.router.navigate(['/user']);
  }

  updateUser(){
    let result = this.user.value as IAdminUser;
    result._id = this.id;

    this.adminUserService.putUserByID(this.id, result).subscribe(
      (data) => {
        this.adminUserService.getUsers().subscribe(
          (data) => this.adminUserService.users = data,
          (err) => console.log(err)    
        )
      },
      (err) => console.log(err)
    );
    this.router.navigate(['/user']);
  }

  ngOnInit() {
    this.id = this.adminUserService.currentUser_id;

    if(this.id == null){
      this.user = new FormGroup({
        firstName: new FormControl(""),
        lastName: new FormControl(""),
        email: new FormControl(""),
        password: new FormControl(""),
        adminRole: new FormControl(false)
      });
    }
    else{
      this.adminUserService.getUserByID(this.id).subscribe(
        (data) => {
          this.selectedUser = data;
          this.user = new FormGroup({
              firstName: new FormControl(this.selectedUser.firstName),
              lastName: new FormControl(this.selectedUser.lastName),
              email: new FormControl(this.selectedUser.email),
              password: new FormControl(this.selectedUser.password),
              adminRole: new FormControl(this.selectedUser.adminRole)
          })
        },
        (err) => console.log(err)
      );
    }
    this.adminUserService.setCurrent(null);
  }
}
