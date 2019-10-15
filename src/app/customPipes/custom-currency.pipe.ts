import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "customCurrency"
})
export class CustomCurrencyPipe implements PipeTransform {
  transform(valor: number, ...args: any[]): any {
    let valorString = valor.toFixed(2).replace(".", ",");
    let valorFinal = `R$ ${valorString}`;

    return valorFinal;
  }
}
