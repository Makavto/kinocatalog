import classNames from 'classnames/bind'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react';
import styles from '../styles/components/Menu.module.scss';
import SearchComponent from './shared/SearchComponent';

const cx = classNames.bind(styles);

export default function Menu() {
  const router = useRouter();
  const [active, setActive] = React.useState<number>();
  React.useEffect(() => {
    if (router.pathname.includes('/films')) {
      setActive(1);
    } else if (router.pathname.includes('/series')) {
      setActive(2);
    } else {
      setActive(0);
    }
  }, [router.pathname])
  return(
    <div className={styles.menu}>
      <div className={styles.topBlock}>
        <h1 className={styles.heading}>
          КИНОКАТАЛОГ
        </h1>
        <SearchComponent />
        <Link className={cx(styles.tab, {active: active == 0})} href='/'>Главная</Link>
        <Link className={cx(styles.tab, {active: active == 1})} href='/films'>Фильмы</Link>
        <Link className={cx(styles.tab, {active: active == 2})} href='/series'>Сериалы</Link>
      </div>
    </div>
  )
}
