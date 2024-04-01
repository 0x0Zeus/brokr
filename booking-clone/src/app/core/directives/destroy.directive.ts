import { Directive, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Directive({
  selector: '[appDestroy]',
  standalone: true,
})
export class DestroyDirective implements OnDestroy {
  private _destroy$ = new Subject<boolean>();
  get destroy$(): Observable<boolean> {
    return this._destroy$.asObservable();
  }

  ngOnDestroy(): void {
    this._destroy$.next(true);
    this._destroy$.complete();
  }
}
