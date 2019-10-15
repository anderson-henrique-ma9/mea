import { Component, OnInit } from "@angular/core";
import { LoginService } from "./security/login/login.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "pratica01";
  constructor(private loginService: LoginService) {}

  ngOnInit() {
    if (localStorage.getItem("session") != null) {
      this.loginService.user = JSON.parse(localStorage.getItem("session"));
      // console.log(this.loginService);
    } else {
      // console.log('Não existe registro de sessão')
    }
  }
}
