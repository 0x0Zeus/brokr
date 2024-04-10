import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { FlightsEffects } from './flights.effects';
import { flightsReducer } from './flights.reducer';

@NgModule({
  imports: [
    StoreModule.forFeature('flights', flightsReducer),
    EffectsModule.forFeature(FlightsEffects),
  ],
})
export class FlightsStoreModule {}
