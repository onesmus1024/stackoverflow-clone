import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminSingleUserComponent } from './admin-single-user/admin-single-user.component';
import { User } from 'src/app/interfaces/user.interface';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import * as UsersActions from 'src/app/state/actions/users.actions';
import { selectUsers } from 'src/app/state/selectors/user.selector';

@Component({
  selector: 'app-all-users',
  standalone: true,
  imports: [CommonModule, AdminSingleUserComponent],
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent {

  users: User [] = [];

  constructor(private store: Store<AppState>) { 

    this.store.select(selectUsers).subscribe((users) => {
      this.users = users;
      console.log(this.users);
    });



    


  }

}
