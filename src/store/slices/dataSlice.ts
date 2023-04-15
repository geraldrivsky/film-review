import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Film } from '../../models/Film';

interface DataState {
  data: Film[] | null;
}

const initialState: DataState = {
  data: null,
};

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setData(state, { payload }: PayloadAction<Film[]>) {
      state.data = payload;
    },
  },
});

export default dataSlice.reducer;
