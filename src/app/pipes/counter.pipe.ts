import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'counter',
})
export class CounterPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return `${value} added`;
  }
}
