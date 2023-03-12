import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Question } from 'src/app/interfaces/question.interface';

@Component({
  selector: 'app-admin-single-question',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-single-question.component.html',
  styleUrls: ['./admin-single-question.component.css']
})
export class AdminSingleQuestionComponent {

  @Input() question!: Question;

  constructor() { }

}
