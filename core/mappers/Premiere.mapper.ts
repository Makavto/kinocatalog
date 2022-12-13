import { PremiereDto } from "../types/dto/Premiere.dto";
import { MovieTypeEnum } from "../types/enums/MovieType.enum";
import { MovieShort } from "../types/interfaces/MovieShort.interface";

export const PremiereMapper = (dto: PremiereDto): MovieShort[] => {
  return dto.items.map(
    item => ({
      expectationsRating: null,
      filmId: item.kinopoiskId,
      nameOrig: item.nameEn,
      nameRu: item.nameRu,
      posterUrlPreview: item.posterUrlPreview,
      rating: item.ratingKinopoisk ? item.ratingKinopoisk : null,
      year: String(item.year),
      type: MovieTypeEnum.FILM
    })
  )
}