import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SettingsPage } from './settings';
import { PreloadImageModule } from '../../components/preload-image/preload-image.module';

// Required to change translation language.
import { HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { createTranslateLoader } from "../../app/app.module";

@NgModule({
  declarations: [
    SettingsPage,
  ],
  imports: [
  	PreloadImageModule,
    IonicPageModule.forChild(SettingsPage),
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    })
  ],
  exports: [ SettingsPage ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class SettingsPageModule {}
