import { SearchActions, SearchActionTypes, SearchState } from "../../types/reducers/search";
import { ValueStateHelper } from './../ValueState.helper';


export const searchInitialState: SearchState = {
  moviesSearch: {
    error: null,
    value: null
  }
}

export const searchReducer = (state: SearchState = searchInitialState, action: SearchActions): SearchState => {
  switch (action.type) {
    case SearchActionTypes.SEARCH_MOVIES:
      const {moviesSearch} = state;
      let items = moviesSearch.value?.items;
      if (!items) {
        items = []
      }
      return {...state, moviesSearch: {
        error: null,
        loading: false,
        value: {
          items: [...items, ...action.payload.items],
          page: action.payload.page,
          pagesCount: action.payload.pagesCount
        }
      }}

    case SearchActionTypes.SEARCH_MOVIES_ERROR:
      return {...state, moviesSearch: ValueStateHelper.modelError(action.payload)}

    case SearchActionTypes.SEARCH_MOVIES_LOADING:
      return {...state, moviesSearch: ValueStateHelper.modelLoading(state.moviesSearch)}
  
    default:
      return state
  }
}