import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { boatsInfo, cars, homeOptions, homes, kinds } from './constants';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  kinds = kinds;
  cars = cars;
  homes = homes;
  homeOptions = homeOptions;
  boatsInfo = boatsInfo;
}
