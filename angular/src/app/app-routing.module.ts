import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login-comp/login/login.component';
import { AdminComponent } from './admin-comp/admin/admin.component';
import { EventsComponent } from './event-comp/events/events.component';
import { AdminUserComponent } from './admin-comp/admin-user/admin-user.component';
import { AdminUserChangeComponent } from './admin-comp/admin-user-change/admin-user-change.component';
import { AdminUserDeleteComponent } from './admin-comp/admin-user-delete/admin-user-delete.component';
import { AuthGuard } from './login-comp/auth/auth.guard';
import { AuthAdminGuard } from './login-comp/auth/auth-admin.guard';
import { UserViewComponent } from './event-comp/user-view/user-view.component';
import { EventregistrationdetailComponent } from './event-comp/event-control/eventregistrationdetail/eventregistrationdetail.component';
import { EventregisterconfirmationComponent } from './event-comp/event-control/eventregisterconfirmation/eventregisterconfirmation.component';
import { Eventregistrationdetail2Component } from './event-comp/event-control/eventregistrationdetail2/eventregistrationdetail2.component';
import { Eventregistrationdetail3Component } from './event-comp/event-control/eventregistrationdetail3/eventregistrationdetail3.component';
import { Eventregistrationdetail4Component } from './event-comp/event-control/eventregistrationdetail4/eventregistrationdetail4.component';
import { EventRegistrationComponent } from './event-comp/event-control/event-registration/event-registration.component';
import { AdminEventComponent } from './admin-comp/admin-event/admin-event.component';
import { AdminEventChangeComponent } from './admin-comp/admin-event-change/admin-event-change.component';
import { AdminEventDeleteComponent } from './admin-comp/admin-event-delete/admin-event-delete.component';

const routes: Routes =
[
  { path: '', pathMatch: 'full', redirectTo: 'login'},
  { path: 'login', component: LoginComponent },
  {path: 'admin', component: AdminComponent,
  children:
  [
    // { path: '', redirectTo: 'user', pathMatch: 'full'},
    {
      path: 'user', component: AdminUserComponent, children: [
        { path: '', redirectTo: 'user', pathMatch: 'full'},
        { path: 'change', component: AdminUserChangeComponent }, //add a new record
        { path: 'change/:id', component: AdminUserChangeComponent }, //modify existing
        { path: 'delete/:id', component: AdminUserDeleteComponent}, //delete a record
        {path: '**', redirectTo: 'user'}
      ]
    },
    {
      path: 'event', component: AdminEventComponent, children: [
        { path: '', redirectTo: 'event', pathMatch: 'full'},
        { path: 'change', component: AdminEventChangeComponent }, //add a new record
        { path: 'change/:id', component: AdminEventChangeComponent }, //modify existing
        { path: 'delete/:id', component: AdminEventDeleteComponent}, //delete a record
        {path: '**', redirectTo: 'event'}
      ]
    }
  ]},
  {path: '**', redirectTo: 'login'},
  { path: 'admin/events', component: EventsComponent, canActivate: [AuthAdminGuard] },
  {path:'Userview', component:UserViewComponent,canActivate: [AuthGuard]},
  {path:'Userview/eventregistrationdetail', component: EventregistrationdetailComponent},
  {path:'Userview/eventregistrationdetail/eventregistration', component: EventRegistrationComponent},
  {path:'Userview/eventregistrationdetail/eventregistration/eventregisterconfirmation', component: EventregisterconfirmationComponent },
  {path:'Userview/eventregistrationdetail2/eventregistration/eventregisterconfirmation', component: EventregisterconfirmationComponent },
  {path:'Userview/eventregistrationdetail3/eventregistration/eventregisterconfirmation', component: EventregisterconfirmationComponent },
  {path:'Userview/eventregistrationdetail4/eventregistration/eventregisterconfirmation', component: EventregisterconfirmationComponent },
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