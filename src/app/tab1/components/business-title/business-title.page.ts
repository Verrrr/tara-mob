import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ChallengePage } from '../challenge/challenge.page';

@Component({
  selector: 'app-business-title',
  templateUrl: './business-title.page.html',
  styleUrls: ['./business-title.page.scss'],
})
export class BusinessTitlePage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ChallengePage
    });
    return await modal.present();
  }
}
