import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'secondToTime'
})
export class SecondToTimePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let sec_num  = parseInt(JSON.stringify(value).split('.')[0],10)
    let hours = Math.floor(sec_num / 3600);
    let minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    let seconds = sec_num - (hours * 3600) - (minutes * 60);

    if (hours < 10) {let hour = "0" + hours; }
    if (minutes < 10) {let minute = "0" + minutes; }
    if (seconds < 10) {let second = "0" + seconds; }
    return hours + 'h' + minutes + 'm' + seconds + '.' + parseInt(JSON.stringify(value).split('.')[1].substring(0, 3));
    //return seconds;
  }

}
