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
  totalCount: number;
  searchParams: null | IAttractionsSearchParams;
  filters: IAttractionsSearchFilters;
}

export const initialState: AttractionsState = {
  attractions: [],
  isLoading: false,
  error: null,
  totalCount: 0,
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
      return {
        ...state,
        searchParams,
        filters,
        attractions: [],
        isLoading: true,
      };
    }
  ),
  on(
    ATTRACTIONS_ACTIONS.FetchAttractionsSuccess,
    (state, { attractions, totalCount }): AttractionsState => {
      return {
        ...state,
        attractions,
        totalCount,
        isLoading: false,
      };
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
