import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Film } from '../../models/Film';

interface BestFilmState {
  bestFilm: Film | null;
}

const initialState: BestFilmState = {
  bestFilm: null,
};

export const bestFilmSlice = createSlice({
  name: 'bestFilm',
  initialState,
  reducers: {
    setBestFilm(state, { payload }: PayloadAction<Film>) {
      state.bestFilm = payload;
    },
    removeBestFilm(state) {
      state.bestFilm = null;
    },
  },
});

export default bestFilmSlice.reducer;
