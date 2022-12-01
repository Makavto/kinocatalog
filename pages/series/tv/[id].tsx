import Image from "next/image";
import { tvseriesMock } from "../../../mocks/tv-series.mock";
import styles from "../../../styles/pages/series/tv/TvSeriesPage.module.scss";

function TvSeriesPage() {
  const series = tvseriesMock;
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
      {/* <div className={styles.cover}>
        <Image className={styles.image} src={series.coverUrl} alt='Обложка' width={1920} height={1080} />
        <div className={styles.coverBlock}>
          <h1 className={styles.heading}>
            {series.nameRu}
          </h1>
          <h2 className={styles.subHeading}>
            {series.nameOriginal} ({series.year})
          </h2>
        </div>
      </div> */}
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