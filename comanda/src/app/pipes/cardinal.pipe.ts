import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cardinal'
})
export class CardinalPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let result: string = "nº" + value;
    return result;
  }

}
