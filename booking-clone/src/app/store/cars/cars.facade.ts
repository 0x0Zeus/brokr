import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as RECOMMENDED_BOOKS_ACTIONS from './cars.action';
import {
  selectRecommendedBooks,
  selectRecommendedBooksError,
  selectRecommendedBooksIsLoading,
} from './cars.selector';

@Injectable({
  providedIn: 'root',
})
export class RecommendedBooksFacade {
  recommendedBooks$ = this.store.select(selectRecommendedBooks);
  recBooksIsLoading$ = this.store.select(selectRecommendedBooksIsLoading);
  recBooksError$ = this.store.select(selectRecommendedBooksError);

  constructor(private store: Store) {}

  fetchRecommendedBooks(searchValue: string) {
    this.store.dispatch(
      RECOMMENDED_BOOKS_ACTIONS.FetchRecommendedBooks({
        searchValue,
      })
    );
  }
}
