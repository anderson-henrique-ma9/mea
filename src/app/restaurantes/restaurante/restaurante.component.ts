import { Component, OnInit, Input } from "@angular/core";
import { Restaurante } from "../restaurante.model";
import {
  trigger,
  state,
  style,
  animate,
  transition
} from "@angular/animations";

@Component({
  selector: "app-restaurante",
  templateUrl: "./restaurante.component.html",
  styleUrls: ["./restaurante.component.css"],
  animations: [
    trigger('restaurantAppeard', [
      state('ready', style({
        opacity: 1
      })),
      transition(':enter', [
        style({opacity: 0}),
        animate ('300ms 0s ease-in-out')
      ])
    ])
  ]
})
export class RestauranteComponent implements OnInit {
  @Input() restaurantes: Restaurante;

  restaurantState = 'ready'

  constructor() {}

  ngOnInit() {}
}
