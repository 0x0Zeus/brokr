import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { CarsStoreModule } from './cars';

@NgModule({
  imports: [
    CarsStoreModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot({}),
  ],
})
export class StateModule {}
