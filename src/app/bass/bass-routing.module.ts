import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BassComponent } from './bass.component';

const routes: Routes = [{ path: '', component: BassComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BassRoutingModule { }
