import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Question } from 'src/app/interfaces/question.interface';
import { Router, RouterModule } from '@angular/router';
import { QuestionShortenerPipe } from 'src/app/pipes/question-shortener/question-shortener.pipe';
import { User } from 'src/app/interfaces/user.interface';
import { selectLoggedInUser } from 'src/app/state/selectors/loggedInUser.selector';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { Route } from '@angular/router';



@Component({
  selector: 'app-single-question',
  standalone: true,
  imports: [CommonModule, QuestionShortenerPipe, RouterModule],
  templateUrl: './single-question.component.html',
  styleUrls: ['./single-question.component.css']
})
export class SingleQuestionComponent implements OnInit {

  isOwner = true ;
  user!:any

  @Input() question: Question | undefined;

  constructor(private store: Store<AppState>, private router: Router) { }

  ngOnInit(): void {

    this.store.select( selectLoggedInUser).subscribe(user => {

      if(user == null){

        this.router.navigate(['/home/login']);
      }

      this.user = user?.user?.map((user:any) => user)[0]
     

  

      

    }
    );
  }
  deleteQuestion(id : string) {
    console.log(id);
  }

  updateQuestion(id : string) {
    console.log(id);
  }


}
