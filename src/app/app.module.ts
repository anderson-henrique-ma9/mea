import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { SobreComponent } from "./sobre/sobre.component";
import { HeaderComponent } from "./header/header.component";
import { RouterModule, Routes, Router } from "@angular/router";
import { ROUTES } from "./app.routes";
import { HomeComponent } from "./home/home.component";
import { RestaurantesComponent } from "./restaurantes/restaurantes.component";
import { RestauranteComponent } from "./restaurantes/restaurante/restaurante.component";
import { RestaurantesService } from "./restaurantes/restaurantes.service";
import { DestalhesRestauranteComponent } from "./restaurantes/restaurante/destalhes-restaurante/destalhes-restaurante.component";
import { MenuComponent } from "./restaurantes/restaurante/destalhes-restaurante/menu/menu.component";
import { CarrinhoComprasComponent } from "./restaurantes/restaurante/destalhes-restaurante/menu/carrinho-compras/carrinho-compras.component";
import { AvaliacoesComponent } from "./restaurantes/restaurante/destalhes-restaurante/avaliacoes/avaliacoes.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { CarrinhoComprasService } from "./carrinho-compras.service";
import { OrderComponent } from "./order/order.component";
import { FooterComponent } from "./footer/footer.component";
import { OrderItemsComponent } from "./order/order-items/order-items.component";
import { FinalizeOrderComponent } from "./order/finalize-order/finalize-order.component";
import { OrderSummaryComponent } from './order-summary/order-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    SobreComponent,
    HeaderComponent,
    HomeComponent,
    RestaurantesComponent,
    RestauranteComponent,
    DestalhesRestauranteComponent,
    MenuComponent,
    CarrinhoComprasComponent,
    AvaliacoesComponent,
    OrderComponent,
    FooterComponent,
    OrderItemsComponent,
    FinalizeOrderComponent,
    OrderSummaryComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES),
    FontAwesomeModule
  ],
  providers: [CarrinhoComprasService, RestaurantesService],
  bootstrap: [AppComponent]
})
export class AppModule {}
