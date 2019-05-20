import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { ChallengePage } from '../challenge/challenge.page';
import { RewardsPage } from '../rewards/rewards.page';
import { BusinessService } from 'src/app/services/business.service';

@Component({
  selector: 'app-business-title',
  templateUrl: './business-title.page.html',
  styleUrls: ['./business-title.page.scss'],
})
export class BusinessTitlePage implements OnInit {

  challenges;

  constructor(
    public modalController: ModalController,
    public navController: NavController,
    private businessService: BusinessService
    ) { }

  ngOnInit() {
    this.businessService.getChallenges().subscribe(data => {
      this.challenges = data;
    });
  }

  async presentModal(challenge) {
    if(!!localStorage.getItem('token')){
      const modal = await this.modalController.create({
        component: ChallengePage,
        componentProps: {
          challenge
        }
      });
      return await modal.present();
    } else {
      this.navController.navigateBack('/landing');
    }
  }
  async viewReward(challenge) {
    const modal = await this.modalController.create({
      component: RewardsPage,
      componentProps: {challenge}
    });
    return await modal.present();
  }
}
