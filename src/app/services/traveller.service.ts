import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TravellerService {

  apiUrl = environment.apiUrl+'travellers';

  constructor(
    private http: HttpClient,
    private auth: AuthService
  ) { }

  public addFacebook(profile){
    return this.http.post(this.apiUrl+`/${this.auth.getDecodeToken().user.id}/facebook`, profile);
  }

  public challengeDone(){
    return this.http.post(this.apiUrl+`/${this.auth.getDecodeToken().user.id}/challenge`, null);
  }

  public getLeaderboard(){
    return this.http.get(this.apiUrl+'/leaderboard');
  }
}
