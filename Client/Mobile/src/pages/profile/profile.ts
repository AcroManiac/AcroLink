import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, AlertController } from 'ionic-angular';
import { ProtectedPage } from '../protected/protected';
import { Storage } from '@ionic/storage';
import { ProfileService } from '../../providers/profile-service';
import { Observable } from 'rxjs/Observable';
import { ProfileModel } from '../../models/profile.model';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage extends ProtectedPage {

  // public profile: any;
  // public profile: Observable<any>;

  profile: ProfileModel = <ProfileModel> {first_name: '', last_name: ''};
  // profile = {first_name: '', last_name: ''};

  constructor(
  	public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    private alertCtrl: AlertController,
    public storage: Storage,
    public profileService: ProfileService) {

    super(navCtrl, navParams, storage);

    // this.storage.get('user').then(user => {

    //   // console.log('ProfilePage:ionViewWillEnter:user: ' + JSON.stringify(user));
    //   if (user !== null) {
    //     this.profileService.getMe()
    //     .then(data => {
    //       this.profile = data;
    //       // console.log('ProfilePage:ionViewWillEnter:profile: ' + JSON.stringify(this.profile));
    //     })
    //     .catch(err => {
    //       console.error("ProfilePage:ionViewWillEnter:err: " + JSON.stringify(err.json()));

    //       let alert = this.alertCtrl.create({
    //         title: 'Profile error',
    //         subTitle: err.json().detail,
    //         buttons: ['OK']
    //       });
    //       alert.present();
    //     });
    //   }
    // });
  }

  ionViewWillEnter() {

    this.storage.get('user').then(user => {

      // console.log('ProfilePage:ionViewWillEnter:user: ' + JSON.stringify(user));
      if (user !== null) {
        this.profileService.getMe()
        .then(data => {
          this.profile.first_name = data.first_name;
          this.profile.last_name = data.last_name;
          // console.log('ProfilePage:ionViewWillEnter:profile: ' + JSON.stringify(this.profile));
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

}
