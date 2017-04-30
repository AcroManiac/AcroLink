import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { ProfilePage } from '../pages/profile/profile';
import { TrainingsPage } from '../pages/trainings/trainings';
import { EventsPage } from '../pages/events/events';
import { PlacesPage } from '../pages/places/places';
import { PosesPage } from '../pages/poses/poses';
import { CommunityPage } from '../pages/community/community';
import { SettingsPage } from '../pages/settings/settings';
import { AboutPage } from '../pages/about/about';

// import { HomePage } from '../pages/home/home';
// import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    ProfilePage,
    TrainingsPage,
    EventsPage,
    PlacesPage,
    PosesPage,
    CommunityPage,
    SettingsPage,
    AboutPage

    // HomePage,
    // ListPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ProfilePage,
    TrainingsPage,
    EventsPage,
    PlacesPage,
    PosesPage,
    CommunityPage,
    SettingsPage,
    AboutPage

    // HomePage,
    // ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
