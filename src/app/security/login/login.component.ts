import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { LoginService } from "./login.service";
import { User } from "./user.model";
import { SnackService } from "../../shared/snackbar/snack.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  navigateTo: string;

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private snackService: SnackService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: this.fb.control("", [Validators.required, Validators.email]),
      password: this.fb.control("", [Validators.required])
    });
    if (this.activatedRoute.snapshot.params["to"]) {
      this.navigateTo = this.activatedRoute.snapshot.params["to"]
    } else {
      this.navigateTo = '/'
    }

    // console.log(this.activatedRoute.snapshot.params["to"])
     
  }

  login() {
    this.loginService
      .login(this.loginForm.value.email, this.loginForm.value.password)
      .subscribe(
        user => this.snackService.notify(`Bem vindo(a), ${user.name}`),
        (response) /* HttpErrorResponse */ =>
          this.snackService.notify(response.error.message),
        () => this.router.navigate([atob(this.navigateTo)])
      );
  }
}
