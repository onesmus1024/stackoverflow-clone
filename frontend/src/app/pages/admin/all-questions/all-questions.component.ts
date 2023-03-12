import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminSingleQuestionComponent } from './admin-single-question/admin-single-question.component';
import { Question } from 'src/app/interfaces/question.interface';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import * as QuestionsActions from 'src/app/state/actions/questions.actions';
import { selectQuestions } from 'src/app/state/selectors/question.selector';

@Component({
  selector: 'app-all-questions',
  standalone: true,
  imports: [CommonModule, AdminSingleQuestionComponent],
  templateUrl: './all-questions.component.html',
  styleUrls: ['./all-questions.component.css']
})
export class AllQuestionsComponent {

  questions: Question[] = [];

  constructor(private store: Store<AppState>) { 

    this.store.select(selectQuestions).subscribe((questions) => {
      this.questions = questions;
    });
  }

}
