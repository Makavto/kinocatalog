import TabsList from "../../../components/series/TabsList";
import MovieItem from "../../../components/shared/MovieItem";
import MoviesItemsList from "../../../components/shared/MoviesItemsList";
import { topFilmsMock } from "../../../mocks/topFilms.mock";
import { MovieTypeEnum } from "../../../core/types/enums/MovieType.enum";
import { wrapper, NextThunkDispatch } from "../../../core/store";
import { getPopularTvSeries, getTopTvSeries } from "../../../core/store/action-creators/series";
import { useTypedSelector } from "../../../hooks/useTypedSelector";

function TvSeries() {
  const {tvSeriesTop, tvSeriesPopular} = useTypedSelector(state => state.series)
  return (
    <div>
      <div className='mt-5'>
        <TabsList active={MovieTypeEnum.TV_SHOW} />
      </div>
      <h2 className='mt-4 mb-2 bold'>Топ лучших ТВ-Шоу</h2>
      {
        tvSeriesTop.value
        ? <MoviesItemsList moviesList={tvSeriesTop.value.items} type={MovieTypeEnum.TV_SERIES}/>
        : <></>
      }
      <h2 className='mt-4 mb-2 bold'>Топ популярных ТВ-Шоу</h2>
      {
        tvSeriesPopular.value
        ? <MoviesItemsList moviesList={tvSeriesPopular.value.items} type={MovieTypeEnum.TV_SERIES}/>
        : <></>
      }
    </div>
  );
}

export default TvSeries;

export const getStaticProps = wrapper.getStaticProps((store) => async () => {
  const dispatch = store.dispatch as NextThunkDispatch;
  await dispatch(getTopTvSeries());
  await dispatch(getPopularTvSeries());
  return {props: {}}
})