import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { IMapData } from '@shared/models/map';

import * as MAP_ACTIONS from './map.action';
import { selectIsMap, selectMapData } from './map.selector';

@Injectable({
  providedIn: 'root',
})
export class MapFacade {
  mapData$ = this.store.select(selectMapData);
  isMap$ = this.store.select(selectIsMap);

  constructor(private store: Store) {}

  addMapData(mapData: IMapData[]) {
    this.store.dispatch(
      MAP_ACTIONS.AddMapData({
        mapData,
      })
    );
  }

  toggleMap(isMap: boolean) {
    this.store.dispatch(
      MAP_ACTIONS.ToggleMap({
        isMap,
      })
    );
  }
}
