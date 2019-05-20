import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {

  apiUrl = environment.apiUrl+'business';

  constructor(private http: HttpClient) { }

  public getChallenges(){
    return this.http.get(this.apiUrl+'/challenge');
  }
}
