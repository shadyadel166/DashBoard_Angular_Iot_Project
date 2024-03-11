
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from '../Auth.service';

@Injectable({
    providedIn:"root"
  })

  export class AuthGuard implements CanActivate {
    constructor(private auth:AuthServiceService,private router:Router){}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {
        // throw new Error('Method not implemented.');
        if(this.auth.GetFromStorage()==null){
            alert('Sorry you Must be login first ')
            // this.router.navigate(["/login",state.url])
            this.router.navigateByUrl("/login")
      return false;

        } else{
            return true;
          }
    }
  }
