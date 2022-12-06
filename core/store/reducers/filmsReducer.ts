import { FilmsAction, FilmsActionTypes, FilmsState } from "../../types/reducers/films"
import { ValueStateHelper } from "../ValueState.helper"

const initialState: FilmsState = {
  filmsAwait: {
    error: null,
    value: null
  },
  filmsPopular: {
    error: null,
    value: null
  },
  filmsTop: {
    error: null,
    value: null
  }
}

export const filmsReducer = (state = initialState, action: FilmsAction): FilmsState => {
  switch (action.type) {
    case FilmsActionTypes.GET_AWAIT_FILMS:
      return {...state, filmsAwait: ValueStateHelper.modelComplete(action.payload)}

    case FilmsActionTypes.GET_AWAIT_FILMS_ERROR:
      return {...state, filmsAwait: ValueStateHelper.modelError(action.payload)}

    case FilmsActionTypes.GET_POPULAR_FILMS:
      return {...state, filmsPopular: ValueStateHelper.modelComplete(action.payload)}
  
    case FilmsActionTypes.GET_POPULAR_FILMS_ERROR:
      return {...state, filmsPopular: ValueStateHelper.modelError(action.payload)}

    case FilmsActionTypes.GET_TOP_FILMS:
      return {...state, filmsTop: ValueStateHelper.modelComplete(action.payload)}

    case FilmsActionTypes.GET_TOP_FILMS_ERROR:
      return {...state, filmsTop: ValueStateHelper.modelError(action.payload)}

    default:
      return state;
  }
}