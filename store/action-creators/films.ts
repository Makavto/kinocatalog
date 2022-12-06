import { Dispatch } from "react";
import { API_2_2 } from "../../core/constants";
import { http } from "../../core/interceptor";
import { FilmTopEnum } from "../../types/enums/FilmTop.enum";
import { MovieOrderEnum } from "../../types/enums/MovieOrder.enum";
import { MovieTypeEnum } from "../../types/enums/MovieType.enum";
import { FilmsAction, FilmsActionTypes } from "../../types/reducers/films";

export const getFilmsPopular = () => {
  return async (dispatch: Dispatch<FilmsAction>) => {
    try {
      const res = await http.get(`${API_2_2}/films/top`, {
        params: {
          type: FilmTopEnum.TOP_100_POPULAR_FILMS,
          page: 1
        },
      });
      return dispatch({type: FilmsActionTypes.GET_POPULAR_FILMS, payload: {
        items: res.data.films,
        page: 1,
        pagesCount: res.data.pagesCount
      }})
    } catch (error) {
      return dispatch({
        type: FilmsActionTypes.GET_POPULAR_FILMS_ERROR,
        payload: 'Произошла ошибка при загрузке популярных фильмов'
      })
    }
  }
}

export const getFilmsAwait = () => {
  return async (dispatch: Dispatch<FilmsAction>) => {
    try {
      const res = await http.get(`${API_2_2}/films/top`, {
        params: {
          type: FilmTopEnum.TOP_AWAIT_FILMS,
          page: 1
        }
      })
      return dispatch({type: FilmsActionTypes.GET_AWAIT_FILMS, payload: {
        items: res.data.films,
        page: 1,
        pagesCount: res.data.pagesCount
      }})
    } catch (error) {
      return dispatch({
        type: FilmsActionTypes.GET_AWAIT_FILMS_ERROR,
        payload: 'Произошла ошибка при загрузке ожидаемых фильмов'
      })
    }
  }
}

export const getFilmsTop = () => {
  return async (dispatch: Dispatch<FilmsAction>) => {
    try {
      const response = await http.get(`${API_2_2}/films`, {
        params: {
          type: MovieTypeEnum.FILM,
          order: MovieOrderEnum.NUM_VOTE
        }
      });
      dispatch({type: FilmsActionTypes.GET_TOP_FILMS, payload: {
        items: response.data.items,
        page: 1,
        pagesCount: response.data.totalPages
      }})
    } catch (error) {
      dispatch({
        type: FilmsActionTypes.GET_TOP_FILMS_ERROR,
        payload: "Ошибка при загрузке топа фильмов"
      })
    }
  }
}