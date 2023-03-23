import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from '../interfaces/question.interface';
import { HttpClient } from '@angular/common/http'
import { QuestionVote } from '../interfaces/questionVote.interface';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {



  

  constructor(private http: HttpClient) { }

  getQuestions(page = 1, pageSize = 1): Observable<Question[]> {
    // include query params in the url of page and pageSize
    return this.http.get<Question[]>('http://localhost:4000/api/questions/', { params: { page: page.toString(), pageSize: pageSize.toString() } });
  }


  addQuestion(question: Question): Observable<Question> {
    return this.http.post<Question>(' http://localhost:4000/api/questions', question);
  }

  voteQuestion(question:Question,vote:number): Observable<QuestionVote> {
    return this.http.post<QuestionVote>('http://localhost:4000/api/questionVotes', { question_id: question.id, vote: vote });
  }


  addAnswer(answer: any): Observable<any> {
    return this.http.post<any>('http://localhost:4000/api/answers', answer);
  }


       
}
