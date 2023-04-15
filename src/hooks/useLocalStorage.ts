import { useAppDispatch, useAppSelector } from './redux';
import { bestFilmSlice } from '../store/slices/bestFilmSlice';
import { Film } from '../models/Film';

export const useLocalStorage = (film?: Film) => {
  const dispatch = useAppDispatch();
  const { setBestFilm, removeBestFilm } = bestFilmSlice.actions;
  const { data } = useAppSelector(state => state.data);
  return {
    setBestFilm() {
      if (!film) return;
      dispatch(setBestFilm(film));
      localStorage.setItem('film-id', String(film.id));
    },
    removeBestFilm() {
      dispatch(removeBestFilm());
      localStorage.removeItem('film-id');
    },
    getBestFilm() {
      const id = localStorage.getItem('film-id');
      if (id === null) return null;
      return data?.find(film => String(film.id) === id) || null;
    },
  };
};
