import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule, MatIconModule, RouterModule, FontAwesomeModule],
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  @ViewChild('sideBar') sideBar: ElementRef | undefined;

  constructor() { }

  toggleSideBar(event: Event) {
    if (this.sideBar) {
      this.sideBar.nativeElement.classList.toggle('show');

    }


  }

}
