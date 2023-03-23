import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { SpinnerComponent } from 'src/app/shared/spinner/spinner.component';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import * as registerUserActions from 'src/app/state/actions/registerUser.actions';
import { selectRegisterUserStateloading } from 'src/app/state/selectors/registerUser.selector';
import { ModalDirective } from 'src/app/directives/modal.directive';
import { ModalComponent } from 'src/app/pages/modal/modal.component';
import { selectRegisterUserStateError } from 'src/app/state/selectors/registerUser.selector';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, RouterModule, SpinnerComponent, ReactiveFormsModule, ModalComponent, ModalDirective],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  @ViewChild(ModalDirective, { static: true }) modalHost!: ModalDirective;



  isLoading = true;
  signupForm: FormGroup;

  constructor(private fb: FormBuilder, private store: Store<AppState>,private router: Router) {

    this.signupForm = this.fb.group({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    })

   
  }

  ngOnInit(): void {

    this.store.select(selectRegisterUserStateloading).subscribe((loading) => {
      this.isLoading = loading;
    });
    
  }

  onSubmit() {
    if (this.signupForm.invalid) {
      return;
    }
    this.store.dispatch(registerUserActions.register({ user: this.signupForm.value }))

    this.store.select(selectRegisterUserStateloading).subscribe((loading) => {
      this.isLoading = loading;
    });
 
    this.store.select(selectRegisterUserStateError).subscribe((error) => {
      if (error) {
        console.log(error.error.message);
        this.modalHost.viewContainerRef.clear();
        const modal = this.modalHost.viewContainerRef.createComponent(ModalComponent);
        return;
      }
     
    })

   

  }

}
