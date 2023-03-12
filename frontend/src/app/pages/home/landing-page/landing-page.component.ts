import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, MatIconModule, RouterModule],
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {
  engineers = [
    'software engineer',
    'web developer',
    'full stack developer',
    'system administrator',
    'devops engineer',];
  engineer = this.engineers[0];

  constructor() { }
  // change after 3 seconds 
  ngOnInit(): void {
    setInterval(() => {
      this.engineer = this.engineers[Math.floor(Math.random() * this.engineers.length)];
    }, 2000);
  }
}
