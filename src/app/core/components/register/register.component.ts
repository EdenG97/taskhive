import { Component, signal } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
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

  showPassword() {
    this.isShowPassword.update((v) => !v);
  }

  showConfirmPassword() {
    this.isShowConfirmPassword.update((v) => !v);
  }
}
