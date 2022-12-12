import { Dispatch } from "react"
import { ScrollActions, ScrollActionTypes } from "../../types/reducers/scroll"

export const setPaginate = (paginate: boolean) => {
  return (dispatch: Dispatch<ScrollActions>) => {
    dispatch({type: ScrollActionTypes.SET_PAGINATE, payload: paginate})
  }
}

export const setPending = (pending: boolean) => {
  return (dispatch: Dispatch<ScrollActions>) => {
    dispatch({type: ScrollActionTypes.SET_PENDING, payload: pending})
  }
}

export const setEndPaginate = (endPaginate: boolean) => {
  return (dispatch: Dispatch<ScrollActions>) => {
    dispatch({type: ScrollActionTypes.SET_END_PAGINATE, payload: endPaginate})
  }
}