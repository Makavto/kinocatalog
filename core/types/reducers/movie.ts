import { Movie } from "../interfaces/shared/Movie.interface";
import { ValueState } from "../interfaces/shared/ValueState.interface";

export interface MovieState {
  movie: ValueState<Movie>
}

export enum MovieActionTypes {
  GET_MOVIE = "GET_MOVIE",
  GET_MOVIE_ERROR = "GET_MOVIE_ERROR",
}

interface GetMovieAction {
  type: MovieActionTypes.GET_MOVIE,
  payload: Movie
}

interface GetMovieErrorAction {
  type: MovieActionTypes.GET_MOVIE_ERROR,
  payload: string
}

export type MovieAction = 
  GetMovieAction
  | GetMovieErrorAction