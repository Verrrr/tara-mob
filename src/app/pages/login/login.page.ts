import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { NgForm } from '@angular/forms';
import { LoadingController, NavController } from '@ionic/angular';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private authService: AuthService,
    private loadingController: LoadingController,
    private navController: NavController,
    private fb: Facebook
  ) { }

  ngOnInit() {
    // this.fb.login(['public_profile', 'user_friends', 'email'])
    // .then((res: FacebookLoginResponse) => {
    //   localStorage.setItem('fb', JSON.stringify(res));
    //   console.log(res);
    // })
    // .catch(e => console.log('Error logging into Facebook', e));

    this.fb.getLoginStatus().then(res => {
      console.log(res);
    });

    this.fb.showDialog({
      method: "share",
      href: "http://ver.gordoncollegeccs-ssite.net/ccsid/",
      caption: "Testing testing testing dont like",
      description: "No description",
      media: 'https://i.stack.imgur.com/zwVtb.png',
      picture: 'https://i.stack.imgur.com/zwVtb.png',
      hashtag: '#high'
    })

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
      localStorage.setItem('user','1');
      loading.dismiss();
      this.navController.navigateForward('/tabs/tab1');

    } catch (error) {
      console.log('Error in login', error.error)
      credentials.resetForm();
      loading.dismiss();
    }
  }

}
