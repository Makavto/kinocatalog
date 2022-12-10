import React from "react";
import MovieItem from "../../components/shared/MovieItem";
import MoviesItemsList from "../../components/shared/MoviesItemsList";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { topFilmsMock } from "../../mocks/topFilms.mock";
import { NextThunkDispatch, wrapper } from "../../core/store";
import { getFilmsAwait, getFilmsPopular, getFilmsTop } from "../../core/store/action-creators/films";
import styles from "../../styles/pages/films/Index.module.scss";
import { MovieTypeEnum } from "../../core/types/enums/MovieType.enum";

function Films() {
  const {filmsAwait, filmsPopular, filmsTop} = useTypedSelector(state => state.films);
  return (
    <div>
      <h2 className='mt-4 mb-2 bold'>Топ популярных фильмов</h2>
      {
        filmsPopular.value
        ? <MoviesItemsList moviesList={filmsPopular.value.items}/>
        : <></>
      }
      <h2 className='mt-4 mb-2 bold'>Топ ожидаемых фильмов</h2>
      {
        filmsAwait.value
        ? <MoviesItemsList moviesList={filmsAwait.value.items}/>
        : <></>
      }
      <h2 className='mt-4 mb-2 bold'>Топ лучших фильмов</h2>
      {
        filmsTop?.value
        ? <MoviesItemsList moviesList={filmsTop.value.items}/>
        : <></>
      }
    </div>
  );
}

export default Films;

export const getStaticProps = wrapper.getStaticProps((store) => async () => {
  const dispatch = store.dispatch as NextThunkDispatch;
  await dispatch(getFilmsPopular());
  await dispatch(getFilmsAwait());
  await dispatch(getFilmsTop());
  return { props: {} }
})