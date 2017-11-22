import { Component, ViewChild, OnInit } from '@angular/core';
import { IonicPage, ViewController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

import { Observable } from 'rxjs/Observable';

import { GoogleMap } from "../../components/google-map/google-map";
import { GoogleMapsService } from "../../providers/google-maps.service";
import { MapsModel, MapPlace } from '../../models/maps.model';
import { LocationModel } from '../../models/location.model';

@IonicPage()
@Component({
  selector: 'search-place-page',
  templateUrl: 'search-place.html'
})
export class SearchPlacePage {

  @ViewChild(GoogleMap) _GoogleMap: GoogleMap;

  map_model: MapsModel = new MapsModel();
  location_model: LocationModel = new LocationModel();

  constructor(
  	public viewCtrl: ViewController,
  	public loadingCtrl: LoadingController,
    public GoogleMapsService: GoogleMapsService,
    public geolocation: Geolocation) {
  }

  ngOnInit() {
    let _loading = this.loadingCtrl.create();
    _loading.present();

    this._GoogleMap.$mapReady.subscribe(map => {
      this.map_model.init(map);
      _loading.dismiss();
    });
  }

  searchPlacesPredictions(query: string) {
    let env = this;

    if(query !== "")
    {
      env.GoogleMapsService.getPlacePredictions(query).subscribe(
        places_predictions => {
          env.map_model.search_places_predictions = places_predictions;
        },
        e => {
          console.error('SearchPlaceContainer:searchPlacesPredictions:onError %s', e);
        },
        () => {
          console.log('SearchPlaceContainer:searchPlacesPredictions:onCompleted');
        }
      );
    }else{
      env.map_model.search_places_predictions = [];
    }
  }

  setOrigin(location: google.maps.LatLng){
    let env = this;

    // Clean map
    env.map_model.cleanMap();

    // Set the origin for later directions
    env.map_model.directions_origin.location = location;

    // Add place marker to map
    env.map_model.addPlaceToMap(location, '#00e9d5');

    // Create a location bound to center the map based on the results
    let bound = new google.maps.LatLngBounds();
    bound.extend(location);

    // To fit map with places
    env.map_model.map.fitBounds(bound);
  }

  selectSearchResult(place: google.maps.places.AutocompletePrediction){
    let env = this;

    env.map_model.search_query = place.description;
    env.map_model.search_places_predictions = [];

    console.log('SearchPlaceContainer:selectSearchResult():place_prediction: ', JSON.stringify(place));

    // We need to get the location from this place. Let's geocode this place!
    env.GoogleMapsService.geocodePlace(place.place_id).subscribe(
      place_location => {
        env.setOrigin(place_location);
        console.log('SearchPlaceContainer:selectSearchResult():place_location: ', JSON.stringify(place_location));
      },
      e => {
        console.log('SearchPlaceContainer:selectSearchResult():onError: %s', e);
      },
      () => {
        console.log('SearchPlaceContainer:selectSearchResult():onCompleted');
      }
    );

    // Get place detailed information
    env.GoogleMapsService.getPlaceDetails(place.place_id).subscribe(
      place_details => {
        let env = this;

        console.log('SearchPlaceContainer:selectSearchResult():place_details: ', JSON.stringify(place_details));

        env.clearSearch();

        // Get each component of the address from the place details
        // and fill the corresponding field on the form.
        for (let i = 0; i < place_details.address_components.length; i++) {
          let addressType = place_details.address_components[i].types[0];
          switch(addressType) {
            case 'street_number':
              env.location_model.street_number = place_details.address_components[i].short_name;
              break;
            case 'route':
              env.location_model.route = place_details.address_components[i].long_name;
              break;
            case 'locality':
              env.location_model.locality = place_details.address_components[i].long_name;
              break;
            case 'administrative_area_level_1':
              env.location_model.state = place_details.address_components[i].short_name;
              break;
            case 'country':
              env.location_model.country = place_details.address_components[i].long_name;
              env.location_model.country_code = place_details.address_components[i].short_name;
              break;
            case 'postal_code':
              env.location_model.postal_code = place_details.address_components[i].short_name;
              break;
          }
        }

        env.location_model.latitude   = place_details.geometry.location.lat();
        env.location_model.longtitude = place_details.geometry.location.lng();
        env.location_model.placeId    = place_details.place_id;

      },
      e => {
        console.log('SearchPlaceContainer:selectSearchResult():onError: %s', e);
      },
      () => {
        console.log('SearchPlaceContainer:selectSearchResult():onCompleted');
      }
    );
  }

  clearSearch(){
    let env = this;
    env.location_model = new LocationModel();
  }

  geolocateMe(){
    let env = this,
        _loading = env.loadingCtrl.create();

    _loading.present();

    env.geolocation.getCurrentPosition().then((position) => {
      let current_location = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      env.map_model.search_query = position.coords.latitude + ", " + position.coords.longitude;
      env.setOrigin(current_location);
      env.map_model.using_geolocation = true;

      _loading.dismiss();
    }).catch((error) => {
      console.log('SearchPlaceContainer:geolocateMe(): Error getting location ', JSON.stringify(error));
      _loading.dismiss();
    });
  }

  applyData() {
   let env = this;
   this.viewCtrl.dismiss(env.location_model);
  }

  cancelData() {
   this.viewCtrl.dismiss();
  }
}
