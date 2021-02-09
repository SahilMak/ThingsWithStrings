import { AngularFireModule } from '@angular/fire';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutUsModule } from './about-us/about-us.module';
import { AccountModule } from './account/account.module';
import { BassModule } from './bass/bass.module';
import { CartModule } from './cart/cart.module';
import { CheckoutModule } from './checkout/checkout.module';
import { CoreModule } from '../app/core/core.module';
import { GuitarModule } from './guitar/guitar.module';
import { HeaderModule } from './header/header.module';
import { FooterModule } from './footer/footer.module';
import { OrchestralModule } from './orchestral/orchestral.module';
import { SharedModule } from '../app/shared/shared.module';
import { WorldModule } from './world/world.module';
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
    AboutUsModule,
    AccountModule,
    BassModule,
    CartModule,
    CheckoutModule,
    CoreModule,
    GuitarModule,
    HeaderModule,
    FormsModule,
    NgxAuthFirebaseUIModule.forRoot(environment.firebase),
    FooterModule,
    OrchestralModule,
    SharedModule,
    WorldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
