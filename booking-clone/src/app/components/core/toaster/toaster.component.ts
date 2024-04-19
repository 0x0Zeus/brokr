import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  input,
  Output,
} from '@angular/core';
import { IToaster } from '@shared/models/toaster/toaster';

@Component({
  selector: 'app-toaster',
  standalone: true,
  imports: [],
  templateUrl: './toaster.component.html',
  styleUrl: './toaster.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToasterComponent {
  toast = input.required<IToaster>();
  index = input.required<number>();

  @Output() remove = new EventEmitter<number>();

  onClose(): void {
    this.remove.emit(this.index());
  }
}
