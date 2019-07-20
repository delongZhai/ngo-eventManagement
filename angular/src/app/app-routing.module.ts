import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsComponent } from './events/events.component';
import {CreateEventComponent} from './create-event/create-event.component';
import {DeleteeventComponent} from './deleteevent/deleteevent.component';

const routes: Routes = [
  {
      path:'home',
      component:EventsComponent,
      children:[
      {  path: 'delete/:id', 
         component:DeleteeventComponent},
         {path: '**', redirectTo: 'home'}
      ]
  },
  {path:'addevent',component:CreateEventComponent}, 
  {path:'',redirectTo:'home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
