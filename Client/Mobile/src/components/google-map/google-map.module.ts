import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { GoogleMap } from './google-map';

@NgModule({
	declarations: [ GoogleMap ],
	exports: [ GoogleMap ],
	schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class GoogleMapModule {}
