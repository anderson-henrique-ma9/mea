import { Injectable, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { tap } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class OrderService implements OnInit {
  ngOnInit() {
    console.log("orderService iniciado");
  }

  constructor(private httpClient: HttpClient) {}

  consultaCep(cep) {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, OPTIONS"
      })
    };
    httpOptions.headers.append("Content-Type", "application/json");
    httpOptions.headers.append("Access-Control-Allow-Origin", "*");
    httpOptions.headers.append("Access-Control-Allow-Methods", "GET, OPTIONS");

    console.log(cep);
    this.httpClient
      .get(`http://viacep.com.br/ws/${cep}/json`)
      .pipe(tap(dados => console.log(dados)))
      .subscribe();
  }
}
