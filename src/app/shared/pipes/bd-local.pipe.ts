import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bdLocal'
})
export class BdLocalPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
      // @ts-ignore
    //for english --> 'en-IN'
    return value.toLocaleString('bn-BD');
  }

}
