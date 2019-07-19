import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from  'rxjs';
import { map } from 'rxjs/operators';

import { User } from  '../user';
import { JwtResponse } from  './jwt-response';

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
  }

  public get currentUserValue(): User {return this.authSubject.value;}

  login(form:User) {
    console.log(`${this.AUTH_SERVER}/login`)
    console.log(form)

    return this.httpClient.post<any>(`${this.AUTH_SERVER}/login`,form).pipe(map(user =>
    {
      // store user details and jwt token in local storage to keep user logged in between page refreshes
      localStorage.setItem('currentUser', JSON.stringify(user));
      this.authSubject.next(user);
      return user;
    }));
}

  isAuthenticated()
  {
    return  this.authSubject.asObservable();
  }

  signOut()
  {
    localStorage.removeItem("currentUser");
    this.authSubject.next(null);
  }

  register(user: User): Observable<JwtResponse>
  {
    return this.httpClient.post<JwtResponse>(`${this.AUTH_SERVER}/register`, user)
  }
}