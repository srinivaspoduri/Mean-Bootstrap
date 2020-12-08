import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import BASE_URL from 'src/EndPoints/Rest_ends';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  
  
  constructor(public _http : HttpClient) { }

  public httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  login(body:any):Observable<any>{
    console.log("In Service"+body);
    return this._http.post(BASE_URL+'login' ,body,this.httpOptions);
  }

}
