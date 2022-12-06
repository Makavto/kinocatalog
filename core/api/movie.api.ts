import { AxiosError } from "axios";
import { API_2_2 } from "../constants";
import { http } from "../interceptor";

export const movieApi = () => {
  return {
    getMovie:
      async (id: string | string[]) => {
        return await http.get(`${API_2_2}/films/${id}`)
          .catch((err: AxiosError) => {
            if (err.status == 402) {
              throw new Error('')
            }
          })
          .then(res => {
            return res
          });
      }
  }
}