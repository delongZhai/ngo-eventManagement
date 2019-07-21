import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {userViewProperties} from './user-view-properties.service';


@Injectable({
  providedIn: 'root'
})
export class UserViewServService {
  private _url:string="http://localhost:7000/api/events/"

  constructor(private http:HttpClient) { }

  getEvents():Observable<userViewProperties[]>{
    return this.http.get<userViewProperties[]> (this._url);
  }
}
