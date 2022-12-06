export interface PremiereDto {
  total: number,
  items: {
    kinopoiskId:	number;
    nameRu:	string | null;
    nameEn:	string | null;
    year:	number;
    posterUrl:	string;
    posterUrlPreview:	string;
    countries: {
      country: string;
    }[]
    genres:	{
      genre: string;
    }[]
    duration:	number | null;
    premiereRu:	string;
    ratingKinopoisk?: string
  }[]
}