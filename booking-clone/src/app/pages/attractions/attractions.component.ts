import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AttractionComponent } from '@components/attractions/attraction';

@Component({
  selector: 'app-attractions',
  standalone: true,
  imports: [AttractionComponent],
  templateUrl: './attractions.component.html',
  styleUrl: './attractions.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AttractionsComponent {}
