import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from '../../../../service/authentication.service';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  loginForm!: FormGroup;

  constructor(
    private authService: AuthenticationService, 
    private router: Router,
    private fb: FormBuilder,
    private toastr: ToastrService
  ) {
    this.loginForm = this.fb.group({
      email: new FormControl(''),
      password: new FormControl(''),
    }); 
  }

  onLogin() {
    this.authService.loginWithEmail(this.email, this.password).then(() => {
      this.toastr.success('Iniciando sesión con:', this.email);
      this.router.navigate(['/home']);
    }).catch(() => {
      this.toastr.error('Credenciales incorrectas.');
      console.error('Credenciales incorrectas.');
    });
  }
}
