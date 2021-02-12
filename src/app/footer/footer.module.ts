import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './footer.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [ FooterComponent ],
  exports: [ FooterComponent ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ]
})
export class FooterModule { }
