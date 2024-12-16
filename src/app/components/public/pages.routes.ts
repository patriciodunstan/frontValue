import { Routes } from '@angular/router';
import { authGuard } from '../../guards/auth.guard';

export const pagesRoutes: Routes = [
  {
    path: '',
    canActivate: [authGuard],
    children: [
      {
        path: 'dashboard',
        loadComponent: () => import('../private/dashboard/dashboard.component').then(m => m.DashboardComponent)
      }
    
    ]
  }
];


