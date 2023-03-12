import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { AppState } from 'src/app/app.state';
import { Question } from 'src/app/interfaces/question.interface';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { EditorComponent } from '@tinymce/tinymce-angular';
import * as QuestionsActions from "../../../state/actions/questions.actions";

@Component({
  selector: 'app-question-details',
  standalone: true,
  imports: [CommonModule, RouterModule, MatIconModule, EditorComponent],
  templateUrl: './question-details.component.html',
  styleUrls: ['./question-details.component.css']
})
export class QuestionDetailsComponent implements OnInit {

  question: Question ={
    id: ' ',
    question: ' ',
    description: ' ',
    code : ' ',
    created_at : ' ',
    updated_at : ' ',
    user : {
      id : ' ',
      name : ' ',
      email : ' ',
      created_at : ' ',
      updated_at : ' '
    },
    answers : [],
    tags : [],
    votes : [],
    views : 0
    
  }

  constructor(private store: Store<AppState>, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.store.select('questions').subscribe(questions => {
        this.question = questions.questions.find((question: Question) => question.id === params['id']) as Question;
      });
      
    });
  }

  upVote(question: Question) {
    // this.store.dispatch(QuestionsActions.upvoteQuestion(question));
  }
}
