import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multicolor'
})
export class MulticolorPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let result: string = "";
    for (let index = 0; index < value.length; index++) {
      if (index % 2 == 0)
        result += (value[index]).toUpperCase();
      else
        result += (value[index]).toLowerCase();
    }

    return result;
  }

}
