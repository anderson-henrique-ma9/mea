import { Injectable, OnInit } from "@angular/core";
// import { CarItem } from './carrinho-compras/caritem.model';
import { ActivatedRoute } from "@angular/router";
import { MenuModel } from "./restaurantes/restaurante/destalhes-restaurante/menu.model";
import { CartItem } from "./restaurantes/restaurante/destalhes-restaurante/menu/carrinho-compras/caritem.model";
import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";

@Injectable({
  providedIn: "root"
})
export class CarrinhoComprasService implements OnInit {
  items = [];

  umItem;
  itemSoma;
  arraySoma = [];
  valorFinal;

  constructor(private route: ActivatedRoute) {}

  addItem(item: MenuModel) {
    let foundItem = this.items.find(mItem => mItem.menuItem.id === item.id);

    if (foundItem) {
      foundItem.quantity += 1;
    } else {
      this.items.push(new CartItem(item));
    }
  }

  removeItem(item) {
    this.items.splice(this.items.indexOf(item), 1);
  }

  total() {
    this.arraySoma.length = 0;

    for (let a = 0; a < this.items.length; a++) {
      this.itemSoma = this.items[a].menuItem.price * this.items[a].quantity;

      this.arraySoma.push(this.itemSoma);
      this.valorFinal = this.arraySoma.reduce((prev, value) => prev + value);
    }
    return (this.valorFinal = this.valorFinal);
  }

  clear() {
    this.arraySoma.length = 0;
    this.items.length = 0;
  }

  /* métodos para página de pedido */

  aumentarQuantidade(item) {
    let itemParaAumentar = this.items.find(
      itemLocal => itemLocal.menuItem.id === item.menuItem.id
    );

    itemParaAumentar.quantity += 1;
    this.arraySoma.length = 0;

    for (let a = 0; a < this.items.length; a++) {
      this.itemSoma = this.items[a].menuItem.price * this.items[a].quantity;

      this.arraySoma.push(this.itemSoma);
      this.valorFinal = this.arraySoma.reduce((prev, value) => prev + value);
    }
    return (this.valorFinal = this.valorFinal);
  }

  diminuirQuantidade(item) {
    let itemParaDiminuir = this.items.find(
      itemLocal => itemLocal.menuItem.id === item.menuItem.id
    );
    if (itemParaDiminuir.quantity == 1) {
      this.items.splice(this.items.indexOf(item), 1);
    } else {
      itemParaDiminuir.quantity -= 1;
    }
    this.arraySoma.length = 0;

    for (let a = 0; a < this.items.length; a++) {
      this.itemSoma = this.items[a].menuItem.price * this.items[a].quantity;

      this.arraySoma.push(this.itemSoma);
      this.valorFinal = this.arraySoma.reduce((prev, value) => prev + value);
    }
    return (this.valorFinal = this.valorFinal);
  }

  ngOnInit(): void {}
}
