import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ProfileModel } from '../../models/profile.model';
import { ProtectedPage } from '../protected/protected';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from '../../providers/language.service';
import { LanguageModel } from '../../models/language.model';
import { AppRate } from '@ionic-native/app-rate';
import { AppVersion } from '@ionic-native/app-version';
import { Storage } from '@ionic/storage';
import { TermsOfServicePage } from '../terms-of-service/terms-of-service';
import { PrivacyPolicyPage } from '../privacy-policy/privacy-policy';

@IonicPage()
@Component({
  selector: 'settings-page',
  templateUrl: 'settings.html'
})
export class SettingsPage extends ProtectedPage {
  settingsForm: FormGroup;
  // make ProfilePage the root (or first) page
  rootPage: any = 'ProfilePage';
  versionNumber = '';
  profile: ProfileModel = new ProfileModel();
  languages: Array<LanguageModel>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public storage: Storage,
    public modalCtrl: ModalController,
    public translate: TranslateService,
    public languageService: LanguageService,
    public formBuilder: FormBuilder,
    public appRate: AppRate,
    private appVersion: AppVersion
  ) {
    super(navCtrl, navParams, storage);

    this.languages = this.languageService.getLanguages();

    this.appVersion.getVersionNumber().then(version => {
      this.versionNumber = version;
    });

    this.settingsForm = this.formBuilder.group({
      language: ['']
    });
  }

  ionViewDidLoad() {
    this.settingsForm.patchValue({
      language: this.languages[0]
    });
    this.settingsForm.get('language').valueChanges.subscribe((lang) => {
      this.setLanguage(lang);
    });
  }

  logout() {
    // navigate to the new page if it is not the current page
    this.navCtrl.setRoot(this.rootPage);
  }

  setLanguage(lang: LanguageModel){
    let language_to_set = this.translate.getDefaultLang();

    // console.log('SettingsPage:setLanguage:lang: ' + JSON.stringify(lang));

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

  showTermsModal() {
    let modal = this.modalCtrl.create(TermsOfServicePage);
    modal.present();
  }

  showPrivacyModal() {
    let modal = this.modalCtrl.create(PrivacyPolicyPage);
    modal.present();
  }
}
