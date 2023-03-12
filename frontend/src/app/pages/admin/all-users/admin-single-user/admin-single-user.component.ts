import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from 'src/app/interfaces/user.interface';

@Component({
  selector: 'app-admin-single-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-single-user.component.html',
  styleUrls: ['./admin-single-user.component.css']
})
export class AdminSingleUserComponent {

  @Input() user!: User;

  constructor() { }
  

}
