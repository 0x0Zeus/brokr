import { Routes } from '@angular/router';
import { LayoutComponent } from '@pages/layout';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./pages/cars').then((m) => m.CarsComponent),
      },
      {
        path: 'stays',
        loadComponent: () =>
          import('./pages/stays').then((m) => m.StaysComponent),
      },

      {
        path: 'boats',
        loadComponent: () =>
          import('./pages/boats').then((m) => m.BoatsComponent),
      },
    ],
  },
];
