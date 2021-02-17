import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { DarkModeService } from '../core/services/dark-mode.service';
import { Categories } from '../shared/constants/strings';
import { Theme } from '../shared/constants/types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  categories: string[];
  theme: Theme = 'dark';
  unsubscribe = new Subject();

  constructor(private darkModeService: DarkModeService) {
    this.categories = Categories;
  }

  ngOnInit(): void {
    this.darkModeService.isDarkOn.pipe(takeUntil(this.unsubscribe)).subscribe((bool) => {
      this.theme = (bool) ? 'light' : 'dark';
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

}
