import MoviesItemsList from '../components/shared/MoviesItemsList';
import styles from '../styles/pages/Index.module.scss';
import React from 'react';
import { NextThunkDispatch, wrapper } from '../core/store';
import { getPremiers, getReleases, getTopBest } from '../core/store/action-creators/main';
import { useTypedSelector } from '../hooks/useTypedSelector';

export default function Index() {
  const {premieres, releases, topBest} = useTypedSelector(state => state.main)
  return (
    <div>
      <h2 className='mb-2 bold'>Топ лучших</h2>
      {
        topBest.value
        ? <MoviesItemsList moviesList={topBest.value.items}/>
        : <></>
      }
      <h2 className='mt-4 mb-2 bold'>Кинопремьеры в России</h2>
      {
        premieres.value
        ? <MoviesItemsList moviesList={premieres.value}/>
        : <></>
      }
      <h2 className='mt-4 mb-2 bold'>Цифровые релизы</h2>
      {
        releases.value
        ? <MoviesItemsList moviesList={releases.value.items}/>
        : <></>
      }
    </div>
  )
}

export const getStaticProps = wrapper.getStaticProps((store) => async () => {
  const dispatch = store.dispatch as NextThunkDispatch;
  await dispatch(getTopBest());
  await dispatch(getPremiers());
  await dispatch(getReleases());
  return {props: {}}
})