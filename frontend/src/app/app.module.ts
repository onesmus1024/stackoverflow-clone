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
    StoreRouterConnectingModule.forRoot(),
    StoreModule.forRoot({ questions: questionsReducer, users: usersReducer, tags: tagsReducer, companies: companiesReducer }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forRoot([QuestionEffects, UserEffects, TagsEffects, CompaniesEffects]),
    MatIconModule,
    RouterModule.forRoot(router),
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
