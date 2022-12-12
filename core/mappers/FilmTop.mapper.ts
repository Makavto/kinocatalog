import { FilmTopDto } from "../types/dto/FilmTop.dto";
import { MovieTypeEnum } from "../types/enums/MovieType.enum";
import { MovieShort } from "../types/interfaces/MovieShort.interface";

export const FilmTopMapper = (dto: FilmTopDto): MovieShort[] => {
  return dto.films.map(
    film => {
      let expectRating: string | null = null;
      let rating: string | null = null;
      if (film.rating?.includes('%')) {
        expectRating = film.rating
      } else {
        rating = film.rating
      }
      return {
        expectationsRating: expectRating,
        filmId: film.filmId,
        nameOrig: film.nameEn,
        nameRu: film.nameRu,
        posterUrlPreview: film.posterUrlPreview,
        rating: rating,
        year: film.year,
        type: MovieTypeEnum.FILM
      }
    }
  );
}