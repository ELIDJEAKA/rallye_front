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
    let hour = JSON.stringify(hours)
    let minute = JSON.stringify(minutes)
    let second = JSON.stringify(seconds)
    if (hours < 10) { hour = "0" + hours; }
    if (minutes < 10) { minute = "0" + minutes; }
    if (seconds < 10) { second = "0" + seconds; }
    return hour + ':' + minute + ':' + second + '.' + parseInt(JSON.stringify(value).split('.')[1].substring(0, 3));
    //return seconds;
  }

}
