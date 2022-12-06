import { Dispatch } from "react";
import { filmsApi } from "../../api/films.api";
import { FilmsAction, FilmsActionTypes } from "../../types/reducers/films";

export const getFilmsPopular = () => {
  return async (dispatch: Dispatch<FilmsAction>) => {
    try {
      const res = await filmsApi().getFilmsPopular();
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
      const res = await filmsApi().getFilmsAwait();
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
      const response = await filmsApi().getFilmsTop();
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