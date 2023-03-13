import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from 'src/app/interfaces/user.interface';
import { loggedInUser } from 'src/app/interfaces/loggedInUser.interface';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { selectLoggedInUser } from 'src/app/state/selectors/loggedInUser.selector';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  user: User = {
    id: ' ',
    name: 'Onesmus Wambugu ',
    email: 'onesmus@gmail.com',
    created_at: '2020-10-10 12:00:00',
    updated_at: '2020-10-10 12:00:00'
  }
  loggedInUser!: loggedInUser 

  constructor(private store: Store<AppState>) { }

  // ngOnInit(): void {
  //   this.store.select(selectLoggedInUser).subscribe 
  // }

}
