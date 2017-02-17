import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { WorkshopComponent } from './workshop.component';
import { WorkshopDetailComponent } from './workshop-detail.component';
import { LoginComponent } from './login.component';
import { AttendeeService } from './attendee.service';


@NgModule({
  declarations: [
    AppComponent,
    WorkshopComponent,
    WorkshopDetailComponent,
    LoginComponent
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
        path: 'workshop',
        component: WorkshopComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
    ])
  ],
  providers: [AttendeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
