import { Component, OnInit } from "@angular/core";
import { Restaurante } from "./restaurante.model";
import { RestaurantesService } from "./restaurantes.service";

@Component({
  selector: "app-restaurantes",
  templateUrl: "./restaurantes.component.html",
  styleUrls: ["./restaurantes.component.css"]
})
export class RestaurantesComponent implements OnInit {
  constructor(private restauranteServcice: RestaurantesService) {}

  restaurantes: Restaurante;

  ngOnInit() {
    this.restauranteServcice
      .restaurantes()
      .subscribe(restaurantes => (this.restaurantes = restaurantes));
  }
}
