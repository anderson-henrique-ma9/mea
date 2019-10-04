import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-order-summary",
  templateUrl: "./order-summary.component.html"
})
export class OrderSummaryComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  rates: number[] = [1, 2, 3, 4, 5];

  previousRate;
  
  rate: number = 0;

  rated = false;

  setRate(r) {
    this.rate = r;
    this.previousRate = undefined;
    this.rated = true;
  }

  setTemporaryRate(r: number) {
    if (this.previousRate === undefined) {
      this.previousRate = this.rate;
      this.rate = r;
    }
  }

  clearTemporaryRate() {
    if (this.previousRate !== undefined) {
      this.rate = this.previousRate;
      this.previousRate = undefined;
    }
  }
}
