import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './app.state';
import { Question } from './interfaces/question.interface';
import * as QuestionsActions from './state/actions/questions.actions';
import * as UsersActions from './state/actions/users.actions';
import * as TagsActions from './state/actions/tags.actions';
import * as CompaniesActions from './state/actions/companies.actions';
import { ModalDirective } from './directives/modal.directive';
import { ModalComponent } from './pages/modal/modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'frontend';
  questions$: Question[] = [];

  @ViewChild(ModalDirective , {static: true}) modalHost!: ModalDirective;

  constructor(private store: Store<AppState>) {

    
  }

  ngOnInit(): void {
    this.store.dispatch(QuestionsActions.loadQuestions());
    this.store.dispatch(UsersActions.loadUsers());
    this.store.dispatch(TagsActions.loadTags());
    this.store.dispatch(CompaniesActions.loadCompanies());

    // const modal = this.modalHost.viewContainerRef;
    // modal.clear();
    // modal.createComponent(ModalComponent);
  }

  
}
