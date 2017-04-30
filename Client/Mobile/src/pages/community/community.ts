import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CommunityService } from '../../providers/community-service';

@IonicPage({
	// templateUrl: 'community.html',
	// providers: [CommunityService]
})
@Component({
	selector: 'page-community',
	templateUrl: 'community.html',
	providers: [CommunityService]
})
export class CommunityPage {
	public people: any;

	constructor(
		public communityService: CommunityService,
		public navCtrl: NavController,
		public navParams: NavParams) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad(): CommunityPage');
		this.loadPeople();
	}

	loadPeople() {
		this.communityService.load()
			.then(data => {
				this.people = data;
			});
	}

}
