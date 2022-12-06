import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { topFilmsMock } from '../../mocks/topFilms.mock';
import Item from './MovieItem';
import ArrowLeft from './../Icons/ArrowLeft';
import ArrowRight from '../Icons/ArrowRight';
import styles from '../../styles/components/shared/MoviesItemsList.module.scss';
import classNames from 'classnames';
import React from 'react';
import { MovieTypeEnum } from '../../core/types/enums/MovieType.enum';
import { FilmTopItem } from '../../core/types/interfaces/films/FilmTopItem.interface';
import { MovieShort } from '../../core/types/interfaces/shared/MovieShort.interface';
import { Premiere } from '../../core/types/interfaces/main/Premiere.interface';
import { Release } from '../../core/types/interfaces/main/Release.interface';

function isFilmTopItem(obj: any): obj is FilmTopItem {
  return obj.filmId !== undefined
}

function isPremiere(obj: any): obj is Premiere {
  return obj.nameEn !== undefined
}

function isRelease(obj: any): obj is Release {
  return obj.expectationsRating !== undefined
}

interface IMoviesItemsList {
  moviesList: FilmTopItem[] | MovieShort[] | Premiere[] | Release[],
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
            const id = isFilmTopItem(film) || isRelease(film)
              ? film.filmId 
              : film.kinopoiskId;
            const rating = isFilmTopItem(film) 
            ? film.rating
            : isRelease(film)
            ? film.expectationsRating
            : film.ratingKinopoisk;
            const name = film.nameRu 
              ? film.nameRu 
              : isFilmTopItem(film) || isPremiere(film) || isRelease(film)
              ? film.nameEn 
              : film.nameOriginal
            return (
              <SwiperSlide key={id}>
                <Item
                  name={name!}
                  rating={rating}
                  posterUrl={film.posterUrlPreview!}
                  year={film.year!}
                  type={type ? type : MovieTypeEnum.FILM}
                  id={id}
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