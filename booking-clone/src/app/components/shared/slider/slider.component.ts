import { AsyncPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { IPhoto } from '@shared/models/shared';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SliderComponent implements OnInit {
  @Input({ required: true }) photos!: IPhoto[];
  currentPhotoUrl = new BehaviorSubject<string | null>(null);

  ngOnInit(): void {
    this.currentPhotoUrl.next(this.photos[0].lg);
  }

  setCurrentPhotoUrl(url: string): void {
    this.currentPhotoUrl.next(url);
  }
}
