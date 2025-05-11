import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthResponse } from '../../models/auth-response.model';

/**
 * AuthService is an Angular service that handles authentication-related operations.
 * It communicates with the backend API to perform login and token retrieval.
 *
 * @class AuthService
 */
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly baseUrl = 'http://localhost:3003';

  constructor(private http: HttpClient) {}

  /**
   * Sends a login request to the backend to retrieve a token.
   * @param identifier The identifier entered by the user.
   * @param password The password entered by the user.
   * @returns An Observable containing the authentication response.
   */
  login(identifier: string, password: string): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.baseUrl}/auth/login`, {
      identifier,
      password,
    });
  }

  logout(): void {
    localStorage.removeItem('authToken');
  }
}
