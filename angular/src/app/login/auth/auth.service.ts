import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from  'rxjs/operators';
import { Observable, BehaviorSubject } from  'rxjs';

import { User } from  '../user';
import { JwtResponse } from  './jwt-response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  AUTH_SERVER = "http://localhost:3000";
  authSubject  =  new  BehaviorSubject(false);

  constructor(private httpClient: HttpClient){}

  login(user: User): Observable<JwtResponse> {
    return this.httpClient.post(`${this.AUTH_SERVER}/login`, user).pipe(
      tap(async (res: JwtResponse) => {

        if (res.user) {
          localStorage.setItem("ACCESS_TOKEN", res.user.access_token);
          localStorage.setItem("EXPIRES_IN", res.user.expires_in);
          this.authSubject.next(true);
        }
      })
    );
  }

  isAuthenticated()
  {
    return  this.authSubject.asObservable();
  }

  signOut()
  {
    localStorage.removeItem("ACCESS_TOKEN");
    localStorage.removeItem("EXPIRES_IN");
    this.authSubject.next(false);
  }

  register(user: User): Observable<JwtResponse>
  {
    return this.httpClient.post<JwtResponse>(`${this.AUTH_SERVER}/register`, user).pipe(
      tap((res:  JwtResponse ) => {

        if (res.user) {
          localStorage.set("ACCESS_TOKEN", res.user.access_token);
          localStorage.set("EXPIRES_IN", res.user.expires_in);
          this.authSubject.next(true);
        }
      })

    );
  }
}