import { Injectable } from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import {map, Observable} from 'rxjs';
import {LogginService} from "./loggin.service";

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private logginService: LogginService, private router: Router, private activatedRoute: ActivatedRoute) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> {
    return this.logginService.getUser().pipe(
      map(user=> {
        if (user) return true;
        else return this.router.createUrlTree(['']);
      })
    )
  }
}

