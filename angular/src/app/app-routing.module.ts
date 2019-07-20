import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsComponent } from './events/events.component';
import {CreateEventComponent} from './create-event/create-event.component';
import {DeleteeventComponent} from './deleteevent/deleteevent.component';
import { EventdetailComponent } from './eventdetail/eventdetail.component';

const routes: Routes = [
 
  {path:"addevent",component:CreateEventComponent},
  {path:'home',component:EventsComponent,children:[
       {  path: 'delete/:id', component:DeleteeventComponent},
        ]
  }
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
