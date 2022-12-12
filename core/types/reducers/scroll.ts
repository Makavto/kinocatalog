
export interface ScrollState {
  paginate: boolean,
  pending: boolean,
  endPaginate: boolean
}

export enum ScrollActionTypes {
  SET_PAGINATE = 'SET_PAGINATE',
  SET_PENDING = 'SET_PENDING',
  SET_END_PAGINATE = 'SET_END_PAGINATE'
}

interface SetPaginate {
  type: ScrollActionTypes.SET_PAGINATE,
  payload: boolean
}

interface SetPending {
  type: ScrollActionTypes.SET_PENDING,
  payload: boolean
}

interface SetEndPaginate {
  type: ScrollActionTypes.SET_END_PAGINATE,
  payload: boolean
}

export type ScrollActions = 
  SetPaginate
  | SetPending
  | SetEndPaginate