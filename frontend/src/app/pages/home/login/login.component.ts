import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ModalDirective } from 'src/app/directives/modal.directive';
import { ModalComponent } from 'src/app/pages/modal/modal.component';
import { SpinnerComponent } from 'src/app/shared/spinner/spinner.component';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { selectLoggedInUserStateloading,selectLoggedInUserStateError } from 'src/app/state/selectors/loggedInUser.selector';
import * as loggedInUserActions from 'src/app/state/actions/loggeInUser.actions';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterModule, ModalComponent, ModalDirective, SpinnerComponent, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ModalDirective]
})
export class LoginComponent implements OnInit {
  @ViewChild(ModalDirective, { static: true }) modalHost!: ModalDirective;
  loginForm: FormGroup;
  isLoading: boolean = false;
  error: string | null = null;

  constructor(private router: Router, private fb: FormBuilder, private store: Store<AppState>) {
    this.loginForm = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    })
  }

  ngOnInit(): void {


  }




  onSubmit() {

    if (this.loginForm.invalid) {
      return;
    }

    this.store.dispatch(loggedInUserActions.login({ user: this.loginForm.value }));
    this.store.select(selectLoggedInUserStateloading).subscribe((loading) => {
      this.isLoading = loading;
    }
    )

    this.store .select(selectLoggedInUserStateError).subscribe((error) => {
      this.error = error;
    }
    )


   this.store.dispatch(loggedInUserActions.loginError ({error: 'error'}));

   

    if (this.error) {
      this.modalHost.viewContainerRef.clear();
      const modal = this.modalHost.viewContainerRef.createComponent(ModalComponent);
      // modal.instance.title = 'Error';
      // modal.instance.body = this.error;
      // modal.instance.close.subscribe(() => {
      //   this.modalHost.viewContainerRef.clear();
      // });
    }









  }

}
