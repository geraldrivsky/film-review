import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FilterState {
  genreId: number;
  searchQuery: string;
}

const initialState: FilterState = {
  genreId: -1,
  searchQuery: '',
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    selectGenreId(state, { payload }: PayloadAction<number>) {
      state.genreId = payload;
    },
    searchFilm(state, { payload }: PayloadAction<string>) {
      state.searchQuery = payload;
    },
  },
});

export default filterSlice.reducer;
