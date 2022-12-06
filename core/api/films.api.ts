import { API_2_2 } from "../constants"
import { http } from "../interceptor"
import { FilmTopDto } from "../types/dto/FilmTop.dto"
import { MovieListDto } from "../types/dto/MovieList.dto"
import { FilmTopEnum } from "../types/enums/FilmTop.enum"
import { MovieOrderEnum } from "../types/enums/MovieOrder.enum"
import { MovieTypeEnum } from "../types/enums/MovieType.enum"

export const filmsApi = () => {
  return {
    getFilmsPopular: 
      async () => {
        return await http.get<FilmTopDto>(`${API_2_2}/films/top`, {
          params: {
            type: FilmTopEnum.TOP_100_POPULAR_FILMS,
            page: 1
          },
        })
      },

    getFilmsAwait:
      async () => {
        return await http.get<FilmTopDto>(`${API_2_2}/films/top`, {
          params: {
            type: FilmTopEnum.TOP_AWAIT_FILMS,
            page: 1
          }
        })
      },

    getFilmsTop:
      async () => {
        return await http.get<MovieListDto>(`${API_2_2}/films`, {
          params: {
            type: MovieTypeEnum.FILM,
            order: MovieOrderEnum.NUM_VOTE
          }
        });
      }
  }
}