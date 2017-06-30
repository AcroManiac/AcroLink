import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class AuthProvider {

  public token: any;

  constructor(public http: Http, private storage: Storage) {
    console.log('Hello AuthProvider Provider');
  }

  checkAuthentication(){

  	return new Promise((resolve, reject) => {

  		//Load token if exists
  		this.storage.get('token').then((value) => {

  			this.token = value;

			let headers = new Headers();
			headers.append('Authorization', this.token);

			// this.http.get('https://YOUR_HEROKU_APP.herokuapp.com/api/auth/protected', {headers: headers})
			// 	.subscribe(res => {
			// 		resolve(res);
			// 	}, (err) => {
			// 		reject(err);
			// 	}); 

  		}); 		

  	});

  }

  createAccount(details){

  	return new Promise((resolve, reject) => {

	    let headers = new Headers();
	    headers.append('Content-Type', 'application/json');

	    this.http.post('https://127.0.0.1:8000/api/v1/rest-auth/register', JSON.stringify(details), {headers: headers})
	      .subscribe(res => {

	      	let data = res.json();
	      	this.token = data.token;
	        this.storage.set('token', data.token);
	        resolve(data);

	      }, (err) => {
	      	reject(err);
	      });

  	});

  }

  login(credentials){

  	return new Promise((resolve, reject) => {

	    let headers = new Headers();
	    headers.append('Content-Type', 'application/json');

	    this.http.post('https://127.0.0.1:8000/api/v1/rest-auth/login', JSON.stringify(credentials), {headers: headers})
	      .subscribe(res => {

	      	let data = res.json();
	      	this.token = data.token;
	        this.storage.set('token', data.token);
	        resolve(data);

	        resolve(res.json());
	      }, (err) => {
	      	reject(err);
	      });

  	});

  }

  logout(){
  	this.storage.set('token', '');
  }

}
