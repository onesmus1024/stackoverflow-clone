import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppState } from '../../app.state';
import { Store } from '@ngrx/store';
import { Question } from 'src/app/interfaces/question.interface';
import { SingleQuestionComponent } from './single-question/single-question.component';
import { RouterModule } from '@angular/router';
import { selectQuestions } from 'src/app/state/selectors/question.selector';
import { QuestionService } from 'src/app/services/question.service';
import { Router } from '@angular/router';
import * as QuestionsActions from '../../state/actions/questions.actions';
import { selectQuestionVotes } from 'src/app/state/selectors/questionVote.selector';
import { selectLoggedInUser } from 'src/app/state/selectors/loggedInUser.selector';
import { User } from 'src/app/interfaces/user.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-questions',
  standalone: true,
  imports: [CommonModule, SingleQuestionComponent, RouterModule],
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  questionSub = new Subscription();

  questions: Question[ ] = [];
  currentPage = 1;
  pageSize = 1;
  pages = [1,2,3,4,5,];

  user!: User;





  constructor(private store: Store<AppState>, private questionService: QuestionService, private router: Router) {
    
  }

  ngOnInit(): void {
    this.store.dispatch(QuestionsActions.loadQuestions({page: 1, pageSize: 10}));
    this.store.select( selectQuestions).subscribe(questions => {
      this.questions =questions as Question[];
    });


    this.store.select( selectLoggedInUser).subscribe(user => {
      if(user == null)
      {
        this.router.navigate(['/home/login']);
      }
    }
    );
  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.store.dispatch(QuestionsActions.loadQuestions({page: 1, pageSize: page}));


  }


}
