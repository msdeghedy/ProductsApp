import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'test',
})
export class TestPipe implements PipeTransform {
  transform(value: number): string {
    if (value > 0 && value < 50) return 'F';
    else if (value >= 50 && value <= 60) return 'D';
    else if (value > 60 && value < 75) return 'C';
    else if (value >= 75 && value < 85) return 'B';
    else if (value >= 85 && value <= 100) return 'A';
    else return 'Out of range';
  }
}
