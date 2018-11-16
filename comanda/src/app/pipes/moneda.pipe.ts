import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'moneda'
})
export class MonedaPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (args == 'peso')
      return '$' + value;
    else
      return 'u$s' + (value / 37).toFixed(2);
  }

}
