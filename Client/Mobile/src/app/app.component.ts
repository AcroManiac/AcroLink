import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GoogleAnalytics } from '@ionic-native/google-analytics';
import { ScreenOrientation } from '@ionic-native/screen-orientation';

import { AuthService } from '../providers/auth-service';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';

@Component({
  templateUrl: 'app.html'
})
export class AcroLinkApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = 'ProfilePage';
  profilePage: any = { title: '', icon: 'person', component: 'ProfilePage' };

  pages: Array<{title: string, icon: string, component: any, method?: any}>;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public authService: AuthService,
    public translate: TranslateService,
    private screenOrientation: ScreenOrientation,
    private googleAnalytics: GoogleAnalytics) {

    // set to portrait orientation
    if( !this.platform.is('core') ) {
      this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
    }

    translate.setDefaultLang('en');
    translate.use('en');

    this.initializeApp();

    this.translate.onLangChange.subscribe((event: LangChangeEvent) =>
      {
        Observable.forkJoin(
          this.translate.get('page.profile'),
          this.translate.get('page.settings.name'),
          this.translate.get('page.trainings'),
          this.translate.get('page.events'),
          this.translate.get('page.places'),
          this.translate.get('page.poses'),
          this.translate.get('page.community'),
          this.translate.get('page.about'),
          this.translate.get('page.logout')
        ).subscribe(data => {
          this.pages = [
            { title: data[0], icon: 'person', component: 'ProfilePage' },
            { title: data[1], icon: 'settings', component: 'SettingsPage' },
            { title: data[2], icon: 'calendar', component: 'TrainingsPage' },
            { title: data[3], icon: 'clock', component: 'EventsPage' },
            { title: data[4], icon: 'ion-location', component: 'PlacesPage' },
            { title: data[5], icon: 'grid', component: 'PosesPage' },
            { title: data[6], icon: 'person-stalker', component: 'CommunityPage' },
            { title: data[7], icon: 'information-circled', component: 'AboutPage' },
            { title: data[8], icon: 'log-out', component: 'LoginPage', method: 'logout' }
          ];
        });
      });

    // this.getReferenceData();

  }

  initializeApp() {
    this.platform.ready().then(() => {

      // Start Google Analytics tracker
      this.googleAnalytics.startTrackerWithId('UA-111128784-1')
        .then(() => {
          console.log('AcroLinkApp:initializeApp(): Google analytics is ready now');
          //the component is ready and you can call any method here 
          this.googleAnalytics.debugMode();
          this.googleAnalytics.setAllowIDFACollection(true);
        })
        .catch(e => console.error('AcroLinkApp:initializeApp(): Error starting GoogleAnalytics', e));

      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    if (page.method && page.method === 'logout') {
      this.authService.logout();
    }

    this.nav.setRoot(page.component);
  }
}
