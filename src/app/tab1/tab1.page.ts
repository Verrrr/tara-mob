import { Component, OnInit } from '@angular/core';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker,
  Environment
} from '@ionic-native/google-maps/ngx';
import { Platform, ModalController } from '@ionic/angular';
import { BusinessTitlePage } from './components/business-title/business-title.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  map: GoogleMap;

  async ngOnInit(){
    await this.platform.ready();
    await this.loadMap();
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: BusinessTitlePage,
      componentProps: { value: 123 }
    });
    return await modal.present();
  }
  
  constructor(
    private platform: Platform,
    private modalController: ModalController
    ) { }

  loadMap() {

    let mapOptions: GoogleMapOptions = {
      camera: {
         target: {
           lat: 14.8386,
           lng: 120.2842
         },
         zoom: 15,
         tilt: 30
       }
    };

    this.map = GoogleMaps.create('map_canvas', mapOptions);

    let marker: Marker = this.map.addMarkerSync({
      title: 'Ionic',
      icon: {
        url: 'assets/icon/zoobic.png', 
        size: {
          width: 35,
          height: 40
        }
      },
      snippet: 'testing',
      animation: 'DROP',
      
      position: {
        lat: 14.8386,
        lng: 120.2842
      }
    });

    let marker1: Marker = this.map.addMarkerSync({
      title: 'Ionic',
      icon: {
        url: 'assets/icon/inflatable_island.png', 
        size: {
          width: 35,
          height: 40
        }
      },
      snippet: 'testing',
      animation: 'DROP',
      position: {
        lat: 14.8486,
        lng: 120.2842
      }
    });

    marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
      console.log('testing');
      this.presentModal();
    });
  }
}
