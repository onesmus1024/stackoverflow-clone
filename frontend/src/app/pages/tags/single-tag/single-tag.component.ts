import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tag } from 'src/app/interfaces/tag.interface';

@Component({
  selector: 'app-single-tag',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './single-tag.component.html',
  styleUrls: ['./single-tag.component.css']
})
export class SingleTagComponent {

  @Input() tag: Tag = {
    id: '0',
    tag : '',
    created_at: '',
    updated_at: '',
    description: ''
  };

  

}
