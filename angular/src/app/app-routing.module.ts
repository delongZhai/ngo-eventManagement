import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin/admin.component';
import { AdminUserComponent } from './admin-user/admin-user.component';
import { AdminUserChangeComponent } from './admin-user-change/admin-user-change.component';
import { AdminUserDeleteComponent } from './admin-user-delete/admin-user-delete.component';

// import { } from './'


const routes: Routes = [
  {path: '', redirectTo: 'admin', pathMatch: 'full'},
  {path: 'admin', component: AdminComponent,
  children: [
    { path: '', redirectTo: 'user', pathMatch: 'full'},
    {
      path: 'user', component: AdminUserComponent, children: [
        { path: '', redirectTo: 'user', pathMatch: 'full'},
        { path: 'change', component: AdminUserChangeComponent }, //add a new record
        { path: 'change/:id', component: AdminUserChangeComponent }, //modify existing
        { path: 'delete/:id', component: AdminUserDeleteComponent}, //delete a record
        {path: '**', redirectTo: 'admin'}

      ]
    },
  ]},
  {path: '**', redirectTo: 'admin'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
