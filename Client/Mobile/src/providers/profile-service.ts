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

  constructor(public authHttp: AuthHttp) {
    console.log('ProfileService: constructor');

    this.cfg = AppConfig.cfg;
  }

  getOne(id: number) {
    return this.authHttp.get(this.cfg.apiUrl + this.cfg.profiles + '/' + id)
      .toPromise()
      .then(rs => {
        console.log(rs, rs.json());
        return rs.json().profile;
      });
  }

  update(profile: ProfileModel) {
    return this.authHttp.put(this.cfg.apiUrl + this.cfg.profiles + '/' + profile.id, profile)
      .toPromise()
      .then(rs => {
        console.log(rs, rs.json());
        return rs.json();
      })
      .catch(e => console.log("ProfileService:update: Profile error", e));
  }

}
