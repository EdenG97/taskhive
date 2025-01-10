import { Component, signal } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';

type LoginForm = {
  email: AbstractControl<string | null>;
  password: AbstractControl<string | null>;
};

@Component({
  selector: 'app-login',
  imports: [
    RouterLink,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  isShowPassword = signal(false);
  loginForm = new FormGroup<LoginForm>({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  showPassword() {
    this.isShowPassword.update((v) => !v);
  }

  submitForm() {
    if (!this.loginForm.valid) return;
  }

  get emailErrorMessage() {
    if (this.loginForm.hasError('email', 'email')) return 'Email not valid.';
    if (this.loginForm.hasError('required', 'email'))
      return 'Email is required.';

    return '';
  }

  get passwordErrorMessage() {
    if (this.loginForm.hasError('required', 'password'))
      return 'Password is required.';

    return '';
  }
}
