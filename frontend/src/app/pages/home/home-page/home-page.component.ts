import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { LandingPageComponent } from '../landing-page/landing-page.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';

const router: Routes = [
  { path: 'home', component: LandingPageComponent },
  { path: 'login', component: LoginComponent },
]
@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    CommonModule,
    NavBarComponent,
    LandingPageComponent,
    FooterComponent,
    RouterModule],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],

})
export class HomePageComponent {

}
