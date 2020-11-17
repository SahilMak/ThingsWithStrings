import { Component, OnInit } from '@angular/core';

import { Categories, SubCategories } from '../shared/constants/strings';
import { DarkModeService } from '../core/services/dark-mode.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  categories: string[];
  isDarkOn = false;
  subCategories: any;

  constructor(private darkModeService: DarkModeService) {
    this.categories = Categories;
    this.subCategories = SubCategories;
  }

  ngOnInit(): void {
  }

  toggleTheme() {
    this.isDarkOn = !this.isDarkOn;
    this.darkModeService.isDarkOn.next(this.isDarkOn);
  }

}
