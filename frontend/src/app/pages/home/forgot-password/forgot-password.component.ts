import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule,FormControl,FormBuilder, Validators } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {

  success = false;
  error = false;
  successMessage = '';
  errorMessage = '';

  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute, private userService: UserService) { }

  forgotPasswordForm = this.fb.group({
    email: new FormControl('', [Validators.required, Validators.email])
  });

  onSubmit() {
    console.warn(this.forgotPasswordForm.value);

    // check if form is valid
    if (!this.forgotPasswordForm.valid) {
      return;
    }

    this.userService.forgotPassword(this.forgotPasswordForm.value.email!).subscribe((res: any) => {
      if (res.message == 'Email sent') {
          this.success = true;
          this.successMessage = 'Email sent';
      }else
      {
        this.error = true;
        this.errorMessage = res.message;
      }
    }
    );
  }

}
