import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ramdompipe'
})
export class RamdompipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let ramdom =  Math.floor(Math.random() * Math.floor(value.length));
    return value[ramdom];
  }
}
