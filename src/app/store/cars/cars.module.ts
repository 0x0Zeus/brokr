import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { CarsEffects } from './cars.effects';
import { carsReducer } from './cars.reducer';

@NgModule({
  imports: [
    StoreModule.forFeature('cars', carsReducer),
    EffectsModule.forFeature(CarsEffects),
  ],
})
export class CarsStoreModule {}
