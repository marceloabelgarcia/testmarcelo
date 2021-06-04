import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender',
})
export class GenderPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    let v: string = '-';
    if (value === 1) v = 'Male';
    else v = 'Female';
    return v;
  }
}
