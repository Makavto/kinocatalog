import { Premiere } from "../interfaces/main/Premiere.interface";
import { Release } from "../interfaces/main/Release.interface";
import { MovieShort } from "../interfaces/shared/MovieShort.interface";
import { Page } from "../interfaces/shared/Page.interface";
import { ValueState } from "../interfaces/shared/ValueState.interface";

export interface MainState {
  topBest: ValueState<Page<MovieShort>>;
  premieres: ValueState<Premiere[]>;
  releases: ValueState<Page<Release>>;
}

export enum MainActionTypes {
  GET_TOP_BEST = "GET_TOP_BEST",
  GET_TOP_BEST_ERROR = "GET_TOP_BEST_ERROR",
  GET_PREMIERES = "GET_PREMIERES",
  GET_PREMIERES_ERROR = "GET_PREMIERES_ERROR",
  GET_RELEASES = "GET_RELEASES",
  GET_RELEASES_ERROR = "GET_RELEASES_ERROR",
}

interface getTopBest {
  type: MainActionTypes.GET_TOP_BEST,
  payload: Page<MovieShort>
}

interface getTopBestError {
  type: MainActionTypes.GET_TOP_BEST_ERROR,
  payload: string
}

interface getReleases {
  type: MainActionTypes.GET_RELEASES,
  payload: Page<Release>
}

interface getReleasesError {
  type: MainActionTypes.GET_RELEASES_ERROR,
  payload: string
}

interface getPremiers {
  type: MainActionTypes.GET_PREMIERES,
  payload: Premiere[]
}

interface getPremiersError {
  type: MainActionTypes.GET_PREMIERES_ERROR,
  payload: string
}

export type MainActions =
  getPremiers
  | getPremiersError
  | getReleases
  | getReleasesError
  | getTopBest
  | getTopBestError