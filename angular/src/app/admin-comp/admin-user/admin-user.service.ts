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
  private _url:string = "http://localhost:7000/api/users";
  private _loginurl:string = "http://localhost:7000/api/login";
  public users = [];
  public currentUser_id:string;
  public dialog:any;

  constructor(private http: HttpClient) { }

  setCurrent(element:string|null):void{
    this.currentUser_id = element;
  }

  getCurrent():string{
    return this.currentUser_id;
  }

  setWindows(Dialog:any){
    this.dialog = Dialog;
  }

  getUsers(): Observable<any>{
    return this.http.get<IAdminUser[]>(this._url)
    .pipe(catchError(this.errorHandler));
  }

  loginUser(): Observable<IAdminUser[]>{
    return this.http.get<IAdminUser[]>(this._loginurl)
  }
  getUserByID(id?:string): Observable<any>{
    return this.http.get<IAdminUser[]>(this._url+id)
    .pipe(catchError(this.errorHandler));
  }

  postUser(user:IAdminUser): Observable<IAdminUser> {
    return this.http.post<IAdminUser>(this._url, {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: user.password,
      adminRole: user.adminRole
    })
    .pipe(catchError(this.errorHandler));
  }

  putUserByID(id:string, user:object):Observable<IAdminUser[]> {
    return this.http.put<IAdminUser[]>(this._url+id, user)
    .pipe(catchError(this.errorHandler));
  }

  deleteUser(id:string): Observable<IAdminUser[]> {
    return this.http.delete<IAdminUser[]>(this._url+id)
    .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse){
    return throwError(error.message || "Server Error");
  }
}
