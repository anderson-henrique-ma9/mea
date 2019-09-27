import { Component, OnInit } from "@angular/core";
import { RestaurantesService } from "../../../restaurantes.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-avaliacoes",
  templateUrl: "./avaliacoes.component.html",
  styleUrls: ["./avaliacoes.component.css"]
})
export class AvaliacoesComponent implements OnInit {
  constructor(
    private restaurantesService: RestaurantesService,
    private route: ActivatedRoute,
    
  ) {}
    avaliacoes: any;
  ngOnInit() {
    this.restaurantesService.avaliacoesRestaurante(this.route.parent.snapshot.params['id']).subscribe(
      avaliacoes => (this.avaliacoes = avaliacoes)
    );
  }
}
