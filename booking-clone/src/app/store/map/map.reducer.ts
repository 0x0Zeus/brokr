import { createReducer, on } from '@ngrx/store';
import { IMapData } from '@shared/models/map';

import * as MAP_ACTIONS from './map.action';

export interface MapState {
  mapData: IMapData[];
  isMap: boolean;
}

export const initialState: MapState = {
  mapData: [],
  isMap: false,
};

export const mapReducer = createReducer(
  initialState,
  on(
    MAP_ACTIONS.AddMapData,
    (state, { mapData }): MapState => ({
      ...state,
      mapData,
    })
  ),
  on(
    MAP_ACTIONS.ToggleMap,
    (state, { isMap }): MapState => ({
      ...state,
      isMap,
    })
  )
);
