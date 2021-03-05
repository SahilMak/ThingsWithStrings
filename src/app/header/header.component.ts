import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { AuthDialogComponent } from './auth-dialog/auth-dialog.component';
import { Categories, SubCategories } from '../shared/constants/strings';
import { AuthService } from '../core/services/auth.service';
import { DarkModeService } from '../core/services/dark-mode.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  categories: string[];
  isDarkOn = false;
  isUserLoggedIn = false;
  subCategories: any;
  unsubscribe = new Subject();

  constructor(private authService: AuthService,
              private darkModeService: DarkModeService,
              public dialog: MatDialog) {
    this.categories = Categories;
    this.subCategories = SubCategories;
  }

  ngOnInit(): void {
    this.authService.userInfo.pipe(takeUntil(this.unsubscribe)).subscribe((info) => {
      this.isUserLoggedIn = info;
    });
  }

  openAuthDialog(): void {
    if (!this.isUserLoggedIn) {
      const dialogRef = this.dialog.open(AuthDialogComponent);
      dialogRef.afterClosed().pipe(takeUntil(this.unsubscribe)).subscribe((info) => {
        if (info) {
          this.authService.userInfo.next(info);
        }
      });
    }
  }

  toggleTheme(): void {
    this.isDarkOn = !this.isDarkOn;
    this.darkModeService.isDarkOn.next(this.isDarkOn);
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

}
