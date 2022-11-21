import Image from "next/image";
import classNames from 'classnames';
import styles from '../../styles/components/shared/MovieItem.module.scss';
import Great from "../Icons/Great";
import Normal from "../Icons/Normal";
import Awful from "../Icons/Awful";
import Link from "next/link";

interface IMovieItemProps {
  name: string,
  posterUrl: string,
  year: string,
  rating: string
}

function MovieItem({ name, posterUrl, year, rating }: IMovieItemProps) {
  return (
    <Link href={'/films/1'} className={styles.movieItemCard}>
      <Image src={posterUrl} alt="Постер" className={styles.movieItemCardPoster} width={150} height={225}/>
      <div className={styles.movieItemCardBody}>
        <div className={styles.movieItemCardRating}>
          {
            Number(rating) > 8.5
            ? <Great />
            : Number(rating) > 4.5
              ? <Normal />
              : <Awful />
          }
          <span className={styles.normal}>
            {rating}
          </span>
          <span className={styles.small}>/10</span>
        </div>
        <h5 className={styles.movieItemCardTitle}>{name}</h5>
        <span className={styles.movieItemCardYear}>({year})</span>
      </div>
    </Link>
  );
}

export default MovieItem;