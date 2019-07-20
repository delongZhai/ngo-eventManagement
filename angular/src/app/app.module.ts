import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule} from '@angular/common/http';
import { UserViewComponent } from './user-view/user-view.component';
import { EventRegistrationComponent } from './event-registration/event-registration.component';
import {ReactiveFormsModule} from '@angular/forms';
import { EventregistrationdetailComponent } from './eventregistrationdetail/eventregistrationdetail.component';
import { EventregisterconfirmationComponent } from './eventregisterconfirmation/eventregisterconfirmation.component';
import { RouterModule } from '@angular/router';
import { Eventregistrationdetail2Component } from './eventregistrationdetail2/eventregistrationdetail2.component';
import { Eventregistrationdetail3Component } from './eventregistrationdetail3/eventregistrationdetail3.component';
import { Eventregistrationdetail4Component } from './eventregistrationdetail4/eventregistrationdetail4.component';



@NgModule({
  declarations: [
    AppComponent,
    UserViewComponent,
    EventRegistrationComponent,
    EventregistrationdetailComponent,
    EventregisterconfirmationComponent,
    Eventregistrationdetail2Component,
    Eventregistrationdetail3Component,
    Eventregistrationdetail4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
