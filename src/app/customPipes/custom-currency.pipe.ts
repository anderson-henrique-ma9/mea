import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customCurrency'
})
export class CustomCurrencyPipe implements PipeTransform {

  transform(valor: number, ...args: any[]): any {
    let valorString = valor.toString().replace('.', ',').split(',')
    let splited = valorString
    let valorFinal;
    if(splited[1] == undefined) {
      valorFinal = "R$ ".concat(splited[0] + ",00")
    } else {
      if(splited[1].length == 1) {
        valorFinal = "R$ " + splited[0] + "," + splited[1] + "0"
      } else if(splited[1].length > 1) {
        valorFinal = "R$ " + splited[0] + "," + splited[1]
      }
    }

    // console.log(valorFinal)
    return valorFinal ;
  }

}
