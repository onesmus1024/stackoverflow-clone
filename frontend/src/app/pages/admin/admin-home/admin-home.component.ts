import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllQuestionsComponent } from '../all-questions/all-questions.component';
import { AllUsersComponent } from '../all-users/all-users.component';
import { QuestionStatisticsComponent } from '../question-statistics/question-statistics.component';
import { UserStatisticsComponent } from '../user-statistics/user-statistics.component';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-admin-home',
  standalone: true,
  imports: [CommonModule, AllQuestionsComponent, AllUsersComponent, QuestionStatisticsComponent, UserStatisticsComponent, RouterModule],
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent {

}
