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
    // public socialSharing: SocialSharing,
   ) {
    super(navCtrl, navParams, storage);
    this.loading = this.loadingCtrl.create({content: 'Loading profile...'});
  }

  ionViewDidLoad() {
    this.loading.present();
    this.profileService.getData()
      .then(data => {
        console.log('ProfilePage:ionViewDidLoad:profile: ' + JSON.stringify(data));
        this.profile.fillData(data);
        this.loading.dismiss();
      })
      .catch(error => {
          console.error("ProfilePage:ionViewWillEnter:error: " + JSON.stringify(error.json()));

          this.loading.dismiss();

          let alert = this.alertCtrl.create({
            title: 'Profile error',
            subTitle: error.json().detail,
            buttons: ['OK']
          });
          alert.present();

          this.navCtrl.push('LoginPage');
        });
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

  openProfileEditPage() {
    this.navCtrl.push('ProfileEditPage', {
      'profile': this.profile
    });
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
