import { Component, OnInit } from "@angular/core";
import { CarrinhoComprasService } from "../../../../../carrinho-compras.service";
import { RestaurantesService } from "src/app/restaurantes/restaurantes.service";
import { ActivatedRoute } from "@angular/router";
import { MenuModel } from "../../menu.model";
import {
  trigger,
  state,
  style,
  animate,
  transition
} from "@angular/animations";

@Component({
  selector: "app-itens",
  templateUrl: "./itens.component.html",
  styleUrls: ["./itens.component.css"],
  animations: [
    trigger("itemsAppeard", [
      state(
        "ready",
        style({
          opacity: 1
        })
      ),
      transition(":enter", [
        style({ opacity: 0 }),
        animate("300ms 0s ease-in-out")
      ])
    ])
  ]
})
export class ItensComponent implements OnInit {
  localItems: any;
  constructor(
    public restaurantesService: RestaurantesService,
    private carrinhoComprasService: CarrinhoComprasService,
    private activatedRoute: ActivatedRoute
  ) {}

  items = [];
  itensRestaurante;
  outrosRestaurantes = false;
  valorFinal;
  itemState = "ready";

  ngOnInit() {
    this.restaurantesService
      .menuRestaurante(this.activatedRoute.parent.snapshot.params["id"])
      .subscribe(itens => {
        this.itensRestaurante = itens;
        // console.log(this.itensRestaurante);
      });

    this.items = this.carrinhoComprasService.items;
    // console.log(this.items)
  }

  addItem(item) {
    if (this.items.length == 0) {
      this.carrinhoComprasService.addItem(item);
    } else if (
      this.items[0].menuItem.restaurantId !=
      this.activatedRoute.parent.snapshot.params["id"]
    ) {
      this.outrosRestaurantes = true;
    } else {
      this.carrinhoComprasService.addItem(item);
    }
    // this.carrinhoComprasService.total()
  }
}
