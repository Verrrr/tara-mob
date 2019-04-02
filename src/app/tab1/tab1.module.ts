import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { BusinessTitlePage } from './components/business-title/business-title.page';
import { ChallengePage } from './components/challenge/challenge.page';
import { RewardsPage } from './components/rewards/rewards.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab1Page }])
  ],
  declarations: [Tab1Page, BusinessTitlePage, ChallengePage, RewardsPage],
  entryComponents: [BusinessTitlePage, ChallengePage, RewardsPage]
})
export class Tab1PageModule {}
