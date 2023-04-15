import { FC, MouseEvent, useCallback } from 'react';
import { Card, CardContent, IconButton, Typography } from '@mui/material';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import { Film } from '../models/Film';
import FilmImage from './FilmImage';
import TypographyText from './TypographyText';
import { convertGenreList } from '../utils/genre';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { dialogSlice } from '../store/slices/dialogSlice';
import cl from '../styles/FilmCard.module.scss';
import { useLocalStorage } from '../hooks/useLocalStorage';

interface FilmCardProps {
  film: Film;
}

const FilmCard: FC<FilmCardProps> = ({ film }) => {
  const { id, name, year, genre } = film;
  const { setBestFilm, removeBestFilm } = useLocalStorage(film);

  const dispatch = useAppDispatch();
  const { open } = dialogSlice.actions;
  const { data } = useAppSelector(state => state.data);
  const { bestFilm } = useAppSelector(state => state.bestFilm);

  const handleOpenDialog = useCallback(() => {
    if (!data) return;
    const film = data.find(film => film.id === id);
    if (!film) return;
    dispatch(open(film));
  }, [data, dispatch, id, open]);

  const handleSetBestFilm = useCallback(
    (event: MouseEvent<SVGSVGElement>) => {
      event.stopPropagation();
      setBestFilm();
    },
    [setBestFilm]
  );

  const handleRemoveBestFilm = useCallback(
    (event: MouseEvent<SVGSVGElement>) => {
      event.stopPropagation();
      removeBestFilm();
    },
    [removeBestFilm]
  );

  return (
    <Card
      style={{ cursor: 'pointer' }}
      className={cl.container}
      onClick={handleOpenDialog}
    >
      <CardContent>
        <FilmImage filmId={id} />
        <Typography variant='h4' gutterBottom fontSize={14} fontWeight={600}>
          {name}
        </Typography>
        <TypographyText>{convertGenreList(genre)}</TypographyText>
        <TypographyText gutterBottom={false}>{year}</TypographyText>
        <div className={cl.icon}>
          {bestFilm && bestFilm.id === film.id ? (
            <IconButton aria-label='remove-best-film'>
              <Favorite onClick={handleRemoveBestFilm} />
            </IconButton>
          ) : (
            <IconButton aria-label='set-best-film'>
              <FavoriteBorder onClick={handleSetBestFilm} />
            </IconButton>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default FilmCard;
