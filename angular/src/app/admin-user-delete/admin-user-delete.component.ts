import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { Observable } from 'rxjs';
import { AdminUserService } from '../admin-user.service';

@Component({
  selector: 'app-admin-user-delete',
  templateUrl: './admin-user-delete.component.html',
  styleUrls: ['./admin-user-delete.component.css']
})
export class AdminUserDeleteComponent implements OnInit {
  private id:string;

  constructor(private adminUserService: AdminUserService, private router: Router) { }
  ngOnInit() {
  }

  Confirm(deleteForm){
    let dialogRef = this.adminUserService.dialog;
    
    if(deleteForm.value.decision ==="true"){
      this.id = this.adminUserService.getCurrent();
      console.log(this.id);

      this.adminUserService.deleteUser(this.id).subscribe(
        (data) => {console.log(data)
          this.adminUserService.getUsers().subscribe(
            (data) => this.adminUserService.users = data,
            (err) => console.log(err)    
          )
        },
        (err) => console.log(err)
      )

      this.router.navigate(['/user']);
      dialogRef.close();
    }
    else{
      dialogRef.close();
    }
  }
}
