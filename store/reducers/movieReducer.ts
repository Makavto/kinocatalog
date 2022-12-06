import { MovieAction, MovieActionTypes, MovieState } from "../../types/reducers/movie";
import { ValueStateHelper } from "../ValueState.helper";

const initialState: MovieState = {
  movie: {
    value: null,
    error: null,
  }
}

export const movieReducer = (state: MovieState = initialState, action: MovieAction): MovieState => {
  switch (action.type) {
    case MovieActionTypes.GET_MOVIE:
      return {...state, movie: ValueStateHelper.modelComplete(action.payload)};

    case MovieActionTypes.GET_MOVIE_ERROR:
      return {...state, movie: ValueStateHelper.modelError(action.payload)};
  
    default:
      return state
  }
}