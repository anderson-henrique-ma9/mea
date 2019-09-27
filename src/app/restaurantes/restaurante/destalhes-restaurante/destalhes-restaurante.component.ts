import { Component, OnInit, Input } from "@angular/core";
import { RestaurantesService } from "../../restaurantes.service";
import { Restaurante } from "../../restaurante.model";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-destalhes-restaurante",
  templateUrl: "./destalhes-restaurante.component.html",
  styleUrls: ["./destalhes-restaurante.component.css"]
})
export class DestalhesRestauranteComponent implements OnInit {
  restaurante: Restaurante;
  constructor(
    private restaurantesService: RestaurantesService,
    private route: ActivatedRoute
  ) {}

    
  ngOnInit() {
    this.restaurantesService
      .restaurantById(this.route.snapshot.params["id"])
      .subscribe(restaurante => (this.restaurante = restaurante));
  }
}
