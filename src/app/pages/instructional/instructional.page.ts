import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-instructional',
  templateUrl: './instructional.page.html',
  styleUrls: ['./instructional.page.scss'],
})
export class InstructionalPage implements OnInit {

  showPage = 1;

  constructor(public navController: NavController) {
    localStorage.setItem('oldUser', '1');
  }

  ngOnInit() {
  }

}
