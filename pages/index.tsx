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
      <h2 className='mt-4 mb-2 bold'>Топ лучших</h2>
      <MoviesItemsList />
      <h2 className='mt-4 mb-2 bold'>Кинопремьеры в России</h2>
      <MoviesItemsList />
      <h2 className='mt-4 mb-2 bold'>Цифровые релизы</h2>
      <MoviesItemsList />
    </div>
  )
}