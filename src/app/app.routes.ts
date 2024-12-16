import { Routes } from '@angular/router';
import { PagesComponent } from './components/public/pages.component';
import { NotFoundComponent } from './components/public/not-found/not-found.component';

export const routes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full'
            },
            {
                path: 'home',
                loadComponent: () => import('./components/public/home/home.component').then(m => m.HomeComponent)
            },
            {
                path: 'login',
                loadComponent: () => import('./components/public/auth/login/login.component').then(m => m.LoginComponent)
            },
            {
                path: 'register',
                loadComponent: () => import('./components/public/auth/register/register.component').then(m => m.RegisterComponent)
            },
            {
                path: 'private',
                loadChildren: () => import('./components/public/pages.routes').then(m => m.pagesRoutes)
            }
        ]
    },
    {
        path: '**',
        component: NotFoundComponent
    }
]; 