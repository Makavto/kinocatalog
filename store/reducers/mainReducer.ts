import { ValueStateHelper } from '../ValueState.helper';
import { MainActions, MainActionTypes, MainState } from './../../types/reducers/main';

export const mainInitialState: MainState = {
  premieres: {
    value: null,
    error: null
  },
  releases: {
    value: null,
    error: null
  },
  topBest: {
    value: null,
    error: null
  }
}

export const mainReducer = (state = mainInitialState, action: MainActions): MainState => {
  switch (action.type) {
    case MainActionTypes.GET_PREMIERES:
      return {...state, premieres: ValueStateHelper.modelComplete(action.payload)}

    case MainActionTypes.GET_PREMIERES_ERROR:
      return {...state, premieres: ValueStateHelper.modelError(action.payload)}

    case MainActionTypes.GET_RELEASES:
      return {...state, releases: ValueStateHelper.modelComplete(action.payload)}

    case MainActionTypes.GET_RELEASES_ERROR:
      return {...state, releases: ValueStateHelper.modelError(action.payload)}

    case MainActionTypes.GET_TOP_BEST:
      return {...state, topBest: ValueStateHelper.modelComplete(action.payload)}

    case MainActionTypes.GET_TOP_BEST_ERROR:
      return {...state, topBest: ValueStateHelper.modelError(action.payload)}

    default:
      return state
  }
}