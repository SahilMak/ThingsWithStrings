import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuitarRoutingModule } from './guitar-routing.module';
import { GuitarComponent } from './guitar.component';


@NgModule({
  declarations: [GuitarComponent],
  imports: [
    CommonModule,
    GuitarRoutingModule
  ]
})
export class GuitarModule { }
