import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  inject,
} from '@angular/core';
import { Router } from '@angular/router';
import { DestroyDirective } from '@core/directives';
import { MapFacade } from '@store/map';
import * as tt from '@tomtom-international/web-sdk-maps';
import { filter, takeUntil } from 'rxjs';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MapComponent implements AfterViewInit {
  mapData$ = this.mapFacade.mapData$;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  map: any;
  markers: tt.Marker[] = [];
  private destroy$ = inject(DestroyDirective).destroy$;

  constructor(
    private mapFacade: MapFacade,
    private router: Router
  ) {}

  ngAfterViewInit(): void {
    this.loadMap();
  }

  loadMap(): void {
    this.map = tt
      .map({
        key: 'P0XIzYGDO1J29yEAreC7WrRxUBOxEhVR',
        container: 'map',
      })
      .on('load', () => this.getPoints());

    this.map.addControl(new tt.FullscreenControl());
    this.map.addControl(new tt.NavigationControl());
  }

  onButtonClick(detailsLink: string): void {
    this.router.navigateByUrl(detailsLink);
  }

  getPoints(): void {
    this.mapData$
      .pipe(
        takeUntil(this.destroy$),
        filter((mapData) => mapData.length !== 0)
      )
      .subscribe((mapData) => {
        this.clearMarkers();

        this.map.flyTo({
          center: {
            lat: mapData[0].latitude,
            lng: mapData[0].longitude,
          },
          zoom: 11,
        });

        mapData.forEach((dataItem) => {
          const containerEl = document.createElement('div');
          const labelEl = document.createElement('h4');
          labelEl.className = 'mb-[0.4rem] font-medium';
          labelEl.textContent = dataItem.label;

          const buttonEl = document.createElement('div');
          buttonEl.className =
            'border-2 border-base_border text-base_third rounded-sm p-[0.2rem] w-fit cursor-pointer';
          buttonEl.textContent = 'Get Details';
          buttonEl.addEventListener('click', () =>
            this.onButtonClick(dataItem.detailsLink)
          );

          containerEl.append(labelEl, buttonEl);

          const popup = new tt.Popup({
            anchor: 'bottom',
            offset: { bottom: [0, -40] },
          }).setDOMContent(containerEl);

          this.markers.push(
            new tt.Marker()
              .setLngLat({
                lat: dataItem.latitude,
                lng: dataItem.longitude,
              })
              .addTo(this.map)
              .setPopup(popup)
          );
        });
      });
  }

  clearMarkers(): void {
    this.markers.forEach((item) => {
      item.remove();
    });
    this.markers = [];
  }
}
