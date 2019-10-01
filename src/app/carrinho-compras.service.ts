import { Injectable, OnInit } from "@angular/core";
// import { CarItem } from './carrinho-compras/caritem.model';
import { ActivatedRoute } from "@angular/router";
import { element } from "protractor";
import { MenuModel } from "./restaurantes/restaurante/destalhes-restaurante/menu.model";
import { CartItem } from "./restaurantes/restaurante/destalhes-restaurante/menu/carrinho-compras/caritem.model";

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
    // console.log(this.route);

    if (foundItem) {
      foundItem.quantity += 1;
      // console.log(this.items)
    } else {
      this.items.push(new CartItem(item));

      // console.log(this.items)
    }

    // código anterior não funcional
    // console.log(item.id);

    // console.log(this.items.map())
    /* if (this.items.length == 0) {
      item.quantidadeItem = this.quantidadeItem;
      this.items.push(item);
      this.items[0].quantidadeItem.id = item.id;
      this.items[0].quantidadeItem.qte = 1; */
    // console.log(this.items);
    // } else {
    /* if (!(this.items.length > 0)) {
      item.quantidadeItem = this.quantidadeItem;
      this.items.push(item);
      this.items[0].quantidadeItem.id = item.id;
      this.items[0].quantidadeItem.qte = 1;
    } else {
      for (this.itemExistente of this.items) {
        // console.log(this.itemExistente);
        if (this.itemExistente.id !== item.id) {
          item.quantidadeItem = this.quantidadeItem;
          this.items.push(item);
          console.log(this.itemExistente);
          this.itemExistente.quantidadeItem.qte = 1;
        }
      }
    } */

    // }

    /* else {
      if (this.itemExistente) {
        this.itemExistente[0].quantidadeItem.qte += 1;
        console.log(this.items);
      } else if (!this.itemExistente) {
        item.quantidadeItem = this.quantidadeItem;
        this.items.push(item);
        console.log(this.items)
      }
    } */

    /* else {
      for (let i = 0; i < this.items.length; i++) {
        // console.log(this.items[i].id);
        
        if (
          this.items[i].id == item.id &&
          this.items[i].quantidadeItem.qte &&
          this.items[i].quantidadeItem.id == item.id
        ) {
          this.items[].item.quantidadeItem.qte += 1;
          console.log(this.items);
        } else if (this.items[i].id != item.id) {
          item.quantidadeItem = this.quantidadeItem;
          this.items.push(item);
          this.items[0].quantidadeItem.id = item.id;
          console.log(this.items);
        }
        // console.log(this.items);
      }
      // console.log(this.items[(this.items.length - 1)]["restaurantId"]);
    } */
  }

  removeItem(item) {
    // console.log(this.items)
    // console.log(item)
    // console.log(this.items.indexOf(item), 1)
    this.items.splice(this.items.indexOf(item), 1)
    // console.log(foundItem)
    
  }

  total() {
    // return console.log(this.soma)
    // return this.items.map(item => item.value()).reduce((prev,value) => prev + value, 1)
    // if (this.items.length > 0) {
    // for (let a = 0; a < this.items.length; a++) {
    //   this.valorSoma.push(
    //     console.log(this.items[a].menuItem.price * this.items[a].quantity)
    //   );
    // }
    // this.valorSoma.reduce((prev, value) => prev + value);
    this.arraySoma.length = 0;

    for (let a = 0; a < this.items.length; a++) {
      this.itemSoma = this.items[a].menuItem.price * this.items[a].quantity;
      // console.log((this.itemSoma = this.items[a].menuItem.price * this.items[a].quantity));
      // console.log(this.valorSoma);

      this.arraySoma.push(this.itemSoma);
      this.valorFinal = this.arraySoma.reduce((prev, value) => prev + value);
    }
    // console.log(this.valorFinal);
    return this.valorFinal = this.valorFinal;
  }

  clear() {
    this.arraySoma.length = 0;
    this.items.length = 0;
  }

  ngOnInit(): void {}
}
