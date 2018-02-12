import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController, ModalController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ProfileModel } from '../../models/profile.model';
import { ProfileService } from '../../providers/profile.service';
import { GenderModel, LevelModel, PositionModel, RoleModel } from '../../models/reference.model';
import { ProtectedPage } from '../protected/protected';
import { Crop } from '@ionic-native/crop';
import { ImagePicker } from '@ionic-native/image-picker';
import { Storage } from '@ionic/storage';
import 'rxjs/Rx';

@IonicPage()
@Component({
  selector: 'profile-edit-page',
  templateUrl: 'profile-edit.html'
})
export class ProfileEditPage extends ProtectedPage {
  profileEditForm: FormGroup;
  // make ProfilePage the root (or first) page
  rootPage: any = 'ProfilePage';
  loading: any;
  section: any = 'person';

  profile: ProfileModel;
  genders: Array<GenderModel> = [
    { id: 1, name: 'Male'   },
    { id: 2, name: 'Female' },
    { id: 3, name: 'Not specified' }
  ];
  // countries: Array<CountryModel>;
  // levels: Array<LevelModel>;
  // positions: Array<PositionModel>;
  // roles: Array<RoleModel>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public modalCtrl: ModalController,
    public storage: Storage,
    public profileService: ProfileService,
    public imagePicker: ImagePicker,
    public cropService: Crop,
    public formBuilder: FormBuilder
  ) {
    super(navCtrl, navParams, storage);
    this.profile = navParams.get('profile');

    this.profileEditForm = this.formBuilder.group({
      first_name: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      last_name: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      phone: [''],
      birth_date: [''],
      gender: [''],

      location: this.formBuilder.group({
        street_number: [''],
        route: [''],
        locality: [''],
        state: [''],
        country: [''],
        country_code: [''],
        postal_code: [''],
        latitude: [''],
        longtitude: [''],
        placeId: ['']
      }),

      acroyoga: this.formBuilder.group({
        practice_start_date: [''],
        bio: [''],
        level: [''],
        position_1: [''], position_2: [''], position_3: [''],
        role_1: [''], role_2: [''], role_3: ['']
      }),

    });
  }

  ionViewDidLoad() {

    // setValue: With setValue, you assign every form control value at once by passing in a data object whose properties exactly match the form model behind the FormGroup.
    // patchValue: With patchValue, you can assign values to specific controls in a FormGroup by supplying an object of key/value pairs for just the controls of interest.
    // More info: https://angular.io/docs/ts/latest/guide/reactive-forms.html#!#populate-the-form-model-with-_setvalue_-and-_patchvalue_
    this.profileEditForm.patchValue({
      first_name:           this.profile.first_name,
      last_name:            this.profile.last_name,
      phone:                this.profile.phone,
      birth_date:           this.profile.birth_date,
      gender:               this.genders[0],

      location: {
        street_number:      this.profile.location != null ? this.profile.location.street_number : "",
        route:              this.profile.location != null ? this.profile.location.route : "",
        locality:           this.profile.location != null ? this.profile.location.locality : "",
        state:              this.profile.location != null ? this.profile.location.state : "",
        country:            this.profile.location != null ? this.profile.location.country : "",
        country_code:       this.profile.location != null ? this.profile.location.country_code : "",
        postal_code:        this.profile.location != null ? this.profile.location.postal_code : "",
        latitude:           this.profile.location != null ? this.profile.location.latitude : "",
        longtitude:         this.profile.location != null ? this.profile.location.longtitude : "",
        placeId:            this.profile.location != null ? this.profile.location.placeId : ""
      },

      acroyoga: {
        practice_start_date:  this.profile.practice_start_date,
        bio:                  this.profile.bio,
        // level:                this.referenceService.level[0],
        position_1:           true, //this.referenceService.position[0],
        position_2:           false,
        position_3:           false,
        role_1:               true, //this.referenceService.role[0],
        role_2:               false,
        role_3:               false
      }
    });
  }

  logout() {
    // navigate to the new page if it is not the current page
    this.navCtrl.setRoot(this.rootPage);
  }

  searchPlace() {
    let searchModal = this.modalCtrl.create('SearchPlacePage');
    searchModal.onDidDismiss(data => {
      if (typeof data != 'undefined') {
        console.log('ProfileEditPage:searchPlace():data: ', JSON.stringify(data));
        this.profileEditForm.patchValue({location: data});
        this.profileEditForm.controls.location.markAsDirty();
      }
    });
    searchModal.present();
  }

  saveFormData() {
    console.log('ProfileEditPage:saveFormData():value: ', JSON.stringify(this.profileEditForm.value));
  }

  rateApp(){
    // this.appRate.preferences.storeAppURL = {
    //   ios: '<my_app_id>',
    //   android: 'market://details?id=<package_name>',
    //   windows: 'ms-windows-store://review/?ProductId=<Store_ID>'
    // };

    // this.appRate.promptForRating(true);
  }

  openImagePicker(){
   this.imagePicker.hasReadPermission().then(
     (result) => {
       if(result == false){
         // no callbacks required as this opens a popup which returns async
         this.imagePicker.requestReadPermission();
       }
       else if(result == true){
         this.imagePicker.getPictures({ maximumImagesCount: 1, width: 400, quality: 80 }).then(
           (results) => {
             for (var i = 0; i < results.length; i++) {
               this.cropService.crop(results[i] /*, {quality: 75}*/).then(
                 newImage => {
                   this.profileService.setUserImage(newImage);
                   this.profile.avatar = newImage;
                 },
                 error => console.error("ProfileEditPage:openImagePicker(): Error cropping image", JSON.stringify(error))
               );
             }
           }, (err) => console.log(err)
         );
       }
     }
   )
  }
}
