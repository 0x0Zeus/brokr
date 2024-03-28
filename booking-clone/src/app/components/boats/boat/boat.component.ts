import { UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-boat',
  standalone: true,
  imports: [UpperCasePipe],
  templateUrl: './boat.component.html',
  styleUrl: './boat.component.scss',
})
export class BoatComponent {
  ratingItems = [...Array(5).keys()];
  isFavorite = false;
}
