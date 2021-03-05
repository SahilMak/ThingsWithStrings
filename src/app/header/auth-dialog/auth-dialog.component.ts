import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthProvider } from 'ngx-auth-firebaseui';

@Component({
  selector: 'app-auth-dialog',
  templateUrl: './auth-dialog.component.html',
  styleUrls: ['./auth-dialog.component.scss']
})
export class AuthDialogComponent implements OnInit {

  providers = AuthProvider;

  constructor(public dialogRef: MatDialogRef<AuthDialogComponent>) { }

  ngOnInit(): void {
  }

  getUserInfo(data: any): void {
    console.log(data);
  }

  printError(error: any): void {
    console.log(error);
  }

}
