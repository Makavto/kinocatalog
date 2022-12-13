import { Dispatch } from "react"
import { searchApi } from "../../api/search.api"
import { MovieListMapper } from "../../mappers/MovieList.mapper"
import { SearchActions, SearchActionTypes } from "../../types/reducers/search"
import { setPaginate, setPending } from "./scroll"

export const searchMovies = (pattern: string | string[], page: number) => {
  return async (dispatch: Dispatch<SearchActions>) => {
    dispatch({type: SearchActionTypes.SEARCH_MOVIES_LOADING})
    try {
      return searchApi().getMoviesByPattern(pattern, page).then(response => {
        dispatch({type: SearchActionTypes.SEARCH_MOVIES, payload: {
          items: MovieListMapper(response.data),
          page: page,
          pagesCount: response.data.totalPages
        }})
        setPaginate(false);
        setPending(false);
      });
    } catch (error) {
      return dispatch({
        type: SearchActionTypes.SEARCH_MOVIES_ERROR,
        payload: 'Произошла ошибка при загрузке поиска'
      })
    }
  }
}