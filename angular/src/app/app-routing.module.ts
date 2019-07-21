import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './UserAuth/login/login.component';
import { AdminComponent } from './admin-comp/admin/admin.component';
import { EventsComponent } from './events/events.component';

import { AuthGuard } from './UserAuth/auth/auth.guard';
import { AuthAdminGuard } from './UserAuth/auth/auth-admin.guard';


const routes: Routes =
[
  { path: '', pathMatch: 'full', redirectTo: 'login'},
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AuthAdminGuard] },
  { path: 'events', component: EventsComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
