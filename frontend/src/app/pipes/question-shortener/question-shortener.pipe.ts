import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'questionShortener',
  standalone: true
})
export class QuestionShortenerPipe implements PipeTransform {

  // take in a question and a length

  transform(question: string, length: number): string {

    // if question is shorter than length, return question

    if (question.length <= length) {
      return question;
    }

    // if question is longer than length, shorten question

    return question.slice(0, length) + '...';
  }

}
