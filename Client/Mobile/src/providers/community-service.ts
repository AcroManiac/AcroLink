import { Injectable } 		from '@angular/core';
import { Http, Response }	from '@angular/http';
import {Observable}			from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/do';  // debug

/*
  Generated class for the CommunityService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class CommunityService {
	data:	any;

	constructor(public http: Http) {
		console.log('Hello CommunityService Provider');
	}

	private serverError(err: any) {
        console.log('serverError():', err);  // debug
        if(err instanceof Response) {
          return Observable.throw(err.json().error || 'backend server error');
          // if you're using lite-server, use the following line
          // instead of the line above:
          //return Observable.throw(err.text() || 'backend server error');
        }
        return Observable.throw(err || 'backend server error');
    }

	public getData() {
	  if (this.data) {
	    // already loaded data
	    return Promise.resolve(this.data);
	  }

	  // don't have the data yet
	  return new Promise(resolve => {

	  	console.log("load(): Before HTTP GET");

	    // We're using Angular HTTP provider to request the data,
	    // then on the response, it'll map the JSON data to a parsed JS object.
	    // Next, we process the data and resolve the promise with the new data.
	    this.http.get('http://localhost/api/persons/list/1')
	    // this.http.get('https://randomuser.me/api/?results=1')
	      .map(res => res.json())
	      .do(data => console.log('server data:', data))  // debug
          // .catch(this.serverError)
          .catch((res: Response) => this.serverError(res))
	      .subscribe(data => {
	        // we've got back the raw data, now generate the core schedule data
	        // and save the data for later reference
	        // this.data = data.data;
	        this.data = data.results;
	        resolve(this.data);
	      });
	  });
	}

}
