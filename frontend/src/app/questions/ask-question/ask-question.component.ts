import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorComponent } from '@tinymce/tinymce-angular';

@Component({
  selector: 'app-ask-question',
  standalone: true,
  imports: [CommonModule, EditorComponent],
  templateUrl: './ask-question.component.html',
  styleUrls: ['./ask-question.component.css']
})
export class AskQuestionComponent {

}
