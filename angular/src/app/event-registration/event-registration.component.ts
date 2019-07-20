import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';
import {UserRegisterService} from '../userregisterservice.service';
import { userRegisterProperties } from '../userregisterproperties.service';


@Component({
  selector: 'app-event-registration',
  templateUrl: './event-registration.component.html',
  styleUrls: ['./event-registration.component.css']
})
export class EventRegistrationComponent implements OnInit {
  profileForm: FormGroup;
  constructor(private fb: FormBuilder, private _userregisterserv:UserRegisterService) {
    };

  ngOnInit() {
    this.profileForm = this.fb.group({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      email: new FormControl(''),
      password:new FormControl(''),
      contactNum: new FormControl(''),
      address: new FormControl(''),
      adminRole: new FormControl('')
    });
  }

  onSubmit(){ 
    const result = this.profileForm.value as userRegisterProperties;
    console.log('Res->'+result.firstName)
    this._userregisterserv.addUsers(result).subscribe(res =>{
      console.log('post successful');
    });
  }
}
