import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sajatPipe'
})
export class SajatPipePipe implements PipeTransform {

  transform(value: any, times: number): any {
    return value.repeat(times);
  }

}
