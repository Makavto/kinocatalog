import { Genre } from "../interfaces/shared/Genre.interface";
import { MovieShort } from "../interfaces/shared/MovieShort.interface";
import { Page } from "../interfaces/shared/Page.interface";
import { ValueState } from "../interfaces/shared/ValueState.interface";

export interface SeriesState {
  seriesTop: ValueState<Page<MovieShort>>;
  seriesTopGenre: ValueState<Page<MovieShort>>;
  genre: Genre | null;
}

export enum SeriesActionTypes {
  GET_TOP_SERIES = "GET_TOP_SERIES",
  GET_TOP_SERIES_ERROR = "GET_TOP_SERIES_ERROR",
  GET_TOP_GENRE_SERIES = "GET_TOP_GENRE_SERIES",
  GET_TOP_GENRE_SERIES_ERROR = "GET_TOP_GENRE_SERIES_ERROR",
  SET_GENRE = "SET_GENRE"
}

interface GetTopSeries {
  type: SeriesActionTypes.GET_TOP_SERIES,
  payload: Page<MovieShort>
}

interface GetTopSeriesError {
  type: SeriesActionTypes.GET_TOP_SERIES_ERROR,
  payload: string
}

interface GetTopGenreSeries {
  type: SeriesActionTypes.GET_TOP_GENRE_SERIES,
  payload: Page<MovieShort>
}

interface GetTopGenreSeriesError {
  type: SeriesActionTypes.GET_TOP_GENRE_SERIES_ERROR,
  payload: string
}

interface SetGenre {
  type: SeriesActionTypes.SET_GENRE,
  payload: Genre
}

export type SeriesActions = 
  GetTopGenreSeries
  | GetTopGenreSeriesError
  | GetTopSeries
  | GetTopSeriesError
  | SetGenre