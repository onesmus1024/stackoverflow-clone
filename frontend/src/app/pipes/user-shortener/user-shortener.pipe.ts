import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userShortener',
  standalone: true
})
export class UserShortenerPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
