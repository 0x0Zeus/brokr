import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-stays',
  standalone: true,
  imports: [],
  templateUrl: './stays.component.html',
  styleUrl: './stays.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StaysComponent {}
