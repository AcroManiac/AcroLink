import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../../../providers/auth-service';
import { UserModel } from '../../../models/user.model';

/**
 * Generated class for the SignupPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  private regData: FormGroup;
  public user: UserModel;
  private loading: any;

  constructor(
  	public navCtrl: NavController,
  	public navParams: NavParams,
  	public menuCtrl: MenuController,
  	public storage: Storage,
    public formBuilder: FormBuilder,
    public authService: AuthService,
    public loadingCtrl: LoadingController) {

  	this.regData = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required])],
      username: ['', Validators.compose([Validators.required])],
      password1: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      password2: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    });
  }

  ionViewDidLoad() {
    console.log('SignupPage:ionViewDidLoad');

    //hide menu when on the signup page, regardless of the screen resolution
    this.menuCtrl.enable(false);
  }

  register() {

  	this.showLoader();
    
    this.authService.register(this.regData.value)
      .then(() => {
      	this.loading.dismiss();
      	this.redirectToHome();
      })
      .catch(e => {
      	this.loading.dismiss();
      	console.log("SignupPage:register: ", e);
      });
  }

  redirectToHome() {
    this.navCtrl.setRoot('ProfilePage');
    this.menuCtrl.enable(true);
  }

  showLoader() {
  	this.loading = this.loadingCtrl.create({
  		content: 'Registering...'
  	});
  	this.loading.present();
  }

  /**
   * Opens a page
   * 
   * @param page string Page name
   */
  openPage(page: string) {
    this.navCtrl.push(page);
  }

}
