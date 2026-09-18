import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { Router } from '@angular/router';
import { Auth } from '../services/auth';
 
@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
 
  loginForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
 
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6)
    ])
  });
 
  errorMessage = '';
 
  constructor(
    private auth: Auth,
    private router: Router
  ) {}
 
  onSubmit(): void {
 
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }
 
    const email = this.loginForm.value.email ?? '';
    const password = this.loginForm.value.password ?? '';
 
    const success = this.auth.login(email, password);
 
    if (success) {
      this.router.navigate(['/dashboard']);
    } else {
      this.errorMessage = 'Invalid email or password.';
    }
  }
 
}
 