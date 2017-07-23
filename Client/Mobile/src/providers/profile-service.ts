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

  getOne(id: number) {

    console.log('ProfileService:getOne(' + id +') URL = ' + this.cfg.apiUrl + this.cfg.profiles + '/' + id);
    return this.authHttp.get(this.cfg.apiUrl + this.cfg.profiles + '/' + id + '/')
      .map(res => res.json())
      .toPromise()
      .then(data => {
        // console.log('ProfileService:getOne:data: ' + JSON.stringify(data));
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
