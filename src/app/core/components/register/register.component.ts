import { Component, signal } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [
    RouterLink,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
  ],
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  isShowPassword = signal(false);
  isShowConfirmPassword = signal(false);
  form = new FormGroup({
    fullname: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    credential: new FormGroup(
      {
        password: new FormControl('', Validators.required),
        confirmPassword: new FormControl('', Validators.required),
      },
      this.passwordMatchValidator,
    ),
  });

  submitForm() {
    // TODO
  }

  showPassword() {
    this.isShowPassword.update((v) => !v);
  }

  showConfirmPassword() {
    this.isShowConfirmPassword.update((v) => !v);
  }

  passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
    const passwordFormControl = control.get('password');
    const cPasswordFormControl = control.get('confirmPassword');
    if (
      passwordFormControl?.dirty &&
      cPasswordFormControl?.dirty &&
      passwordFormControl?.value !== cPasswordFormControl?.value
    ) {
      control.get('confirmPassword')?.setErrors({ passwordMismatch: true });
    }

    return null;
  }

  get fullnameError() {
    return this.form.hasError('required', 'fullname')
      ? 'Fullname is required'
      : null;
  }

  get emailError() {
    if (this.form.hasError('email', 'email')) return 'Email not valid';
    if (this.form.hasError('required', 'email')) return 'Email is required';

    return null;
  }

  get passwordError() {
    if (this.form.hasError('required', 'credential.password'))
      return 'Password is required';

    return null;
  }

  get confirmPasswordError() {
    if (this.form.hasError('required', 'credential.confirmPassword'))
      return 'Confirm password is required';

    if (this.form.hasError('passwordMismatch', 'credential.confirmPassword'))
      return 'Password mismatch';

    return null;
  }
}
