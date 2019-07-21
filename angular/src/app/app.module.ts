import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './UserAuth/login/login.component';
import { AdminUserComponent } from './admin-comp/admin-user/admin-user.component';
import { AdminComponent } from './admin-comp/admin/admin.component';
import { LogoutButtonComponent } from './UserAuth/logout-button/logout-button.component';
import { EventsComponent } from './events/events.component';
import { EventdetailComponent } from './eventdetail/eventdetail.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { NavComponent } from './nav/nav.component';
import { AdminUserChangeComponent } from './admin-comp/admin-user-change/admin-user-change.component';
import { AdminUserDeleteComponent } from './admin-comp/admin-user-delete/admin-user-delete.component';

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
    AdminUserDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
