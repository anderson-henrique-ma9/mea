import { Component, OnInit, Input } from "@angular/core";
import { RestaurantesService } from "../../../restaurantes.service";
import { ActivatedRoute } from "@angular/router";
import { MenuModel } from "../menu.model";
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
  }

  addItem(item) {
    /* if (
      this.route.parent.snapshot.params["id"] !=
      this.items[(this.items.length - 1)]["restaurantId"]
    ) {
      window.alert("Restaurante diferente");
    } else {
      this.carrinhoCompraService.addItem(item);
    } */

    if (this.items.length == 0) {
      this.carrinhoCompraService.addItem(item);
    } else if (
      this.items[this.items.length - 1]["restaurantId"] !=
      this.route.parent.snapshot.params["id"]
    ) {
      // this.carrinhoCompraService.addItem(item);
      window.alert("restaurantes diferenes");
      // console.log(this.items[(this.items.length - 1)]['restaurantId'])
    } else {
      this.carrinhoCompraService.addItem(item);
    }
  }

  clear() {
    this.carrinhoCompraService.clear();
  }
}
