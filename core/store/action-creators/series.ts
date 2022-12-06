import { Dispatch } from "react"
import { API_2_2 } from "../../constants"
import { http } from "../../interceptor"
import { MovieOrderEnum } from "../../types/enums/MovieOrder.enum"
import { MovieTypeEnum } from "../../types/enums/MovieType.enum"
import { Genre } from "../../types/interfaces/shared/Genre.interface"
import { SeriesActions, SeriesActionTypes } from "../../types/reducers/series"

export const getTopSeries = () => {
  return async (dispatch: Dispatch<SeriesActions>) => {
    try {
      const response = await http.get(`${API_2_2}/films`, {
        params: {
          type: MovieTypeEnum.TV_SERIES,
          order: MovieOrderEnum.NUM_VOTE
        }
      });
      dispatch({type: SeriesActionTypes.GET_TOP_SERIES, payload: {
        items: response.data.items,
        page: 1,
        pagesCount: response.data.totalPages
      }})
    } catch (error) {
      dispatch({
        type: SeriesActionTypes.GET_TOP_SERIES_ERROR,
        payload: 'Произошла ошибка при загрузке лучших сериалов'
      })
    }
  }
}

export const getTopGenreSeries = (genreId: number) => {
  return async (dispatch: Dispatch<SeriesActions>) => {
    try {
      const response = await http.get(`${API_2_2}/films`, {
        params: {
          type: MovieTypeEnum.TV_SERIES,
          order: MovieOrderEnum.NUM_VOTE,
          genres: genreId
        }
      });
      dispatch({type: SeriesActionTypes.GET_TOP_GENRE_SERIES, payload: {
        items: response.data.items,
        page: 1,
        pagesCount: response.data.totalPages
      }})
    } catch (error) {
      dispatch({
        type: SeriesActionTypes.GET_TOP_GENRE_SERIES_ERROR,
        payload: 'Произошла ошибка при загрузке лучших сериалов'
      })
    }
  }
}

export const setSeriesGenre = (genre: Genre): SeriesActions => {
  return {type: SeriesActionTypes.SET_GENRE, payload: genre}
}