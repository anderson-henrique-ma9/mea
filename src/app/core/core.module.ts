import { NgModule, ErrorHandler } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RestaurantesService } from "../restaurantes/restaurantes.service";
import { CarrinhoComprasService } from "../carrinho-compras.service";
import { SnackService } from "../shared/snackbar/snack.service";
import { LoginService } from "../security/login/login.service";
import { LoggedInGuard } from "../security/loggedin.guard";
import { LeaveOrderGuard } from "../order/leave-order.guard";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthInterceptor } from "../security/auth.interceptor";
import { CustomCurrencyPipe } from '../customPipes/custom-currency.pipe';
import { OrderService } from '../order/order-service.service';

@NgModule({
  declarations: [
    CustomCurrencyPipe
  ],
  providers: [
    RestaurantesService,
    CarrinhoComprasService,
    SnackService,
    LoginService,
    LoggedInGuard,
    LeaveOrderGuard,
    OrderService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  exports: [
    CustomCurrencyPipe
  ]
})
export class CoreModule {}
