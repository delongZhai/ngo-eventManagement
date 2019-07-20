import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventRegistrationComponent } from './event-registration/event-registration.component';
import {EventregistrationdetailComponent} from './eventregistrationdetail/eventregistrationdetail.component';
import { UserViewComponent } from './user-view/user-view.component';
import { EventregisterconfirmationComponent } from './eventregisterconfirmation/eventregisterconfirmation.component';
import { Eventregistrationdetail2Component } from './eventregistrationdetail2/eventregistrationdetail2.component';
import { Eventregistrationdetail3Component } from './eventregistrationdetail3/eventregistrationdetail3.component';
import { Eventregistrationdetail4Component } from './eventregistrationdetail4/eventregistrationdetail4.component';


const routes: Routes = [
  {path:'', redirectTo:'/', pathMatch:'full'},
  {path:'Userview', component:UserViewComponent},
  {path:'Userview/eventregistrationdetail', component: EventregistrationdetailComponent},
  {path:'Userview/eventregistrationdetail/eventregistration', component: EventRegistrationComponent},
  {path:'Userview/eventregistrationdetail/eventregistration/eventregisterconfirmation', component: EventregisterconfirmationComponent },
  {path:'Userview/eventregistrationdetail2', component :Eventregistrationdetail2Component},
  {path:'Userview/eventregistrationdetail3', component: Eventregistrationdetail3Component},
  {path:'Userview/eventregistrationdetail4', component: Eventregistrationdetail4Component},
  {path:'Userview/eventregistrationdetail2/eventregistration', component: EventRegistrationComponent},
  {path:'Userview/eventregistrationdetail3/eventregistration', component: EventRegistrationComponent},
  {path:'Userview/eventregistrationdetail4/eventregistration', component: EventRegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


/*{path: 'login' , component: loginComponent},
  {path: 'admin', component: adminComponent},
  {path: 'events', component: eventsComponent}*/