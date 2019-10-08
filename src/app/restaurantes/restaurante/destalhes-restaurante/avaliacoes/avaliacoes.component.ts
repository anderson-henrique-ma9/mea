import { Component, OnInit } from "@angular/core";
import { RestaurantesService } from "../../../restaurantes.service";
import { ActivatedRoute } from "@angular/router";
import {
  trigger,
  state,
  style,
  animate,
  transition
} from "@angular/animations";

@Component({
  selector: "app-avaliacoes",
  templateUrl: "./avaliacoes.component.html",
  styleUrls: ["./avaliacoes.component.css"],
  animations: [
    trigger("avaliationAppeard", [
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
export class AvaliacoesComponent implements OnInit {
  avaliationState = 'ready'
  constructor(
    private restaurantesService: RestaurantesService,
    private route: ActivatedRoute
  ) {}
  avaliacoes: any;
  ngOnInit() {
    this.restaurantesService
      .avaliacoesRestaurante(this.route.parent.snapshot.params["id"])
      .subscribe(avaliacoes => (this.avaliacoes = avaliacoes));
  }
}
