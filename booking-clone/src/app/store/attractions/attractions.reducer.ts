import { HttpErrorResponse } from '@angular/common/http';
import { createReducer, on } from '@ngrx/store';
import { IAttractionsSearchParams } from '@shared/interfaces/attractions/params';
import { IAttraction } from '@shared/models/attractions/attraction';

import * as ATTRACTIONS_ACTIONS from './attractions.action';

export interface AttractionsState {
  attractions: IAttraction[];
  isLoading: boolean;
  error: HttpErrorResponse | null;
  searchParams: null | IAttractionsSearchParams;
}

export const initialState: AttractionsState = {
  attractions: [],
  isLoading: false,
  error: null,
  searchParams: null,
};

export const attractionsReducer = createReducer(
  initialState,
  on(
    ATTRACTIONS_ACTIONS.FetchAttractions,
    (state, { searchParams }): AttractionsState => {
      if (searchParams.page === 1) {
        return {
          ...state,
          searchParams,
          attractions: [],
          isLoading: true,
        };
      } else {
        return {
          ...state,
          searchParams,
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
  )
);
