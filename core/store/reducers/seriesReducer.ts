import { getRandomGenre } from "../../helpers/randomGenre.helper";
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
  miniSeriesTop: {
    error: null,
    value: null
  },
  miniSeriesTopGenre: {
    error: null,
    value: null
  },
  tvSeriesPopular: {
    error: null,
    value: null
  },
  tvSeriesTop: {
    error: null,
    value: null
  },
  genre: getRandomGenre(),
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
      return {...state, seriesTopGenre: ValueStateHelper.modelError(action.payload)}

    case SeriesActionTypes.GET_TOP_MINI_SERIES:
      return {...state, miniSeriesTop: ValueStateHelper.modelComplete(action.payload)}

    case SeriesActionTypes.GET_TOP_MINI_SERIES_ERROR:
      return {...state, miniSeriesTop: ValueStateHelper.modelError(action.payload)}

    case SeriesActionTypes.GET_TOP_GENRE_MINI_SERIES:
      return {...state, miniSeriesTopGenre: ValueStateHelper.modelComplete(action.payload)}
  
    case SeriesActionTypes.GET_TOP_GENRE_MINI_SERIES_ERROR:
      return {...state, miniSeriesTopGenre: ValueStateHelper.modelError(action.payload)}

      case SeriesActionTypes.GET_TOP_TV_SERIES:
        return {...state, tvSeriesTop: ValueStateHelper.modelComplete(action.payload)}
  
      case SeriesActionTypes.GET_TOP_TV_SERIES_ERROR:
        return {...state, tvSeriesTop: ValueStateHelper.modelError(action.payload)}
  
      case SeriesActionTypes.GET_POPULAR_TV_SERIES:
        return {...state, tvSeriesPopular: ValueStateHelper.modelComplete(action.payload)}
    
      case SeriesActionTypes.GET_POPULAR_TV_SERIES_ERROR:
        return {...state, tvSeriesPopular: ValueStateHelper.modelError(action.payload)}

    case SeriesActionTypes.SET_GENRE:
      return{...state, genre: action.payload}

    default:
      return state
  }
}