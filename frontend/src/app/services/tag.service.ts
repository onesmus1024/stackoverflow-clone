import { Injectable } from '@angular/core';
import { Tag } from '../interfaces/tag.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  tags: Tag[] = [
    {
      id: '1',
      tag: ' Angular',
      created_at: '2019-12-12',
      updated_at: '2019-12-12',
      description: 'It is a framework'
    },
    {
      id: '1',
      tag: ' JavaScript',
      created_at: '2019-12-12',
      updated_at: '2019-12-12',
      description: 'It is a programming language'
    }]

  constructor() { }

  getTags(): Observable<Tag[]> {
    return new Observable(subscriber => {
      subscriber.next(this.tags);
    });
  }

}
