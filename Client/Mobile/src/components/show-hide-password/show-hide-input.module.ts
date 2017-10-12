import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ShowHideInput } from './show-hide-input';

@NgModule({
  declarations: [ ShowHideInput ],
  exports: [ ShowHideInput ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ShowHideInputModule {}
