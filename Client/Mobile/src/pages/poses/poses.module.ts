import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PosesPage } from './poses';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    PosesPage,
  ],
  imports: [
    IonicPageModule.forChild(PosesPage),
    TranslateModule.forChild()
  ],
  exports: [
    PosesPage
  ]
})
export class PosesPageModule {}
