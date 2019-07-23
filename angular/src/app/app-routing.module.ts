import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsComponent } from './events/events.component';
import {CreateEventComponent} from './create-event/create-event.component';
import {DeleteeventComponent} from './deleteevent/deleteevent.component';
import { EventdetailComponent } from './eventdetail/eventdetail.component';
import {EventchangeComponent} from './eventchange/eventchange.component';
const routes: Routes = [
  {
    path:'home',
    component:EventsComponent
},

  {  path: 'home/delete/:id', 
     component:DeleteeventComponent},
     
     {  path: 'home/change/:id', 
     component:EventchangeComponent},
  
{path:'home/addevent',component:CreateEventComponent }, 
{path:'',redirectTo:'/home',pathMatch:'full'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }