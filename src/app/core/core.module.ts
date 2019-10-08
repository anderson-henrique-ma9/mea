import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantesService } from '../restaurantes/restaurantes.service';
import { CarrinhoComprasService } from '../carrinho-compras.service';
import { SnackService } from '../shared/snackbar/snack.service';




@NgModule({
  providers: [
    RestaurantesService,
    CarrinhoComprasService,
    SnackService
  ]
})
export class CoreModule { }
