import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent
} from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable, Injector } from "@angular/core";
import { LoginService } from "./login/login.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private injector: Injector) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const loginService = this.injector.get(LoginService); // resolvendo dependências cíclicas

    /* 
    let headers = new HttpHeaders();

    if (this.loginService.isLoggedIn()) {
      headers = headers.set(
        "Authorization",
        `Bearer ${this.loginService.user.accessToken}`
      );
    }
     */

    if (loginService.isLoggedIn()) {
      // o clone existe porque o request não pode ser mudado
      const authRequest = request.clone({
        setHeaders: {
          Authorization: `Bearer ${loginService.user.accessToken}`
        }
      });
      // console.log(authRequest);
      return next.handle(authRequest); // processa o authRequest, não o request padrão
    } else {
      // console.log(request)
      return next.handle(request); // se não estiver autenticado, segue o fluxo padrão
    }

    // console.log("interceptando", request);
  }
}
