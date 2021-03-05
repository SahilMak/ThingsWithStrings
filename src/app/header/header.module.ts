import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';

import { HeaderComponent } from './header.component';
import { SharedModule } from '../shared/shared.module';
import { AuthDialogComponent } from './auth-dialog/auth-dialog.component';


@NgModule({
  declarations: [ HeaderComponent, AuthDialogComponent ],
  exports: [ HeaderComponent ],
  imports: [
    CommonModule,
    NgxAuthFirebaseUIModule,
    RouterModule,
    SharedModule
  ]
})
export class HeaderModule { }
