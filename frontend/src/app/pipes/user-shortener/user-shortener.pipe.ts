import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userShortener',
  standalone: true
})
export class UserShortenerPipe implements PipeTransform {

  // take in a user and a length

  transform(user: string, length: number): string {

    // if user is shorter than length, return user

    if (user.length <= length) {
      return user;
    }

    // if user is longer than length, shorten user

    return user.slice(0, length) + '...';
  }

}
