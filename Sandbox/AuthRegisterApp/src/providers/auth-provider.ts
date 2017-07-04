import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Storage } from '@ionic/storage';
import { AlertController } from 'ionic-angular';
import 'rxjs/add/operator/map';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class AuthProvider {

  public token: any;

  constructor(
  	public http: Http,
  	private storage: Storage,
  	private alertCtrl: AlertController) {
  		console.log('Hello AuthProvider Provider');
  }

  checkAuthentication(){

  	return new Promise((resolve, reject) => {

  		//Load token if exists
  		this.storage.get('token').then((value) => {

  			this.token = value;

			let headers = new Headers();
			headers.append('Authorization', this.token);

			this.http.get('http://127.0.0.1:8000/api/v1/profiles/', {headers: headers})
				.subscribe(res => {
					resolve(res);
				}, (err) => {
					reject(err);
				}); 

  		}); 		

  	});

  }

  createAccount(details){

  	console.log("createAccount(): Details: " + JSON.stringify(details));

  	return new Promise((resolve, reject) => {

		let headers = new Headers();
		headers.append('Content-Type', 'application/json');

		return this.http.post('http://127.0.0.1:8000/api/v1/rest-auth/registration/', JSON.stringify(details), {headers: headers})
			.map(res => res.json())
		  	.subscribe((data) => {

		  	this.token = data.token;
		    this.storage.set('token', data.token);

		    resolve(data);

		  }, (err) => {
		  	console.log("createAccount(): Error: " + JSON.stringify(err));
		  	
		  	let alert = this.alertCtrl.create({
				title: 'Register Error',
				subTitle: JSON.stringify(err),
				buttons: ['OK'] });
			alert.present();

			reject(err);
		  });

	});

  }

  login(credentials){

  	return new Promise((resolve, reject) => {

		let headers = new Headers();
		headers.append('Content-Type', 'application/json');

		return this.http.post('http://127.0.0.1:8000/api/v1/rest-auth/login/', JSON.stringify(credentials), {headers: headers})
		  .map(res => res.json())
		  .subscribe((data) => {

		  	this.token = data.token;
		    this.storage.set('token', data.token);

		    resolve(data);

		  }, (err) => {
		  	console.log("login(): Error: " + JSON.stringify(err));
		  	
		  	let alert = this.alertCtrl.create({
				title: 'Login Error',
				subTitle: JSON.stringify(err),
				buttons: ['OK'] });
			alert.present();

			reject(err);
		  });

	});

  }

  logout(){
  	this.storage.set('token', '');
  }

}
