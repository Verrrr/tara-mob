import { Component, OnInit } from '@angular/core';
import { defineCustomElements } from 'gl-ionic-background-video/dist/loader';
import { AuthService } from 'src/app/services/auth.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';

defineCustomElements(window);

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  constructor(
    private auth: AuthService,
    private navController: NavController,
    private loadingController: LoadingController
    ) { }

  ngOnInit() {
  }

  async signup(f: NgForm){
    const loading = await this.loadingController.create({
      spinner: 'circles',
      message: 'Signing up'
    });
    await loading.present();
    try {
      let signupResponse: any = await this.auth.signup(f.value).toPromise();
      localStorage.setItem('token', signupResponse.token);
      loading.dismiss();
      this.navController.navigateForward('/tabs/tab1');
    } catch (error) {
      console.log('Error in signup', error.error)
      f.resetForm();
      loading.dismiss();
    }
  }
}
