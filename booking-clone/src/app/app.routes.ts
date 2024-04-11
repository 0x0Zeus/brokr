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
            path: 'flights',
            loadComponent: () =>
              import('./pages/flights').then((m) => m.FlightsComponent),
          },
          {
            path: 'attractions',
            loadComponent: () =>
              import('./pages/attractions').then((m) => m.AttractionsComponent),
          },
        ],
      },
      {
        path: 'details',
        children: [
          {
            path: 'stay/:stayId',
            loadComponent: () =>
              import('./pages/stay-details').then(
                (m) => m.StayDetailsComponent
              ),
          },
          {
            path: 'car/:carId',
            loadComponent: () =>
              import('./pages/car-details').then((m) => m.CarDetailsComponent),
          },
          {
            path: 'attraction/:attractionId',
            loadComponent: () =>
              import('./pages/attraction-details').then(
                (m) => m.AttractionDetailsComponent
              ),
          },
          {
            path: 'flight/:flightId',
            loadComponent: () =>
              import('./pages/flight-details').then(
                (m) => m.FlightDetailsComponent
              ),
          },
        ],
      },
    ],
  },
  {
    path: '**',
    loadComponent: () =>
      import('./pages/not-found').then((m) => m.NotFoundComponent),
  },
];
