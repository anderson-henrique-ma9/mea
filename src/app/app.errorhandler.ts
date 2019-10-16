import { ErrorHandler, Injectable, NgZone, Injector } from "@angular/core";
import { HttpErrorResponse } from "@angular/common/http";
import { SnackService } from "./shared/snackbar/snack.service";
import { LoginService } from './security/login/login.service';

@Injectable()
export class GlobalErrorHandler extends ErrorHandler {
  constructor(private ns: SnackService, private zone: NgZone, private injector: Injector) {
    super();
  }

  handleError(errorResponse: HttpErrorResponse) {
    // console.log(errorResponse);

    if (errorResponse instanceof HttpErrorResponse) {
      
      const message = errorResponse.error.message;
      this.zone.run(() => {
        switch (errorResponse.status) {
          case 401:
            this.ns.notify(message || this.injector.get(LoginService).handleLogin());
            break;
          case 403:
            this.ns.notify(message || 'Não autorizado');
            break;
          case 404:
            this.ns.notify(message || 'Recurso não encontrado, por favor verifique a rede ou o caminho!');
            break;
          case 400:
            this.ns.notify(message || "Por favor, digite um cep válido!")
            break;
        }
      });
    }

    super.handleError(errorResponse);
  }
}
