import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminUserComponent } from './admin-user/admin-user.component';
import { AdminComponent } from './admin/admin.component';
import { NavComponent } from './nav/nav.component';
import { AdminUserChangeComponent } from './admin-user-change/admin-user-change.component';
import { AdminUserDeleteComponent } from './admin-user-delete/admin-user-delete.component';
import { AdminEventComponent } from './admin-event/admin-event.component';
import { AdminEventChangeComponent } from './admin-event-change/admin-event-change.component';
import { AdminEventDeleteComponent } from './admin-event-delete/admin-event-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AdminComponent,
    AdminUserComponent,
    AdminUserChangeComponent,
    AdminUserDeleteComponent,
    AdminEventComponent,
    AdminEventChangeComponent,
    AdminEventDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
