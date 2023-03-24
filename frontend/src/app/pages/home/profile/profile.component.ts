import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from 'src/app/interfaces/user.interface';
import { loggedInUser } from 'src/app/interfaces/loggedInUser.interface';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { selectLoggedInUser } from 'src/app/state/selectors/loggedInUser.selector';
import { Answer } from 'src/app/interfaces/answer.interface';
import { Question } from 'src/app/interfaces/question.interface';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { selectQuestions } from 'src/app/state/selectors/question.selector';
import { selectAnswers } from 'src/app/state/selectors/answer.selector';
import { ReactiveFormsModule,FormBuilder,FormControl,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  user!: User;
  updateProfileFormShow = false;
  updateProfileForm!: FormGroup;
  answerThatBelongsToUser!: Answer[]
  questionThatBelongsToUser!: Question[]
  loggedInUserSub = new Subscription();
  constructor(private store: Store<AppState>, private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {

    this.updateProfileForm = this.fb.group({
      name: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
      password_confirmation: new FormControl(''),
      image_url: new FormControl('')
    })

    this.loggedInUserSub = this.store.select(selectLoggedInUser).subscribe(user => {
      if (user == null) {
        this.router.navigate(['/home/login']);
      }
      else {
        this.user = user as unknown as User;


      }
    });

    this.store.select(selectQuestions).subscribe(questions => {
      
      this.questionThatBelongsToUser = questions.filter(question => question.user_id == this.user.user[0].id) as unknown as Question[];

  
    }

    );

    // get answers that belong to user from store

    this.store.select(selectAnswers).subscribe(answers => {
    
      this.answerThatBelongsToUser = answers.filter(answer => answer.user_id == this.user.user[0].id) as unknown as Answer[];

   
    }

    );

    if(this.updateProfileFormShow){
      this.updateProfileForm.patchValue({
        name: this.user.user[0].name,
        email: this.user.user[0].email,
        password: this.user.user[0].password,
        image_url: this.user.user[0].image_url
      })
    }



  }


  updateProfile() {

    console.log(this.updateProfileForm.value);


  }
}
