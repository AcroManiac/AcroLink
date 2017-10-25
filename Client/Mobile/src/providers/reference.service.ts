import { Injectable } from '@angular/core';
import { AuthHttp } from 'angular2-jwt';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import *  as AppConfig from '../app/config';

/*
  Generated class for the ReferenceService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ReferenceService {

  private cfg: any;
  public level:any;
  public position:any;
  public role:any;
  public country:any;
  public social_network:any;

  constructor(
    public authHttp: AuthHttp) {
    console.log('ReferenceService: constructor');

    this.cfg = AppConfig.cfg;
  }

  /////////////////////////////////////////////////////////////////////////////
  getLevel() {

    var requestUrl = this.cfg.apiUrl + this.cfg.reference.level;
    console.log('ReferenceService:getLevel: URL = ' + requestUrl);
    return this.authHttp.get(requestUrl)
      .map(res => res.json())
      .toPromise()
      .then(data => {
        console.log('ReferenceService:getLevel:data: ' + JSON.stringify(data));
        this.level = data;
        return data;
      });
  }


  /////////////////////////////////////////////////////////////////////////////
  getPosition() {

    var requestUrl = this.cfg.apiUrl + this.cfg.reference.position;
    console.log('ReferenceService:getPosition: URL = ' + requestUrl);
    return this.authHttp.get(requestUrl)
      .map(res => res.json())
      .toPromise()
      .then(data => {
        console.log('ReferenceService:getPosition:data: ' + JSON.stringify(data));
        this.position = data;
        return data;
      });
  }


  /////////////////////////////////////////////////////////////////////////////
  getRole() {

    var requestUrl = this.cfg.apiUrl + this.cfg.reference.role;
    console.log('ReferenceService:getRole: URL = ' + requestUrl);
    return this.authHttp.get(requestUrl)
      .map(res => res.json())
      .toPromise()
      .then(data => {
        console.log('ReferenceService:getRole:data: ' + JSON.stringify(data));
        this.role = data;
        return data;
      });
  }


  /////////////////////////////////////////////////////////////////////////////
  getCountry() {

    var requestUrl = this.cfg.apiUrl + this.cfg.reference.country;
    console.log('ReferenceService:getCountry: URL = ' + requestUrl);
    return this.authHttp.get(requestUrl)
      .map(res => res.json())
      .toPromise()
      .then(data => {
        console.log('ReferenceService:getCountry:data: ' + JSON.stringify(data));
        this.country = data;
        return data;
      });
  }


  /////////////////////////////////////////////////////////////////////////////
  getSocialNetwork() {

    var requestUrl = this.cfg.apiUrl + this.cfg.reference.social_network;
    console.log('ReferenceService:getSocialNetwork: URL = ' + requestUrl);
    return this.authHttp.get(requestUrl)
      .map(res => res.json())
      .toPromise()
      .then(data => {
        console.log('ReferenceService:getSocialNetwork:data: ' + JSON.stringify(data));
        this.social_network = data;
        return data;
      });
  }


  /////////////////////////////////////////////////////////////////////////////
  getData() {

    this.getLevel().then(
      this.getPosition().then(
        this.getRole().then(
          this.getCountry().then(
            this.getSocialNetwork()
            .catch(err => {
                console.error("ReferenceService:getData:getSocialNetwork: " + JSON.stringify(err.json()));
              })
            )
            .catch(err => {
                console.error("ReferenceService:getData:getCountry: " + JSON.stringify(err.json()));
              })
          )
          .catch(err => {
              console.error("ReferenceService:getData:getRole: " + JSON.stringify(err.json()));
            })
        )
      .catch(err => {
          console.error("ReferenceService:getData:getPosition: " + JSON.stringify(err.json()));
        })
    )
    .catch(err => {
        console.error("ReferenceService:getData:getLevel: " + JSON.stringify(err.json()));
      });
  }

}
