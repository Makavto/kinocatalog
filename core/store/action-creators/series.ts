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

export const getTopMiniSeries = () => {
  return async (dispatch: Dispatch<SeriesActions>) => {
    try {
      const response = await seriesApi().getTopMiniSeries();
      dispatch({type: SeriesActionTypes.GET_TOP_MINI_SERIES, payload: {
        items: MovieListMapper(response.data),
        page: 1,
        pagesCount: response.data.totalPages
      }})
    } catch (error) {
      dispatch({
        type: SeriesActionTypes.GET_TOP_MINI_SERIES_ERROR,
        payload: 'Произошла ошибка при загрузке лучших мини сериалов'
      })
    }
  }
}

export const getTopGenreMiniSeries = (genreId: number) => {
  return async (dispatch: Dispatch<SeriesActions>) => {
    try {
      const response = await seriesApi().getTopGenreMiniSeries(genreId);
      dispatch({type: SeriesActionTypes.GET_TOP_GENRE_MINI_SERIES, payload: {
        items: MovieListMapper(response.data),
        page: 1,
        pagesCount: response.data.totalPages
      }})
    } catch (error) {
      dispatch({
        type: SeriesActionTypes.GET_TOP_GENRE_MINI_SERIES_ERROR,
        payload: 'Произошла ошибка при загрузке лучших мини сериалов'
      })
    }
  }
}

// 
export const getTopTvSeries = () => {
  return async (dispatch: Dispatch<SeriesActions>) => {
    try {
      const response = await seriesApi().getTopTvSeries();
      dispatch({type: SeriesActionTypes.GET_TOP_TV_SERIES, payload: {
        items: MovieListMapper(response.data),
        page: 1,
        pagesCount: response.data.totalPages
      }})
    } catch (error) {
      dispatch({
        type: SeriesActionTypes.GET_TOP_TV_SERIES_ERROR,
        payload: 'Произошла ошибка при загрузке лучших тв-шоу'
      })
    }
  }
}

export const getPopularTvSeries = () => {
  return async (dispatch: Dispatch<SeriesActions>) => {
    try {
      const response = await seriesApi().getPopularTvSeries();
      dispatch({type: SeriesActionTypes.GET_POPULAR_TV_SERIES, payload: {
        items: MovieListMapper(response.data),
        page: 1,
        pagesCount: response.data.totalPages
      }})
    } catch (error) {
      dispatch({
        type: SeriesActionTypes.GET_POPULAR_TV_SERIES_ERROR,
        payload: 'Произошла ошибка при загрузке популярных тв-шоу'
      })
    }
  }
}

export const setSeriesGenre = (genre: Genre): SeriesActions => {
  return {type: SeriesActionTypes.SET_GENRE, payload: genre}
}