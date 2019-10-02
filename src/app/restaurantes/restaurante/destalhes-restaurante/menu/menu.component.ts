import { Component, OnInit, Input } from "@angular/core";
import { RestaurantesService } from "../../../restaurantes.service";
import { ActivatedRoute } from "@angular/router";
import { CarrinhoComprasService } from "../../../../carrinho-compras.service";

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

  valorFinal = this.carrinhoCompraService.valorFinal;
  routeParam = this.route.parent.snapshot.params["id"];
  outroRestaurantes = false;

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
    // console.log(this.route.parent.snapshot.params["id"])
  }

  addItem(item) {
    if (this.items.length == 0) {
      this.carrinhoCompraService.addItem(item);
    } else if (
      this.items[0].menuItem.restaurantId !=
      this.route.parent.snapshot.params["id"]
    ) {
      this.outroRestaurantes = true;
      // window.alert("Restaurantes Diferentes");
    } else {
      this.carrinhoCompraService.addItem(item);
    }
    this.total()
  }

  removeItem(item) {
    this.carrinhoCompraService.removeItem(item);
  }

  clear() {
    this.carrinhoCompraService.clear();
    this.outroRestaurantes = false;
  }

  total() {
    if (
      this.items[0].menuItem.restaurantId !=
      this.route.parent.snapshot.params["id"]
    ) {
      this.outroRestaurantes = true;
    } else this.carrinhoCompraService.total();

    this.valorFinal = this.carrinhoCompraService.valorFinal;

    // console.log(this.valorSoma)
  }
}
