import { API_2_2 } from "../constants";
import { http } from "../interceptor";
import { MovieDto } from "../types/dto/Movie.dto";

export const movieApi = () => {
  return {
    getMovie:
      async (id: string | string[]) => {
        return await http.get<MovieDto>(`${API_2_2}/films/${id}`)
      }
  }
}