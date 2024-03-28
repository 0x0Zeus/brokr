import { Component } from '@angular/core';
import { CarComponent } from '@components/cars/car';

@Component({
  selector: 'app-cars',
  standalone: true,
  imports: [CarComponent],
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.scss',
})
export class CarsComponent {}
