import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'landing', loadChildren: './pages/landing/landing.module#LandingPageModule' },
  { path: 'signup', loadChildren: './pages/signup/signup.module#SignupPageModule' },
  { path: 'business-title', loadChildren: './tab1/components/business-title/business-title.module#BusinessTitlePageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
