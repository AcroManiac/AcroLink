import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AuthService } from '../providers/auth-service';
// import { ReferenceService } from '../providers/reference.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  templateUrl: 'app.html'
})
export class AcroLinkApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = 'ProfilePage';

  pages: Array<{title: string, component: any, method?: any}>;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public authService: AuthService,
    // public refService: ReferenceService,
    translate: TranslateService) {
    
    this.initializeApp();

    translate.setDefaultLang('en');

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Profile', component: 'ProfilePage' },
      { title: 'Trainings', component: 'TrainingsPage' },
      { title: 'Events', component: 'EventsPage' },
      { title: 'Places', component: 'PlacesPage' },
      { title: 'Poses', component: 'PosesPage' },
      { title: 'Community', component: 'CommunityPage' },
      { title: 'About', component: 'AboutPage' },
      // { title: 'Logout', component: 'LoginPage', method: 'logout' }
    ];

    // this.getReferenceData();

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  // getReferenceData() {

  //   this.refService.getLevel()
  //     .catch(err => {
  //         console.error("AcroLinkApp:getReferenceData:getLevel: " + JSON.stringify(err.json()));
  //       });
  //   this.refService.getPosition()
  //     .catch(err => {
  //         console.error("AcroLinkApp:getReferenceData:getPosition: " + JSON.stringify(err.json()));
  //       });
  //   this.refService.getRole()
  //     .catch(err => {
  //         console.error("AcroLinkApp:getReferenceData:getRole: " + JSON.stringify(err.json()));
  //       });
  //   this.refService.getCountry()
  //     .catch(err => {
  //         console.error("AcroLinkApp:getReferenceData:getCountry: " + JSON.stringify(err.json()));
  //       });
  //   this.refService.getSocialNetwork()
  //     .catch(err => {
  //         console.error("AcroLinkApp:getReferenceData:getSocialNetwork: " + JSON.stringify(err.json()));
  //       });
  // }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    if (page.method && page.method === 'logout') {
      this.authService.logout();
    }

    this.nav.setRoot(page.component);
  }
}
