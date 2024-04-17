import { HttpErrorResponse } from '@angular/common/http';
import { createReducer, on } from '@ngrx/store';
import {
  IStaysSearchFilters,
  IStaysSearchParams,
} from '@shared/interfaces/stays';
import { IStay } from '@shared/models/stays';

import * as STAYS_ACTIONS from './stays.action';

export interface StaysState {
  stays: IStay[];
  isLoading: boolean;
  error: HttpErrorResponse | null;
  totalCount: number;
  searchParams: null | IStaysSearchParams;
  filters: IStaysSearchFilters;
}

export const initialState: StaysState = {
  stays: [],
  isLoading: false,
  error: null,
  totalCount: 0,
  searchParams: null,
  filters: {
    adults: null,
    rooms: null,
    priceMin: null,
    priceMax: null,
    sortBy: null,
  },
};

export const staysReducer = createReducer(
  initialState,
  on(
    STAYS_ACTIONS.FetchStays,
    (state, { searchParams, filters }): StaysState => {
      return {
        ...state,
        searchParams,
        filters,
        stays: [],
        isLoading: true,
      };
    }
  ),
  on(
    STAYS_ACTIONS.FetchStaysSuccess,
    (state, { stays, totalCount }): StaysState => {
      if (state.searchParams?.page === 1) {
        return {
          ...state,
          stays,
          totalCount,
          isLoading: false,
        };
      } else {
        return {
          ...state,
          stays,
          isLoading: false,
        };
      }
    }
  ),
  on(
    STAYS_ACTIONS.FetchStaysFailed,
    (state, { error }): StaysState => ({
      ...state,
      error,
      stays: [],
      isLoading: false,
    })
  ),
  on(
    STAYS_ACTIONS.SetStaysFilters,
    (state, { filters }): StaysState => ({
      ...state,
      filters,
    })
  )
);
