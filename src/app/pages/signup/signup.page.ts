import { Component, OnInit } from '@angular/core';
import { defineCustomElements } from 'gl-ionic-background-video/dist/loader';

defineCustomElements(window);

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
