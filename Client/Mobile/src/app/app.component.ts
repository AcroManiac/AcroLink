import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ProfilePage } from '../pages/profile/profile';
import { TrainingsPage } from '../pages/trainings/trainings';
import { EventsPage } from '../pages/events/events';
import { PlacesPage } from '../pages/places/places';
import { PosesPage } from '../pages/poses/poses';
import { CommunityPage } from '../pages/community/community';
import { SettingsPage } from '../pages/settings/settings';
import { AboutPage } from '../pages/about/about';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = ProfilePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Profile', component: ProfilePage },
      { title: 'Trainings', component: TrainingsPage },
      { title: 'Events', component: EventsPage },
      { title: 'Places', component: PlacesPage },
      { title: 'Poses', component: PosesPage },
      { title: 'Community', component: CommunityPage },
      { title: 'Settings', component: SettingsPage },
      { title: 'About', component: AboutPage }

      // { title: 'Home', component: HomePage },
      // { title: 'List', component: ListPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
