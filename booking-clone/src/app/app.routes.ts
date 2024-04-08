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
          import('./pages/home').then((m) => m.HomeComponent),
      },
      {
        path: 'booking',
        loadComponent: () =>
          import('./pages/booking-layout').then(
            (m) => m.BookingLayoutComponent
          ),
        children: [
          {
            path: 'cars',
            loadComponent: () =>
              import('./pages/cars').then((m) => m.CarsComponent),
          },
          {
            path: 'stays',
            loadComponent: () =>
              import('./pages/stays').then((m) => m.StaysComponent),
          },

          {
            path: 'attractions',
            loadComponent: () =>
              import('./pages/attractions').then((m) => m.AttractionsComponent),
          },
        ],
      },
      {
        path: 'details/stay/:stayId',
        loadComponent: () =>
          import('./pages/stay-details').then((m) => m.StayDetailsComponent),
      },
      {
        path: 'details/car/:carId',
        loadComponent: () =>
          import('./pages/car-details').then((m) => m.CarDetailsComponent),
      },
    ],
  },
];
