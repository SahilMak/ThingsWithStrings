import { Component, OnInit } from '@angular/core';

import { Categories } from '../shared/constants/strings';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  categories: string[];

  constructor() {
    this.categories = Categories;
  }

  ngOnInit(): void {
  }

}
