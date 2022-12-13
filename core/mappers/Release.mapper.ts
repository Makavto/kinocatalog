import { ReleaseDto } from "../types/dto/Release.dto";
import { MovieTypeEnum } from "../types/enums/MovieType.enum";
import { MovieShort } from "../types/interfaces/MovieShort.interface";

export const ReleaseMapper = (dto: ReleaseDto): MovieShort[] => {
  return dto.releases.map(
    item => {
      const expectationsRating = item.expectationsRating ? String(item.expectationsRating) : null;
      const rating = item.rating ? String(item.rating) : null;
      return {
        expectationsRating: expectationsRating,
        filmId: item.filmId,
        nameOrig: item.nameEn,
        nameRu: item.nameRu,
        posterUrlPreview: item.posterUrlPreview,
        rating: rating,
        year: String(item.year),
        type: MovieTypeEnum.FILM
      }
    }
  )
}