import TabsList from '../../components/series/TabsList';
import MoviesItemsList from '../../components/shared/MoviesItemsList';
import { getRandomGenre } from '../../core/helpers/randomGenre.helper';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { NextThunkDispatch, wrapper } from '../../core/store';
import { getTopGenreSeries, getTopSeries, setSeriesGenre } from '../../core/store/action-creators/series';
import styles from '../../styles/pages/series/Index.module.scss';
import { MovieTypeEnum } from '../../core/types/enums/MovieType.enum';

function Series() {
  const {genre, seriesTop, seriesTopGenre} = useTypedSelector(state => state.series)
  return (
    <div>
      <TabsList active={MovieTypeEnum.TV_SERIES} />
      <h2 className='mt-4 mb-2 bold'>Топ лучших сериалов</h2>
      {
        seriesTop.value
        ? <MoviesItemsList moviesList={seriesTop.value.items}/>
        : <></>
      }
      <h2 className='mt-4 mb-2 bold'>Топ популярных сериалов в жанре «{genre?.genre}»</h2>
      {
        seriesTopGenre.value
        ? <MoviesItemsList moviesList={seriesTopGenre.value.items}/>
        : <></>
      }
    </div>
  );
}

export default Series;

export const getStaticProps = wrapper.getStaticProps((store) => async () => {
  const dispatch = store.dispatch as NextThunkDispatch;
  const genre = getRandomGenre();
  dispatch(setSeriesGenre(genre));
  await dispatch(getTopSeries());
  await dispatch(getTopGenreSeries(genre!.id));
  return {props: {}, revalidate: 30}
})