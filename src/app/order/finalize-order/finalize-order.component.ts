import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { CarrinhoComprasService } from "../../carrinho-compras.service";
import { RestaurantesService } from "src/app/restaurantes/restaurantes.service";
import { Order, OrderItem } from "../order.model";
@Component({
  selector: "app-finalize-order",
  templateUrl: "./finalize-order.component.html",
  styleUrls: ["./finalize-order.component.css"]
})
export class FinalizeOrderComponent implements OnInit {
  constructor(
    public carrinhoComprasService: CarrinhoComprasService,
    private restaurantesService: RestaurantesService
  ) {}

  restaurante;

  items = this.carrinhoComprasService.items;
  idRestauranteAtual;

  formasDePagamento = [
    {
      nome: "Dinheiro",
      codigo: "MON"
    },
    {
      nome: "Cartão de Débito",
      codigo: "DEB"
    },
    {
      nome: "Vale Refeição",
      codigo: "REF"
    }
  ];
  codPagamento;

  orderItem: OrderItem[] = [];

  @Input() formData;

  @Output() teste = new EventEmitter();

  @Output() enviarCodPag = new EventEmitter();
  @Output() emitirItensPedido = new EventEmitter();

  // codigoPagamento

  enviarFormaPagamento(codPagamento) {
    // console.log(codPagamento);
    this.codPagamento = codPagamento;
    this.enviarCodPag.emit(codPagamento);
  }

  ngOnInit() {
    // console.log(this.formData.value.formaPagamento);
    // console.log(this.formasDePagamento);
    // console.log(this.teste.emit(true));
    // implmenentação p/ frete dinâmico
    /* let saberRestauranteAtual = this.items.find(
      itemAtual =>
        (itemAtual.menuItem.restauranteId = this.items[
          "0"
        ].menuItem.restaurantId)
    );

    console.log(saberRestauranteAtual.menuItem.restaurantId);

    this.restaurante = this.restaurantesService
      .restaurantById(saberRestauranteAtual.menuItem.restaurantId);

    console.log(this.restaurante); */
  }

  onSubmit(orderForm: Order) {
    // console.log(orderForm);
    this.orderItem.length = 0;
    for (let item of this.items) {
      this.orderItem.push(new OrderItem(item.quantity, item.menuItem.id));
    }
    // console.log(this.orderItem);

    this.emitirItensPedido.emit(this.orderItem);
  }
}
