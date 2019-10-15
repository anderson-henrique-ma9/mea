import { Component, OnInit, Input, AfterContentInit } from "@angular/core";
import { RestaurantesService } from "../../../restaurantes.service";
import { ActivatedRoute } from "@angular/router";
import { CarrinhoComprasService } from "../../../../carrinho-compras.service";
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes
} from "@angular/animations";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.css"],
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
    ]),
    trigger("cartItemAppeard", [
      state("ready", style({ opacity: 1 })),
      state("removed", style({ opacity: 0 })),
      transition(":enter", [
        animate(
          "300ms 0s ease-in",
          keyframes([
            style({ opacity: 0, transform: "translateX(-30px)", offset: 0 }),
            style({ opacity: 0.8, transform: "translateX(10px)", offset: 0.8 }),
            style({ opacity: 1, transform: "translateX(0px)", offset: 1 })
          ])
        )
      ]),
      transition(":leave", [
        animate(
          "300ms 0s ease-out",
          keyframes([
            style({ opacity: 1, transform: "translateX(0px)", offset: 0 }),
            style({ opacity: 0.2, transform: "translateX(10px)", offset: 0.8 }),
            style({ opacity: 0, transform: "translateX(-30px)", offset: 1 })
          ])
        )
      ])
    ]),
    trigger("emptyCartItem", [
      state("ready", style({ opacity: 1, transform: "translateX(0px)" })),
      transition(":enter", [
        style({ opacity: 0, transform: "translateX(-30px)" }),
        animate("300ms 0s ease-in")
      ])
    ])
  ]
})
export class MenuComponent implements OnInit, AfterContentInit {
  localItems: [] = [];

  emptyCartState = "ready";
  cartItemState;
  itemsState = "ready";
  constructor(
    private restaurantesService: RestaurantesService,
    private route: ActivatedRoute,
    private carrinhoComprasService: CarrinhoComprasService
  ) {}

  items;
  // quantidade = 0;

  valorFinal = this.carrinhoComprasService.valorFinal;
  routeParam = this.route.parent.snapshot.params["id"];
  outrosRestaurantes = false;

  itensRestaurante;

  ngOnInit() {
  }
  ngAfterContentInit(): void {
    // this.carrinhoComprasService.total();
    // this.valorFinal = this.carrinhoComprasService.valorFinal;
    // console.log(this.valorFinal);
  }
}
