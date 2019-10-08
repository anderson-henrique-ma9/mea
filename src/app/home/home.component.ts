import { Component, OnInit } from "@angular/core";
import {
  trigger,
  state,
  style,
  animate,
  transition
} from "@angular/animations";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
  animations: [
    trigger("homeAppeard", [
      state(
        "ready",
        style({
          opacity: 1,
          transform: 'translateY(0px)'
        })
      ),
      transition(":enter", [
        style({ opacity: 0, transform: 'translateY(400px)' }),
        animate("0.8s 0s ease-in-out")
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {
  homeState = "ready";
  constructor() {}

  ngOnInit() {}
}
