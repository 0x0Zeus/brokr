import { AsyncPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { DestroyDirective } from '@core/directives';
import { ToasterService } from '@core/services/toaster';
import { IToaster } from '@shared/models/toaster/toaster';
import { BehaviorSubject, takeUntil } from 'rxjs';

import { ToasterComponent } from '../toaster';

@Component({
  selector: 'app-toaster-container',
  standalone: true,
  imports: [ToasterComponent, AsyncPipe],
  templateUrl: './toaster-container.component.html',
  styleUrl: './toaster-container.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [DestroyDirective],
})
export class ToasterContainerComponent implements OnInit {
  toasts = new BehaviorSubject<IToaster[]>([]);
  private destroy$ = inject(DestroyDirective).destroy$;

  constructor(private toasterService: ToasterService) {}

  ngOnInit(): void {
    this.toasterService.toast$
      .pipe(takeUntil(this.destroy$))
      .subscribe((toast) => {
        this.toasts.next([...this.toasts.getValue(), toast]);
        setTimeout(
          () => this.toasts.next([...this.toasts.getValue()].slice(1)),
          4000
        );
      });
  }

  remove(index: number): void {
    this.toasts.next([...this.toasts.getValue()].filter((_, i) => i !== index));
  }
}
