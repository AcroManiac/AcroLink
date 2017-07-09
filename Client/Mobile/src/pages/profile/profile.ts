import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import {Storage} from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  constructor(
  	public navCtrl: NavController, 
    public storage: Storage) {

  }

  ionViewCanEnter() {

    this.storage.get('id_token').then(id_token => {
      if (id_token === null) {
        this.navCtrl.setRoot('LoginPage');
        return false;
      }
    });

    return true;
  }

}
