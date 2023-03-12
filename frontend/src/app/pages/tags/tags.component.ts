import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tag } from '../../../app/interfaces/tag.interface';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app/app.state';
import { SingleTagComponent } from './single-tag/single-tag.component';

@Component({
  selector: 'app-tags',
  standalone: true,
  imports: [CommonModule, SingleTagComponent],
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {

  tags: Tag[] = [];

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
      
      this.store.select('tags').subscribe(({ tags, loading, error }) => {
        this.tags = tags;
        console.log(this.tags);
      });
  
    }

}
