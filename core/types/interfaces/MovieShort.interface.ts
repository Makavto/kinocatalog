import { MovieTypeEnum } from "../enums/MovieType.enum";

export interface MovieShort {
  filmId: number,
  nameRu:	string | null,
  nameOrig:	string | null,
  year:	string | null,
  rating:	string | null,
  expectationsRating:	string | null,
  posterUrlPreview:	string,
  type: MovieTypeEnum | null
}