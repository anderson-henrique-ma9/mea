import { Component, OnInit, Input } from "@angular/core";
import { RestaurantesService } from "../../../restaurantes.service";
import { ActivatedRoute } from "@angular/router";
import { MenuModel } from "../menu.model";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.css"]
})
export class MenuComponent implements OnInit {
  constructor(
    private restaurantesService: RestaurantesService,
    private route: ActivatedRoute
  ) {}

  itensRestaurante: MenuModel;

  ngOnInit() {
    this.restaurantesService
      .menuRestaurante(this.route.parent.snapshot.params["id"])
      .subscribe(
        itensRestaurante => (this.itensRestaurante = itensRestaurante)
      );
  }
}
