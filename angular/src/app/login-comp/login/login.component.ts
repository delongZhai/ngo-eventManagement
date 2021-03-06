import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from  '@angular/forms';
import { Router } from  '@angular/router';
import { User } from  './user';
import { AuthService } from  '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit
{
  loginForm:FormGroup;
  isSubmitted = false;

  constructor(private authService: AuthService, private router: Router,private formBuilder: FormBuilder){}
  //constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder ) { }

  ngOnInit()
  {
    this.loginForm  =  this.formBuilder.group(
    {
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get formControls(){return this.loginForm.controls;}

  login()
  {
    console.log(this.loginForm.value);
    this.isSubmitted = true;
    if(this.loginForm.invalid){
      return;
    }
    this.authService.login(this.loginForm.value).subscribe((res)=>{
      console.log("Logged in!");
      if(this.authService.isAdmin())
      {
        console.log("Welcome admin");
        this.router.navigateByUrl('admin');
      }
      else
      {
        console.log("Welcome user");
        this.router.navigateByUrl('Userview');
      }
    },
    err =>{
      err.status = 301;
      err.message = "Unauthorized access";
      console.log(err.message);
      }
    );
  }
}