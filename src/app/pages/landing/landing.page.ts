import { Component, OnInit } from '@angular/core';
import { defineCustomElements } from 'gl-ionic-background-video/dist/loader';
import { NavController } from '@ionic/angular';

defineCustomElements(window); // call the function here

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {

  constructor(private navController: NavController) { }

  ngOnInit() {
  }

  gotoLogin(){
    this.navController.navigateForward('/login');
  }

}
