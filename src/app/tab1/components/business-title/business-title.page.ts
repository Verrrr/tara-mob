import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-business-title',
  templateUrl: './business-title.page.html',
  styleUrls: ['./business-title.page.scss'],
})
export class BusinessTitlePage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

}
