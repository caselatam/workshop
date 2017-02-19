import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { WorkshopComponent } from './workshop.component';
import { WorkshopDetailComponent } from './workshop-detail.component';
import { LoginComponent } from './login.component';
import { SuccessComponent } from './success.component';

import { AttendeeService } from './attendee.service';
import { FirebaseService } from './firebase.service';


@NgModule({
  declarations: [
    AppComponent,
    WorkshopComponent,
    WorkshopDetailComponent,
    LoginComponent,
    SuccessComponent
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
      }

    ])
  ],
  providers: [AttendeeService, FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
