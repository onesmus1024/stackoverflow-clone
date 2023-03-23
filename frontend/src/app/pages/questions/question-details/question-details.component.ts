import { Component, DoCheck, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { ActivatedRoute, Router } from '@angular/router';
import { AppState } from 'src/app/app.state';
import { Question } from 'src/app/interfaces/question.interface';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { EditorComponent } from '@tinymce/tinymce-angular';
import { selectQuestions } from 'src/app/state/selectors/question.selector';
import * as QuestionsActions from "../../../state/actions/questions.actions";
import { ReactiveFormsModule, FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Answer } from 'src/app/interfaces/answer.interface';
import { QuestionVote } from 'src/app/interfaces/questionVote.interface';
import { AnswerVote } from 'src/app/interfaces/answerVote.interface';
import { Comment } from 'src/app/interfaces/comment.interface';
import { QuestionService } from 'src/app/services/question.service';
import { Subscription } from 'rxjs';
import { loggedInUser } from 'src/app/interfaces/loggedInUser.interface';
import { selectLoggedInUser } from 'src/app/state/selectors/loggedInUser.selector';
import { User } from 'src/app/interfaces/user.interface';

@Component({
  selector: 'app-question-details',
  standalone: true,
  imports: [CommonModule, RouterModule, MatIconModule, EditorComponent, ReactiveFormsModule],
  templateUrl: './question-details.component.html',
  styleUrls: ['./question-details.component.css']
})
export class QuestionDetailsComponent implements OnInit{
  questionVotesSum: number = 0;
  answerVotesSum: number = 0;
  questionVoteUp = false;
  questionVoteDown = false;
  answerVoteUp = false;
  answerVoteDown = false;
  user!: User;

  su = new Subscription();
  viewincrementsu = new Subscription();
  allQuestionSu = new Subscription();
  question: Question = {
    id: ' ',
    question: ' ',
    description: ' ',
    code: ' ',
    created_at: ' ',
    updated_at: ' ',
    user: {
      id: ' ',
      name: ' ',
      email: ' ',
      created_at: ' ',
      updated_at: ' '
    },
    answers: [],
    tags: [],
    votes: [],
    views: 0

  }

  answerForm: FormGroup
  commentForm: FormGroup
  constructor(private store: Store<AppState>, private route: ActivatedRoute, private fb: FormBuilder, private router: Router, private questionService: QuestionService) {


    this.answerForm = this.fb.group({
      answer: new FormControl(''),
      code: new FormControl('')
    })

    this.commentForm = this.fb.group({
      comment: new FormControl('', Validators.required)
    })

    this.su.add(this.store.select(selectLoggedInUser).subscribe(user => {
      this.user = user as unknown as User

      console.log(this.user.user[0].id)
    }
    ))




  }


  ngOnInit(): void {
    // load questions
    this.store.dispatch(QuestionsActions.loadQuestions({page: 1, pageSize: 10}))
    this.su.add(this.route.params.subscribe(params => {
      this.allQuestionSu.add(this.store.select(selectQuestions).subscribe(questions => {
        this.question = questions.find((question: Question) => question.id === params['id']) as Question;
        // increment views
        this.viewincrementsu.add(this.questionService.increaseViewCount(this.question).subscribe(question => {
          this.question = question
        }))

        this.viewincrementsu.unsubscribe()

        this.question.votes.forEach(vote => {
          this.questionVotesSum += vote.vote

        },
          this.question.answers.forEach(answer => {
            answer.votes.forEach(answerVote => {
              this.answerVotesSum += answerVote.vote
            })
          }
          )
        )

      }));

      this.allQuestionSu.unsubscribe()

    }
    ))


    this.su.unsubscribe()






  }

  vote(question: Question, vote: number) {

    let voteQuestion: QuestionVote = {
      id: ' ',
      vote: vote,
      created_at: ' ',
      updated_at: ' ',
      question_id: question.id
    }
    // check if user has already voted
    let userVote = question.votes.find(vote => vote.user_id === this.user.user[0].id)
    // check if user has already voted up and is voting up again
    if (this.questionVoteUp = true && vote === 1) {
      alert('You have already voted up')
      return
    }
    // check if user has already voted down and is voting down again
    if (this.questionVoteDown === true ) {
  
      alert('You have already voted down')
      return
    }

    if (vote===-1) {
      this.questionVoteDown = true
      this.questionVoteUp = false
    }
    if (vote===1) {
      this.questionVoteUp = true
      this.questionVoteDown = false
    }
    
    this.questionVotesSum += vote
    this.store.dispatch(QuestionsActions.addQuestionVote(voteQuestion))
    this.router.navigate(['/home/questions', this.question.id])
  }

  postAnswer(question: Question) {

    let answer: Answer
    answer = {
      id: ' ',
      answer: this.answerForm.value.answer,
      code: this.answerForm.value.code,
      created_at: ' ',
      updated_at: ' ',
      votes: [],
      comments: [],
      user_id: ' ',
      question_id: this.question.id
    }

    this.store.dispatch(QuestionsActions.addAnswer(answer))

    this.router.navigate(['/home/questions'])



  }

  voteAnswer(answer: Answer, vote: number) {
    let voteAnswer: AnswerVote = {
      id: ' ',
      vote: vote,
      created_at: ' ',
      updated_at: ' ',
      answer_id: answer.id,
      user_id: ''
    }
    this.answerVotesSum += vote

    let userVote = answer.votes.find(vote => vote.user_id === this.user.user[0].id)
    // check if user has already voted up and is voting up again
    if (this.answerVoteUp = true && vote === 1) {
      alert('You have already voted up')
      return
    }
    // check if user has already voted down and is voting down again
    if (this.answerVoteDown === true ) {

      alert('You have already voted down')
      return
    }

    if (vote===-1) {
      this.answerVoteDown = true
      this.answerVoteUp = false
    }
    if (vote===1) {
      this.answerVoteUp = true
      this.answerVoteDown = false
    }

    this.store.dispatch(QuestionsActions.addAnswerVote(voteAnswer))
    this.router.navigate(['/home/questions', this.question.id])


  }

  postComment(answer: Answer) {
    let comment: Comment = {
      id: ' ',
      comment: this.commentForm.value.comment,
      created_at: ' ',
      updated_at: ' ',
      answer_id: answer.id,
      is_deleted: '0'

    }

    this.store.dispatch(QuestionsActions.addComment(comment))

    this.router.navigate(['/home/questions'])
  }

  deleteAnswer(answer: Answer) {
    console.log(answer);
  }

  editAnswer(answer: Answer) {
    console.log(answer);
  }

  markAccepted(answer: Answer) {
    console.log(answer);
  }
    
}
