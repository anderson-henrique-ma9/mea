import { Injectable, OnInit } from "@angular/core";
import {
  CanLoad,
  Route,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";

import { LoginService } from "./login/login.service";

@Injectable()
export class LoggedInGuard implements CanLoad, CanActivate {
  constructor(private loginService: LoginService) {}

  canActivate(
    activatedRoute: ActivatedRouteSnapshot,
    routerSate: RouterStateSnapshot
  ): boolean {
    /* console.log(activatedRoute)
    console.log(routerSate) */
    return this.checkAuthentication(activatedRoute.routeConfig.path);
  }

  canLoad(route: Route): boolean {
    // console.log(route)
    return this.checkAuthentication(route.path);
  }

  checkAuthentication(path: string): boolean {
    const loggedIn = this.loginService.isLoggedIn();
    if (!this.loginService.isLoggedIn()) {
      this.loginService.handleLogin(`/${path}`);
    }

    return loggedIn;
  }
}
