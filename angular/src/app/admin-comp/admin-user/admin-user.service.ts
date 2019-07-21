import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IAdminUser } from './iadmin-user';

@Injectable({
  providedIn: 'root'
})

export class AdminUserService {
  // Start mongod in windows
  // "C:\Program Files\MongoDB\Server\3.2\bin\mongod.exe"
  private _url:string = "http://localhost:7000/users";
  private _loginurl:string = "http://localhost:7000/users/login";

  constructor(private http: HttpClient) { }

  getUsers(): Observable<IAdminUser[]>{
    return this.http.get<IAdminUser[]>(this._url)
    .pipe(catchError(this.errorHandler));
  }

  loginUser(): Observable<IAdminUser[]>{
    return this.http.get<IAdminUser[]>(this._loginurl)
    .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse){
    return throwError(error.message || "Server Error");
  }
}
