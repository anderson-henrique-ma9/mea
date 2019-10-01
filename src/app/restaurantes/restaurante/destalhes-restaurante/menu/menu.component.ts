import { Component, OnInit, Input } from "@angular/core";
import { RestaurantesService } from "../../../restaurantes.service";
import { ActivatedRoute } from "@angular/router";
import { CarrinhoComprasService } from "../../../../carrinho-compras.service";
import { CarItem } from './caritem.model';

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.css"]
})
export class MenuComponent implements OnInit {
  constructor(
    private restaurantesService: RestaurantesService,
    private route: ActivatedRoute,
    private carrinhoCompraService: CarrinhoComprasService
  ) {}

  items = this.carrinhoCompraService.items;
  // quantidade = 0;

  valorTotal = this.carrinhoCompraService.total();

  itensRestaurante;



  ngOnInit() {
    /* this.restaurantesService
      .menuRestaurante(this.route.parent.snapshot.params["id"])
      .subscribe(
        itensRestaurante => (this.itensRestaurante = itensRestaurante)
      ); */
    this.itensRestaurante = this.restaurantesService.menuRestaurante(
      this.route.parent.snapshot.params["id"]
    );
    // console.log(this.valorTotal)
  }

  addItem(item) {
    // item.quantidade = this.quantidade++;
    // console.log(this.items)
    if (this.items.length == 0) {
      this.carrinhoCompraService.addItem(item);
      console.log(this.items);
    } else if (
      this.items[this.items.length - 1]["restaurantId"] !=
        this.route.parent.snapshot.params["id"] &&
      this.items.length > 0
    ) {
      window.alert("restaurantes diferentes");
    } else {
      this.carrinhoCompraService.addItem(item);
      // this.quantidade = this.quantidade + 1;
      // console.log(this.quantidade);
    }
    console.log(this.valorTotal);

  }

  clear() {
    this.carrinhoCompraService.clear();
  }
  
}
