import { ScrollActions, ScrollActionTypes, ScrollState } from "../../types/reducers/scroll";

export const scrollInitialState: ScrollState = {
  paginate: false,
  pending: false,
  endPaginate: false
}

export const scrollReducer = (state: ScrollState = scrollInitialState, action: ScrollActions): ScrollState => {
  switch (action.type) {
    case ScrollActionTypes.SET_PAGINATE:
      return {...state, paginate: action.payload}

    case ScrollActionTypes.SET_PENDING:
      return {...state, pending: action.payload}

    case ScrollActionTypes.SET_END_PAGINATE:
      return {...state, pending: action.payload}
  
    default:
      return state
  }
}