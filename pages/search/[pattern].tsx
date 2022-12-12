import React from "react";
import MovieItem from "../../components/shared/MovieItem";
import { NextThunkDispatch, wrapper } from "../../core/store";
import { searchMovies } from "../../core/store/action-creators/search";
import { MovieTypeEnum } from "../../core/types/enums/MovieType.enum";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";

interface ISearchPageProps {
  pattern: string
}

const isBottom = (el: HTMLElement) => {
  return el.getBoundingClientRect().bottom <= window.innerHeight;
}

function SearchPage({pattern}: ISearchPageProps) {
  const {moviesSearch} = useTypedSelector(state => state.search);
  const {paginate, pending, endPaginate} = useTypedSelector(state => state.scroll);
  const {setPaginate, setPending, searchMovies, setEndPaginate} = useActions();
  return (
    <>
    <h1 className="mb-4">Результаты поиска по запросу «{pattern}»</h1>
    <div className="d-flex flex-wrap" id="list-container">
      {
        moviesSearch.value
          ? moviesSearch.value.items.map(movie => (
            <div key={movie.filmId} className={'movieItemWrapper'}>
              <MovieItem
                expectationsRating={movie.expectationsRating}
                id={movie.filmId}
                name={movie.nameRu ? movie.nameRu : movie.nameOrig!}
                posterUrl={movie.posterUrlPreview}
                type={movie.type}
                year={movie.year!}
                rating={movie.rating}
              />
            </div>
          ))
          : <></>
      }
      {
        moviesSearch.loading
          ? <div>Загрузка...</div>
          : <></>
      }
    </div>
    </>
  );
}

export default SearchPage;

export const getServerSideProps = wrapper.getServerSideProps(store => async ({params}) => {
  const dispatch = store.dispatch as NextThunkDispatch;
  await dispatch(searchMovies(params!.pattern!, 1))
  return {props: {pattern: params!.pattern}}
})