import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { SobreComponent } from './sobre/sobre.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule, Routes, Router } from '@angular/router';
import { ROUTES } from './app.routes';
import { HomeComponent } from './home/home.component';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { RestauranteComponent } from './restaurantes/restaurante/restaurante.component';
import { RestaurantesService } from './restaurantes/restaurantes.service';
import { DestalhesRestauranteComponent } from './restaurantes/restaurante/destalhes-restaurante/destalhes-restaurante.component';
import { MenuComponent } from './restaurantes/restaurante/destalhes-restaurante/menu/menu.component';
import { CarrinhoComprasComponent } from './restaurantes/restaurante/destalhes-restaurante/carrinho-compras/carrinho-compras.component';
import { ItemMenuComponent } from './restaurantes/restaurante/destalhes-restaurante/item-menu/item-menu.component';
import { AvaliacoesComponent } from './restaurantes/restaurante/destalhes-restaurante/avaliacoes/avaliacoes.component';
import { registerLocaleData } from '@angular/common';


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
    ItemMenuComponent,
    AvaliacoesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgbModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    RestaurantesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
