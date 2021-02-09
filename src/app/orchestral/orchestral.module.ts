import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrchestralRoutingModule } from './orchestral-routing.module';
import { OrchestralComponent } from './orchestral.component';


@NgModule({
  declarations: [OrchestralComponent],
  imports: [
    CommonModule,
    OrchestralRoutingModule
  ]
})
export class OrchestralModule { }
