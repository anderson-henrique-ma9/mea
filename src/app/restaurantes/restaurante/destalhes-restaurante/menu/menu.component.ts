import { Component, OnInit, Input } from "@angular/core";
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
    trigger('emptyCartItem', [
      state('ready', style({opacity: 1, transform: 'translateX(0px)'})),
      transition(':enter', [
        style({opacity: 0, transform: 'translateX(-30px)'}),
        animate('300ms 0s ease-in')
      ])
    ])
  ]
})
export class MenuComponent implements OnInit {

  emptyCartState = 'ready'
  cartItemState
  itemsState = "ready";
  constructor(
    private restaurantesService: RestaurantesService,
    private route: ActivatedRoute,
    public carrinhoCompraService: CarrinhoComprasService
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
    this.total();

    console.log(this.cartItemState);
  }

  removeItem(item) {
    this.carrinhoCompraService.removeItem(item);
    this.cartItemState = "removed";
    this.cartItemState = "ready";
    console.log(this.cartItemState);
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
