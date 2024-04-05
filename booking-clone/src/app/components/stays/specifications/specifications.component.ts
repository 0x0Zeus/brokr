import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IStayDetailsSpecifications } from '@shared/models/stays/stayDetails';

@Component({
  selector: 'app-specifications',
  standalone: true,
  imports: [],
  templateUrl: './specifications.component.html',
  styleUrl: './specifications.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpecificationsComponent {
  @Input({ required: true }) specifications!: IStayDetailsSpecifications;
}
