import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { topFilmsMock } from '../../mocks/topFilms.mock';
import Item from './MovieItem';
import ArrowLeft from './../Icons/ArrowLeft';
import ArrowRight from '../Icons/ArrowRight';
import styles from '../../styles/components/shared/MoviesItemsList.module.scss';
import classNames from 'classnames';
import React from 'react';

function MoviesItemsList() {
  const [swiper, setSwiper] = React.useState<any>({});

  const handleRight = () => {
    swiper.slideNext();
  }

  const handleLeft = () => {
    swiper.slidePrev();
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
          topFilmsMock.films.slice(0, 10).map(film => (
            <SwiperSlide key={film.filmId}>
              <Item
                name={film.nameRu}
                rating={film.rating}
                posterUrl={film.posterUrlPreview}
                year={film.year}
              />
            </SwiperSlide>
          ))
        }
      </Swiper>
      <button onClick={handleRight} className={classNames(styles.arrow, styles.right)}>
        <ArrowRight />
      </button>
    </div>
  );
}

export default MoviesItemsList;