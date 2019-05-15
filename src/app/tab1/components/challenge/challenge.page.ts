import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Facebook } from '@ionic-native/facebook/ngx';
import { AuthService } from 'src/app/services/auth.service';
import { TravellerService } from 'src/app/services/traveller.service';

@Component({
  selector: 'app-challenge',
  templateUrl: './challenge.page.html',
  styleUrls: ['./challenge.page.scss'],
})
export class ChallengePage implements OnInit {

  constructor(
    public modalController: ModalController,
    public fb: Facebook,
    private travellerService: TravellerService
    ) { }

  ngOnInit() {
  }

  async share(){
    try {
        let loginStatus = await this.fb.login(['public_profile']);
        if(loginStatus.status == 'connected'){
          let token = loginStatus["authResponse"]['accessToken'];
          localStorage.setItem('fbToken', loginStatus["authResponse"]['accessToken']);
          localStorage.setItem('fbUserId', loginStatus["authResponse"]['userID']);
          console.log('status active', loginStatus["authResponse"]['accessToken']);
          let profile = await this.fb.api(`/me?fields=id,name,picture?access-token=${token}`, ['public_profile']);
          console.log(profile);
          await this.travellerService.addFacebook(profile).toPromise();
          await this.fb.showDialog({
            method: "share",
            href: 'https://www.facebook.com/InflatableIslandPh/',
            description: 'Public Demo',
            hashtag: '#inflatableIsland'
          });
          await this.travellerService.challengeDone().toPromise();
          
        } 
      // } else {
      // }
    } catch (error) {
      console.error(error);
    }
 
  }

}
