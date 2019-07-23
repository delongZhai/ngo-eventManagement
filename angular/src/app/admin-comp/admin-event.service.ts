import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IAdminEvent } from './iadmin-event';

@Injectable({
  providedIn: 'root'
})
export class AdminEventService {
  private _url:string = "http://localhost:7000/api/events/";
  public events = [];
  public currentEvent_id:string;
  public dialog:any;

  constructor(private http: HttpClient) { }

  setCurrent(element:string|null):void{
    this.currentEvent_id = element;
  }

  getCurrent():string{
    return this.currentEvent_id;
  }

  setWindows(Dialog:any){
    this.dialog = Dialog;
  }

  getEvents(): Observable<any>{
    return this.http.get<IAdminEvent[]>(this._url)
    .pipe(catchError(this.errorHandler));
  }

  getEventByID(id?:string): Observable<IAdminEvent[]>{
    console.log(this._url+id);
    return this.http.get<IAdminEvent[]>(this._url+id)
    .pipe(catchError(this.errorHandler));
  }

  postEvent(event:IAdminEvent): Observable<IAdminEvent> {
    return this.http.post<IAdminEvent>(this._url, {
      name: event.name,
      category: event.category,
      startdate: event.startdate,
      starttime: event.starttime,
      enddate: event.enddate,
      endtime: event.endtime,
      location: event.location,
      allowRegister: event.allowRegister,
      adultPrice: event.adultPrice,
      childPrice: event.childPrice,
    })
    .pipe(catchError(this.errorHandler));
  }

  putEventByID(id:string, event:object):Observable<IAdminEvent[]> {
    return this.http.put<IAdminEvent[]>(this._url+id, event)
    .pipe(catchError(this.errorHandler));
  }

  deleteEvent(id:string): Observable<IAdminEvent[]> {
    return this.http.delete<IAdminEvent[]>(this._url+id)
    .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse){
    return throwError(error.message || "Server Error");
  }
}
