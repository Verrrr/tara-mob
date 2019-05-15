import { Component, OnInit } from '@angular/core';
import { TravellerService } from '../services/traveller.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{

  users;
  
  constructor(private travellerService: TravellerService){ }

  ngOnInit() {
    this.travellerService.getLeaderboard().subscribe( data => {
      this.users = data;
    });
  }


}
