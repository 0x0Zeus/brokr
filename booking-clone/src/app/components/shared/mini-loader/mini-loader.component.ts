import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-mini-loader',
  standalone: true,
  imports: [],
  templateUrl: './mini-loader.component.html',
  styleUrl: './mini-loader.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MiniLoaderComponent {
  @Input({ required: true }) color!: string;
}
