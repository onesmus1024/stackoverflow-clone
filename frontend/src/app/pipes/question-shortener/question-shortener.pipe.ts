import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'questionShortener',
  standalone: true
})
export class QuestionShortenerPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
