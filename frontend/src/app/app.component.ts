import { Component, DoCheck, OnChanges, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './app.state';
import { Question } from './interfaces/question.interface';
import * as QuestionsActions from './state/actions/questions.actions';
import * as UsersActions from './state/actions/users.actions';
import * as TagsActions from './state/actions/tags.actions';
import * as CompaniesActions from './state/actions/companies.actions';
import * as QuestionVoteActions from './state/actions/questionVote.actions';
import * as CommentActions from './state/actions/comment.actions';
import * as AnswerVoteActions from './state/actions/answerVote.actions';
import * as AnswerActions from './state/actions/answer.actions';
import { ModalDirective } from './directives/modal.directive';
import { IsAuthenticatedService } from './services/auth/isAuthenticated/is-authenticated.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'frontend';
  questions$: Question[] = [];

  @ViewChild(ModalDirective , {static: true}) modalHost!: ModalDirective;

  constructor(private store: Store<AppState>, private isAuthenticated: IsAuthenticatedService) {

    
  }

  ngOnInit(): void {

   

      this.store.dispatch(UsersActions.loadUsers());
      this.store.dispatch(AnswerVoteActions.loadAnswerVotes());
      this.store.dispatch(TagsActions.loadTags());
      this.store.dispatch(CompaniesActions.loadCompanies());
      this.store.dispatch(CommentActions.loadComments());
      this.store.dispatch(AnswerActions.loadAnswers());
      this.store.dispatch(QuestionsActions.loadQuestions({page: 1, pageSize: 10}));
      this.store.dispatch(QuestionVoteActions.loadQuestionVotes());
    

  }

  // ngDoCheck(): void {

  //   if(this.isAuthenticated.isAuthenticated()){

  //     this.store.dispatch(UsersActions.loadUsers());
  //     this.store.dispatch(AnswerVoteActions.loadAnswerVotes());
  //     this.store.dispatch(TagsActions.loadTags());
  //     this.store.dispatch(CompaniesActions.loadCompanies());
  //     this.store.dispatch(CommentActions.loadComments());
  //     this.store.dispatch(AnswerActions.loadAnswers());
  //     this.store.dispatch(QuestionsActions.loadQuestions({page: 1, pageSize: 10}));
  //     this.store.dispatch(QuestionVoteActions.loadQuestionVotes());
  //   }
    
  // }




  
}
