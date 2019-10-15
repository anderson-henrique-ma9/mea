import { Component, OnInit, OnChanges } from "@angular/core";
import { CarrinhoComprasService } from "../../../../../carrinho-compras.service";
import { ActivatedRoute } from "@angular/router";
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes
} from "@angular/animations";

@Component({
  selector: "app-carrinho-compras",
  templateUrl: "./carrinho-compras.component.html",
  styleUrls: ["./carrinho-compras.component.css"],
  animations: [
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
export class CarrinhoComprasComponent implements OnInit {
  /* variáveis da animação */
  emptyCartState = "ready";
  cartItemState;
  itemsState = "ready";
  /* variáveis da animação */

  outrosRestaurantes = false;
  localItems;
  valorFinal: number = this.carrinhoComprasService.valorFinal;

  constructor(
    private carrinhoComprasService: CarrinhoComprasService,
    private activatedRoute: ActivatedRoute
  ) {}

  items;
  ngOnInit() {
    let localItem = (this.localItems = JSON.parse(
      localStorage.getItem("cartItem")
    ));
    if (localItem) {
      // console.log(localItem);
      this.carrinhoComprasService.items = localItem;
    }

    this.items = this.carrinhoComprasService.items;
    this.total();

    // console.log(this.carrinhoComprasService.valorFinal);
  }

  removeItem(item) {
    this.carrinhoComprasService.removeItem(item);
    this.cartItemState = "removed";
    this.cartItemState = "ready";
    // console.log(this.cartItemState);
    this.total();
  }

  clear() {
    this.carrinhoComprasService.clear();
    this.outrosRestaurantes = false;
    // this.total();
    localStorage.clear();
  }
  total() {
    this.carrinhoComprasService.total();
    if (
      this.items[0].menuItem.restaurantId !==
      this.activatedRoute.parent.snapshot.params["id"]
    ) {
      this.outrosRestaurantes = true;
    } else {
      this.carrinhoComprasService.total();
    } //this.carrinhoComprasService.total();

    /* if (
      this.items[0].menuItem.restaurantId !=
      this.activatedRoute.parent.snapshot.params["id"]
    ) {
      this.outrosRestaurantes = true;
    } else */ this.valorFinal = this.carrinhoComprasService.valorFinal;

    // this.valorFinal = this.carrinhoComprasService.valorFinal;

    // console.log(this.valorSoma)
  }
}
