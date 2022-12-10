import TabsList from "../../../components/series/TabsList";
import MovieItem from "../../../components/shared/MovieItem";
import MoviesItemsList from "../../../components/shared/MoviesItemsList";
import { topFilmsMock } from "../../../mocks/topFilms.mock";
import { MovieTypeEnum } from "../../../core/types/enums/MovieType.enum";
import { wrapper, NextThunkDispatch } from "../../../core/store";
import { getTopMiniSeries, getTopGenreMiniSeries } from "../../../core/store/action-creators/series";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { getRandomGenre } from "../../../core/helpers/randomGenre.helper";

function MiniSeries() {
  const {genre, miniSeriesTop, miniSeriesTopGenre} = useTypedSelector(state => state.series)
  return (
    <div>
      <div className='mt-5'>
        <TabsList active={MovieTypeEnum.MINI_SERIES} />
      </div>
      <h2 className='mt-4 mb-2 bold'>Топ лучших мини-сериалов</h2>
      {
        miniSeriesTop.value
        ? <MoviesItemsList moviesList={miniSeriesTop.value.items} type={MovieTypeEnum.TV_SERIES}/>
        : <></>
      }
      <h2 className='mt-4 mb-2 bold'>Топ популярных мини-сериалов в жанре «{genre?.genre}»</h2>
      {
        miniSeriesTopGenre.value
        ? <MoviesItemsList moviesList={miniSeriesTopGenre.value.items} type={MovieTypeEnum.TV_SERIES}/>
        : <></>
      }
    </div>
  );
}

export default MiniSeries;

export const getStaticProps = wrapper.getStaticProps((store) => async () => {
  const dispatch = store.dispatch as NextThunkDispatch;
  const genre = getRandomGenre();
  await dispatch(getTopMiniSeries());
  await dispatch(getTopGenreMiniSeries(genre.id));
  return {props: {}, revalidate: 30}
})