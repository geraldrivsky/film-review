import { FC } from 'react';
import { Grid } from '@mui/material';
import FilmCard from '../components/FilmCard';
import TypographyHeader from '../components/TypographyHeader';
import FilterInputGroup from '../components/FilterInputGroup';
import { useFilteredData } from '../hooks/useFilteredData';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { useLazyLoadData } from '../hooks/useLazyLoadData';
import FilmDialog from '../components/FilmDialog';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { bestFilmSlice } from '../store/slices/bestFilmSlice';
import cl from '../styles/RootRoute.module.scss';

const Root: FC = () => {
  const { genreId, searchQuery } = useAppSelector(state => state.filter);
  const { data } = useAppSelector(state => state.data);
  const { bestFilm } = useAppSelector(state => state.bestFilm);
  const { film } = useAppSelector(state => state.dialog);

  const dispatch = useAppDispatch();
  const { setBestFilm } = bestFilmSlice.actions;
  const { getBestFilm } = useLocalStorage();
  const filmFromLS = getBestFilm();

  if (!bestFilm && filmFromLS) {
    dispatch(setBestFilm(filmFromLS));
  }

  const filteredData = useFilteredData(data, genreId, searchQuery);

  useLazyLoadData();
  return (
    <div className={cl.container}>
      <TypographyHeader>Популярные фильмы</TypographyHeader>
      <FilterInputGroup />
      <Grid rowSpacing={2} columnSpacing={1} className={cl.films} container>
        {filteredData
          ? filteredData.map(film => (
              <Grid item key={film.id}>
                <FilmCard film={film} />
              </Grid>
            ))
          : 'Загрузка...'}
      </Grid>
      {bestFilm ? (
        <div className={cl.best}>
          <TypographyHeader>Самый лучший фильм</TypographyHeader>
          <FilmCard film={bestFilm} />
        </div>
      ) : null}
      {film && <FilmDialog film={film} />}
    </div>
  );
};

export default Root;
