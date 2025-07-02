import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { mapReducer } from './map.reducer';

@NgModule({
  imports: [StoreModule.forFeature('map', mapReducer)],
})
export class MapStoreModule {}
