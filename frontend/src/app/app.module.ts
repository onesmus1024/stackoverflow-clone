import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { RouterModule } from '@angular/router';
import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';
import { HttpClientModule } from '@angular/common/http';
import {  HTTP_INTERCEPTORS } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { questionsReducer } from './state/reducers/questions.reducer';
import { QuestionEffects } from './state/effects/question.effect';
import { usersReducer } from './state/reducers/users.reducer';
import { UserEffects } from './state/effects/user.effect';
import { tagsReducer } from './state/reducers/tags.reducer';
import { TagsEffects } from './state/effects/tag.effect';
import { companiesReducer } from './state/reducers/companies.redicer';
import { CompaniesEffects } from './state/effects/company.effect';
import { _loggedInUserReducer } from './state/reducers/loggedInUser.reducer';
import { LoggedInUserEffects } from './state/effects/loggedInUser.effect';
import { RegisterUserEffects } from './state/effects/registerUser.effect';
import { registerUserReducer } from './state/reducers/registerUser.reducer';
import { questionVotesReducer } from './state/reducers/questionVote.reducer';
import { QuestionVoteEffects } from './state/effects/questionVote.effect';
import { commentsReducer } from './state/reducers/comment.reducer';
import { CommentEffects } from './state/effects/comment.effect';
import { answerVotesReducer } from './state/reducers/answerVote.redicer';
import { AnswerVoteEffects } from './state/effects/answerVote.effect';
import { answersReducer } from './state/reducers/answer.reducer';
import { AnswerEffects } from './state/effects/answer.effect';




import { HomePageComponent } from './pages/home/home-page/home-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginComponent } from './pages/home/login/login.component';
import { LandingPageComponent } from './pages/home/landing-page/landing-page.component';
import { SignupComponent } from './pages/home/signup/signup.component';
import { QuestionsComponent } from './pages/questions/questions.component';
import { QuestionDetailsComponent } from './pages/questions/question-details/question-details.component';
import { UsersComponent } from './pages/users/users.component';
import { CompaniesComponent } from './pages/companies/companies.component';
import { TagsComponent } from './pages/tags/tags.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AskQuestionComponent } from './pages/questions/ask-question/ask-question.component';
import { ProfileComponent } from './pages/home/profile/profile.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PrivacyComponent } from './pages/privacy/privacy.component';
import { AdminHomeComponent } from './pages/admin/admin-home/admin-home.component';
import { AllQuestionsComponent } from './pages/admin/all-questions/all-questions.component';
import { AllUsersComponent } from './pages/admin/all-users/all-users.component';
import { TokenInterceptorService } from './services/auth/interceptor/token-interceptor.service';

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
    { path: 'profile', component: ProfileComponent},
    { path: 'about', component: AboutComponent},
    { path: 'contact', component: ContactComponent},
    { path: 'privacy', component: PrivacyComponent},
    { path: '**', component: PageNotFoundComponent}


  ]

},

{ path: 'admin', component: AdminHomeComponent,
children : [
  { path: '', component: AllQuestionsComponent},
  { path: 'questions', component: AllQuestionsComponent},
  { path: 'users', component: AllUsersComponent},
  { path: '**', component: PageNotFoundComponent}

]},
{ path: '**', component: PageNotFoundComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreRouterConnectingModule.forRoot(),
    StoreModule.forRoot({ questions: questionsReducer, users: usersReducer, tags: tagsReducer, companies: companiesReducer , loggedInUser: _loggedInUserReducer, router: routerReducer, registerUser: registerUserReducer, questionVotes: questionVotesReducer, comments: commentsReducer, answerVotes: answerVotesReducer, answers: answersReducer}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forRoot([QuestionEffects, UserEffects, TagsEffects, CompaniesEffects, LoggedInUserEffects, RegisterUserEffects, QuestionVoteEffects, CommentEffects, AnswerVoteEffects, AnswerEffects]),
    MatIconModule,
    RouterModule.forRoot(router),
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
