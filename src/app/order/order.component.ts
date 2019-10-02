import { Component, OnInit, Input } from "@angular/core";
import { CarrinhoComprasService } from "../carrinho-compras.service";
import { FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-order",
  templateUrl: "./order.component.html",
  styleUrls: ["./order.component.css"]
})
export class OrderComponent implements OnInit {
  constructor(
    private carrinhoComprasService: CarrinhoComprasService,
    private fb: FormBuilder
  ) {}

  items = this.carrinhoComprasService.items;

  formaPagamento


  endereco = this.fb.group({
    rua: ["", [Validators.required, Validators.minLength(5)]],
    numero: ["", [Validators.required, Validators.pattern('^[0-9]*$')]],
    complemento: [""],
    formaPagamento: [this.formaPagamento]
  });

  receberFormaPagamento(codPagamento) {
    this.formaPagamento = codPagamento
  }

  ngOnInit() {
    // console.log(this.items);
  }
}
