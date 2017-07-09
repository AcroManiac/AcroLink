import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../../../providers/auth-service';

import { UserModel } from '../../../models/user.model';

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  private loginData: FormGroup;
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

  	this.loginData = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
    });
  }

  ionViewDidLoad() {
    console.log('LoginPage:ionViewDidLoad');

    //hide menu when on the login page, regardless of the screen resolution
    this.menuCtrl.enable(false);
  }

  login() {

    this.showLoader();
    
    //use this.loginData.value to authenticate the user
    this.authService.login(this.loginData.value)
      .then(() => {
      	this.loading.dismiss();
      	this.redirectToHome();
      })
      .catch(e => {
      	this.loading.dismiss();
      	console.log("LoginPage:login: ", e);
      });
  }

  redirectToHome() {
    this.navCtrl.setRoot('ProfilePage');
    this.menuCtrl.enable(true);
  }

  showLoader() {
  	this.loading = this.loadingCtrl.create({
  		content: 'Authenticating...'
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
