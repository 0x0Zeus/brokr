import { AsyncPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { MiniLoaderComponent } from '@components/shared/mini-loader';
import { StayComponent } from '@components/stays/stay';
import { DestroyDirective } from '@core/directives';
import { IStaysSearchParams } from '@shared/interfaces/stays';
import { MapFacade } from '@store/map';
import { StaysFacade } from '@store/stays';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { takeUntil } from 'rxjs';

@Component({
  selector: 'app-stays',
  standalone: true,
  imports: [
    StayComponent,
    AsyncPipe,
    MiniLoaderComponent,
    ProgressSpinnerModule,
  ],
  templateUrl: './stays.component.html',
  styleUrl: './stays.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [DestroyDirective],
})
export class StaysComponent implements OnInit {
  stays$ = this.staysFacade.stays$;
  isLoadingStays$ = this.staysFacade.staysIsLoading$;
  staysSearchParams$ = this.staysFacade.staysSearchParams$;
  staysSearchParams: null | IStaysSearchParams = null;
  private destroy$ = inject(DestroyDirective).destroy$;

  constructor(
    private staysFacade: StaysFacade,
    private mapFacade: MapFacade
  ) {}

  ngOnInit(): void {
    this.staysSearchParams$
      .pipe(takeUntil(this.destroy$))
      .subscribe((searchParams) => {
        this.staysSearchParams = searchParams;
      });

    this.stays$.pipe(takeUntil(this.destroy$)).subscribe((stays) => {
      const mapData = stays.map((stay) => ({
        latitude: stay.latitude,
        longitude: stay.longitude,
        label: `${stay.name}, ${stay.price}$`,
      }));
      this.mapFacade.addMapData(mapData);
    });
  }

  setNextPage(): void {
    if (this.staysSearchParams) {
      this.staysFacade.fetchStays({
        ...this.staysSearchParams,
        page: this.staysSearchParams.page + 1,
      });
    }
  }
}
