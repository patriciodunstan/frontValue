import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthenticationService } from '../../../../service/authentication.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  standalone: true,
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
  ]
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthenticationService, private toastr: ToastrService) {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]]
    });
  }

  onRegister() {
    if (this.registerForm.valid) {
      const { email, password, confirmPassword } = this.registerForm.value;
      if (password !== confirmPassword) {
        this.toastr.warning('Passwords do not match');
        return;
      }
      this.authService.registerWithEmail(email, password).catch(() => {
        this.toastr.error('Error during registration');
      });
    }
  }

  registerWithGoogle() {
    this.authService.registerWithGoogle();
  }
}