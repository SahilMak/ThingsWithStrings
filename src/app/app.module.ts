import { AngularFireModule } from '@angular/fire';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderModule } from './header/header.module';
import { FooterModule } from './footer/footer.module';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AppRoutingModule,
    BrowserAnimationsModule,
    HeaderModule,
    NgxAuthFirebaseUIModule.forRoot(environment.firebase),
    FooterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
