import { Injectable } from '@angular/core';
import { AuthHttp } from 'angular2-jwt';
import { ProfileModel } from '../models/profile.model';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import *  as AppConfig from '../app/config';

/*
  Generated class for the ProfileService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ProfileService {

  private cfg: any;

  constructor(
    public authHttp: AuthHttp) {
    console.log('ProfileService: constructor');

    this.cfg = AppConfig.cfg;
  }

  getData(): Promise<ProfileModel> {
    var requestUrl = this.cfg.apiUrl + this.cfg.user.me;
    console.log('ProfileService:getData: URL = ' + requestUrl);
    return this.authHttp.get(requestUrl)
      .toPromise()
      .then(response => response.json() as ProfileModel);
      // .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('ProfileService: An error occurred', JSON.stringify(error)); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getMe() {
    var requestUrl = this.cfg.apiUrl + this.cfg.user.me;
    console.log('ProfileService:getMe: URL = ' + requestUrl);
    return this.authHttp.get(requestUrl)
      .map(res => res.json())
      .toPromise()
      .then(data => {
        console.log('ProfileService:getMe:data: ' + JSON.stringify(data));
        return data;
      });
  }

  update(profile: ProfileModel) {
    return this.authHttp.put(this.cfg.apiUrl + this.cfg.profiles + '/' + profile.id, profile)
      .map(res => res.json())
      .toPromise()
      .then(data => {
        console.log(JSON.stringify(data));
        return data;
      });
  }

}
