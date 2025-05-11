import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { Toast } from 'primeng/toast';
import { AuthService } from '../../core/services/auth/auth.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

/**
 * LoginComponent handles the login form and user authentication logic.
 */
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    InputGroupModule,
    InputTextModule,
    ButtonModule,
    InputGroupAddonModule,
    Toast,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  loginForm!: FormGroup;
  isLoading = false;
  errorMessage: string | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private messageService: MessageService,
    private router: Router
  ) {
    this.initializeForm();
  }

  /**
   * Initializes the login form with validation rules.
   */
  private initializeForm(): void {
    this.loginForm = this.formBuilder.group({
      identifier: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  /**
   * Handles form submission.
   * Logs the form values if valid, otherwise logs an error.
   */
  onSubmit(): void {
    if (this.loginForm.valid) {
      this.handleLogin();
    } else {
      this.handleInvalidForm();
    }
  }

  /**
   * Handles successful login form submission.
   */
  private handleLogin(): void {
    this.isLoading = true;
    this.errorMessage = null;

    const { identifier, password } = this.loginForm.value;

    this.authService.login(identifier, password).subscribe({
      next: (response) => {
        localStorage.setItem('authToken', response.data.token);
        this.messageService.add({
          severity: 'success',
          summary: 'Login successful',
          detail: 'Welcome!',
        });

        this.router.navigate(['/home']);
      },
      error: (error) => {
        this.errorMessage = 'Login failed. Please check your credentials.';
      },
      complete: () => {
        this.isLoading = false;
      },
    });
  }

  /**
   * Handles invalid form submission.
   */
  private handleInvalidForm(): void {
    console.log('Form is invalid:', this.loginForm.errors);
  }
}
