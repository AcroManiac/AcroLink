import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, AlertController } from 'ionic-angular';
import { ProtectedPage } from '../protected/protected';
import { Storage } from '@ionic/storage';
import { ProfileService } from '../../providers/profile-service';
import { ProfileModel } from '../../models/profile.model';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage extends ProtectedPage {

  profile: ProfileModel = <ProfileModel> {first_name: '', last_name: ''};

  constructor(
  	public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    private alertCtrl: AlertController,
    public storage: Storage,
    public profileService: ProfileService) {

    super(navCtrl, navParams, storage);
  }

  ionViewWillEnter() {

    this.storage.get('user').then(user => {

      // console.log('ProfilePage:ionViewWillEnter:user: ' + JSON.stringify(user));
      if (user !== null) {
        this.profileService.getMe()
        .then(data => {
          // console.log('ProfilePage:ionViewWillEnter:profile: ' + JSON.stringify(this.profile));
          this.fillProfileData(data);
        })
        .catch(err => {
          console.error("ProfilePage:ionViewWillEnter:err: " + JSON.stringify(err.json()));

          let alert = this.alertCtrl.create({
            title: 'Profile error',
            subTitle: err.json().detail,
            buttons: ['OK']
          });
          alert.present();
        });
      }
    });
  }

  fillProfileData(data: any) {
    this.profile.first_name = data.first_name;
    this.profile.last_name = data.last_name;
    this.profile.username = data.username;
    this.profile.email = data.email;

    this.profile.id = data.profile.id;
    this.profile.phone = data.profile.phone;
    this.profile.birth_date = data.profile.birth_date;
    this.profile.practice_start_date = data.profile.practice_start_date;
    this.profile.bio = data.profile.bio;
    this.profile.location = data.profile.location;
    this.profile.avatar = data.profile.avatar;
    // this.profile.score = data.profile.score;

    // this.profile.country_id = data.country.id;
  }

}
