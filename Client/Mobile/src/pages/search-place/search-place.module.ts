import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchPlacePage } from './search-place';
import { TranslateModule } from '@ngx-translate/core';
import { GoogleMapModule } from '../../components/google-map/google-map.module';
// import { SearchPlaceContainerModule } from '../../components/search-place/search-place-container.module';

@NgModule({
  declarations: [
    SearchPlacePage,
  ],
  imports: [
    GoogleMapModule,
  	// SearchPlaceContainerModule,
    IonicPageModule.forChild(SearchPlacePage),
    TranslateModule.forChild()
  ],
  exports: [ SearchPlacePage ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class SearchPlacePageModule {}
