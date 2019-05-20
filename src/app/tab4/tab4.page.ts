import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  constructor( 
    private navController: NavController,
    private auth: AuthService
     ) { }
  showbadge=true;
  showplace=false;
  profile;
  profileFromToken;
  ngOnInit() {
    this.profile = JSON.parse(localStorage.getItem('profile'));
    console.log(this.profile);
    this.profileFromToken = this.auth.getDecodeToken();
  }

  logout(){
    localStorage.removeItem('token');
    this.navController.navigateBack('/landing');
  }
  segmentChanged(ev: any) {
    
  this.showbadge=!this.showbadge;
  this.showplace=!this.showplace;
}

}
