import TabsList from "../../../components/series/TabsList";
import MovieItem from "../../../components/shared/MovieItem";
import MoviesItemsList from "../../../components/shared/MoviesItemsList";
import { topFilmsMock } from "../../../mocks/topFilms.mock";
import { MovieTypeEnum } from "../../../types/enums/MovieType.enum";

function TvSeries() {
  return (
    <div>
      <div className={'searchBlock'}>
          <input type="text" placeholder="Поиск по названию" />
          <button className='appButton'>Поиск</button>
      </div>
      <div className='mt-5'>
        <TabsList active={MovieTypeEnum.TV_SHOW} />
      </div>
      <h2 className='mt-4 mb-2 bold'>Топ лучших ТВ-Шоу</h2>
      <MoviesItemsList />
      <h2 className='mt-4 mb-2 bold'>Все ТВ-Шоу</h2>
      <div className="d-flex flex-wrap">
        {
          topFilmsMock.films.map(film => (
            <div key={film.filmId} className={'movieItemWrapper'}>
              <MovieItem 
                name={film.nameRu}
                year={film.year}
                rating={film.rating}
                posterUrl={film.posterUrlPreview}
              />
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default TvSeries;