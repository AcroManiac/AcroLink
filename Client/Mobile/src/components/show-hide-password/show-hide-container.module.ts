import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ShowHideContainer } from './show-hide-container';

@NgModule({
  declarations: [ ShowHideContainer ],
  exports: [ ShowHideContainer ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class ShowHideContainerModule {}
