import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'users',
    pathMatch: 'full',
  },
  {
    path: 'users',
    loadComponent: () => import('./pages/users/users.page').then((m) => m.UsersPage),
  },
  {
    path: 'galeria',
    loadComponent: () => import('./galeria/galeria.component').then((m) => m.GaleriaComponent),
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  }
];
