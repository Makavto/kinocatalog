export interface ReleaseDto {
  page: number,
  total: number,
  releases: {
    filmId:	number;
    nameRu:	string;
    nameEn:	string;
    year:	number;
    posterUrl:	string;
    posterUrlPreview:	string;
    countries: {
      country: string;
    }[]
    genres:	{
      genre: string;
    }[];
    rating:	number;
    ratingVoteCount:	number;
    expectationsRating:	number;
    expectationsRatingVoteCount:	number;
    duration:	number;
    releaseDate:	string;
  }[]
}