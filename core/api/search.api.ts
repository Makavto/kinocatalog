import { API_2_2 } from "../constants"
import { http } from "../interceptor"
import { MovieListDto } from "../types/dto/MovieList.dto"
import { MovieOrderEnum } from "../types/enums/MovieOrder.enum"

export const searchApi = () => {
  return {
    getMoviesByPattern:
      async (pattern: string | string[], page: number) => {
        return await http.get<MovieListDto>(`${API_2_2}/films`, {
          params: {
            keyword: pattern,
            order: MovieOrderEnum.NUM_VOTE,
            page: page
          } 
        })
      }
  }
}