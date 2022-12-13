import Image from "next/image";
import styles from "../../styles/pages/films/FilmPage.module.scss";
import { InferGetServerSidePropsType } from 'next';
import { NextThunkDispatch, wrapper } from "../../core/store";
import { getMovie } from "../../core/store/action-creators/movie";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { imagePlaceholderHelper } from "../../core/helpers/imagePlaceholder.helper";


function FilmPage({ imageProps }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const { movie } = useTypedSelector(state => state.movie)
  if (!movie.value) {
    return (
      <div>{movie.error}</div>
    )
  }
  const film = movie.value;
  let genres = '';
  let countries = '';
  film.genres.map((genre, i) => {
    i == 0 ? genres = genre.genre : genres = genres.concat(`, ${genre.genre}`)
  })
  film.countries.map((country, i) => {
    i == 0 ? countries = country.country : countries = countries.concat(`, ${country.country}`)
  })
  return (
    <div>
      {
        film.coverUrl && imageProps
          ? (
            <div className={styles.cover}>
              <Image
                className={styles.image}
                alt='Обложка'
                {...imageProps}
                placeholder='blur'
                />
              <div className={styles.coverBlock}>
                <h1 className={styles.heading}>
                  {film.nameRu}
                </h1>
                <h2 className={styles.subHeading}>
                  {film.nameOriginal} ({film.year})
                </h2>
              </div>
            </div>
          )
          : (
            <div>
              <h1 className="bold">
                {film.nameRu}
              </h1>
              <h2 className="mb-4">
                {film.nameOriginal} ({film.year})
              </h2>
            </div>
          )
      }
      <div className={styles.descrBlock}>
        <Image className={styles.poster} src={film.posterUrl} alt='Постер' width={667} height={1000} />
        <div className={styles.textBlock}>
          <h3 className={styles.heading}>
            {film.slogan}
          </h3>
          <div className="mb-3">
            {film.description}
          </div>
          <div className="d-flex mb-3">
            <div className={styles.rating}>
              Рейтинг <br /> IMdb<br />
              <span className={styles.score}>{film.ratingImdb}</span>
            </div>
            <div className={styles.rating}>
              Рейтинг <br /> Кинопоиска<br />
              <span className={styles.score}>{film.ratingKinopoisk}</span>
            </div>
            <div className={styles.rating}>
              Рейтинг <br /> Кинокритиков<br />
              <span className={styles.score}>{film.ratingFilmCritics}</span>
            </div>
          </div>
          <div className={styles.subHeading}>
            Длительность
          </div>
          <div className="mb-3">
            {film.filmLength} мин
          </div>
          <div className={styles.subHeading}>
            Категории
          </div>
          <div className="mb-3">
            {genres}
          </div>
          <div className={styles.subHeading}>
            Страны
          </div>
          <div className="mb-3">
            {countries}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilmPage;

export const getServerSideProps = wrapper.getServerSideProps((store) => async ({ params }) => {
  const dispatch = store.dispatch as NextThunkDispatch;
  const image = await dispatch(getMovie(params!.id!)).then(async () => {
    const { movie } = store.getState().movie;
    return imagePlaceholderHelper().getPlaceholder(movie.value?.coverUrl);
  }).then(value => value);
  return {
    props: {
      imageProps: image
    }
  }
})