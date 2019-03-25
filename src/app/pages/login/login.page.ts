import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { NgForm } from '@angular/forms';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private authService: AuthService,
    private loadingController: LoadingController
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
     
      let loginResponse = await this.authService.login(credentials.value).toPromise();
      localStorage.setItem('token', loginResponse['token']);
      loading.dismiss();
    } catch (error) {
      credentials.resetForm();
      loading.dismiss();
    }
  }

}
