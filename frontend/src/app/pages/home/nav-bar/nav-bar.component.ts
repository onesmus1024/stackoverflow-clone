import { Component, DoCheck, ElementRef, OnChanges, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IsAuthenticatedService } from 'src/app/services/auth/isAuthenticated/is-authenticated.service';
import { CanActivateService } from 'src/app/services/auth/canActivate/can-activate.service';


@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule, MatIconModule, RouterModule, FontAwesomeModule],
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
// add ngDoCheck() to the class
export class NavBarComponent implements OnInit ,OnChanges,DoCheck {

  @ViewChild('sideBar') sideBar: ElementRef | undefined;
  isAuthourized: boolean = false;
  isOpenned: boolean = false;
  constructor(private isAuthenticated: IsAuthenticatedService,private router: Router) { }

  toggleSideBar(event: Event) {
    if (this.sideBar) {
      this.sideBar.nativeElement.classList.toggle('show');
      this.isOpenned = !this.isOpenned;

    }


  }

  ngOnInit(): void {
    this.isAuthourized = this.isAuthenticated.isAuthenticated();
  }

  ngOnChanges(): void {
    this.isAuthourized = this.isAuthenticated.isAuthenticated();
  }

  ngDoCheck(): void {
    this.isAuthourized = this.isAuthenticated.isAuthenticated();
  }
 
  logout() {
    localStorage.removeItem('token');
    this.isAuthourized = false;
    this.router.navigate(['/']);
    


  }


}
