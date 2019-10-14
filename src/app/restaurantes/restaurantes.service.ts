import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, retry } from "rxjs/operators";
import { Restaurante } from "./restaurante.model";
import { MEAT } from "./api";
import { MenuModel } from "./restaurante/destalhes-restaurante/menu.model";

@Injectable({
  providedIn: "root"
})
export class RestaurantesService {
  constructor(private http: HttpClient) {}

  MEAT = MEAT;

  restaurantes(search?): Observable<Restaurante> {
    return this.http
      .get<Restaurante>(`${this.MEAT}/restaurants`, { params: { q: search } })
      // .pipe(
      //   catchError(res => {
      //     throw console.log("Não foi possível obter os dados do servidor");
      //   })
      // );
  }
  restaurantById(id: string): Observable<Restaurante> {
    return this.http.get<Restaurante>(`${this.MEAT}/restaurants/${id}`);
  }

  menuRestaurante(id: string): Observable<MenuModel> {
    return this.http.get<MenuModel>(`${this.MEAT}/restaurants/${id}/menu`);
  }

  avaliacoesRestaurante(id: string): Observable<any> {
    return this.http.get(`${this.MEAT}/restaurants/${id}/reviews`);
  }
}
