import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrchestralComponent } from './orchestral.component';

const routes: Routes = [{ path: '', component: OrchestralComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrchestralRoutingModule { }
