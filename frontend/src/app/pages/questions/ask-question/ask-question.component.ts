import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorComponent } from '@tinymce/tinymce-angular';
import { Router, RouterModule } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import { Question } from 'src/app/interfaces/question.interface';
import { FormControl, FormGroup, ReactiveFormsModule,Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { AppState } from 'src/app/app.state';
import { Store } from '@ngrx/store';
import { selectQuestions } from 'src/app/state/selectors/question.selector';
import { Observable } from 'rxjs';
import { selectTags } from 'src/app/state/selectors/tag.selector';
import { map } from 'rxjs/operators';
import { Tag } from 'src/app/interfaces/tag.interface';
import * as QuestionsActions from '../../../state/actions/questions.actions';


@Component({
  selector: 'app-ask-question',
  standalone: true,
  imports: [CommonModule, EditorComponent, RouterModule, ReactiveFormsModule],
  templateUrl: './ask-question.component.html',
  styleUrls: ['./ask-question.component.css']
})
export class AskQuestionComponent implements OnInit {
  askQuestionForm:FormGroup;
  isUpdating = false;
  tags:Tag[] = [];
  questionToUpdate!:Question 
  constructor(private router: Router, private questionService: QuestionService, private fb: FormBuilder, private store: Store<AppState>) { 

    this.askQuestionForm = this.fb.group({
      question: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      code: new FormControl('', Validators.required),
      tag: new FormControl('', Validators.required)
    });
  
  }

  // if is updating, then get the question from the service and set the form values




  ngOnInit(): void {
    this.store.select(selectTags).subscribe(tags => {
      this.tags = tags as Tag[];
    });

    this.isUpdating=this.questionService.isQuestionUpdated 

    if(this.isUpdating)
    {
      this.questionToUpdate = this.questionService.questionToUpdate;
      this.askQuestionForm.setValue({
        question: this.questionToUpdate.description,
        description: this.questionToUpdate.description,
        code: this.questionToUpdate.code,
        tag: this.questionToUpdate.tags[0].id
      });
    }

  }






  onSubmit() {

    // if (this.askQuestionForm.invalid) {
    //   return;
    // }

    if(this.isUpdating)
    {

      this.store.dispatch(QuestionsActions.updateQuestion({...this.questionToUpdate, ...this.askQuestionForm.value}));
      this.questionService.isQuestionUpdated = false;
      this.askQuestionForm.reset();
      this.router.navigate(['/home/questions']);
      return;
    }

 
    this.store.dispatch(QuestionsActions.addQuestion({
      id: '',
      description: '',
      code: '',
      created_at: '',
      updated_at: '',
      user: {
        id: '',
        name: '',
        email: '',
        created_at: '',
        updated_at: ''
      },
      answers: [],
      tags: [],
      votes: [],
      views: 0,
      ...this.askQuestionForm.value
    }));


    this.router.navigate(['/home/questions']);
 
  }

}
