import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { QuestionVote } from 'src/app/interfaces/questionVote.interface';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class QuestionVoteService {

  constructor(private http: HttpClient) { }

  getQuestionVotes(): Observable<QuestionVote[]> {
    return this.http.get<QuestionVote[]>('http://localhost:4000/api/questionVotes');
  }
}
