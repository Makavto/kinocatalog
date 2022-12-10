import { Dispatch } from "react"
import { movieApi } from "../../api/movie.api"
import { MovieAction, MovieActionTypes } from "../../types/reducers/movie"

export const getMovie = (id: string | string[]) => {
  return async (dispatch: Dispatch<MovieAction>) => {
    try {
      const res = await movieApi().getMovie(id);
      dispatch({ type: MovieActionTypes.GET_MOVIE, payload: res?.data })
    } catch (error) {
      dispatch({
        type: MovieActionTypes.GET_MOVIE_ERROR,
        payload: 'Произошла ошибка при загрузке данных о фильме'
      })
    }
  }
}