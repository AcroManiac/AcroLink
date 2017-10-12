import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';
import { TranslateModule } from '@ngx-translate/core';

import { ShowHideInputModule } from '../../../components/show-hide-password/show-hide-input.module';
import { ShowHideContainerModule } from '../../../components/show-hide-password/show-hide-container.module';

@NgModule({
  declarations: [
    LoginPage,
  ],
  imports: [
    ShowHideInputModule,
    ShowHideContainerModule,
    IonicPageModule.forChild(LoginPage),
    TranslateModule.forChild(),
  ],
  exports: [
    LoginPage
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class LoginPageModule {}
