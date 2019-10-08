import { Component, OnInit, Input } from "@angular/core";
import { RestaurantesService } from "../../restaurantes.service";
import { Restaurante } from "../../restaurante.model";
import { ActivatedRoute } from "@angular/router";
import {
  trigger,
  state,
  style,
  animate,
  transition
} from "@angular/animations";

@Component({
  selector: "app-destalhes-restaurante",
  templateUrl: "./destalhes-restaurante.component.html",
  styleUrls: ["./destalhes-restaurante.component.css"],
  animations: [
    trigger("restaurantDetailsAppeard", [
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
export class DestalhesRestauranteComponent implements OnInit {
  restaurante: Restaurante;
  constructor(
    private restaurantesService: RestaurantesService,
    private route: ActivatedRoute
  ) {}

  restaurantDetailsStatus = "ready";
  ngOnInit() {
    this.restaurantesService
      .restaurantById(this.route.snapshot.params["id"])
      .subscribe(restaurante => (this.restaurante = restaurante));
  }
}
