import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import * as jwt from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = environment.apiUrl+"auth";

  constructor(private http: HttpClient) { }

  public login(credentials){
    return this.http.post(this.apiUrl+'/login', credentials);
  }

  public signup(travellerInfo){
    return this.http.post(this.apiUrl+'/signup/travellers', travellerInfo);
  }
  
  getDecodeToken(){
    try{
      return jwt(localStorage.getItem('token'));
    }
    catch(Error){
        return null;
    }
  }
}
