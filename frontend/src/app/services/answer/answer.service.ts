import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Answer } from 'src/app/interfaces/answer.interface';
import { Comment } from 'src/app/interfaces/comment.interface';
import { selectAnswerVotes } from 'src/app/state/selectors/answerVote.selector';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { AnswerVote } from 'src/app/interfaces/answerVote.interface';
import { User } from 'src/app/interfaces/user.interface';
import { selectUsers } from 'src/app/state/selectors/user.selector';
import { selectComments } from 'src/app/state/selectors/comment.selector';

@Injectable({
  providedIn: 'root'
})
export class AnswerService {

  constructor(private http: HttpClient, private store: Store<AppState>) { }

  getAnswers(): Observable<Answer[]> {
    let answerVotes: AnswerVote[] = [];
    let users: User[] = [];
    let comments: Comment[] = [];
    this.store.select(selectComments).subscribe((data) => {
      comments = data;
      console.log("comments",comments);
    }
    )
    this.store.select(selectAnswerVotes).subscribe((data) => {
      answerVotes = data;
    }
    )

    this.store.select(selectUsers).subscribe((data) => {
      users = data;
    }
    )


    return this.http.get<Answer[]>('http://localhost:4000/api/answers').pipe(

      tap((data) => {
        data.forEach((answer) => {
          answer.votes = answerVotes.filter((vote) => vote.answer_id === answer.id);
          answer.user = users.find((user) => user.id === answer.user_id) as User;
          answer.comments = comments.filter((comment) => comment.answer_id === answer.id);

        })




      })

    )







  }

}
