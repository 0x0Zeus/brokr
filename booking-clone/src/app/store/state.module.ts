import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { CarsStoreModule } from './cars';
import { StaysStoreModule } from './stays';

@NgModule({
  imports: [
    CarsStoreModule,
    StaysStoreModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot({}),
  ],
})
export class StateModule {}
