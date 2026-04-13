import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Register } from './register/register';
import { Dashboard } from './dashboard/dashboard';
import { Users } from './users/users';
import { authGuard } from './auth-guard';

export const routes: Routes = [

  // Default route
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  // Auth routes
  { path: 'login', component: Login },
  { path: 'register', component: Register },

  // Protected routes
  {
    path: 'dashboard',
    component: Dashboard,
    canActivate: [authGuard]
  },

  {
    path: 'users',
    component: Users,
    canActivate: [authGuard]
  },

  // 🔥 OPTIONAL (recommended): wildcard route
  { path: '**', redirectTo: 'login' }

];