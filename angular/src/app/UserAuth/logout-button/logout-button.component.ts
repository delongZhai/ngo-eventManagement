import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'logout-button',
  templateUrl: './logout-button.component.html',
  styleUrls: ['./logout-button.component.css']
})
export class LogoutButtonComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router){}

  ngOnInit(){
  }

  onClick()
  {
    console.log("logged out");
    this.authService.logout();
    this.router.navigateByUrl('login');
  }
}
