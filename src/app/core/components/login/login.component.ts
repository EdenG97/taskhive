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
})
export class LoginComponent {
  isShowPassword = signal(false);
  form = new FormGroup<LoginForm>({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  showPassword() {
    this.isShowPassword.update((v) => !v);
  }

  submitForm() {
    if (!this.form.valid) return;
  }

  get emailError() {
    if (this.form.hasError('email', 'email')) return 'Email not valid';
    if (this.form.hasError('required', 'email')) return 'Email is required';

    return null;
  }

  get passwordError() {
    if (this.form.hasError('required', 'password'))
      return 'Password is required';

    return null;
  }
}
