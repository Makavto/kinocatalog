import { MovieShort } from "../interfaces/MovieShort.interface";
import { Page } from "../interfaces/Page.interface";
import { ValueState } from "../interfaces/ValueState.interface";

export interface SearchState {
  moviesSearch: ValueState<Page<MovieShort>>;
}

export enum SearchActionTypes {
  SEARCH_MOVIES = 'SEARCH_MOVIES',
  SEARCH_MOVIES_ERROR = 'SEARCH_MOVIES_ERROR',
  SEARCH_MOVIES_LOADING = 'SEARCH_MOVIES_LOADING'
}

interface SearchMovies {
  type: SearchActionTypes.SEARCH_MOVIES,
  payload: Page<MovieShort>
}

interface SearchMoviesError {
  type: SearchActionTypes.SEARCH_MOVIES_ERROR,
  payload: string
}

interface SearchMoviesLoading {
  type: SearchActionTypes.SEARCH_MOVIES_LOADING,
}

export type SearchActions = 
  SearchMovies
  | SearchMoviesError
  | SearchMoviesLoading