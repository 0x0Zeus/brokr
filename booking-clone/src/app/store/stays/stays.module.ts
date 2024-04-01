import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { StaysEffects } from './stays.effects';
import { staysReducer } from './stays.reducer';

@NgModule({
  imports: [
    StoreModule.forFeature('stays', staysReducer),
    EffectsModule.forFeature(StaysEffects),
  ],
})
export class StaysStoreModule {}
