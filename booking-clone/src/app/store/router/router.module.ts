import { NgModule } from '@angular/core';
import { routerReducer } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';

@NgModule({
  imports: [StoreModule.forFeature('router', routerReducer)],
})
export class RouterStoreModule {}
