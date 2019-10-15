import { BrowserModule } from "@angular/platform-browser";
import { NgModule, ErrorHandler } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { LocationStrategy, HashLocationStrategy } from "@angular/common";
import {
  RouterModule,
  Routes,
  Router,
  PreloadAllModules
} from "@angular/router";
import { ROUTES } from "./app.routes";

import { AppComponent } from "./app.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from "./home/home.component";
import { RestaurantesComponent } from "./restaurantes/restaurantes.component";
import { RestauranteComponent } from "./restaurantes/restaurante/restaurante.component";
import { DestalhesRestauranteComponent } from "./restaurantes/restaurante/destalhes-restaurante/destalhes-restaurante.component";
import { MenuComponent } from "./restaurantes/restaurante/destalhes-restaurante/menu/menu.component";
import { CarrinhoComprasComponent } from "./restaurantes/restaurante/destalhes-restaurante/menu/carrinho-compras/carrinho-compras.component";
import { AvaliacoesComponent } from "./restaurantes/restaurante/destalhes-restaurante/avaliacoes/avaliacoes.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { FooterComponent } from "./footer/footer.component";
import { OrderSummaryComponent } from "./order-summary/order-summary.component";
import { CoreModule } from "./core/core.module";
import { SnackbarComponent } from "./shared/snackbar/snackbar.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { LoginComponent } from "./security/login/login.component";
import { UserDetailComponent } from "./header/user-detail/user-detail.component";
import { GlobalErrorHandler } from "./app.errorhandler";
import { ItensComponent } from "./restaurantes/restaurante/destalhes-restaurante/menu/itens/itens.component";
import { CustomCurrencyPipe } from './customPipes/custom-currency.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    RestaurantesComponent,
    RestauranteComponent,
    DestalhesRestauranteComponent,
    MenuComponent,
    CarrinhoComprasComponent,
    AvaliacoesComponent,
    FooterComponent,
    OrderSummaryComponent,
    SnackbarComponent,
    PageNotFoundComponent,
    LoginComponent,
    UserDetailComponent,
    ItensComponent,
    // CustomCurrencyPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES, {
      preloadingStrategy: PreloadAllModules
    }),
    FontAwesomeModule,
    CoreModule
  ],
  providers: [
    /* {provide: LocationStrategy, useClass: HashLocationStrategy} */

    { provide: ErrorHandler, useClass: GlobalErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
