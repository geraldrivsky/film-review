import { ChangeEvent, FC, useCallback } from 'react';
import { Grid, MenuItem, TextField } from '@mui/material';
import { capitalize, genreStrings } from '../utils/genre';
import { useAppDispatch } from '../hooks/redux';
import { filterSlice } from '../store/slices/filterSlice';

const FilterInputGroup: FC = () => {
  const dispatch = useAppDispatch();
  const { selectGenreId, searchFilm } = filterSlice.actions;

  const handleSelectGenreId = useCallback(
    ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
      dispatch(selectGenreId(Number(value)));
    },
    [dispatch, selectGenreId]
  );

  const handleSearchFilm = useCallback(
    ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
      dispatch(searchFilm(value));
    },
    [dispatch, searchFilm]
  );

  return (
    <Grid
      sx={{ width: 'fit-content', marginBottom: 2 }}
      container
      rowSpacing={2}
      columnSpacing={1}
    >
      <Grid item xs={12} sm={6}>
        <TextField
          sx={{ width: 212 }}
          id='select-genre'
          select
          label='Выберите жанр'
          onChange={handleSelectGenreId}
        >
          <MenuItem value={-1}>Все</MenuItem>
          {genreStrings.map((genreString, index) => (
            <MenuItem key={genreString} value={index + 1}>
              {capitalize(genreString)}
            </MenuItem>
          ))}
        </TextField>
      </Grid>
      <Grid item>
        <TextField
          sx={{ width: 212 }}
          id='filter-film'
          label='Введите название'
          onChange={handleSearchFilm}
        />
      </Grid>
    </Grid>
  );
};

export default FilterInputGroup;
