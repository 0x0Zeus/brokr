import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { RecommendedBooksEffects } from './cars.effects';
import { recommendedBooksReducer } from './cars.reducer';

@NgModule({
  imports: [
    StoreModule.forFeature('cars', recommendedBooksReducer),
    EffectsModule.forFeature(RecommendedBooksEffects),
  ],
})
export class CarsStoreModule {}
