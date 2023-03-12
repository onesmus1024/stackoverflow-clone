import { Injectable } from '@angular/core';
import { User } from '../interfaces/user.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[] = [
    {
      id: '1',
      name: 'John Doe',
      email: ' ',
      created_at: ' ',
      updated_at: ' '
    },
    {
      id: '1',
      name: 'John Doe',
      email: ' ',
      created_at: ' ',
      updated_at: ' '
    },
    {
      id: '1',
      name: 'felix',
      email: ' ',
      created_at: ' ',
      updated_at: ' '
    },
    {
      id: '1',
      name: 'John Doe',
      email: ' ',
      created_at: ' ',
      updated_at: ' '
    },
  ]

  constructor() { }

  getUsers(): Observable<User[]> {
    return new Observable(subscriber => {
      subscriber.next(this.users);
    });
  }

  
}
