import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'questionFilter',
  standalone: true
})
export class QuestionFilterPipe implements PipeTransform {

  // take in a list of questions and a search string

  transform(questions: any, search: string): any {

    // if no search string, return all questions

    if (!search) {
      return questions;
    }

    // if search string, filter questions

    return questions.filter((question: any) => {
      return question.title.toLowerCase().includes(search.toLowerCase());
    });
  }

}
