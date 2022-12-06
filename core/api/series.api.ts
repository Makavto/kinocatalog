import { API_2_2 } from "../constants";
import { http } from "../interceptor";
import { MovieOrderEnum } from "../types/enums/MovieOrder.enum";
import { MovieTypeEnum } from "../types/enums/MovieType.enum";

export const seriesApi = () => {
  return {
    getTopSeries:
      async () => {
        return await http.get(`${API_2_2}/films`, {
          params: {
            type: MovieTypeEnum.TV_SERIES,
            order: MovieOrderEnum.NUM_VOTE
          }
        });
      },

    getTopGenreSeries:
      async (genreId: number) => {
        return await http.get(`${API_2_2}/films`, {
          params: {
            type: MovieTypeEnum.TV_SERIES,
            order: MovieOrderEnum.NUM_VOTE,
            genres: genreId
          }
        });
      }
  }
}