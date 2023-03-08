import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './app.state';
import { Question } from './interfaces/question.interface';
import * as QuestionsActions from './state/actions/questions.actions';
import { selectQuestions } from './state/selectors/question.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'frontend';
  questions$: Question[] = [];

  constructor(private store: Store<AppState>) {

    
  }

  ngOnInit(): void {
    this.store.dispatch(QuestionsActions.loadQuestions());
  }

  test() {
    console.log('AppComponent test');
    this.store.dispatch(QuestionsActions.loadQuestions());

  }
}
