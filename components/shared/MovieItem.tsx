import Image from "next/image";
import classNames from 'classnames';
import styles from '../../styles/components/shared/MovieItem.module.scss';
import Great from "../Icons/Great";
import Normal from "../Icons/Normal";
import Awful from "../Icons/Awful";
import Link from "next/link";
import { MovieTypeEnum } from "../../core/types/enums/MovieType.enum";
import { formatRating } from "../../core/helpers/rating.helper";

interface IMovieItemProps {
  name: string,
  posterUrl: string,
  year: string,
  rating?: string | null,
  expectationsRating: string | null,
  type: MovieTypeEnum | null,
  id: number
}

function MovieItem({ name, posterUrl, year, rating, type, id, expectationsRating }: IMovieItemProps) {
  let navigationUrl: string;
  switch (type) {
    case MovieTypeEnum.FILM:
      navigationUrl = `/films/${id}`
      break;

    case MovieTypeEnum.MINI_SERIES:
      navigationUrl = `/series/mini/${id}`
      break;

    case MovieTypeEnum.TV_SERIES:
      navigationUrl = `/series/${id}`
      break;

    case MovieTypeEnum.TV_SHOW:
      navigationUrl = `/series/tv/${id}`
      break;
  
    default:
      navigationUrl = ''
      break;
  }
  return (
    <Link href={navigationUrl} className={styles.movieItemCard}>
      <Image src={posterUrl} alt="Постер" className={styles.movieItemCardPoster} width={150} height={225}/>
      <div className={styles.movieItemCardBody}>
        <div className={styles.movieItemCardRating}>
          {
            rating !== null && rating !== undefined && rating !== 'null'
              ? (
                <>
                {
                  Number(rating) > 7.5
                    ? <Great />
                    : Number(rating) > 4.5
                      ? <Normal />
                      : <Awful />
                }
                <span className={styles.normal}>
                  {formatRating(rating)}
                </span>
                <span className={styles.small}>/10</span>
                </>
              )
              : expectationsRating !== null
                ? (
                  <span className={styles.normal}>
                    {expectationsRating}
                  </span>
                )
                : <div className={styles.normal}>-</div>
          }
        </div>
        <h5 className={styles.movieItemCardTitle}>{name}</h5>
        <span className={styles.movieItemCardYear}>({year})</span>
      </div>
    </Link>
  );
}

export default MovieItem;