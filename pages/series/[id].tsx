import { seasonsMock } from "../../mocks/seasons.mock";
import { seriesMock } from "../../mocks/series.mock";
import Image from "next/image";
import styles from "../../styles/pages/series/SeriesPage.module.scss";
import { NextThunkDispatch, wrapper } from "../../store";
import { getMovie } from "../../store/action-creators/movie";
import { useTypedSelector } from "../../hooks/useTypedSelector";

function SeriesPage() {
  // const series = seriesMock;
  const season = seasonsMock;
  const { movie } = useTypedSelector(state => state.movie)
  if (!movie.value) {
    return (
      <div>{movie.error}</div>
      )
  }
  let genres = '';
  let countries = '';
  const series = movie.value;
  series.genres.map((genre, i) => {
    i == 0 ? genres = genre.genre : genres = genres.concat(`, ${genre.genre}`)
  })
  series.countries.map((country, i) => {
    i == 0 ? countries = country.country : countries = countries.concat(`, ${country.country}`)
  })
  return (
    <div>
      {
        series.coverUrl
          ? (
            <div className={styles.cover}>
              <Image className={styles.image} src={series.coverUrl} alt='Обложка' width={1920} height={1080} />
              <div className={styles.coverBlock}>
                <h1 className={styles.heading}>
                  {series.nameRu}
                </h1>
                <h2 className={styles.subHeading}>
                  {series.nameOriginal} ({series.startYear} - {series.endYear})
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
          <h3 className={styles.heading}>
            {series.slogan}
          </h3>
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

export default SeriesPage;

export const getServerSideProps = wrapper.getServerSideProps((store) => async ({ params }) => {
  const dispatch = store.dispatch as NextThunkDispatch;
  await dispatch(getMovie(params!.id!))
  return { props: {} }
})