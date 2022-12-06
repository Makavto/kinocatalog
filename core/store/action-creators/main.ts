import { Dispatch } from "react"
import { mainApi } from "../../api/main.api"
import { MainActions, MainActionTypes } from "../../types/reducers/main"

export const getTopBest = () => {
  return async (dispatch: Dispatch<MainActions>) => {
    try {
      const response = await mainApi().getTopBest();
      dispatch({type: MainActionTypes.GET_TOP_BEST, payload: {
        items: response.data.items,
        page: 1,
        pagesCount: response.data.totalPages
      }})
    } catch (error) {
      dispatch({
        type: MainActionTypes.GET_TOP_BEST_ERROR,
        payload: 'Произошла ошибка при загрузке лучшего кино'
      })
    }
  }
}

export const getReleases = () => {
  return async (dispatch: Dispatch<MainActions>) => {
    try {
      const response = await mainApi().getReleases();
      dispatch({type: MainActionTypes.GET_RELEASES, payload: {
        items: response.data.releases,
        page: 1,
        pagesCount: response.data.total
      }})
    } catch (error) {
      dispatch({
        type: MainActionTypes.GET_RELEASES_ERROR,
        payload: 'Произошла ошибка при загрузке релизов'
      })
    }
  }
}

export const getPremiers = () => {
  return async (dispatch: Dispatch<MainActions>) => {
    try {
      const response = await mainApi().getPremiers();
      dispatch({type: MainActionTypes.GET_PREMIERES, payload: response.data.items})
    } catch (error) {
      dispatch({
        type: MainActionTypes.GET_PREMIERES_ERROR,
        payload: 'Произошла ошибка при загрузке кинопремьер'
      })
    }
  }
}