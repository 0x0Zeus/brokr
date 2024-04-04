import { AsyncPipe } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { LoaderComponent } from '@components/shared/loader';
import { MiniLoaderComponent } from '@components/shared/mini-loader';
import { StayComponent } from '@components/stays/stay';
import { DestroyDirective } from '@core/directives';
import { IStaysSearchParams } from '@shared/interfaces/stays/params';
import { StaysFacade } from '@store/stays';
import * as tt from '@tomtom-international/web-sdk-maps';
import { takeUntil } from 'rxjs';

@Component({
  selector: 'app-stays',
  standalone: true,
  imports: [StayComponent, AsyncPipe, LoaderComponent, MiniLoaderComponent],
  templateUrl: './stays.component.html',
  styleUrl: './stays.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [DestroyDirective],
})
export class StaysComponent implements OnInit, AfterViewInit {
  stays$ = this.staysFacade.stays$;
  isLoadingStays$ = this.staysFacade.staysIsLoading$;
  staysSearchParams$ = this.staysFacade.staysSearchParams$;
  staysSearchParams: null | IStaysSearchParams = null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  map: any;
  private destroy$ = inject(DestroyDirective).destroy$;

  constructor(private staysFacade: StaysFacade) {}

  public ngAfterViewInit(): void {
    this.loadMap();
  }

  ngOnInit(): void {
    this.staysSearchParams$
      .pipe(takeUntil(this.destroy$))
      .subscribe((searchParams) => {
        this.staysSearchParams = searchParams;
      });

    this.stays$.pipe(takeUntil(this.destroy$)).subscribe((stays) => {
      this.map.flyTo({
        center: {
          lat: stays[0].latitude,
          lng: stays[0].longitude,
        },
        zoom: 13,
      });
      stays.forEach((stay) => {
        const popup = new tt.Popup({
          anchor: 'bottom',
          offset: { bottom: [0, -40] },
        }).setHTML(`${stay.name}, ${stay.price}$`);

        new tt.Marker()
          .setLngLat({
            lat: stay.latitude,
            lng: stay.longitude,
          })
          .addTo(this.map)
          .setPopup(popup)
          .togglePopup();
      });
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

  private loadMap(): void {
    this.map = tt.map({
      key: 'P0XIzYGDO1J29yEAreC7WrRxUBOxEhVR',
      container: 'map',
    });

    this.map.addControl(new tt.FullscreenControl());
    this.map.addControl(new tt.NavigationControl());
  }
}
