import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { LoginService } from "../../../security/login/login.service";
import { OrderService } from "../../../order/order-service.service";

@Component({
  selector: "app-user-form",
  templateUrl: "./user-form.component.html",
  styleUrls: ["./user-form.component.css"]
})
export class UserFormComponent implements OnInit {
  enderecoCep: any;
  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private orderService: OrderService
  ) {}

  profileForm: FormGroup;

  ngOnInit() {
    this.profileForm = this.fb.group({
      nome: this.fb.control({value: this.loginService.user.name, disabled: true}, [Validators.required]),
      sobrenome: this.fb.control('', [Validators.required], ),
      email: this.fb.control(this.loginService.user.email, [
        Validators.required
      ]),
      confirmaEmail: this.fb.control(this.loginService.user.email, [
        Validators.required
      ]),
      rua: this.fb.control("", [Validators.required, Validators.minLength(5)]),
      numero: this.fb.control("", [
        Validators.required,
        Validators.pattern("^[0-9]*$")
      ]),
      complemento: this.fb.control(""),
      bairro: this.fb.control("", [Validators.required]),
      cidade: this.fb.control("", Validators.required),
      estado: this.fb.control("", [
        Validators.required,
        Validators.maxLength(2)
      ]),
      cep: this.fb.control("", [Validators.required])
    });
  }

  consultaCep(cep) {
    this.orderService.consultaCep(cep).subscribe(dados => {
      this.enderecoCep = dados;
      this.profileForm.controls["rua"].setValue(this.enderecoCep.logradouro);
      this.profileForm.controls["bairro"].setValue(this.enderecoCep.bairro);
      this.profileForm.controls["cidade"].setValue(this.enderecoCep.localidade);
      this.profileForm.controls["estado"].setValue(this.enderecoCep.uf);
      // console.log(this.enderecoCep);
      // response => console.log(response)
    });
  }
}
