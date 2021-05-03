import { Pipe, PipeTransform } from '@angular/core';
import { isEmpty } from '../common.utils';

@Pipe({
  name: 'isEmpty'
})
export class IsEmptyPipe implements PipeTransform {

  transform(value: any): unknown {
    return isEmpty(value);
  }

}
