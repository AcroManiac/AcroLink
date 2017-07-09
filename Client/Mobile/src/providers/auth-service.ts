import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AuthHttp, tokenNotExpired } from 'angular2-jwt';
import { AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { UserModel } from '../models/user.model';
import { CredentialsModel } from '../models/credentials.model';
import 'rxjs/add/operator/toPromise';

import *  as AppConfig from '../app/config';

@Injectable()
export class AuthService {

  private cfg: any;

  constructor(
    private storage: Storage,
    private http: Http,
    private authHttp: AuthHttp,
    private alertCtrl: AlertController) {

    this.cfg = AppConfig.cfg;
  }

  register(userData: UserModel) {
    console.log('AuthService:register: SignUp Data = ' + JSON.stringify(userData));

    return this.http.post(this.cfg.apiUrl + this.cfg.user.register, userData)
      .toPromise()
      .then(data => this.saveData(data))
      .catch(e => console.log("AuthService:register: Registration error ", e));

  }

  login(credentials: CredentialsModel) {
    console.log('AuthService:login: Login URL = ' + this.cfg.apiUrl + this.cfg.user.login);
    // console.log('AuthService:login: Login Credentials = ' + JSON.stringify(credentials));

    return this.http.post(this.cfg.apiUrl + this.cfg.user.login, credentials)
      .toPromise()
      .then(data => this.saveData(data))
      .catch(e => console.log('AuthService:login: Login error ', e));
  }

  saveData(data: any) {

    let rs = data.json();
    console.log('AuthService:saveData: ' + JSON.stringify(rs));

    this.storage.set("user", rs.user);
    this.storage.set("id_token", rs.token);
  }

  logout() {
    this.storage.remove('user');
    this.storage.remove('id_token');
  }

  isValid() {
    return tokenNotExpired();
  }

}
