import { Component, OnInit } from '@angular/core';
import { defineCustomElements } from 'gl-ionic-background-video/dist/loader';
import { NavController } from '@ionic/angular';

defineCustomElements(window);

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {

  loginState: boolean;

  constructor(private navController: NavController) { }

  ngOnInit() {
    this.loginState = false;
  }

  gotoLogin(){
    this.navController.navigateForward('/login');
  }

}