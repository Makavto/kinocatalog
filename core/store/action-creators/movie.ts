import { AxiosError } from "axios"
import { Dispatch } from "react"
import { API_2_2 } from "../../constants"
import { http } from "../../interceptor"
import { MovieAction, MovieActionTypes } from "../../types/reducers/movie"

export const getMovie = (id: string | string[]) => {
  return async (dispatch: Dispatch<MovieAction>) => {
    try {
      const res = await http.get(`${API_2_2}/films/${id}`);
      dispatch({ type: MovieActionTypes.GET_MOVIE, payload: res.data })
    } catch (error) {
      dispatch({
        type: MovieActionTypes.GET_MOVIE_ERROR,
        payload: 'Произошла ошибка при загрузке данных о фильме'
      })
    }
  }
}