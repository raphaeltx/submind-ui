import { Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth/auth.guards';

/**
 * The routes array defines the application's routing configuration.
 * It specifies the paths, components to load, and guards for each route.
 *
 * @type {Routes}
 */
export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('./features/login/login.component').then((m) => m.LoginComponent),
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./features/home/home.component').then((m) => m.HomeComponent),
    canActivate: [AuthGuard],
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'login',
  },
];
