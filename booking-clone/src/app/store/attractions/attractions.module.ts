import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AttractionsEffects } from './attractions.effects';
import { attractionsReducer } from './attractions.reducer';

@NgModule({
  imports: [
    StoreModule.forFeature('attractions', attractionsReducer),
    EffectsModule.forFeature(AttractionsEffects),
  ],
})
export class AttractionsStoreModule {}
