import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, Http, RequestOptions } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { AuthHttp, AuthConfig } from 'angular2-jwt';
import { Storage } from '@ionic/storage';
import { AuthService } from '../providers/auth-service';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ProfileService } from '../providers/profile-service';
import { ReferenceService } from '../providers/reference-service';


export function authHttpServiceFactory(http: Http, options: RequestOptions, storage: Storage) {
  return new AuthHttp(new AuthConfig({
    tokenName: 'token',
    headerPrefix: 'JWT',
    noJwtError: true,
    globalHeaders: [{'Accept':'application/json'}],
    tokenGetter: (() => storage.get('id_token')),
  }), http, options);
}

export function createTranslateLoader(http: Http) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    IonicStorageModule.forRoot({
      name: '__acrolink',
      driverOrder: ['sqlite', 'indexeddb', 'websql']
    }),
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [Http]
      }
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
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
    ReferenceService,
  ],
})
export class AppModule {}
