import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'questionFilter',
  standalone: true
})
export class QuestionFilterPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
