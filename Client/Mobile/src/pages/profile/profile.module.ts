import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfilePage } from './profile';
import { TranslateModule } from '@ngx-translate/core';
import { PreloadImageModule } from '../../components/preload-image/preload-image.module';

@NgModule({
  declarations: [
    ProfilePage,
  ],
  imports: [
    PreloadImageModule,
    IonicPageModule.forChild(ProfilePage),
    TranslateModule.forChild()
  ],
  exports: [ ProfilePage ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ProfilePageModule {}
