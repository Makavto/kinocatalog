import { MovieTypeEnum } from "../enums/MovieType.enum"
import { ProductionStatusEnum } from "../enums/ProductionStatus.enum"

export interface Movie {
  kinopoiskId: number,
  imdbId:	string | null,
  nameRu:	string | null,
  nameEn:	string | null,
  nameOriginal:	string | null,
  posterUrl:	string,
  posterUrlPreview:	string,
  coverUrl:	string | null,
  logoUrl: string | null,
  reviewsCount:	number,
  ratingGoodReview:	number | null,
  ratingGoodReviewVoteCount: number | null,
  ratingKinopoisk: number | null,
  ratingKinopoiskVoteCount:	number | null,
  ratingImdb:	number | null,
  ratingImdbVoteCount: number | null,
  ratingFilmCritics: number | null,
  ratingFilmCriticsVoteCount:	number | null,
  ratingAwait: number | null,
  ratingAwaitCount:	number | null,
  ratingRfCritics:	number | null,
  ratingRfCriticsVoteCount:	number | null,
  webUrl:	string
  year:	number | null,
  filmLength:	number | null,
  slogan:	string | null,
  description:	string | null,
  shortDescription:	string | null,
  editorAnnotation:	string | null,
  isTicketsAvailable:	boolean
  productionStatus:	ProductionStatusEnum | null,
  type:	MovieTypeEnum
  ratingMpaa:	string | null,
  ratingAgeLimits:	string | null,
  hasImax:	boolean | null,
  has3D:	boolean | null,
  lastSync:	string
  countries:	
    {
      country:	string
    }[]
  genres:	
    {
      genre:	string
    }[]
  startYear:	number | null,
  endYear:	number | null,
  serial?:	boolean | null,
  shortFilm?:	boolean | null,
  completed?:	boolean | null,
}