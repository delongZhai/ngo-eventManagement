import { Injectable } from '@angular/core';
import { CanActivate,ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthAdminGuard implements CanActivate
{
  constructor(private authService:AuthService,private router:Router){}

  canActivate(next:ActivatedRouteSnapshot,state:RouterStateSnapshot)
    :Observable<boolean>|Promise<boolean>|boolean
  {
    if(this.authService.isLoggedIn()&&this.authService.isAdmin())
    {
      return true;
    }
    else
    {
      console.log("unauthenticated");
      this.router.navigateByUrl('login');
      return false;
    }
  }
}