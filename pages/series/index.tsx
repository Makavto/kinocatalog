import TabsList from '../../components/series/TabsList';
import MovieItem from '../../components/shared/MovieItem';
import MoviesItemsList from '../../components/shared/MoviesItemsList';
import { getRandomGenre } from '../../core/randomGenre.helper';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { topFilmsMock } from '../../mocks/topFilms.mock';
import { NextThunkDispatch, wrapper } from '../../core/store';
import { getTopGenreSeries, getTopSeries, setSeriesGenre } from '../../core/store/action-creators/series';
import styles from '../../styles/pages/series/Index.module.scss';
import { MovieTypeEnum } from '../../core/types/enums/MovieType.enum';

function Series() {
  const {genre, seriesTop, seriesTopGenre} = useTypedSelector(state => state.series)
  return (
    <div>
      <div className={'searchBlock'}>
          <input type="text" placeholder="Поиск по названию" />
          <button className='appButton'>Поиск</button>
      </div>
      <div className='mt-5'>
        <TabsList active={MovieTypeEnum.TV_SERIES} />
      </div>
      <h2 className='mt-4 mb-2 bold'>Топ лучших сериалов</h2>
      {
        seriesTop.value
        ? <MoviesItemsList moviesList={seriesTop.value.items} type={MovieTypeEnum.TV_SERIES}/>
        : <></>
      }
      <h2 className='mt-4 mb-2 bold'>Топ популярных сериалов в жанре «{genre?.genre}»</h2>
      {
        seriesTopGenre.value
        ? <MoviesItemsList moviesList={seriesTopGenre.value.items} type={MovieTypeEnum.TV_SERIES}/>
        : <></>
      }
      {/* <div className="d-flex flex-wrap">
        {
          topFilmsMock.films.map(film => (
            <div key={film.filmId} className={'movieItemWrapper'}>
              <MovieItem 
                name={film.nameRu}
                year={film.year}
                rating={film.rating}
                posterUrl={film.posterUrlPreview}
                type={MovieTypeEnum.TV_SERIES}
                id={film.filmId}
              />
            </div>
          ))
        }
      </div> */}
    </div>
  );
}

export default Series;

export const getStaticProps = wrapper.getStaticProps((store) => async () => {
  const dispatch = store.dispatch as NextThunkDispatch;
  const genre = getRandomGenre();
  store.dispatch(setSeriesGenre(genre));
  await dispatch(getTopSeries());
  await dispatch(getTopGenreSeries(genre.id));
  return {props: {}, revalidate: 30}
})