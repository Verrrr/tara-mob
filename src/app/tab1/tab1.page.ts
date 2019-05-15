import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker,
  Environment,
  GroundOverlay,
  ILatLng
} from '@ionic-native/google-maps/ngx';
import { Platform, ModalController } from '@ionic/angular';
import { BusinessTitlePage } from './components/business-title/business-title.page';
import { RewardsPage } from './components/rewards/rewards.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  map: GoogleMap;
  businessMarkers: any[];
  title: string;
  inflatableOverlay: GroundOverlay;
  defaultCamera = {
    target: {
      lat: 14.8372047,
      lng: 120.2674568
    },
    zoom: 15,
    tilt: 30
  };
  isInflatable: boolean;

  constructor(
    private platform: Platform,
    private modalController: ModalController,
    private changeDetectorRef: ChangeDetectorRef
    ) { 
      this.businessMarkers = new Array();
      this.title = "Tara G!"
      this.isInflatable = false;
    }

    async ngOnInit(){
        await this.platform.ready();
        await this.loadMap();
        this.loadBusiness();
    }

    async presentModal() {
        const modal = await this.modalController.create({
        component: BusinessTitlePage
        });
        return await modal.present();
    }
  
    async presentReward(){
        const modal = await this.modalController.create({
        component: RewardsPage
        });
        return await modal.present();
    }

    loadMap() {
        let mapOptions: GoogleMapOptions = {
        camera: this.defaultCamera,
        styles: [
        {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#004060"
                }
            ]
        },
        {
            "featureType": "administrative.province",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#00557f"
                }
            ]
        },
        {
            "featureType": "administrative.province",
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "color": "#d3eaf6"
                }
            ]
        },
        {
            "featureType": "administrative.locality",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#000000"
                }
            ]
        },
        {
            "featureType": "administrative.locality",
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "color": "#ffffff"
                }
            ]
        },
        {
            "featureType": "administrative.neighborhood",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#006699"
                }
            ]
        },
        {
            "featureType": "landscape.man_made",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#bfe3f5"
                }
            ]
        },
        {
            "featureType": "landscape.natural",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#a1e0e8"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#9bd0ea"
                }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#abeab2"
                }
            ]
        },
        {
            "featureType": "poi.school",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#9bd0ea"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#ffb884"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#f38e43"
                }
            ]
        },
        {
            "featureType": "road.highway.controlled_access",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#f38e43"
                }
            ]
        },
        {
            "featureType": "road.highway.controlled_access",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#ea6400"
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#dff4ff"
                }
            ]
        },
        {
            "featureType": "transit.line",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#ffffff"
                }
            ]
        },
        {
            "featureType": "transit.line",
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "color": "#006699"
                }
            ]
        },
        {
            "featureType": "transit.station.airport",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#9bd0ea"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "all",
            "stylers": [
                {
                    "color": "#006699"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#ffffff"
                }
            ]
        }
    ]
    
    };

    this.map = GoogleMaps.create('map_canvas', mapOptions);

    this.map.addEventListener(GoogleMapsEvent.MAP_CLICK).subscribe(data=>{
        console.log(data);
    });

    }

    clearMarkers(){
    while (!!this.businessMarkers.length) {
        this.businessMarkers.pop().remove();
        }
    }

    loadInflatable(){
      this.clearMarkers();

      let bounds: ILatLng[] = [
        {"lat": 14.837478, "lng": 120.267383},
        {"lat": 14.837144, "lng": 120.268261}
      ];

      this.map.animateCamera({
        target: bounds,
        zoom: 19,
        tilt: this.defaultCamera.tilt,
        duration: 2000
      });

      this.inflatableOverlay = this.map.addGroundOverlaySync({
        'url': "assets/maps/inflatable.png",
        'bounds': bounds,
        'opacity': 1,
        bearing: -130
      });

        // let hidden1: Marker = this.map.addMarkerSync({
        //     icon: {
        //     url: 'assets/icon/blank.png', 
        //     size: {
        //         width: 35,
        //         height: 40
        //     }
        //     },
        //     animation: 'DROP',
        //     position: {
        //     lat: 14.837286,
        //     lng: 120.267638
        //     }
        // });

        // let hidden2: Marker = this.map.addMarkerSync({
        //     icon: {
        //     url: 'assets/icon/blank.png', 
        //     size: {
        //         width: 35,
        //         height: 40
        //     }
        //     },
        //     animation: 'DROP',
        //     position: {
        //     lat: 14.837658,
        //     lng: 120.267612
        //     }
        // });

        // let hidden3: Marker = this.map.addMarkerSync({
        //     icon: {
        //     url: 'assets/icon/blank.png', 
        //     size: {
        //         width: 35,
        //         height: 40
        //     }
        //     },
        //     animation: 'DROP',
        //     position: {
        //     lat: 14.837124,
        //     lng: 120.268083
        //     }
        // });

        // let hidden4: Marker = this.map.addMarkerSync({
        //     icon: {
        //     url: 'assets/icon/adventure.png', 
        //     size: {
        //         width: 40,
        //         height: 35
        //     }
        //     },
        //     animation: 'DROP',
        //     position: {
        //     lat: 14.837263,
        //     lng: 120.267825
        //     }
        // });
    // this.businessMarkers.push(hidden1);
    // this.businessMarkers.push(hidden2);
    // this.businessMarkers.push(hidden3);
    // this.businessMarkers.push(hidden4);
      
    this.title = "Inflatable Island";
    this.isInflatable = true;

    this.changeDetectorRef.detectChanges();
  
  }

  async loadBusiness(){
    this.title = "Tara G!";
    this.isInflatable = false;
    if(!!this.inflatableOverlay) this.inflatableOverlay.remove();
    this.clearMarkers();
    this.changeDetectorRef.detectChanges();
    
    this.map.setCameraTarget(this.defaultCamera.target);
    this.map.setCameraZoom(this.defaultCamera.zoom);
    this.map.setCameraTilt(this.defaultCamera.tilt);
  

    let marker1: Marker = this.map.addMarkerSync({
        title: 'Inflatable Island',
        icon: {
        url: 'assets/icon/inflatable_island.png', 
        size: {
            width: 35,
            height: 40
        }
        },
        snippet: 'biggest floating island',
        animation: 'DROP',
        position: {
        lat: 14.837244,
        lng: 120.267777
        }
    });
    this.businessMarkers.push(marker1);
    
    let raw = await fetch('assets/mapdata.json');
    let data = await raw.json();

    // data.forEach(d => {
    //     let mark: Marker = this.map.addMarkerSync({
    //         title: d.title,
    //         icon: {
    //         url: d.image, 
    //         size: {
    //             width: 35,
    //             height: 40
    //         }
    //         },
    //         animation: 'DROP',
    //         position: {
    //         lat: d.lat,
    //         lng: d.lng
    //         }
    //     });
    // });

    marker1.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
        this.loadInflatable();
    });

  }

}
