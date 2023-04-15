import { FC, useCallback } from 'react';
import { Dialog, DialogActions, DialogContent } from '@mui/material';
import FilmImage from './FilmImage';
import { convertGenreList } from '../utils/genre';
import TypographyHeader from './TypographyHeader';
import TypographyText from './TypographyText';
import CustomizedButton from './CustomizedButton';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { dialogSlice } from '../store/slices/dialogSlice';
import cl from '../styles/FilmDialog.module.scss';
import { Film } from '../models/Film';
import { useLocalStorage } from '../hooks/useLocalStorage';

interface FilmDialogProps {
  film: Film;
}

const FilmDialog: FC<FilmDialogProps> = ({ film }) => {
  const { opened } = useAppSelector(state => state.dialog);
  const { bestFilm } = useAppSelector(state => state.bestFilm);
  const dispatch = useAppDispatch();
  const { close } = dialogSlice.actions;

  const { setBestFilm, removeBestFilm } = useLocalStorage(film);

  const handleClose = useCallback(() => {
    dispatch(close());
  }, [close, dispatch]);

  const handleSetBestFilm = useCallback(() => {
    setBestFilm();
  }, [setBestFilm]);

  const onDeleteBestFilm = useCallback(() => {
    removeBestFilm();
  }, [removeBestFilm]);

  const { year, name, description, id, genre } = film;

  return (
    <Dialog maxWidth='md' open={opened} onClose={handleClose}>
      <DialogContent>
        <div className={cl.content}>
          <div className={cl.img}>
            <FilmImage filmId={id} />
          </div>
          <div className={cl.right}>
            <TypographyHeader>{name}</TypographyHeader>
            <TypographyText>{convertGenreList(genre)}</TypographyText>
            <TypographyText>{year}</TypographyText>
            <TypographyText gutterBottom={false}>{description}</TypographyText>
            <div className={cl.buttons}>
              <DialogActions>
                {bestFilm && bestFilm.id === id ? (
                  <CustomizedButton color='error' onClick={onDeleteBestFilm}>
                    Удалить из лучших фильмов
                  </CustomizedButton>
                ) : (
                  <CustomizedButton onClick={handleSetBestFilm}>
                    Выбрать лучшим фильмом
                  </CustomizedButton>
                )}
                <CustomizedButton onClick={handleClose} color='error'>
                  Закрыть
                </CustomizedButton>
              </DialogActions>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default FilmDialog;
