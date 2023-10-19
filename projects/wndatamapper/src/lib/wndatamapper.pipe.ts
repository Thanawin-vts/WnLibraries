import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datemapper',
})
export class WndatamapperPipe implements PipeTransform {
  transform(value: any, dataList: any, keyIn: string, keyOut: string): unknown {
    let result = dataList.find((item: any) => item[keyIn] == value);
    return result[keyOut];
  }
}
