import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppState } from '../../app.state';
import { Store } from '@ngrx/store';
import { Question } from '../../interfaces/question.interface';
import { SingleQuestionComponent } from './single-question/single-question.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-questions',
  standalone: true,
  imports: [CommonModule, SingleQuestionComponent, RouterModule],
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  questions: Question[ ] = [];

  constructor(private store: Store<AppState>) { 
    
  }

  ngOnInit(): void {
    this.store.select('questions').subscribe(questions => {
      this.questions = questions.questions as Question[];
      console.log(this.questions as Question[]);
      
      
    });
  }


}
