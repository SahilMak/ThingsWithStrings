import { Component } from '@angular/core';

import { DarkModeService } from './core/services/dark-mode.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  darkMode: boolean;
  title = 'things-with-strings';

  constructor(private darkModeService: DarkModeService) {
    this.darkModeService.isDarkOn.subscribe((bool) => {
      this.darkMode = bool;
    });
  }
}
