import { Injectable } from '@angular/core';
import {HttpClient,HttpErrorResponse} from '@angular/common/http';
import {Eventin} from './eventin';
import {throwError, Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class EventsserService {
  private _url:string ="http://localhost:7000/events";
  public events=[];
  constructor(private http:HttpClient) { }

  getEventin():Observable<Eventin[]>{
    return this.http.get<Eventin[]>(this._url)
    .pipe(catchError(this.ErrorHandler));
    
  }
  geteventrByID(id:string): Observable<Eventin[]>{
    return this.http.get<Eventin[]>(this._url+id)
    .pipe(catchError(this.ErrorHandler));
  }

  postevent(event:Eventin): Observable<Eventin> {
    return this.http.post<Eventin>(this._url, {
      name: event.name,
      category: event.category,
      startDate: event.startDate,
      endDate: event.endDate,
      location: event.location,
      adultPrice : event.adultPrice,
      childPrice : event.childPrice
    })
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
