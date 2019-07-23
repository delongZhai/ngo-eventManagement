import { Injectable } from '@angular/core';
import {HttpClient,HttpErrorResponse} from '@angular/common/http';
import {Eventin} from './eventin';
import {throwError, Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class EventsserService {
  private _url:string ="http://localhost:7000/events/";
  public events=[];
  public currentUser_id:string;
  constructor(private http:HttpClient) { }
  
  setCurrent(element:string|null):void{
    this.currentUser_id = element;
  }

  getCurrent():string{
    return this.currentUser_id;
  }

  getEventin():Observable<any>{
    return this.http.get<Eventin[]>(this._url)
    .pipe(catchError(this.ErrorHandler));
    
  }
  geteventByID(id?:string): Observable<any>{
    return this.http.get<Eventin[]>(this._url+id)
    .pipe(catchError(this.ErrorHandler));
  }

  postevent(event:Eventin): Observable<Eventin> {
    return this.http.post<Eventin>(this._url, {
      name: event.name,
      category: event.category,
      startdate: event.startdate,
      enddate: event.enddate,
      location: event.location,
      adultprice : event.adultprice,
      childprice : event.childprice
    })
    .pipe(catchError(this.ErrorHandler));
  }
  putUserByID(id:string, user:object):Observable<Eventin[]> {
    return this.http.put<Eventin[]>(this._url+id, user)
    .pipe(catchError(this.ErrorHandler));
  }


  deleteevent(id:string): Observable<Eventin[]> {
    return this.http.delete<Eventin[]>(this._url+id)
    .pipe(catchError(this.ErrorHandler));
  }

    ErrorHandler(error:HttpErrorResponse){
      return throwError(error.message||"Server Error");
    }
}