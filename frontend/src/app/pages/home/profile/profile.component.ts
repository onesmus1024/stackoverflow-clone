import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from 'src/app/interfaces/user.interface';

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

}
