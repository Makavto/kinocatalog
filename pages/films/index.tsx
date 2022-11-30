import MovieItem from "../../components/shared/MovieItem";
import MoviesItemsList from "../../components/shared/MoviesItemsList";
import { topFilmsMock } from "../../mocks/topFilms.mock";
import styles from "../../styles/pages/films/Index.module.scss";
import { MovieTypeEnum } from "../../types/enums/MovieType.enum";

function Films() {
  return (
    <div>
      <div className={'searchBlock'}>
        <input type="text" placeholder="Поиск по названию" />
        <button className='appButton'>Поиск</button>
      </div>
      <h2 className='mt-4 mb-2 bold'>Топ популярных фильмов</h2>
      <MoviesItemsList />
      <h2 className='mt-4 mb-2 bold'>Топ ожидаемых фильмов</h2>
      <MoviesItemsList />
      <h2 className='mt-4 mb-2 bold'>Все фильмы</h2>
      <div className="d-flex flex-wrap">
        {
          topFilmsMock.films.map(film => (
            <div key={film.filmId} className={'movieItemWrapper'}>
              <MovieItem 
                name={film.nameRu}
                year={film.year}
                rating={film.rating}
                posterUrl={film.posterUrlPreview}
                type={MovieTypeEnum.FILM}
              />
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default Films;