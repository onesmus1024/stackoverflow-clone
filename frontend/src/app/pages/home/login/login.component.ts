import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ModalDirective } from 'src/app/directives/modal.directive';
import { ModalComponent } from 'src/app/pages/modal/modal.component';
import { SpinnerComponent } from 'src/app/shared/spinner/spinner.component';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { selectUsersLoading } from 'src/app/state/selectors/user.selector';
import * as UsersActions from 'src/app/state/actions/users.actions';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterModule, ModalComponent, ModalDirective, SpinnerComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ModalDirective]
})
export class LoginComponent implements OnInit {
  @ViewChild(ModalDirective, { static: true }) modalHost!: ModalDirective;
  loginForm: FormGroup;
  isLoading: boolean = false;

  constructor(private router: Router, private fb: FormBuilder, private store: Store<AppState>) {
      this.loginForm = this.fb.group({
        email: [''],
        password: ['']
      })
  }

  ngOnInit(): void {
    this.store.select(selectUsersLoading).subscribe((loading) => {
      this.isLoading = loading;
    }
    )
    
  }

  onChanges(): void {
    this.store.dispatch(UsersActions.loadUsersFailure({ error: 'error' }));

    this.store.select(selectUsersLoading).subscribe((loading) => {
      this.isLoading = true;
    }
    )

    setTimeout(() => {
      this.store.dispatch(UsersActions.loadUsersSuccess({ users: [] }));

      this.store.select(selectUsersLoading).subscribe((loading) => {
        this.isLoading = loading
      }
      )
    }

      , 3000)


  }


  onSubmit() {

    console.log(this.loginForm.value);
    console.log(this.modalHost)



  }

}
