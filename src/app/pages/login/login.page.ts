import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { NgForm } from '@angular/forms';
import { LoadingController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private authService: AuthService,
    private loadingController: LoadingController,
    private navController: NavController
  ) { }

  ngOnInit() {

  }

  async login(credentials: NgForm){
    const loading = await this.loadingController.create({
      spinner: 'circles',
      message: 'Logging in'
    });
    await loading.present();
    try {
     
      // let loginResponse = await this.authService.login(credentials.value).toPromise();
      // localStorage.setItem('token', loginResponse['token']);
      localStorage.setItem('user','1');
      loading.dismiss();
      this.navController.navigateForward('/tabs/tab1');
    } catch (error) {
      credentials.resetForm();
      loading.dismiss();
    }
  }

}
