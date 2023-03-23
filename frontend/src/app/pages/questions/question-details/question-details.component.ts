import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { AppState } from 'src/app/app.state';
import { Question } from 'src/app/interfaces/question.interface';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { EditorComponent } from '@tinymce/tinymce-angular';
import { selectQuestions } from 'src/app/state/selectors/question.selector';
import * as QuestionsActions from "../../../state/actions/questions.actions";
import { ReactiveFormsModule,FormControl,FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Answer } from 'src/app/interfaces/answer.interface';
import { QuestionVote } from 'src/app/interfaces/questionVote.interface';
import { AnswerVote } from 'src/app/interfaces/answerVote.interface';
import { Comment } from 'src/app/interfaces/comment.interface';
@Component({
  selector: 'app-question-details',
  standalone: true,
  imports: [CommonModule, RouterModule, MatIconModule, EditorComponent, ReactiveFormsModule],
  templateUrl: './question-details.component.html',
  styleUrls: ['./question-details.component.css']
})
export class QuestionDetailsComponent implements OnInit {
  votesSum: number = 0;
  answerVotesSum: number = 0;
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

  answerForm:FormGroup
  commentForm:FormGroup
  constructor(private store: Store<AppState>, private route: ActivatedRoute, private fb: FormBuilder) {


    this.answerForm = this.fb.group({
      answer : new FormControl(''),
      code : new FormControl('')
    })

    this.commentForm = this.fb.group({
      comment : new FormControl('',Validators.required)
    })

    
    
   }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.store.select(selectQuestions).subscribe(questions => {
        this.question = questions.find((question: Question) => question.id === params['id']) as Question ;

        this.question.votes.forEach(vote => {
          this.votesSum += vote.vote
         
        },
        // this.question.answers.forEach(answer => {
        //   answer.votes.forEach(answerVote => {
        //     this.answerVotesSum += answerVote.vote
        //   })
        //}
        //)
        )
     
      });
      
    });

    
  }

  vote(question: Question,vote:number) {
    let voteQuestion:  QuestionVote = {
      id: ' ',
      vote: vote,
      created_at: ' ',
      updated_at: ' ',
      question_id: question.id
    }
    this.votesSum += vote
    console.log(voteQuestion)
  }

  postAnswer(question:Question){
   
    let answer:Answer
    answer = {
      id : ' ',
      answer : this.answerForm.value.answer,
      code : this.answerForm.value.code,
      created_at : ' ',
      updated_at : ' ',
      votes : [],
      comments : [],
      user_id : ' ',
      question_id : this.question.id
    }

    

    console.log(answer)

  }

  voteAnswer(answer:Answer,vote:number){
    let voteAnswer:  AnswerVote= {
      id: ' ',
      vote: vote,
      created_at: ' ',
      updated_at: ' ',
      answer_id: answer.id,
      user_id: ''
    }
    this.answerVotesSum += vote
  }

  postComment(answer:Answer){
    let comment: Comment = {
      id: ' ',
      comment: ' ',
      created_at: this.commentForm.value.comment,
      updated_at: ' ',
      answer_id: ' '

    }

    // check if form is valid
    if(!this.commentForm.invalid){
      return
    }



    console.log(comment)

  }
}
