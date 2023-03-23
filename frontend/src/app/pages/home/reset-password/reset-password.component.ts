import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule,FormBuilder,FormControl, Validators } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  success = false;
  error = false;
  successMessage = '';
  errorMessage = '';

  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute, private userService: UserService) { }
  id = '';
  token = '';
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.token = params['token'];
    });
  }

  resetPasswordForm = this.fb.group({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('', [Validators.required])
  });

  onSubmit() {

    if (this.resetPasswordForm.value.password != this.resetPasswordForm.value.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    // check if form is valid
    if (!this.resetPasswordForm.valid) {
      return;
    }

    this.userService.resetPassword(this.resetPasswordForm.value.password!, this.token, this.id).subscribe((res: any) => {
      if (res.message == 'Password updated') {

        this.success = true;
        this.successMessage = 'Password updated';
        
      }
    }
    );
  

  }


}
