import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Question } from 'src/app/interfaces/question.interface';
import { RouterModule } from '@angular/router';
import { QuestionShortenerPipe } from 'src/app/pipes/question-shortener/question-shortener.pipe';

@Component({
  selector: 'app-single-question',
  standalone: true,
  imports: [CommonModule, QuestionShortenerPipe, RouterModule],
  templateUrl: './single-question.component.html',
  styleUrls: ['./single-question.component.css']
})
export class SingleQuestionComponent {

  @Input() question: Question | undefined;

  constructor() { }



}
