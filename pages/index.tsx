import MoviesItemsList from '../components/shared/MoviesItemsList';
import styles from '../styles/pages/Index.module.scss';
import React from 'react';

export default function Index() {
  return (
    <div>
      <div className={styles.searchBlock}>
        <input type="text" placeholder="Поиск по названию" />
        <button className='appButton'>Поиск</button>
      </div>
      <h2 className='mt-4 mb-2'>Топ лучших</h2>
      <MoviesItemsList />
      <h2 className='mt-4 mb-2'>Кинопремьеры в России</h2>
      <MoviesItemsList />
      <h2 className='mt-4 mb-2'>Цифровые релизы</h2>
      <MoviesItemsList />
    </div>
  )
}