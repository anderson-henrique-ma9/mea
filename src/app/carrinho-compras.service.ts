import { Injectable, OnInit } from "@angular/core";
// import { CarItem } from './carrinho-compras/caritem.model';
// import { MenuModel } from '../menu.model';
import { ActivatedRoute } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class CarrinhoComprasService implements OnInit {
  items = [];

  constructor(private route: ActivatedRoute) {}

  addItem(item) {
    // console.log(this.items.map())

    this.items.push(item);
    // console.log(this.items[(this.items.length - 1)]["restaurantId"]);
  }

  removeItem(item) {}

  total(): number {
    return 0;
  }

  clear() {
    // console.log('limpou')

    this.items = [];
    console.log(this.items.length);
  }

  ngOnInit(): void {}
}
