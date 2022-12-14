import Image from "next/image";
import { imagePlaceholderHelper } from "../../../core/helpers/imagePlaceholder.helper";
import { wrapper, NextThunkDispatch } from "../../../core/store";
import { getMovie } from "../../../core/store/action-creators/movie";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import styles from "../../../styles/pages/series/tv/TvSeriesPage.module.scss";

function TvSeriesPage() {
  const { movie } = useTypedSelector(state => state.movie);
  if (!movie.value) {
    return (
      <div>{movie.error}</div>
    )
  }
  const series = movie.value!;
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
      <div className={styles.descrBlock}>
        <Image className={styles.poster} src={series.posterUrl} alt='Постер' width={667} height={1000} />
        <div className={styles.textBlock}>
          <h3 className={styles.heading}>
            {series.nameRu ? series.nameRu : series.nameOriginal}
          </h3>
          <div className="d-flex mb-3">
            <div className={styles.rating}>
              Рейтинг <br /> IMdb<br />
              <span className={styles.score}>{series.ratingImdb}</span>
            </div>
            {
              series.ratingKinopoisk
                ? (
                  <div className={styles.rating}>
                    Рейтинг <br /> Кинопоиска<br />
                    <span className={styles.score}>{series.ratingKinopoisk}</span>
                  </div>
                )
                : <></>
            }
            {
              series.ratingFilmCritics || series.ratingRfCritics
                ? <div className={styles.rating}>
                  Рейтинг <br /> Кинокритиков<br />
                  <span className={styles.score}>
                    {
                      series.ratingFilmCritics
                        ? series.ratingFilmCritics
                        : series.ratingRfCritics
                    }
                  </span>
                </div>
                : <></>
            }
          </div>
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

export default TvSeriesPage;

export const getServerSideProps = wrapper.getServerSideProps((store) => async ({ params }) => {
  const dispatch = store.dispatch as NextThunkDispatch;
  await dispatch(getMovie(params!.id!))
  return { props: {} }
})