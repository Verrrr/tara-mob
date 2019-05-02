import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { NgForm } from '@angular/forms';
import { LoadingController, NavController } from '@ionic/angular';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';
import { fbind } from 'q';

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

  async ngOnInit() {
    // this.fb.login(['public_profile', 'email'])
    // .then((res: FacebookLoginResponse) => {
    //   localStorage.setItem('fb', JSON.stringify(res));
    //   console.log(res);
    // })
    // .catch(e => console.log('Error logging into Facebook', e));
    // this.fb.getLoginStatus().then(res => {
    //   localStorage.setItem('fbToken', res["authResponse"]['accessToken']);
    // });

    let token = localStorage.getItem('fbToken');

    // this.fb.showDialog({
    //   method: "share",
    //   href: "http://ver.gordoncollegeccs-ssite.net/ccsid/",
    //   caption: "Testing testing testing dont like",
    //   description: "No description",
    //   picture: 'https://i.stack.imgur.com/zwVtb.png',
    //   hashtag: '#high'
    // })

    try {
      
      let data = await this.fb.showDialog({
        method: "share",
        href: 'http://ver.gordoncollegeccs-ssite.net/testing.html',
        picture:'https://www.google.co.jp/logos/doodles/2014/doodle-4-google-2014-japan-winner-5109465267306496.2-hp.png',
        name:'Test Post',
        message:'First photo post',
        caption: 'Testing using phonegap plugin',
        description: 'Posting photo using phonegap facebook plugin',
        redirect_uri: 'https://facebook.com/me',
        fields: 'id'
      });
  
      console.log(data);
    } catch (error) { 
      console.error(error);
    }
    

    // try {
    //   let data = await this.fb.api(`/me/share?href=https://developers.facebook.com/docs/&access_token=${token}&method=post`, [
        
    //   ] );
    //   console.log(data);
    // } catch (error) {
    //   console.log(error);
    // }

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
