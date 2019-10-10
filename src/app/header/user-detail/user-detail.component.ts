import { Component, OnInit } from "@angular/core";
import { LoginService } from "../../security/login/login.service";
import { Router, NavigationEnd } from "@angular/router";
import { filter } from "rxjs/operators";

@Component({
  selector: "app-user-detail",
  templateUrl: "./user-detail.component.html",
  styleUrls: ["./user-detail.component.css"]
})
export class UserDetailComponent implements OnInit {
  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit() {}

  login() {
    this.loginService.handleLogin();
  }

  logout() {
    this.loginService.logout();
  }
}
