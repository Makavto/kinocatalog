import { FilmTopItem } from "../interfaces/films/FilmTopItem.interface";
import { MovieShort } from "../interfaces/shared/MovieShort.interface";
import { Page } from "../interfaces/shared/Page.interface";
import { ValueState } from "../interfaces/shared/ValueState.interface";

export interface FilmsState {
  filmsPopular: ValueState<Page<FilmTopItem>>;
  filmsAwait: ValueState<Page<FilmTopItem>>;
  filmsTop: ValueState<Page<MovieShort>>;
}

export enum FilmsActionTypes {
  GET_POPULAR_FILMS = "GET_POPULAR_FILMS",
  GET_POPULAR_FILMS_ERROR = "GET_POPULAR_FILMS_ERROR",
  GET_AWAIT_FILMS = "GET_AWAIT_FILMS",
  GET_AWAIT_FILMS_ERROR = "GET_AWAIT_FILMS_ERROR",
  GET_TOP_FILMS = "GET_TOP_FILMS",
  GET_TOP_FILMS_ERROR = "GET_TOP_FILMS_ERROR",
}

interface GetPopularFilmsAction {
  type: FilmsActionTypes.GET_POPULAR_FILMS,
  payload: Page<FilmTopItem>
}

interface GetPopularFilmsErrorAction {
  type: FilmsActionTypes.GET_POPULAR_FILMS_ERROR,
  payload: string
}

interface GetAwaitFilmsAction {
  type: FilmsActionTypes.GET_AWAIT_FILMS,
  payload: Page<FilmTopItem>
}

interface GetAwaitFilmsErrorAction {
  type: FilmsActionTypes.GET_AWAIT_FILMS_ERROR,
  payload: string
}

interface GetTopFilmsAction {
  type: FilmsActionTypes.GET_TOP_FILMS,
  payload: Page<MovieShort>
}

interface GetTopFilmsErrorAction {
  type: FilmsActionTypes.GET_TOP_FILMS_ERROR,
  payload: string
}

export type FilmsAction = 
  GetPopularFilmsAction
  | GetPopularFilmsErrorAction
  | GetAwaitFilmsAction
  | GetAwaitFilmsErrorAction
  | GetTopFilmsAction
  | GetTopFilmsErrorAction
