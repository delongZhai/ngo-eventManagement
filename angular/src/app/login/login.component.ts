import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from  '@angular/forms';
import { Router } from  '@angular/router';
import { User } from  '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit
{
  loginForm: FormGroup;
  isSubmitted  =  false;

  constructor(private formBuilder: FormBuilder){}
  //constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder ) { }

  ngOnInit()
  {
    this.loginForm  =  this.formBuilder.group(
    {
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  get formControls(){return this.loginForm.controls;}

  login(){
    console.log(this.loginForm.value);
    this.isSubmitted = true;
    if(this.loginForm.invalid){
      return;
    }
    //this.authService.login(this.loginForm.value);
    //this.router.navigateByUrl('/admin');
  }
}
