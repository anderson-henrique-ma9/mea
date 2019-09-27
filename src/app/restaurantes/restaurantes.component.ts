import { Component, OnInit } from '@angular/core';
import { Restaurante } from './restaurante.model';


@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css']
})
export class RestaurantesComponent implements OnInit {

  restaurantes: Restaurante[] = [
    {
      id: "bread-bakery",
      name: "Bread & Bakery",
      category: "Bakery",
      rating: 4.9,
      imagePath: "assets/img/restaurants/breadbakery.png",
    },
    {
      id: "burger-house",
      name: "Burger House",
      category: "Hamburgers",
      rating: 3.5,
      imagePath: "assets/img/restaurants/burgerhouse.png",
    },
    {
      id: "coffee-corner",
      name: "Coffee Corner",
      category: "Coffee Shop",
      rating: 4.8,
      imagePath: "assets/img/restaurants/coffeecorner.png"
    },
    {
      id: "green-food",
      name: "Green Food",
      category: "Saudável",
      rating: 4.1,
      imagePath: "assets/img/restaurants/greenfood.png",
    }
  ] 
  constructor() { }

  ngOnInit() {
  }

}
