import { Injectable, OnInit } from "@angular/core";
// import { CarItem } from './carrinho-compras/caritem.model';
import { ActivatedRoute } from "@angular/router";
import { MenuModel } from "./restaurantes/restaurante/destalhes-restaurante/menu.model";
import { CartItem } from "./restaurantes/restaurante/destalhes-restaurante/menu/carrinho-compras/caritem.model";
import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";
import { MEAT } from "./restaurantes/api";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { SnackService } from "./shared/snackbar/snack.service";
import { tap } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class CarrinhoComprasService implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private snackService: SnackService
  ) {}

  MEAT = MEAT;

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  };

  items = [];
  localItems;
  finalItems;

  umItem;
  itemSoma;
  arraySoma = [];
  valorFinal;

  lastOrder;

  codigoPagamento;

  onCodigoPagamento(codPagamento) {
    this.codigoPagamento = codPagamento;
    console.log(this.codigoPagamento);
  }

  addItem(item: MenuModel) {
    let foundItem = this.items.find(mItem => mItem.menuItem.id === item.id);

    if (localStorage.getItem("cartItem")) {
      this.finalItems = this.localItems;
    }

    if (foundItem) {
      foundItem.quantity += 1;
    } else {
      this.items.push(new CartItem(item));
    }
    this.snackService.notify(`Você adicionou o item ${item.name}`);
    localStorage.setItem("cartItem", JSON.stringify(this.items));
    // console.log(JSON.parse(localStorage.getItem("cartItem")));
    this.total()
    // console.log(this.valorFinal)
  }

  removeItem(item) {
    this.items.splice(this.items.indexOf(item), 1);
    this.snackService.notify(`Você removeu o item ${item.menuItem.name}`);
    localStorage.setItem("cartItem", JSON.stringify(this.items));
    this.total()
    // console.log(this.valorFinal)
  }
  clear() {
    this.arraySoma.length = 0;
    this.items.length = 0;
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
    localStorage.setItem("cartItem", JSON.stringify(this.items));
    this.total();
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
    localStorage.setItem("cartItem", JSON.stringify(this.items));
    this.total()
    return (this.valorFinal = this.valorFinal);
  }

  // Enviando pedido se o usuário estiver autenticado

  enviarPedido(infoPedido) {
    return this.http
      .post(`${this.MEAT}/orders`, infoPedido)
      .pipe(tap(order => (this.lastOrder = order)));
  }

  ngOnInit(): void {
    // console.log(this.valorFinal)
    this.total()
    this.items.length = 0;
  }
}
