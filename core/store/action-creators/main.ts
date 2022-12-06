import { Dispatch } from "react"
import { API_2_1, API_2_2 } from "../../constants"
import { DateHelper } from "../../date.helper"
import { http } from "../../interceptor"
import { MovieOrderEnum } from "../../types/enums/MovieOrder.enum"
import { MovieTypeEnum } from "../../types/enums/MovieType.enum"
import { MainActions, MainActionTypes } from "../../types/reducers/main"

export const getTopBest = () => {
  return async (dispatch: Dispatch<MainActions>) => {
    try {
      const response = await http.get(`${API_2_2}/films`, {
        params: {
          order: MovieOrderEnum.NUM_VOTE,
          type: MovieTypeEnum.ALL
        }
      })
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
      const response = await http.get(`${API_2_1}/films/releases`, {
        params: {
          year: DateHelper.getYearForRequest(),
          month: DateHelper.getMonthForRequest()
        }
      })
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
      const response = await http.get(`${API_2_2}/films/premieres`, {
        params: {
          year: DateHelper.getYearForRequest(),
          month: DateHelper.getMonthForRequest()
        }
      })
      dispatch({type: MainActionTypes.GET_PREMIERES, payload: response.data.items})
    } catch (error) {
      dispatch({
        type: MainActionTypes.GET_PREMIERES_ERROR,
        payload: 'Произошла ошибка при загрузке кинопремьер'
      })
    }
  }
}