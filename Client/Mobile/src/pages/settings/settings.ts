import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';

import 'rxjs/Rx';

import { ProfileModel } from '../../models/profile.model';
import { ProfileService } from '../../providers/profile.service';
// import { ReferenceService } from '../../providers/reference.service';
import { CountryModel, LevelModel, PositionModel, RoleModel } from '../../models/reference.model';
import { ProtectedPage } from '../protected/protected';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from '../../providers/language.service';
import { LanguageModel } from '../../models/language.model';
import { AppRate } from '@ionic-native/app-rate';
import { Crop } from '@ionic-native/crop';
import { ImagePicker } from '@ionic-native/image-picker';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'settings-page',
  templateUrl: 'settings.html'
})
export class SettingsPage extends ProtectedPage {
  settingsForm: FormGroup;
  // make ProfilePage the root (or first) page
  rootPage: any = 'ProfilePage';
  loading: any;

  profile: ProfileModel = new ProfileModel();
  languages: Array<LanguageModel> = [
      { name: 'English', code: 'en' },
      { name: 'Русский', code: 'ru' }
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
    public storage: Storage,
    public translate: TranslateService,
    public languageService: LanguageService,
    public profileService: ProfileService,
    // public referenceService: ReferenceService,
    public appRate: AppRate,
    public imagePicker: ImagePicker,
    public cropService: Crop,
    public formBuilder: FormBuilder,
  ) {
    super(navCtrl, navParams, storage);
    this.loading = this.loadingCtrl.create({content: 'Loading profile...'});

    // this.languages = this.languageService.getLanguages();
    
    // this.referenceService.getData();

    this.settingsForm = this.formBuilder.group({
      first_name: [''],
      last_name: [''],
      phone: [''],
      birth_date: [''],
      language: [''],

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
        position: [''],
        role: ['']
      }),

    });
  }

  ionViewDidLoad() {
    this.loading.present();
    this.profileService.getData().then(data => {
      
      this.profile.fillData(data);
      console.log('SettingsPage:ionViewDidLoad:profile: ' + JSON.stringify(this.profile));

      this.loading.dismiss();

      // setValue: With setValue, you assign every form control value at once by passing in a data object whose properties exactly match the form model behind the FormGroup.
      // patchValue: With patchValue, you can assign values to specific controls in a FormGroup by supplying an object of key/value pairs for just the controls of interest.
      // More info: https://angular.io/docs/ts/latest/guide/reactive-forms.html#!#populate-the-form-model-with-_setvalue_-and-_patchvalue_
      this.settingsForm.patchValue({
        first_name:           this.profile.first_name,
        last_name:            this.profile.last_name,
        phone:                this.profile.phone,
        birth_date:           this.profile.birth_date,
        language:             this.languages[0],

        location: {
          street_number:      this.profile.location.street_number,
          route:              this.profile.location.route,
          locality:           this.profile.location.locality,
          state:              this.profile.location.state,
          country:            this.profile.location.country,
          country_code:       this.profile.location.country_code,
          postal_code:        this.profile.location.postal_code,
          latitude:           this.profile.location.latitude,
          longtitude:         this.profile.location.longtitude,
          placeId:            this.profile.location.placeId
        },

        acroyoga: {
          practice_start_date:  this.profile.practice_start_date,
          bio:                  this.profile.bio,
          // level:                this.referenceService.level[0],
          // position:             this.referenceService.position[0],
          // role:                 this.referenceService.role[0],
        }
      });

      this.settingsForm.get('language').valueChanges.subscribe((lang) => {
        this.setLanguage(lang);
      });

    });
    // .catch(error => {
    //   console.error("SettingsPage:ionViewWillEnter: " + JSON.stringify(error));

    //   this.loading.dismiss();

    //   let alert = this.alertCtrl.create({
    //     title: 'Profile error',
    //     subTitle: error.detail,
    //     buttons: ['OK']
    //   });
    //   alert.present();
    // });
  }

  logout() {
    // navigate to the new page if it is not the current page
    this.navCtrl.setRoot(this.rootPage);
  }

  setLanguage(lang: LanguageModel){
    let language_to_set = this.translate.getDefaultLang();

    console.log('SettingsPage:setLanguage:lang: ' + JSON.stringify(lang));

    if(lang){
      language_to_set = lang.code;
    }

    this.translate.setDefaultLang(language_to_set);
    this.translate.use(language_to_set);
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
         this.imagePicker.getPictures({ maximumImagesCount: 1 }).then(
           (results) => {
             for (var i = 0; i < results.length; i++) {
               this.cropService.crop(results[i], {quality: 75}).then(
                 newImage => {
                   this.profileService.setUserImage(newImage);
                   this.profile.avatar = newImage;
                 },
                 error => console.error("SettingsPage:openImagePicker(): Error cropping image", JSON.stringify(error))
               );
             }
           }, (err) => console.log(err)
         );
       }
     }
   )
  }
}
