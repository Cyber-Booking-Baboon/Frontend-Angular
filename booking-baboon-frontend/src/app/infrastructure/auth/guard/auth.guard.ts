import {inject, Injectable} from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router, mapToCanActivate, Route, CanActivateFn,
} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from "../auth.service";
import {KeycloakService} from "../../keycloak/keycloak.service";

// @Injectable({
//   providedIn: 'root',
// })
// export class AuthGuard {
//   constructor(
//     private router: Router,
//     private authService: AuthService
//   ) {}
//
//   canActivate(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot
//   ):
//     | Observable<boolean | UrlTree>
//     | Promise<boolean | UrlTree>
//     | boolean
//     | UrlTree {
//     const userRole :string = this.authService.user$.getValue();
//
//     if (userRole == null) {
//       this.router.navigate(['login']);
//       return false;
//     }
//     if (!route.data['role'].includes(userRole)) {
//       this.router.navigate(['accommodations']);
//       return false;
//     }
//     return true;
//   }
// }

export const AuthGuard: CanActivateFn = ()=>{
  const tokenService: KeycloakService = inject(KeycloakService);
  const router: Router = inject(Router);
  if (tokenService.keycloak?.isTokenExpired()){
    router.navigate(['login']);
    return false;
  }
  return true;
}

