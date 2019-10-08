import { Injectable, EventEmitter } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class SnackService {
  notifier = new EventEmitter<string>();

  constructor() {}

  notify(message: string) {
    this.notifier.emit(message);
  }
}
