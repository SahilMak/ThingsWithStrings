import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DarkModeService } from './services/dark-mode.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [DarkModeService]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule already imported');
    }
  }
}
