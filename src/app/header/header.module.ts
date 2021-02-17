import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [ HeaderComponent ],
  exports: [ HeaderComponent ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ]
})
export class HeaderModule { }
