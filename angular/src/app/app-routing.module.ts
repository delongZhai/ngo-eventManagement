import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './UserAuth/login/login.component';
import { AdminComponent } from './admin-comp/admin/admin.component';
import { EventsComponent } from './events/events.component';
import { AdminUserComponent } from './admin-comp/admin-user/admin-user.component';
import { AdminUserChangeComponent } from './admin-comp/admin-user-change/admin-user-change.component';
import { AdminUserDeleteComponent } from './admin-comp/admin-user-delete/admin-user-delete.component';
import { AuthGuard } from './UserAuth/auth/auth.guard';
import { AuthAdminGuard } from './UserAuth/auth/auth-admin.guard';


const routes: Routes =
[
  { path: '', pathMatch: 'full', redirectTo: 'login'},
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AuthAdminGuard],
    children:
    [
      { path: '', redirectTo: 'user', pathMatch: 'full'},
      {
        path: 'user', component: AdminUserComponent, children:
        [
          { path: '', redirectTo: 'user', pathMatch: 'full'},
          { path: 'change', component: AdminUserChangeComponent }, //add a new record
          { path: 'change/:id', component: AdminUserChangeComponent }, //modify existing
          { path: 'delete/:id', component: AdminUserDeleteComponent}, //delete a record
          {path: '**', redirectTo: 'admin'}
        ]
      }
    ]
  },
  { path: 'events', component: EventsComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
