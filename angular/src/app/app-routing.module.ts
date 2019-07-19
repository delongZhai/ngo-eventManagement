import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './UserAuth/login/login.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './UserAuth/auth/auth.guard';
import { AuthAdminGuard } from './UserAuth/auth/auth-admin.guard';


const routes: Routes =
[
  { path: '', pathMatch: 'full', redirectTo: 'login'},
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AuthAdminGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
