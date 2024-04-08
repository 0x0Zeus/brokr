import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IStayDetailsSpecs } from '@shared/models/stays/stayDetails';

@Component({
  selector: 'app-stay-specs',
  standalone: true,
  imports: [],
  templateUrl: './stay-specs.component.html',
  styleUrl: './stay-specs.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StaySpecsComponent {
  @Input({ required: true }) specs!: IStayDetailsSpecs;
}
