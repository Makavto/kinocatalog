import { InferGetServerSidePropsType } from "next";
import Image from "next/image";
import { imagePlaceholderHelper } from "../../../core/helpers/imagePlaceholder.helper";
import { wrapper, NextThunkDispatch } from "../../../core/store";
import { getMovie } from "../../../core/store/action-creators/movie";
import { useParallax } from "../../../hooks/useParallax";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import styles from "../../../styles/pages/series/mini/MiniSeriesPage.module.scss";

function MiniSeriesPage({ imageProps }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const { movie } = useTypedSelector(state => state.movie);
  useParallax();
  if (!movie.value) {
    return (
      <div>{movie.error}</div>
    )
  }
  const series = movie.value;
  let genres = '';
  let countries = '';
  series.genres.map((genre, i) => {
    i == 0 ? genres = genre.genre : genres = genres.concat(`, ${genre.genre}`)
  })
  series.countries.map((country, i) => {
    i == 0 ? countries = country.country : countries = countries.concat(`, ${country.country}`)
  })
  return (
    <div>
      {
        series.coverUrl && imageProps
          ? (
            <div className={styles.cover}>
              <div className={styles.coverParallax}>
                <Image
                  className={styles.image}
                  alt='Обложка'
                  {...imageProps}
                  placeholder='blur'
                  id="parallax"
                  />
              </div>
              <div className={styles.coverBlock}>
                <h1 className={styles.heading}>
                  {series.nameRu}
                </h1>
                <h2 className={styles.subHeading}>
                  {series.nameOriginal} ({series.year})
                </h2>
              </div>
            </div>
          )
          : (
            <div>
              <h1 className="bold">
                {series.nameRu}
              </h1>
              <h2 className="mb-4">
                {series.nameOriginal} ({series.startYear} - {series.endYear})
              </h2>
            </div>
          )
      }
      <div className={styles.descrBlock}>
        <Image className={styles.poster} src={series.posterUrl} alt='Постер' width={667} height={1000} />
        <div className={styles.textBlock}>
          {
            series.slogan
              ? (
                <h3 className={styles.heading}>
                  {series.slogan}
                </h3>
              )
              : <></>
          }
          <div className="mb-3">
            {series.description}
          </div>
          <div className="d-flex mb-3">
            <div className={styles.rating}>
              Рейтинг <br /> IMdb<br />
              <span className={styles.score}>{series.ratingImdb}</span>
            </div>
            <div className={styles.rating}>
              Рейтинг <br /> Кинопоиска<br />
              <span className={styles.score}>{series.ratingKinopoisk}</span>
            </div>
            <div className={styles.rating}>
              Рейтинг <br /> Кинокритиков<br />
              <span className={styles.score}>
                {
                  series.ratingFilmCritics
                    ? series.ratingFilmCritics
                    : series.ratingRfCritics
                }
              </span>
            </div>
          </div>
          {
            series.filmLength
              ? <>
                <div className={styles.subHeading}>
                  Длительность
                </div>
                <div className="mb-3">
                  {series.filmLength} мин
                </div>
              </>
              : <></>
          }

          <div className={styles.subHeading}>
            Год начала
          </div>
          <div className="mb-3">
            {series.startYear}
          </div>
          <div className={styles.subHeading}>
            Год окончания
          </div>
          <div className="mb-3">
            {series.endYear}
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

export default MiniSeriesPage;

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