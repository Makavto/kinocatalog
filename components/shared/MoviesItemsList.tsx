import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar } from 'swiper';
import { topFilmsMock } from '../../mocks/topFilms.mock';
import Item from './MovieItem';
import ArrowLeft from './../Icons/ArrowLeft';
import ArrowRight from '../Icons/ArrowRight';
import styles from '../../styles/components/shared/MoviesItemsList.module.scss';
import classNames from 'classnames';
import React from 'react';
import { MovieTypeEnum } from '../../core/types/enums/MovieType.enum';
import { MovieShort } from '../../core/types/interfaces/MovieShort.interface';

interface IMoviesItemsList {
  moviesList: MovieShort[],
  type?: MovieTypeEnum
}

function MoviesItemsList({ moviesList, type }: IMoviesItemsList) {
  const [swiper, setSwiper] = React.useState<any>({});

  const handleRight = () => {
    swiper.slideNext();
  }

  const handleLeft = () => {
    swiper.slidePrev();
  }

  if (!moviesList) {
    return (
      <></>
    )
  }

  return (
    <div className={styles.listWrapper}>
      <button onClick={handleLeft} className={classNames(styles.arrow, styles.left)}>
        <ArrowLeft />
      </button>
      <Swiper
        onInit={(e) => {
          setSwiper(e)
        }}
        modules={[Navigation, Pagination, Scrollbar]}
        breakpoints = {{
          1800: {
            slidesPerView: 6
          },
          1550: {
            slidesPerView: 5
          },
          1300: {
            slidesPerView: 4
          }
        }}
      >
        {
          moviesList.slice(0, 20).map(film => {
            const name = film.nameRu ? film.nameRu : film.nameOrig;
            return (
              <SwiperSlide key={film.filmId}>
                <Item
                  name={name!}
                  rating={film.rating}
                  expectationsRating={film.expectationsRating}
                  posterUrl={film.posterUrlPreview!}
                  year={film.year!}
                  type={type ? type : MovieTypeEnum.FILM}
                  id={film.filmId}
                />
              </SwiperSlide>
            )
          })
        }
      </Swiper>
      <button onClick={handleRight} className={classNames(styles.arrow, styles.right)}>
        <ArrowRight />
      </button>
    </div>
  );
}

export default MoviesItemsList;