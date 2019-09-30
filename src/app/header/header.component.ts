import { Component, OnInit } from '@angular/core';
import { CarrinhoComprasService } from '../carrinho-compras.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private carrinhoCompra: CarrinhoComprasService) { }

  ngOnInit() {
  }


}
