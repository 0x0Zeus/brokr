import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  inject,
} from '@angular/core';
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
  private destroy$ = inject(DestroyDirective).destroy$;

  constructor(private mapFacade: MapFacade) {}

  ngAfterViewInit(): void {
    this.loadMap();
    this.getPoints();
  }

  getPoints(): void {
    this.mapData$
      .pipe(
        takeUntil(this.destroy$),
        filter((mapData) => mapData.length !== 0)
      )
      .subscribe((mapData) => {
        console.log(mapData);
        this.map.flyTo({
          center: {
            lat: mapData[0].latitude,
            lng: mapData[0].longitude,
          },
          zoom: 11,
        });
        mapData.forEach((dataItem) => {
          const popup = new tt.Popup({
            anchor: 'bottom',
            offset: { bottom: [0, -40] },
          }).setHTML(dataItem.label);
          new tt.Marker()
            .setLngLat({
              lat: dataItem.latitude,
              lng: dataItem.longitude,
            })
            .addTo(this.map)
            .setPopup(popup)
            .togglePopup();
        });
      });
  }

  loadMap(): void {
    this.map = tt.map({
      key: 'P0XIzYGDO1J29yEAreC7WrRxUBOxEhVR',
      container: 'map',
    });

    this.map.addControl(new tt.FullscreenControl());
    this.map.addControl(new tt.NavigationControl());
  }
}
