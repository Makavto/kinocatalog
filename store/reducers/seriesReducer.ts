import { SeriesActions, SeriesActionTypes, SeriesState } from "../../types/reducers/series";
import { ValueStateHelper } from "../ValueState.helper";

export const seriesInitialState: SeriesState = {
  seriesTop: {
    error: null,
    value: null
  },
  seriesTopGenre: {
    error: null,
    value: null
  },
  genre: null,
}

export const seriesReducer = (state = seriesInitialState, action: SeriesActions): SeriesState => {
  switch (action.type) {
    case SeriesActionTypes.GET_TOP_SERIES:
      return {...state, seriesTop: ValueStateHelper.modelComplete(action.payload)}

    case SeriesActionTypes.GET_TOP_SERIES_ERROR:
      return {...state, seriesTop: ValueStateHelper.modelError(action.payload)}

    case SeriesActionTypes.GET_TOP_GENRE_SERIES:
      return {...state, seriesTopGenre: ValueStateHelper.modelComplete(action.payload)}
  
    case SeriesActionTypes.GET_TOP_GENRE_SERIES_ERROR:
      return {...state, seriesTop: ValueStateHelper.modelError(action.payload)}

    case SeriesActionTypes.SET_GENRE:
      return{...state, genre: action.payload}

    default:
      return state
  }
}