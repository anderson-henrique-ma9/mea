import { Injectable, OnInit } from "@angular/core";
// import { CarItem } from './carrinho-compras/caritem.model';
// import { MenuModel } from '../menu.model';
import { ActivatedRoute } from "@angular/router";
import { element } from 'protractor';

@Injectable({
  providedIn: "root"
})
export class CarrinhoComprasService implements OnInit {
  items = [];

  constructor(private route: ActivatedRoute) {}

  quantidade = 1;

  addItem(item) {
    // console.log(this.items.map())

    this.items.push(item);
    // console.log(this.items[(this.items.length - 1)]["restaurantId"]);
  }

  removeItem(item) {}

  total() {
    let soma;

    
  }

  clear() {
    // console.log('limpou')
    this.items.length = 0;

    // for (let i = this.items.length; i >= 0 ; i--){
    //   this.items.pop();
    //   console.log(this.items)
    // }
  }

  ngOnInit(): void {}
}
