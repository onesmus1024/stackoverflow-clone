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

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  user!: User;
  answerThatBelongsToUser!: Answer[]
  questionThatBelongsToUser!: Question[]
  loggedInUserSub = new Subscription();
  constructor(private store: Store<AppState>, private router: Router) { }

  ngOnInit(): void {

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



  }

}
