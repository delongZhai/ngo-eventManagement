import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login-comp/login/login.component';
import { AdminUserComponent } from './admin-comp/admin-user/admin-user.component';
import { AdminComponent } from './admin-comp/admin/admin.component';
import { LogoutButtonComponent } from './login-comp/logout-button/logout-button.component';
import { EventsComponent } from './event-comp/events/events.component';
import { EventdetailComponent } from './event-comp/eventdetail/eventdetail.component';
import { CreateEventComponent } from './event-comp/create-event/create-event.component';
import { NavComponent } from './nav/nav.component';
import { AdminUserChangeComponent } from './admin-comp/admin-user-change/admin-user-change.component';
import { AdminUserDeleteComponent } from './admin-comp/admin-user-delete/admin-user-delete.component';

import { UserViewComponent } from './event-comp/user-view/user-view.component';
import { EventregistrationdetailComponent } from './event-comp/event-control/eventregistrationdetail/eventregistrationdetail.component';
import { EventregisterconfirmationComponent } from './event-comp/event-control/eventregisterconfirmation/eventregisterconfirmation.component';
import { RouterModule } from '@angular/router';
import { Eventregistrationdetail2Component } from './event-comp/event-control/eventregistrationdetail2/eventregistrationdetail2.component';
import { Eventregistrationdetail3Component } from './event-comp/event-control/eventregistrationdetail3/eventregistrationdetail3.component';
import { Eventregistrationdetail4Component } from './event-comp/event-control/eventregistrationdetail4/eventregistrationdetail4.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { EventRegistrationComponent } from './event-comp/event-control/event-registration/event-registration.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminUserComponent,
    AdminComponent,
    LogoutButtonComponent,
    EventsComponent,
    EventdetailComponent,
    CreateEventComponent,
    NavComponent,
    AdminUserChangeComponent,
    AdminUserDeleteComponent,
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
