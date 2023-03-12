import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import { User } from '../../interfaces/user.interface';
import { SingleUserComponent } from './single-user/single-user.component';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, SingleUserComponent],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users:User[] = [];

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {

    this.store.select('users').subscribe(({ users, loading, error }) => {
      this.users = users;
      console.log(this.users);
    });

  }



}
