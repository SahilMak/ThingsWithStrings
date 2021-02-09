import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GuitarComponent } from './guitar.component';

const routes: Routes = [{ path: '', component: GuitarComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuitarRoutingModule { }
