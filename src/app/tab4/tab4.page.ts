import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  constructor( private navController: NavController ) { }

  ngOnInit() {
  }

  logout(){
    localStorage.removeItem('user');
    this.navController.navigateBack('/landing');
  }

}
