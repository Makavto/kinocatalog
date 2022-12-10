export interface FilmTopDto {
  pagesCount: number,
  films: {
    filmId:	number,
    nameRu:	string | null,
    nameEn:	string | null,
    year:	string | null,
    filmLength:	string | null,
    countries: 
    {
      country: string
    }[],
    genres: 
    {
      genre: string
    }[],
    rating:	string | null,
    ratingVoteCount:	number | null,
    posterUrl:	string,
    posterUrlPreview:	string
  }[]
}