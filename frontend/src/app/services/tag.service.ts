import { Injectable } from '@angular/core';
import { Tag } from '../interfaces/tag.interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TagService {



  constructor(private http: HttpClient) { }

  getTags(): Observable<Tag[]> {
    return this.http.get<Tag[]>('http://localhost:4000/api/tags');
  }

}
