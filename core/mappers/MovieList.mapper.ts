import { MovieListDto } from "../types/dto/MovieList.dto";
import { MovieShort } from "../types/interfaces/MovieShort.interface";

export const MovieListMapper = (dto: MovieListDto): MovieShort[] => {
  return dto.items.map(
    item => {
      const name = item.nameEn ? item.nameEn : item.nameOriginal;
      const rating = item.ratingKinopoisk ? String(item.ratingKinopoisk) : String(item.ratingImdb)
      return {
        expectationsRating: null,
        filmId: item.kinopoiskId,
        nameOrig: name,
        nameRu: item.nameRu,
        posterUrlPreview: item.posterUrlPreview,
        rating: rating,
        year: String(item.year),
        type: item.type
      }
    }
  )
}