import { Injectable, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { switchMap, tap, take } from "rxjs/operators";
import { timer } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class OrderService {
  endereco: any;

  constructor(private httpClient: HttpClient) {}

  consultaCep(cep) {
    return this.httpClient.get(`/cepApi/${cep}/json`);
  }
}
