
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {userRegisterProperties} from './userregisterproperties.service';


@Injectable({
  providedIn: 'root'
})
export class UserRegisterService {
  private _url:string="http://localhost:7000/api/users/"

  constructor(private http:HttpClient) { }

  
  addUsers(user:userRegisterProperties):Observable<userRegisterProperties>{

    console.log(user)
    // write image path function

    return this.http.post<userRegisterProperties> (this._url, user);
  }
}