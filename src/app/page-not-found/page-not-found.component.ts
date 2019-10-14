import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import {
  trigger,
  state,
  style,
  transition,
  animate
} from "@angular/animations";

@Component({
  selector: "app-page-not-found",
  templateUrl: "./page-not-found.component.html",
  animations: [
    trigger("notFoundAppeard", [
      state(
        "ready",
        style({
          opacity: 1
        })
      ),
      transition(":enter", [
        style({ opacity: 0 }),
        animate("1s 0s ease-in-out")
      ])
    ])
  ]
})
export class PageNotFoundComponent implements OnInit {
  notFoundState = "ready";
  constructor(private route: ActivatedRoute) {}

  paginaAtual: string;

  ngOnInit() {
    this.paginaAtual = this.route.snapshot.url[0].path;
    // console.log(this.paginaAtual);
  }
}
