import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth-provider';
import { HomePage } from '../home/home';

/**
 * Generated class for the SignupPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'signup-page',
  templateUrl: 'signup-page.html',
})
export class SignupPage {

  email: string;
  username: string;
  password1: string;
  password2: string;
  loading: any;

  constructor(
  	public navCtrl: NavController,
  	public navParams: NavParams,
  	public authService: AuthProvider,
  	public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  register(){
 
    this.showLoader();
 
    let details = {
        email: this.email,
        username: this.username,
        password1: this.password1,
        password2: this.password2
    };
 
    this.authService.createAccount(details).then((result) => {
      this.loading.dismiss();
      console.log(result);
      this.navCtrl.setRoot(HomePage);
    }, (err) => {
        this.loading.dismiss();
    });
 
  }
 
  showLoader(){
 
    this.loading = this.loadingCtrl.create({
      content: 'Authenticating...'
    });
 
    this.loading.present();
 
  }

}
