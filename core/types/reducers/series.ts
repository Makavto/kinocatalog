import { Genre } from "../interfaces/Genre.interface";
import { MovieShort } from "../interfaces/MovieShort.interface";
import { Page } from "../interfaces/Page.interface";
import { ValueState } from "../interfaces/ValueState.interface";

export interface SeriesState {
  seriesTop: ValueState<Page<MovieShort>>;
  seriesTopGenre: ValueState<Page<MovieShort>>;
  miniSeriesTop: ValueState<Page<MovieShort>>;
  miniSeriesTopGenre: ValueState<Page<MovieShort>>;
  tvSeriesTop: ValueState<Page<MovieShort>>;
  tvSeriesPopular: ValueState<Page<MovieShort>>;
  genre: Genre | null;
}

export enum SeriesActionTypes {
  GET_TOP_SERIES = "GET_TOP_SERIES",
  GET_TOP_SERIES_ERROR = "GET_TOP_SERIES_ERROR",
  GET_TOP_GENRE_SERIES = "GET_TOP_GENRE_SERIES",
  GET_TOP_GENRE_SERIES_ERROR = "GET_TOP_GENRE_SERIES_ERROR",
  GET_TOP_MINI_SERIES = "GET_TOP_MINI_SERIES",
  GET_TOP_MINI_SERIES_ERROR = "GET_TOP_MINI_SERIES_ERROR",
  GET_TOP_GENRE_MINI_SERIES = "GET_TOP_GENRE_MINI_SERIES",
  GET_TOP_GENRE_MINI_SERIES_ERROR = "GET_TOP_GENRE_MINI_SERIES_ERROR",
  GET_TOP_TV_SERIES = "GET_TOP_TV_SERIES",
  GET_TOP_TV_SERIES_ERROR = "GET_TOP_TV_SERIES_ERROR",
  GET_POPULAR_TV_SERIES = "GET_POPULAR_TV_SERIES",
  GET_POPULAR_TV_SERIES_ERROR = "GET_POPULAR_TV_SERIES_ERROR",
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

interface GetTopMiniSeries {
  type: SeriesActionTypes.GET_TOP_MINI_SERIES,
  payload: Page<MovieShort>
}

interface GetTopMiniSeriesError {
  type: SeriesActionTypes.GET_TOP_MINI_SERIES_ERROR,
  payload: string
}

interface GetTopGenreMiniSeries {
  type: SeriesActionTypes.GET_TOP_GENRE_MINI_SERIES,
  payload: Page<MovieShort>
}

interface GetTopGenreMiniSeriesError {
  type: SeriesActionTypes.GET_TOP_GENRE_MINI_SERIES_ERROR,
  payload: string
}

//
interface GetTopTvSeries {
  type: SeriesActionTypes.GET_TOP_TV_SERIES,
  payload: Page<MovieShort>
}

interface GetTopTvSeriesError {
  type: SeriesActionTypes.GET_TOP_TV_SERIES_ERROR,
  payload: string
}

interface GetPopularTvSeries {
  type: SeriesActionTypes.GET_POPULAR_TV_SERIES,
  payload: Page<MovieShort>
}

interface GetPopularTvSeriesError {
  type: SeriesActionTypes.GET_POPULAR_TV_SERIES_ERROR,
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
  | GetTopGenreMiniSeries
  | GetTopGenreMiniSeriesError
  | GetTopMiniSeries
  | GetTopMiniSeriesError
  | GetPopularTvSeries
  | GetPopularTvSeriesError
  | GetTopTvSeries
  | GetTopTvSeriesError
  | SetGenre