import { HttpErrorResponse } from '@angular/common/http';
import { createReducer, on } from '@ngrx/store';
import { IStay } from '@shared/stays/models/stay';

import * as STAYS_ACTIONS from './stays.action';

export interface StaysState {
  stays: IStay[];
  isLoading: boolean;
  error: HttpErrorResponse | null;
}

export const initialState: StaysState = {
  stays: [],
  isLoading: false,
  error: null,
};

export const staysReducer = createReducer(
  initialState,
  on(
    STAYS_ACTIONS.FetchStays,
    (state): StaysState => ({
      ...state,
      isLoading: true,
    })
  ),
  on(STAYS_ACTIONS.FetchStaysSuccess, (state, { stays }): StaysState => {
    return {
      ...state,
      stays,
      isLoading: false,
    };
  }),
  on(
    STAYS_ACTIONS.FetchStaysFailed,
    (state, { error }): StaysState => ({
      ...state,
      error,
      stays: [],
      isLoading: false,
    })
  )
);
