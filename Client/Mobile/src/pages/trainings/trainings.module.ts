import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TrainingsPage } from './trainings';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    TrainingsPage,
  ],
  imports: [
    IonicPageModule.forChild(TrainingsPage),
    TranslateModule.forChild()
  ],
  exports: [
    TrainingsPage
  ]
})
export class TrainingsPageModule {}
