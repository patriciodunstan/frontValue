import { Routes } from '@angular/router';
import { PagesComponent } from './components/public/pages.component';

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
            }
            // ... otras rutas ...
        ]
    }
]; 