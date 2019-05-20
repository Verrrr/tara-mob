import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{
  path;
  route;

  constructor(private navController: NavController) { }

  canActivate(): boolean {
    if(!!localStorage.getItem('user')){
      return true;
    }
    this.navController.navigateForward('/landing');
    return false;
  }
}
