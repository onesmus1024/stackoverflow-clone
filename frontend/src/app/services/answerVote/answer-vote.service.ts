import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AnswerVote } from 'src/app/interfaces/answerVote.interface';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AnswerVoteService {

  constructor(private http: HttpClient) { }

  getAnswerVotes(): Observable<AnswerVote[]> {
    return this.http.get<AnswerVote[]>('http://localhost:4000/api/answerVotes');
  }
  
}
