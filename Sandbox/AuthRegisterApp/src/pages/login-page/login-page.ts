import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth-provider';
import { HomePage } from '../home/home';

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'login-page',
  templateUrl: 'login-page.html',
})
export class LoginPage {

	email: string;
	password: string;
	loading: any;

  constructor(
  	public navCtrl: NavController,
  	public navParams: NavParams,
  	public authService: AuthProvider,
  	public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');

    this.showLoader();

	//Check if already authenticated
	this.authService.checkAuthentication().then((res) => {
		console.log("Already authorized");
		this.loading.dismiss();
		this.navCtrl.setRoot(HomePage);
	}, (err) => {
		console.log("Not already authorized");
		this.loading.dismiss();
	});
  }

	login(){

		this.showLoader();

		let credentials = {
		    email: this.email,
		    password: this.password
		};

		this.authService.login(credentials).then((result) => {
			this.loading.dismiss();
		    console.log(result);
			this.navCtrl.setRoot(HomePage);
		}, (err) => {
			this.loading.dismiss();
			console.log(err);
		});

	}

	launchSignup(){
	    // this.navCtrl.push(SignupPage);
	}

	showLoader(){

		this.loading = this.loadingCtrl.create({
			content: 'Authenticating...'
		});

		this.loading.present();

	}

}
