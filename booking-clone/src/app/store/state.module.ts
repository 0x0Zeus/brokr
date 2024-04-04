import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';

import { CarsStoreModule } from './cars';
import { MapStoreModule } from './map';
import { RouterStoreModule } from './router';
import { StaysStoreModule } from './stays';

@NgModule({
  imports: [
    CarsStoreModule,
    StaysStoreModule,
    RouterStoreModule,
    MapStoreModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot({}),
    StoreRouterConnectingModule.forRoot(),
  ],
})
export class StateModule {}
