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
  constructor(private http:HttpClient) { }
  getEventin():Observable<Eventin[]>{
    return this.http.get<Eventin[]>(this._url)
    .pipe(catchError(this.ErrorHandler));
  }
    ErrorHandler(error:HttpErrorResponse){
      return throwError(error.message||"Server Error");
    }
}
