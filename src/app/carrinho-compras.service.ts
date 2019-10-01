import { Injectable, OnInit } from "@angular/core";
// import { CarItem } from './carrinho-compras/caritem.model';
// import { MenuModel } from '../menu.model';
import { ActivatedRoute } from "@angular/router";
import { element } from "protractor";

@Injectable({
  providedIn: "root"
})
export class CarrinhoComprasService implements OnInit {
  items = [];

  constructor(private route: ActivatedRoute) {}

  quantidadeItem = {
    id: "",
    qte: ""
  };
  itemExistente;
  novoItem;

  addItem(item) {
    // console.log(item.id);

    // console.log(this.items.map())
    /* if (this.items.length == 0) {
      item.quantidadeItem = this.quantidadeItem;
      this.items.push(item);
      this.items[0].quantidadeItem.id = item.id;
      this.items[0].quantidadeItem.qte = 1; */
    // console.log(this.items);
    // } else {
    if (!(this.items.length > 0)) {
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
    }

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
