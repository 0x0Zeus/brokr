import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HomeComponent } from '@components/stays/home';

@Component({
  selector: 'app-stays',
  standalone: true,
  imports: [HomeComponent],
  templateUrl: './stays.component.html',
  styleUrl: './stays.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StaysComponent {}
