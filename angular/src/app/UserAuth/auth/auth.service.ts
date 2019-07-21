import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from  'rxjs';
import { map, catchError } from 'rxjs/operators';

import { User } from  '../login/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService
{
  AUTH_SERVER = "http://localhost:7000";
  private authSubject:BehaviorSubject<User>;
  public currentUser:Observable<User>;

  constructor(private httpClient: HttpClient)
  {
    this.authSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.authSubject.asObservable();
    console.log(localStorage.getItem("currentUser"));    
  }

  public get currentUserValue(): User {return this.authSubject.value;}

  login(form:User)
  {
    console.log(form);

    return this.httpClient.post<any>(`${this.AUTH_SERVER}/login`,form).pipe(map(user =>
    {
      // store user details and jwt token in local storage to keep user logged in between page refreshes
      localStorage.setItem('currentUser', JSON.stringify(user));
      localStorage.setItem('admin',user.admin);
      localStorage.setItem('token', JSON.stringify(user.token));


      console.log(localStorage.getItem("currentUser"));
      this.authSubject.next(user);
      return user;
    }));
}

  isLoggedIn()
  {
    if(localStorage.getItem("currentUser")){return true;}
    else{return false;}
  }

  isAdmin()
  {
    if(localStorage.getItem("admin")=="true"){console.log("yay");return true;}
    else{console.log("nay");return false;}
  }

  logout()
  {
    localStorage.removeItem("currentUser");
    this.authSubject.next(null);
  }

  register(user: User)
  {}
}