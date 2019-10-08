import { Component, OnInit } from "@angular/core";
import { SnackService } from "./snack.service";
import {
  trigger,
  state,
  style,
  animate,
  transition
} from "@angular/animations";
import { switchMap, tap } from "rxjs/operators";
import { timer } from "rxjs";

@Component({
  selector: "app-snackbar",
  templateUrl: "./snackbar.component.html",
  styleUrls: ["./snackbar.component.css"],
  animations: [
    trigger("snack-visibility", [
      state(
        "hidden",
        style({
          opacity: 0,
          bottom: "0px"
        })
      ),
      state(
        "visible",
        style({
          opacity: 1,
          bottom: "30px"
        })
      ),
      transition("hidden => visible", animate("500ms 0s ease-in")),
      transition("visible => hidden", animate("500ms 0s ease-out"))
    ])
  ]
})
export class SnackbarComponent implements OnInit {
  constructor(private snackService: SnackService) {}
  visibility = "hidden";
  message = "Hello there";
  ngOnInit() {
    this.snackService.notifier
      .pipe(
        tap(message => {
          this.visibility = "visible";
          this.message = message;
        }),
        switchMap(message => timer(3000))
      )
      .subscribe(timer => (this.visibility = "hidden"));
  }
}
