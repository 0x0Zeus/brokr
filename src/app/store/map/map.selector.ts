import { createFeatureSelector, createSelector } from '@ngrx/store';

import { MapState } from './map.reducer';

export const selectMapStore = createFeatureSelector<MapState>('map');

export const selectMapData = createSelector(
  selectMapStore,
  (state: MapState) => state.mapData
);

export const selectIsMap = createSelector(
  selectMapStore,
  (state: MapState) => state.isMap
);
