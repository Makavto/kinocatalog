import { API_2_1, API_2_2 } from "../constants"
import { DateHelper } from "../helpers/date.helper"
import { http } from "../interceptor"
import { MovieOrderEnum } from "../types/enums/MovieOrder.enum"
import { MovieTypeEnum } from "../types/enums/MovieType.enum"

export const mainApi = () => {
  return {
    getTopBest:
      async () => {
        return await http.get(`${API_2_2}/films`, {
          params: {
            order: MovieOrderEnum.NUM_VOTE,
            type: MovieTypeEnum.ALL
          }
        })
      },

    getReleases:
      async () => {
        return await http.get(`${API_2_1}/films/releases`, {
          params: {
            year: DateHelper.getYearForRequest(),
            month: DateHelper.getMonthForRequest()
          }
        })
      },

    getPremiers:
      async () => {
        return await http.get(`${API_2_2}/films/premieres`, {
          params: {
            year: DateHelper.getYearForRequest(),
            month: DateHelper.getMonthForRequest()
          }
        })
      }
  }
}