import { AsyncPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { IPhoto } from '@shared/models/shared';
import { BehaviorSubject } from 'rxjs';

import { ModalComponent } from '../modal';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [AsyncPipe, ModalComponent],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SliderComponent implements OnInit {
  @Input({ required: true }) photos!: IPhoto[];
  currentPhotoUrl$ = new BehaviorSubject<string | null>(null);
  modalPhotoUrl$ = new BehaviorSubject<string | null>(null);
  isFullMode = false;

  ngOnInit(): void {
    this.currentPhotoUrl$.next(this.photos[0].lg);
  }

  setCurrentPhotoUrl(url: string): void {
    this.currentPhotoUrl$.next(url);
  }

  setNextPhoto(): void {
    const currentModalPhotoIndex = this.photos.findIndex(
      (el) => el.lg === this.modalPhotoUrl$.value
    );
    if (currentModalPhotoIndex === this.photos.length - 1) {
      this.modalPhotoUrl$.next(this.photos[0].lg);
    } else {
      this.modalPhotoUrl$.next(this.photos[currentModalPhotoIndex + 1].lg);
    }
  }

  setPrevPhoto(): void {
    const currentModalPhotoIndex = this.photos.findIndex(
      (el) => el.lg === this.modalPhotoUrl$.value
    );
    if (currentModalPhotoIndex === 0) {
      this.modalPhotoUrl$.next(this.photos[this.photos.length - 1].lg);
    } else {
      this.modalPhotoUrl$.next(this.photos[currentModalPhotoIndex - 1].lg);
    }
  }

  closeModal(): void {
    this.isFullMode = false;
  }

  openModal(photo: string): void {
    this.isFullMode = true;
    this.modalPhotoUrl$.next(photo);
  }
}
