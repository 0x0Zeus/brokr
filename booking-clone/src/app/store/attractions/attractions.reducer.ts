import { HttpErrorResponse } from '@angular/common/http';
import { createReducer, on } from '@ngrx/store';
import {
  IAttractionsSearchFilters,
  IAttractionsSearchParams,
} from '@shared/interfaces/attractions';
import { IAttraction } from '@shared/models/attractions';

import * as ATTRACTIONS_ACTIONS from './attractions.action';

export interface AttractionsState {
  attractions: IAttraction[];
  isLoading: boolean;
  error: HttpErrorResponse | null;
  searchParams: null | IAttractionsSearchParams;
  filters: IAttractionsSearchFilters;
}

export const initialState: AttractionsState = {
  attractions: [],
  isLoading: false,
  error: null,
  searchParams: null,
  filters: {
    sortBy: null,
  },
};

export const attractionsReducer = createReducer(
  initialState,
  on(
    ATTRACTIONS_ACTIONS.FetchAttractions,
    (state, { searchParams, filters }): AttractionsState => {
      if (searchParams.page === 1) {
        return {
          ...state,
          searchParams,
          filters,
          attractions: [],
          isLoading: true,
        };
      } else {
        return {
          ...state,
          searchParams,
          filters,
          isLoading: true,
        };
      }
    }
  ),
  on(
    ATTRACTIONS_ACTIONS.FetchAttractionsSuccess,
    (state, { attractions }): AttractionsState => {
      if (state.searchParams && state.searchParams.page === 1) {
        return {
          ...state,
          attractions,
          isLoading: false,
        };
      } else {
        return {
          ...state,
          attractions: [...state.attractions].concat(attractions),
          isLoading: false,
        };
      }
    }
  ),
  on(
    ATTRACTIONS_ACTIONS.FetchAttractionsFailed,
    (state, { error }): AttractionsState => ({
      ...state,
      error,
      attractions: [],
      isLoading: false,
    })
  ),
  on(
    ATTRACTIONS_ACTIONS.SetAttractionsFilters,
    (state, { filters }): AttractionsState => ({
      ...state,
      filters,
    })
  )
);
