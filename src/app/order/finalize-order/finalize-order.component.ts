import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CarrinhoComprasService } from '../../carrinho-compras.service';
import { RestaurantesService } from 'src/app/restaurantes/restaurantes.service';

@Component({
  selector: 'app-finalize-order',
  templateUrl: './finalize-order.component.html',
  styleUrls: ['./finalize-order.component.css']
})
export class FinalizeOrderComponent implements OnInit {
  constructor(
    private carrinhoComprasService: CarrinhoComprasService,
    private restaurantesService: RestaurantesService
  ) {}

  restaurante;

  items = this.carrinhoComprasService.items;
  idRestauranteAtual;

  formasDePagamento = [
    {
      nome: 'Dinheiro',
      codigo: 'MON'
    },
    {
      nome: 'Cartão de Débito',
      codigo: 'DEB'
    },
    {
      nome: 'Vale Refeição',
      codigo: 'REF'
    }
  ];
  codPagamento;

  @Input() formData;

  @Output() teste = new EventEmitter();

  @Output() enviarCodPag = new EventEmitter();

  // codigoPagamento

  enviarFormaPagamento(codPagamento) {
    // console.log(codPagamento);
    this.codPagamento = codPagamento;
    this.enviarCodPag.emit(codPagamento);
  }

  ngOnInit() {
    console.log(this.formData.value.formaPagamento);
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

  onSubmit() {
    console.log(this.formData.value);
  }
}
