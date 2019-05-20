import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-rewards',
  templateUrl: './rewards.page.html',
  styleUrls: ['./rewards.page.scss'],
})
export class RewardsPage implements OnInit {

  challenge;

  constructor(
    public modalController: ModalController,
    private navParams: NavParams
    ) { 
      this.challenge = this.navParams.get('challenge');
    }

  ngOnInit() {
  }

}
