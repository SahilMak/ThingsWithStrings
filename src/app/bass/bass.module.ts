import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BassRoutingModule } from './bass-routing.module';
import { BassComponent } from './bass.component';


@NgModule({
  declarations: [BassComponent],
  imports: [
    CommonModule,
    BassRoutingModule
  ]
})
export class BassModule { }
