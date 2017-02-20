import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import {
    AngularFireModule,
    AuthMethods,
    AuthProviders
} from "angularfire2";

import { AppComponent } from './app.component';
import { WorkshopComponent } from './workshop.component';
import { WorkshopDetailComponent } from './workshop-detail.component';
import { LoginComponent } from './login.component';
import { SuccessComponent } from './success.component';
import { WelcomeComponent } from './welcome.component';

import { AttendeeService } from './attendee.service';
import { FirebaseService } from './firebase.service'; //Para almacenar info creado por mi
import { AuthService } from './auth.service';


const firebaseConfig = {
    apiKey: "AIzaSyCY_U1hwFn9QZY2cdZUe1FVfXt1jY6aZjo",
    authDomain: "case17-workshop.firebaseapp.com",
    databaseURL: "https://case17-workshop.firebaseio.com",
    storageBucket: "case17-workshop.appspot.com",
    messagingSenderId: "184836656953"
};

@NgModule({
  declarations: [
    AppComponent,
    WorkshopComponent,
    WorkshopDetailComponent,
    LoginComponent,
    SuccessComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'workshop',
        component: WorkshopComponent
      },
      {
        path: 'workshop-detail',
        component: WorkshopDetailComponent
      },
      {
        path: 'success',
        component: SuccessComponent
      },
      {
        path: 'welcome',
        component: WelcomeComponent
      },

    ]),

     AngularFireModule.initializeApp(firebaseConfig, {
            // provider: AuthProviders.Twitter,
            method: AuthMethods.Popup
        })
  ],
  providers: [AttendeeService, FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
