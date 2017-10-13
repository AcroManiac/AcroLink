import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, AlertController, LoadingController } from 'ionic-angular';
import { ProtectedPage } from '../protected/protected';
import { Storage } from '@ionic/storage';
import { ProfileService } from '../../providers/profile.service';
import { ProfileModel } from '../../models/profile.model';
// import { SocialSharing } from '@ionic-native/social-sharing';

import 'rxjs/Rx';

@IonicPage()
@Component({
  selector: 'profile-page',
  templateUrl: 'profile.html'
})
export class ProfilePage extends ProtectedPage {
  display: string;
  profile: ProfileModel = new ProfileModel();
  loading: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    private alertCtrl: AlertController,
    public storage: Storage,
    public profileService: ProfileService,
    public loadingCtrl: LoadingController,
    // public socialSharing: SocialSharing
   ) {
    super(navCtrl, navParams, storage);
    this.loading = this.loadingCtrl.create({content: 'Loading profile...'});
  }

  ionViewDidLoad() {
    this.loading.present();
    this.profileService.getData()
      .then(data => {
        console.log('ProfilePage:ionViewDidLoad:profile: ' + JSON.stringify(data));
        this.fillProfileData(data);
        this.loading.dismiss();
      })
      .catch(err => {
          console.error("ProfilePage:ionViewWillEnter:err: " + JSON.stringify(err.json()));

          this.loading.dismiss();

          let alert = this.alertCtrl.create({
            title: 'Profile error',
            subTitle: err.json().detail,
            buttons: ['OK']
          });
          alert.present();
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

  // goToFollowersList() {
  //   // close the menu when clicking a link from the menu
  //   this.menu.close();
  //   this.app.getRootNav().push(FollowersPage, {
  //     list: this.profile.followers
  //   });
  // }

  // goToFollowingList() {
  //   // close the menu when clicking a link from the menu
  //   this.menu.close();
  //   this.app.getRootNav().push(FollowersPage, {
  //     list: this.profile.following
  //   });
  // }

  goToSettings() {
    // // close the menu when clicking a link from the menu
    // this.menu.close();
    // this.app.getRootNav().push(SettingsPage);
  }

  // onSegmentChanged(segmentButton: SegmentButton) {
  //   // console.log('Segment changed to', segmentButton.value);
  // }

  // onSegmentSelected(segmentButton: SegmentButton) {
  //   // console.log('Segment selected', segmentButton.value);
  // }

  sharePost(post) {
   // //this code is to use the social sharing plugin
   // // message, subject, file, url
   // this.socialSharing.share(post.description, post.title, post.image)
   // .then(() => {
   //   console.log('Success!');
   // })
   // .catch(() => {
   //    console.log('Error');
   // });
  }

}
