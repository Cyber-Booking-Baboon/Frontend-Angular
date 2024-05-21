import {inject, Injectable} from "@angular/core";
import {CanActivate, CanActivateFn, Router} from "@angular/router";
import {AuthService} from "../auth.service";
import {KeycloakService} from "../../keycloak/keycloak.service";

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(
    public auth: AuthService,
    public router: Router
  ) { }

  canActivate(): boolean {
    if (this.auth.isLoggedIn()) {
      this.router.navigate(['/accommodations']);
      return false;
    }
    return true;
  }
}
