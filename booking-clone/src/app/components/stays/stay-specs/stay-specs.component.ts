import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { IStayDetailsSpecs } from '@shared/models/stays';

@Component({
  selector: 'app-stay-specs',
  standalone: true,
  imports: [],
  templateUrl: './stay-specs.component.html',
  styleUrl: './stay-specs.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StaySpecsComponent {
  specs = input.required<IStayDetailsSpecs>();
}
