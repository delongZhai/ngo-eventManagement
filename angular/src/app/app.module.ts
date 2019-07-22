import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import{FormsModule} from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventsComponent } from './events/events.component';
import { EventdetailComponent } from './eventdetail/eventdetail.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { DeleteeventComponent } from './deleteevent/deleteevent.component';
import { EventchangeComponent } from './eventchange/eventchange.component';

@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    EventdetailComponent,
    CreateEventComponent,
    DeleteeventComponent,
    EventchangeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
