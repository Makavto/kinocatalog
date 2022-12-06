import { Dispatch } from "react"
import { seriesApi } from "../../api/series.api"
import { MovieListMapper } from "../../mappers/MovieList.mapper"
import { Genre } from "../../types/interfaces/Genre.interface"
import { SeriesActions, SeriesActionTypes } from "../../types/reducers/series"

export const getTopSeries = () => {
  return async (dispatch: Dispatch<SeriesActions>) => {
    try {
      const response = await seriesApi().getTopSeries();
      dispatch({type: SeriesActionTypes.GET_TOP_SERIES, payload: {
        items: MovieListMapper(response.data),
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
      const response = await seriesApi().getTopGenreSeries(genreId);
      dispatch({type: SeriesActionTypes.GET_TOP_GENRE_SERIES, payload: {
        items: MovieListMapper(response.data),
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