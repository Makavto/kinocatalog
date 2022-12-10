import { API_2_2 } from "../constants";
import { http } from "../interceptor";
import { MovieListDto } from "../types/dto/MovieList.dto";
import { MovieOrderEnum } from "../types/enums/MovieOrder.enum";
import { MovieTypeEnum } from "../types/enums/MovieType.enum";

export const seriesApi = () => {
  return {
    getTopSeries:
      async () => {
        return await http.get<MovieListDto>(`${API_2_2}/films`, {
          params: {
            type: MovieTypeEnum.TV_SERIES,
            order: MovieOrderEnum.NUM_VOTE
          }
        });
      },

    getTopGenreSeries:
      async (genreId: number) => {
        return await http.get<MovieListDto>(`${API_2_2}/films`, {
          params: {
            type: MovieTypeEnum.TV_SERIES,
            order: MovieOrderEnum.NUM_VOTE,
            genres: genreId
          }
        });
      },

    getTopMiniSeries:
      async () => {
        return await http.get<MovieListDto>(`${API_2_2}/films`, {
          params: {
            type: MovieTypeEnum.MINI_SERIES,
            order: MovieOrderEnum.NUM_VOTE
          }
        });
      },

    getTopGenreMiniSeries:
      async (genreId: number) => {
        return await http.get<MovieListDto>(`${API_2_2}/films`, {
          params: {
            type: MovieTypeEnum.MINI_SERIES,
            order: MovieOrderEnum.NUM_VOTE,
            genres: genreId
          }
        });
      },

    getTopTvSeries:
      async () => {
        return await http.get<MovieListDto>(`${API_2_2}/films`, {
          params: {
            type: MovieTypeEnum.TV_SHOW,
            order: MovieOrderEnum.RATING
          }
        });
      },

    getPopularTvSeries:
      async () => {
        return await http.get<MovieListDto>(`${API_2_2}/films`, {
          params: {
            type: MovieTypeEnum.TV_SHOW,
            order: MovieOrderEnum.NUM_VOTE,
          }
        });
      }
  }
}