import { HttpErrorResponse } from '@angular/common/http';
import { createReducer, on } from '@ngrx/store';

import { IBook } from '../../shared/models/book';
import * as RECOMMENDED_BOOKS_ACTIONS from './cars.action';

export interface RecommendedBooksState {
  books: IBook[];
  isLoading: boolean;
  error: HttpErrorResponse | null;
}

export const initialState: RecommendedBooksState = {
  books: [],
  isLoading: false,
  error: null,
};

export const recommendedBooksReducer = createReducer(
  initialState,
  on(
    RECOMMENDED_BOOKS_ACTIONS.FetchRecommendedBooks,
    (state): RecommendedBooksState => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    RECOMMENDED_BOOKS_ACTIONS.FetchRecommendedBooksSuccess,
    (state, { books }): RecommendedBooksState => {
      return {
        ...state,
        books,
        isLoading: false,
      };
    }
  ),
  on(
    RECOMMENDED_BOOKS_ACTIONS.FetchRecommendedBooksFailed,
    (state, { error }): RecommendedBooksState => ({
      ...state,
      error,
      books: [],
      isLoading: false,
    })
  )
);
