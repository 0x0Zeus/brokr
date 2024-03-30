import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FooterComponent } from '@components/core/footer';

import { boatsInfo, cars, homeOptions, homes, kinds } from './constants';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, FooterComponent],
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
