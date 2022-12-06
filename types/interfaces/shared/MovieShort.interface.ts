import { MovieTypeEnum } from "../../enums/MovieType.enum"

export interface MovieShort {
  kinopoiskId: number,
  imdbId:	string | null,
  nameRu:	string | null,
  nameEn:	string | null,
  nameOriginal:	string | null,
  countries:	{
    country: string
  }[],
  genres:	{
    genre: string
  }[],
  ratingKinopoisk:	number | null,
  ratingImdb:	number | null,
  year:	number | null,
  type:	MovieTypeEnum,
  posterUrl:	string
  posterUrlPreview:	string
}