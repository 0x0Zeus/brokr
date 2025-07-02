import { createAction, props } from '@ngrx/store';
import {} from '@shared/interfaces/stays/params';
import { IMapData } from '@shared/models/map';

const actionSource = '[Map]';

export const AddMapData = createAction(
  `${actionSource} Add`,
  props<{
    mapData: IMapData[];
  }>()
);

export const ToggleMap = createAction(
  `${actionSource} Toggle`,
  props<{
    isMap: boolean;
  }>()
);
