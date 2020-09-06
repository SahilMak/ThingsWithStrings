import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Categories } from './constants/strings';


@NgModule({
  declarations: [
    Categories
  ],
  exports: [
    Categories
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
