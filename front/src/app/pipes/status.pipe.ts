import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status',
})
export class StatusPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    let v: string = '-';
    if (value === 1) v = 'Activo';
    else v = 'Inactivo';
    return v;
  }
}
