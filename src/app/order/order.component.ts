import { Component, OnInit, Input, ViewChild } from "@angular/core";
import { CarrinhoComprasService } from "../carrinho-compras.service";
import { FormBuilder, Validators } from "@angular/forms";
import { FinalizeOrderComponent } from './finalize-order/finalize-order.component';

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

  formaPagamento;

  @ViewChild(FinalizeOrderComponent, {static: false})
  private finalizeOrder: FinalizeOrderComponent;


  endereco = this.fb.group({
    rua: ["", [Validators.required, Validators.minLength(5)]],
    numero: ["", [Validators.required, Validators.pattern('^[0-9]*$')]],
    complemento: [""],
    formaPagamento: []
  });

  receberFormaPagamento(codPagamento) {
    this.formaPagamento = codPagamento;
    console.log(this.formaPagamento)
    this.endereco.patchValue({
      formaPagamento: this.formaPagamento
    })
  }

  ngOnInit() {
    // console.log(this.items);
  }
}
