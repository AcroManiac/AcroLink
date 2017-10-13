import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PreloadImage } from './preload-image';

@NgModule({
  declarations: [ PreloadImage ],
  exports: [ PreloadImage ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class PreloadImageModule {}
