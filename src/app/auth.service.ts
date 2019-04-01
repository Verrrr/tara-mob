import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private navController: NavController
    ) { }

  canActivate():boolean{
    if (!!localStorage.getItem('user')) {
      return true;
    } else {
      this.navController.navigateBack('/landing');
    }
  }
}
