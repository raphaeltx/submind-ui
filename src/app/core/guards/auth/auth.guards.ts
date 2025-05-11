import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

/**
 * AuthGuard is a route guard that checks if the user is authenticated before allowing access to certain routes.
 * If the user is not authenticated, they are redirected to the login page.
 */
@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const authToken = localStorage.getItem('authToken');
    const isAuthenticated = !!authToken;

    if (!isAuthenticated) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
