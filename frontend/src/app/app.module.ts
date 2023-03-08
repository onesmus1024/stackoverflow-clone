import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { questionsReducer } from './state/reducers/questions.reducer';
import { QuestionEffects } from './state/effects/question.effect';
import { HomePageComponent } from './home/home-page/home-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginComponent } from './home/login/login.component';
import { LandingPageComponent } from './home/landing-page/landing-page.component';
import { SignupComponent } from './home/signup/signup.component';
import { QuestionsComponent } from './questions/questions.component';
import { QuestionDetailsComponent } from './questions/question-details/question-details.component';
import { UsersComponent } from './users/users.component';
import { CompaniesComponent } from './companies/companies.component';
import { TagsComponent } from './tags/tags.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AskQuestionComponent } from './questions/ask-question/ask-question.component';
const router: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent, children: [
    { path: '', component: LandingPageComponent },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent},
    { path: 'questions', component: QuestionsComponent},
    { path: 'questions/:id', component: QuestionDetailsComponent},
    { path: 'users', component: UsersComponent},
    { path: 'companies', component: CompaniesComponent},
    { path: 'tags', component: TagsComponent},
    { path: 'ask-question', component: AskQuestionComponent},
    { path: '**', component: PageNotFoundComponent}


  ] },
]
@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({ questions: questionsReducer }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forRoot([QuestionEffects]),
    MatIconModule,
    RouterModule.forRoot(router),
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
