import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material/material.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login-comp/login/login.component';
import { AdminComponent } from './admin-comp/admin/admin.component';
import { AdminEventComponent } from './admin-comp/admin-event/admin-event.component';
import { AdminEventChangeComponent } from './admin-comp/admin-event-change/admin-event-change.component';
import { AdminEventDeleteComponent } from './admin-comp/admin-event-delete/admin-event-delete.component';
import { AdminUserComponent } from './admin-comp/admin-user/admin-user.component';
import { AdminUserChangeComponent } from './admin-comp/admin-user-change/admin-user-change.component';
import { AdminUserDeleteComponent } from './admin-comp/admin-user-delete/admin-user-delete.component';
import { LogoutButtonComponent } from './login-comp/logout-button/logout-button.component';
import { EventsComponent } from './event-comp/events/events.component';
import { EventdetailComponent } from './event-comp/eventdetail/eventdetail.component';
import { CreateEventComponent } from './event-comp/create-event/create-event.component';
import { EventRegistrationComponent } from './event-comp/event-control/event-registration/event-registration.component';
import { EventregisterconfirmationComponent } from './event-comp/event-control/eventregisterconfirmation/eventregisterconfirmation.component';
import { EventregistrationdetailComponent } from './event-comp/event-control/eventregistrationdetail/eventregistrationdetail.component';
import { Eventregistrationdetail2Component } from './event-comp/event-control/eventregistrationdetail2/eventregistrationdetail2.component';
import { Eventregistrationdetail3Component } from './event-comp/event-control/eventregistrationdetail3/eventregistrationdetail3.component';
import { Eventregistrationdetail4Component } from './event-comp/event-control/eventregistrationdetail4/eventregistrationdetail4.component';
import { NavComponent } from './nav/nav.component';
import { UserViewComponent } from './event-comp/user-view/user-view.component';

@NgModule({
  declarations:
  [
    AdminComponent,
    AdminEventComponent,
    AdminEventChangeComponent,
    AdminEventDeleteComponent,
    AdminUserComponent,
    AdminUserChangeComponent,
    AdminUserDeleteComponent,
    AppComponent,
    CreateEventComponent,
    EventsComponent,
    EventdetailComponent,
    EventRegistrationComponent,
    EventregisterconfirmationComponent,
    EventregistrationdetailComponent,
    Eventregistrationdetail2Component,
    Eventregistrationdetail3Component,
    Eventregistrationdetail4Component,
    LoginComponent,
    LogoutButtonComponent,
    NavComponent,
    UserViewComponent
  ],
  imports:
  [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
