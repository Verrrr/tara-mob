import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController, NavParams } from '@ionic/angular';
import { Facebook } from '@ionic-native/facebook/ngx';
import { AuthService } from 'src/app/services/auth.service';
import { TravellerService } from 'src/app/services/traveller.service';
import { RewardsPage } from '../rewards/rewards.page';

@Component({
  selector: 'app-challenge',
  templateUrl: './challenge.page.html',
  styleUrls: ['./challenge.page.scss'],
})
export class ChallengePage implements OnInit {

  challenge;

  constructor(
    public modalController: ModalController,
    public fb: Facebook,
    private travellerService: TravellerService,
    private alertController: AlertController,
    private navParams: NavParams
    ) { }

  ngOnInit() {
    this.challenge = this.navParams.get('challenge');
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: this.challenge.title,
      subHeader: 'Congratulations you won '+this.challenge.rewards,
      message: 'To claim your reward go to our customer service. Present the badge that you recieve and you are good to go.',
      buttons: ['OK']
    });

    await alert.present();
  }


  async share(){
    try {
        let loginStatus = await this.fb.getLoginStatus();
        if(loginStatus.status != 'connected'){
          loginStatus = await this.fb.login(['email', 'public_profile']);
        }
        if(loginStatus.status == 'connected'){
          let token = loginStatus["authResponse"]['accessToken'];
          localStorage.setItem('fbToken', loginStatus["authResponse"]['accessToken']);
          localStorage.setItem('fbUserId', loginStatus["authResponse"]['userID']);
          console.log('status active', loginStatus["authResponse"]['accessToken']);
          let profile = await this.fb.api(`/me?fields=id,name,picture?access-token=${token}`, ['public_profile']);
          localStorage.setItem('profile', JSON.stringify(profile));
          await this.travellerService.addFacebook(profile).toPromise();
          await this.fb.showDialog({
            method: "share",
            href: this.challenge.link,
            description: 'Public Demo',
            hashtag: this.challenge.hashtag
          });
          await this.travellerService.challengeDone().toPromise();
          await this.presentAlert();
          
        } 
      // } else {
      // }
    } catch (error) {
      console.error(error);
    }
 
  }

}
