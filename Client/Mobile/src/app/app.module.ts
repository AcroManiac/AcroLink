import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, Http, RequestOptions } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { AuthHttp, AuthConfig } from 'angular2-jwt';
import { Storage } from '@ionic/storage';
import { AuthService } from '../providers/auth-service';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppRate } from '@ionic-native/app-rate';
import { AppVersion } from '@ionic-native/app-version';
import { Crop } from '@ionic-native/crop';
import { ImagePicker } from '@ionic-native/image-picker';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { Geolocation } from '@ionic-native/geolocation';
import { GoogleAnalytics } from '@ionic-native/google-analytics';

import { AcroLinkApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ProfileService } from '../providers/profile.service';
import { LanguageService } from '../providers/language.service';
import { ReferenceService } from '../providers/reference.service';
import { GoogleMapsService } from '../providers/google-maps.service';

// For modal pages
import { PrivacyPolicyPage } from '../pages/privacy-policy/privacy-policy';
import { TermsOfServicePage } from '../pages/terms-of-service/terms-of-service';

export function authHttpServiceFactory(http: Http, options: RequestOptions, storage: Storage) {
  return new AuthHttp(new AuthConfig({
    tokenName: 'token',
    headerPrefix: 'JWT',
    noJwtError: true,
    globalHeaders: [{'Accept':'application/json'}],
    tokenGetter: (() => storage.get('id_token')),
  }), http, options);
}

export function createTranslateLoader(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient); //, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AcroLinkApp,
    PrivacyPolicyPage,
    TermsOfServicePage
  ],
  imports: [
    IonicStorageModule.forRoot({
      name: '__acrolink',
      driverOrder: ['sqlite', 'indexeddb', 'websql']
    }),
    BrowserModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(AcroLinkApp),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    AcroLinkApp,
    PrivacyPolicyPage,
    TermsOfServicePage
  ],
  providers: [
    AppRate,
    AppVersion,
    Crop,
    ImagePicker,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions, Storage]
    },
    AuthService,
    ProfileService,
    LanguageService,
    ReferenceService,
    GoogleMapsService,
    Geolocation,
    GoogleAnalytics,
    ScreenOrientation,
  ],
})
export class AppModule {}
