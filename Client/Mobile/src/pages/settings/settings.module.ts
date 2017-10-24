import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SettingsPage } from './settings';
import { TranslateModule } from '@ngx-translate/core';
import { PreloadImageModule } from '../../components/preload-image/preload-image.module';

@NgModule({
  declarations: [
    SettingsPage,
  ],
  imports: [
  	PreloadImageModule,
    IonicPageModule.forChild(SettingsPage),
    TranslateModule.forChild()
  ],
  exports: [ SettingsPage ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class SettingsPageModule {}
