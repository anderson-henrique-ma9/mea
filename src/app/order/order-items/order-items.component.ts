import { Component, OnInit } from "@angular/core";
import { CarrinhoComprasService } from "../../carrinho-compras.service";
import { CartItem } from "../../restaurantes/restaurante/destalhes-restaurante/menu/carrinho-compras/caritem.model";

@Component({
  selector: "app-order-items",
  templateUrl: "./order-items.component.html",
  styleUrls: ["./order-items.component.css"]
})
export class OrderItemsComponent implements OnInit {
  constructor(private carrinhoComprasService: CarrinhoComprasService) {}

  items: CartItem[] = this.carrinhoComprasService.items;
  item;

  ngOnInit() {
    this.carrinhoComprasService.total()

    // console.log(this.item)
  }

  diminuirQuantidade(item) {
    this.carrinhoComprasService.diminuirQuantidade(item);
  }

  aumentarQuantidade(item) {
    this.carrinhoComprasService.aumentarQuantidade(item);
  }
}
