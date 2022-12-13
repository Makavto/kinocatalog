import TabsList from "../../../components/series/TabsList";
import MoviesItemsList from "../../../components/shared/MoviesItemsList";
import { MovieTypeEnum } from "../../../core/types/enums/MovieType.enum";
import { wrapper, NextThunkDispatch } from "../../../core/store";
import { getTopMiniSeries, getTopGenreMiniSeries, setSeriesGenre } from "../../../core/store/action-creators/series";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { getRandomGenre } from "../../../core/helpers/randomGenre.helper";

function MiniSeries() {
  const {genre, miniSeriesTop, miniSeriesTopGenre} = useTypedSelector(state => state.series)
  return (
    <div>
      <TabsList active={MovieTypeEnum.MINI_SERIES} />
      <h2 className='mt-4 mb-2 bold'>Топ лучших мини-сериалов</h2>
      {
        miniSeriesTop.value
        ? <MoviesItemsList moviesList={miniSeriesTop.value.items}/>
        : <></>
      }
      <h2 className='mt-4 mb-2 bold'>Топ популярных мини-сериалов в жанре «{genre?.genre}»</h2>
      {
        miniSeriesTopGenre.value
        ? <MoviesItemsList moviesList={miniSeriesTopGenre.value.items}/>
        : <></>
      }
    </div>
  );
}

export default MiniSeries;

export const getStaticProps = wrapper.getStaticProps((store) => async () => {
  const dispatch = store.dispatch as NextThunkDispatch;
  const genre = getRandomGenre();
  dispatch(setSeriesGenre(genre));
  await dispatch(getTopMiniSeries());
  await dispatch(getTopGenreMiniSeries(genre!.id));
  return {props: {}, revalidate: 30}
})