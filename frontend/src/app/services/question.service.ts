import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from '../interfaces/question.interface';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  questions: Question[] = [
    {
      id: '1',
      question: 'How to create a service in Angular?',
      description: 'I am trying to create a service in Angular but I am getting an error.',
      code: 'import { Injectable } from \'@angular/core\';',
      created_at: '2020-10-10 10:10:10',
      updated_at: '2020-10-10 10:10:10',
      views: 10,
      user: {
        id: '1',
        name: 'John Doe',
        email: '',
        created_at: '2020-10-10 10:10:10',
        updated_at: '2020-10-10 10:10:10'
      },
      answers: [
        {
          id: '1',
          user_id: '1',
          answer: 'You need to import the Injectable decorator.',
          created_at: '2020-10-10 10:10:10',
          updated_at: '2020-10-10 10:10:10',
          code: 'import { Injectable } from \'@angular/core\';',
          user: {
            id: '1',
            name: 'John Doe',
            email: '',
            created_at: '2020-10-10 10:10:10',
            updated_at: '2020-10-10 10:10:10'
          },
          votes: [
            {
              id: '1',
              vote: 1,
              created_at: '2020-10-10 10:10:10',
              answer_id: '1',
              updated_at: '2020-10-10 10:10:10',
              user: {
                id: '1',
                name: 'John Doe',
                email: '',
                created_at: '2020-10-10 10:10:10',
                updated_at: '2020-10-10 10:10:10'
              },
              user_id: '1'
            }
          ],
          comments: [
            {
              id: '1',
              comment: 'Thanks, it worked!',
              created_at: '2020-10-10 10:10:10',
              updated_at: '2020-10-10 10:10:10',
              user: {
                id: '1',
                name: 'John Doe',
                email: '',
                created_at: '2020-10-10 10:10:10',
                updated_at : '2020-10-10 10:10:10'
              },
              answer_id: '1'

            }
          ]

        }
      ],
      tags: [
        {
          id: '1',
          tag: 'Angular',
          description: 'Angular is a TypeScript-based open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations.',
          created_at: '2020-10-10 10:10:10',
          updated_at: '2020-10-10 10:10:10'
        }
      ],
      votes: [
        {
          id: '1',
          vote: 1,
          created_at: '2020-10-10 10:10:10',
          updated_at: '2020-10-10 10:10:10',
          user: {
            id: '1',
            name: 'John Doe',
            email: '',
            created_at: '2020-10-10 10:10:10',
            updated_at: '2020-10-10 10:10:10'
          },
          question_id: '1',

        }
      ]
    }
      
  ];

  constructor() { }

  getQuestions():Observable< Question[] > {
    return new Observable( observer => {
      observer.next(this.questions);
    });
  }

       
}
