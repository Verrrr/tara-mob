import { Component, OnInit } from '@angular/core';
import { defineCustomElements } from 'gl-ionic-background-video/dist/loader';
import { NavController, LoadingController } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

defineCustomElements(window);

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {

  loginState: boolean;

  constructor(
    private navController: NavController,
    private loadingController: LoadingController,
    private authService: AuthService
    ) { }

  ngOnInit() {
    this.loginState = false;
  }

  async login(credentials: NgForm){
    const loading = await this.loadingController.create({
      spinner: 'circles',
      message: 'Logging in'
    });
    await loading.present();
    try {
     
      let loginResponse = await this.authService.login(credentials.value).toPromise();
      localStorage.setItem('token', loginResponse['token']);
      loading.dismiss();
      this.navController.navigateForward('/tabs/tab1');

    } catch (error) {
      console.log('Error in login', error.error)
      credentials.resetForm();
      loading.dismiss();
    }
  }

  gotoLogin(){
    this.navController.navigateForward('/login');
  }

}