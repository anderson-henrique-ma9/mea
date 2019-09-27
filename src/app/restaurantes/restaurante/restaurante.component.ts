import { Component, OnInit, Input } from '@angular/core';
import { Restaurante } from '../restaurante.model';

@Component({
  selector: 'app-restaurante',
  templateUrl: './restaurante.component.html',
  styleUrls: ['./restaurante.component.css']
})
export class RestauranteComponent implements OnInit {

  @Input() restaurantes: Restaurante;

  constructor() { }

  ngOnInit() {
  }

}
